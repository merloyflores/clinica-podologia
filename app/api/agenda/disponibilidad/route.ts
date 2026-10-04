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
  minutesToTime,
  timeToMinutes,
} from '@/app/lib/agenda-config';
import { getBusy, isGoogleCalendarConfigured } from '@/app/lib/google-calendar';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function overlaps(start: Date, end: Date, busy: { start: string; end: string }) {
  return start < new Date(busy.end) && end > new Date(busy.start);
}

export async function GET(request: NextRequest) {
  try {
    const date = request.nextUrl.searchParams.get('date') || '';
    const serviceId = request.nextUrl.searchParams.get('service') || '';
    const service = getService(serviceId);

    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !service) {
      return NextResponse.json({ error: 'Fecha o servicio inválido.' }, { status: 400 });
    }

    const today = isoDateInClinic();
    const requested = clinicDateTime(date, '12:00');
    const limit = addMinutes(clinicDateTime(today, '23:59'), BOOKING_WINDOW_DAYS * 24 * 60);
    if (date < today || requested > limit) {
      return NextResponse.json({ slots: [], closed: true, reason: 'outside-window' });
    }

    const hours = WEEKLY_HOURS[dayOfWeekInClinic(date)];
    if (!hours) return NextResponse.json({ slots: [], closed: true, reason: 'closed-day' });

    const configured = isGoogleCalendarConfigured();
    const dayStart = clinicDateTime(date, hours.open);
    const dayEnd = clinicDateTime(date, hours.close);
    const busy = configured ? await getBusy(dayStart.toISOString(), dayEnd.toISOString()) : [];
    const earliest = addMinutes(new Date(), BOOKING_LEAD_MINUTES);

    const slots: {
      time: string;
      start: string;
      end: string;
      available: boolean;
      reason?: 'occupied' | 'lead-time';
    }[] = [];

    const openMinutes = timeToMinutes(hours.open);
    const closeMinutes = timeToMinutes(hours.close);

    for (let cursor = openMinutes; cursor + service.duration <= closeMinutes; cursor += SLOT_STEP_MINUTES) {
      const time = minutesToTime(cursor);
      const start = clinicDateTime(date, time);
      const end = addMinutes(start, service.duration);
      const tooSoon = start < earliest;
      const occupied = busy.some((period) => overlaps(start, end, period));

      slots.push({
        time,
        start: start.toISOString(),
        end: end.toISOString(),
        available: !tooSoon && !occupied,
        ...(tooSoon ? { reason: 'lead-time' as const } : occupied ? { reason: 'occupied' as const } : {}),
      });
    }

    return NextResponse.json({
      slots,
      closed: false,
      mode: configured ? 'google-calendar' : 'demo',
      service: { id: service.id, name: service.name, duration: service.duration },
      hours,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'No fue posible consultar la agenda en este momento.' },
      { status: 500 }
    );
  }
}
