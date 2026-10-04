import type { Metadata } from 'next';
import { CalendarCheck2, Clock3, ShieldCheck } from 'lucide-react';
import BookingFlow from '../components/BookingFlow';

export const metadata: Metadata = {
  title: 'Agendar cita',
  description: 'Consulte horarios disponibles y reserve su cita en el Centro Podológico Ximena Alvarado.',
  alternates: { canonical: '/reservar' },
};

export default function ReservarPage() {
  return (
    <section className="bg-[#faf9fb] pb-20 pt-28 sm:pt-36 md:pb-28 md:pt-44">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-slate-200 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3"><span className="h-px w-9 bg-[#7B2CBF]" /><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B2CBF]">Agenda en línea</p></div>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-slate-950 md:text-5xl lg:text-[58px]">Reserve su cita <span className="font-normal text-[#7B2CBF]">en tiempo real.</span></h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 md:text-lg">Seleccione el servicio, consulte únicamente los espacios disponibles y confirme su cita sin esperar una respuesta por mensaje.</p>
          </div>
          <div className="grid gap-3 text-xs text-slate-500 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <span className="flex items-center gap-2"><CalendarCheck2 size={16} className="text-[#7B2CBF]" />Disponibilidad real</span>
            <span className="flex items-center gap-2"><Clock3 size={16} className="text-[#7B2CBF]" />Mar-Dom · 7AM-4PM</span>
            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#7B2CBF]" />Reserva protegida</span>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
          <BookingFlow />
        </div>
      </div>
    </section>
  );
}
