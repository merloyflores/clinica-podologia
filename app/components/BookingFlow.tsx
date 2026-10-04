'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CalendarDays, Check, ChevronRight, Clock3, Loader2, LockKeyhole, ShieldCheck, UserRound } from 'lucide-react';
import { AGENDA_SERVICES } from '@/app/lib/agenda-config';

const whatsappHref = 'https://wa.me/50662500117?text=' + encodeURIComponent('Hola, tengo una consulta sobre una cita en el Centro Podológico Ximena Alvarado.');

type Slot = { time: string; start: string; end: string; available: boolean; reason?: 'occupied' | 'lead-time' };

function displayTime(value: string) {
  const [hour, minute] = value.split(':').map(Number);
  const suffix = hour >= 12 ? 'p. m.' : 'a. m.';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${String(minute).padStart(2, '0')} ${suffix}`;
}

type Props = { compact?: boolean; onDone?: () => void };

export default function BookingFlow({ compact = false, onDone }: Props) {
  const searchParams = useSearchParams();
  const initialService = searchParams.get('service') || 'valoracion';
  const [service, setService] = useState(AGENDA_SERVICES.some((item) => item.id === initialService) ? initialService : 'valoracion');
  const [date, setDate] = useState('');
  const [slots, setSlots] = useState<Slot[]>([]);
  const [time, setTime] = useState('');
  const [mode, setMode] = useState<'google-calendar' | 'demo'>('demo');
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState<any>(null);
  const [form, setForm] = useState({ name: '', phone: '', email: '', notes: '' });

  const serviceData = useMemo(() => AGENDA_SERVICES.find((item) => item.id === service)!, [service]);
  const minDate = useMemo(() => {
    const d = new Date();
    return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Costa_Rica', year: 'numeric', month: '2-digit', day: '2-digit' }).format(d);
  }, []);
  const maxDate = useMemo(() => {
    const d = new Date(Date.now() + 90 * 24 * 60 * 60_000);
    return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Costa_Rica', year: 'numeric', month: '2-digit', day: '2-digit' }).format(d);
  }, []);

  useEffect(() => {
    if (!date) {
      setSlots([]);
      setTime('');
      return;
    }

    const controller = new AbortController();

    const loadAvailability = async (showLoader = false) => {
      if (showLoader) setLoadingSlots(true);
      try {
        const response = await fetch(`/api/agenda/disponibilidad?date=${date}&service=${service}`, {
          signal: controller.signal,
          cache: 'no-store',
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'No fue posible consultar la agenda.');
        const nextSlots: Slot[] = data.slots || [];
        setSlots(nextSlots);
        setMode(data.mode || 'demo');
        setTime((current) =>
          current && nextSlots.some((slot) => slot.time === current && slot.available) ? current : ''
        );
      } catch (err: any) {
        if (err.name !== 'AbortError') setError(err.message);
      } finally {
        if (showLoader) setLoadingSlots(false);
      }
    };

    setError('');
    setTime('');
    loadAvailability(true);
    const refreshId = window.setInterval(() => loadAvailability(false), 20_000);

    return () => {
      window.clearInterval(refreshId);
      controller.abort();
    };
  }, [date, service]);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!date || !time) return setError('Seleccione una fecha y un horario disponible.');
    setSubmitting(true);
    setError('');
    try {
      const response = await fetch('/api/agenda/reservar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, date, time, service }),
      });
      const data = await response.json();
      if (!response.ok) {
        if (response.status === 409) {
          setTime('');
          const refresh = await fetch(`/api/agenda/disponibilidad?date=${date}&service=${service}`, { cache: 'no-store' });
          const refreshed = await refresh.json();
          setSlots(refreshed.slots || []);
        }
        throw new Error(data.error || 'No fue posible completar la reserva.');
      }
      setDone(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    const prettyDate = new Intl.DateTimeFormat('es-CR', { dateStyle: 'full', timeZone: 'America/Costa_Rica' }).format(new Date(`${done.appointment.date}T12:00:00-06:00`));
    return (
      <div className={`flex min-h-[560px] items-center justify-center ${compact ? 'p-6 md:p-10' : 'p-6 md:p-12'}`}>
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600"><Check size={30} strokeWidth={2.2} /></div>
          <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B2CBF]">Reserva completada</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">Su espacio ha sido reservado.</h2>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-[#faf9fb] p-6 text-left">
            <p className="text-sm font-semibold text-slate-950">{done.appointment.service}</p>
            <p className="mt-2 text-sm capitalize text-slate-600">{prettyDate}</p>
            <p className="mt-1 text-2xl font-semibold tracking-tight text-[#6f2aa8]">{done.appointment.time}</p>
          </div>
          {done.demo && (
            <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-left text-xs leading-5 text-amber-800">
              <strong>Modo de demostración:</strong> la interfaz funciona, pero esta cita no fue escrita en Google Calendar. Configure las credenciales para activar reservas reales.
            </div>
          )}
          <p className="mt-6 text-sm leading-6 text-slate-500">Si necesita aclarar algo sobre su atención, puede continuar por WhatsApp.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 hover:bg-slate-50">Consultar por WhatsApp</a>
            {onDone && <button onClick={onDone} className="inline-flex h-12 items-center justify-center rounded-xl bg-[#6f2aa8] px-6 text-sm font-semibold text-white hover:bg-[#5d228f]">Finalizar</button>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={compact ? 'p-5 md:p-7' : 'p-6 md:p-10'}>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div className="space-y-7">
          <div>
            <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7B2CBF]"><span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#7B2CBF]/8 text-[10px]">01</span> Servicio</div>
            <label className="sr-only" htmlFor="agenda-service">Servicio</label>
            <select id="agenda-service" value={service} onChange={(e) => setService(e.target.value as any)} className="h-13 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-800 outline-none focus:border-[#7B2CBF]/55 focus:ring-3 focus:ring-[#7B2CBF]/7">
              {AGENDA_SERVICES.map((item) => <option key={item.id} value={item.id}>{item.name} · {item.duration} min</option>)}
            </select>
            <div className="mt-3 flex items-center justify-between text-xs text-slate-400"><span>Duración estimada: {serviceData.duration} min</span>{serviceData.price && <span>{serviceData.price}</span>}</div>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7B2CBF]"><span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#7B2CBF]/8 text-[10px]">02</span> Fecha</div>
            <div className="relative"><CalendarDays className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} /><input type="date" value={date} min={minDate} max={maxDate} onChange={(e) => setDate(e.target.value)} className="h-13 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-sm font-medium text-slate-800 outline-none focus:border-[#7B2CBF]/55 focus:ring-3 focus:ring-[#7B2CBF]/7" /></div>
            <p className="mt-3 text-xs leading-5 text-slate-400">Martes a domingo · 7:00 AM a 4:00 PM · Lunes cerrado.</p>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7B2CBF]"><span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#7B2CBF]/8 text-[10px]">03</span> Horario disponible</div>
            {!date ? (
              <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/70 p-5 text-sm text-slate-400">Seleccione una fecha para consultar la disponibilidad.</div>
            ) : loadingSlots ? (
              <div className="flex h-24 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500"><Loader2 className="mr-2 animate-spin" size={18} /> Consultando agenda…</div>
            ) : slots.length ? (
              <div>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 xl:grid-cols-4">
                  {slots.map((slot) => {
                    const selected = time === slot.time;
                    return (
                      <button
                        key={slot.time}
                        type="button"
                        disabled={!slot.available}
                        onClick={() => slot.available && setTime(slot.time)}
                        className={`min-h-14 rounded-xl border px-2.5 py-2 text-center transition-colors ${
                          selected
                            ? 'border-[#6f2aa8] bg-[#6f2aa8] text-white shadow-[0_8px_20px_rgba(111,42,168,0.16)]'
                            : slot.available
                              ? 'border-slate-200 bg-white text-slate-700 hover:border-[#7B2CBF]/35 hover:bg-[#7B2CBF]/4'
                              : 'cursor-not-allowed border-slate-200 bg-slate-100/80 text-slate-400'
                        }`}
                      >
                        <span className="block text-[13px] font-semibold">{displayTime(slot.time)}</span>
                        {!slot.available && (
                          <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.09em] text-slate-400">
                            {slot.reason === 'occupied' ? 'Ocupado' : 'No disponible'}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] text-slate-400">
                  <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#7B2CBF]" /> Disponible</span>
                  <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-slate-300" /> Ocupado o fuera del margen de reserva</span>
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-500">No hay espacios disponibles para esta fecha. Pruebe con otro día.</div>
            )}
          </div>
        </div>

        <div className="rounded-[20px] border border-slate-200 bg-[#faf9fb] p-5 md:p-7">
          <div className="mb-6 flex items-start gap-3 border-b border-slate-200 pb-5"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#7B2CBF] shadow-sm"><UserRound size={18} /></div><div><p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Datos del paciente</p><h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-950">Complete la reserva</h3></div></div>
          <div className="space-y-4">
            <div><label className="mb-2 block text-xs font-medium text-slate-600">Nombre completo</label><input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#7B2CBF]/55" placeholder="Nombre del paciente" /></div>
            <div><label className="mb-2 block text-xs font-medium text-slate-600">Teléfono</label><input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#7B2CBF]/55" placeholder="+506 0000-0000" /></div>
            <div><label className="mb-2 block text-xs font-medium text-slate-600">Correo <span className="text-slate-400">(opcional)</span></label><input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#7B2CBF]/55" placeholder="correo@ejemplo.com" /></div>
            <div><label className="mb-2 block text-xs font-medium text-slate-600">Nota breve <span className="text-slate-400">(opcional)</span></label><textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="min-h-24 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#7B2CBF]/55" placeholder="Solo información necesaria para coordinar la cita." /></div>
          </div>

          {error && <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs leading-5 text-red-700">{error}</div>}

          <button disabled={submitting || !date || !time} className="mt-6 flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#6f2aa8] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#5d228f] disabled:cursor-not-allowed disabled:bg-slate-300">
            {submitting ? <><Loader2 size={17} className="animate-spin" /> Confirmando disponibilidad…</> : <>Confirmar cita <ChevronRight size={17} /></>}
          </button>

          <div className="mt-5 grid gap-3 border-t border-slate-200 pt-5 text-[11px] leading-5 text-slate-500 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="flex gap-2.5"><ShieldCheck size={15} className="mt-0.5 shrink-0 text-[#7B2CBF]" />La hora se valida nuevamente antes de guardar.</div>
            <div className="flex gap-2.5"><LockKeyhole size={15} className="mt-0.5 shrink-0 text-[#7B2CBF]" />Sus datos se usan únicamente para coordinar la cita.</div>
          </div>
          {mode === 'demo' && date && <p className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-[10px] leading-4 text-amber-700">Modo demo activo: aún no se han configurado credenciales de Google Calendar.</p>}
        </div>
      </div>
    </form>
  );
}
