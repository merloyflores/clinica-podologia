import { NextRequest, NextResponse } from 'next/server';
import {
  BOOKING_LEAD_MINUTES,
  BOOKING_WINDOW_DAYS,
  SLOT_STEP_MINUTES,
  WEEKLY_HOURS,
  addMinutes,
  clinicDateTime,
  dayOfWeekInClinic,
  getService,
  isoDateInClinic,
  timeToMinutes,
} from '@/app/lib/agenda-config';
import {
  createAppointment,
  deterministicEventId,
  getBusy,
  isGoogleCalendarConfigured,
} from '@/app/lib/google-calendar';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function clean(value: unknown, max = 120) {
  return String(value || '').trim().slice(0, max);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = clean(body.name, 100);
    const phone = clean(body.phone, 30);
    const email = clean(body.email, 120);
    const notes = clean(body.notes, 400);
    const date = clean(body.date, 10);
    const time = clean(body.time, 5);
    const service = getService(clean(body.service, 80));

    if (!name || !phone || !service || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^\d{2}:\d{2}$/.test(time)) {
      return NextResponse.json({ error: 'Complete los datos requeridos.' }, { status: 400 });
    }

    const today = isoDateInClinic();
    const requestedDay = clinicDateTime(date, '12:00');
    const bookingLimit = addMinutes(clinicDateTime(today, '23:59'), BOOKING_WINDOW_DAYS * 24 * 60);
    if (date < today || requestedDay > bookingLimit) {
      return NextResponse.json({ error: 'La fecha seleccionada está fuera de la ventana de reservas.' }, { status: 400 });
    }

    const hours = WEEKLY_HOURS[dayOfWeekInClinic(date)];
    if (!hours) return NextResponse.json({ error: 'El centro no atiende el día seleccionado.' }, { status: 400 });

    const openMinutes = timeToMinutes(hours.open);
    const closeMinutes = timeToMinutes(hours.close);
    const selectedMinutes = timeToMinutes(time);
    const isValidSlot =
      selectedMinutes >= openMinutes &&
      selectedMinutes + service.duration <= closeMinutes &&
      (selectedMinutes - openMinutes) % SLOT_STEP_MINUTES === 0;

    if (!isValidSlot) {
      return NextResponse.json({ error: 'El horario seleccionado no corresponde a un espacio válido de la agenda.' }, { status: 400 });
    }

    const start = clinicDateTime(date, time);
    const end = addMinutes(start, service.duration);
    if (start < addMinutes(new Date(), BOOKING_LEAD_MINUTES)) {
      return NextResponse.json({ error: 'El horario seleccionado ya no está disponible.' }, { status: 409 });
    }

    if (!isGoogleCalendarConfigured()) {
      return NextResponse.json({
        success: true,
        demo: true,
        appointment: { name, phone, email, date, time, service: service.name, duration: service.duration },
      });
    }

    // Revalidación inmediata: cubre citas creadas manualmente o reservas hechas desde que el usuario abrió la pantalla.
    const busy = await getBusy(start.toISOString(), end.toISOString());
    if (busy.length > 0) {
      return NextResponse.json(
        { error: 'Ese horario acaba de ser reservado. Seleccione otro horario disponible.' },
        { status: 409 }
      );
    }

    // Los inicios están alineados a bloques exclusivos de 60 min y todos los servicios duran <= 60 min.
    // Además usamos un ID determinista por bloque. Si dos clientes confirman exactamente a la vez,
    // Google Calendar devuelve 409 para el segundo insert en lugar de crear un duplicado.
    const eventId = deterministicEventId(start.toISOString());
    const result = await createAppointment({
      id: eventId,
      summary: `${service.name} · ${name}`,
      description: [
        'Reserva realizada desde centropodologicoximena.com',
        `Paciente: ${name}`,
        `Teléfono: ${phone}`,
        email ? `Correo: ${email}` : '',
        `Servicio: ${service.name}`,
        notes ? `Nota: ${notes}` : '',
      ]
        .filter(Boolean)
        .join('\n'),
      start: start.toISOString(),
      end: end.toISOString(),
      phone,
      name,
      serviceId: service.id,
    });

    if (result.conflict) {
      return NextResponse.json(
        { error: 'Ese horario acaba de ser reservado. Seleccione otro horario disponible.' },
        { status: 409 }
      );
    }

    return NextResponse.json({
      success: true,
      demo: false,
      appointment: { date, time, service: service.name, duration: service.duration, eventId },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'No fue posible completar la reserva. Intente nuevamente.' },
      { status: 500 }
    );
  }
}
