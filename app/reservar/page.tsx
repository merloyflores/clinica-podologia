import type { Metadata } from 'next';
import { Suspense } from 'react';
import { CalendarCheck2, Clock3, ShieldCheck } from 'lucide-react';
import BookingFlow from '../components/BookingFlow';

export const metadata: Metadata = {
  title: 'Agendar cita podológica en San José | Reserva en línea',
  description:
    'Consulte horarios disponibles y reserve en línea su cita podológica en Sabana Norte, San José, con el Centro Podológico Ximena Alvarado.',
  alternates: {
    canonical: '/reservar',
  },
};

function BookingFlowFallback() {
  return (
    <div className="p-6 sm:p-8 lg:p-10">
      <div className="animate-pulse">
        <div className="mb-8">
          <div className="h-3 w-28 rounded bg-slate-200" />
          <div className="mt-4 h-8 w-64 max-w-full rounded bg-slate-200" />
          <div className="mt-3 h-4 w-full max-w-md rounded bg-slate-100" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-4 h-5 w-40 rounded bg-slate-200" />

            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="h-20 rounded-2xl border border-slate-100 bg-slate-50"
                />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 h-5 w-44 rounded bg-slate-200" />

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div className="h-5 w-32 rounded bg-slate-200" />
                <div className="h-8 w-20 rounded bg-slate-200" />
              </div>

              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 35 }).map((_, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-lg bg-slate-200"
                  />
                ))}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="h-12 rounded-xl bg-slate-100"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReservarPage() {
  return (
    <section className="bg-[#faf9fb] pb-20 pt-28 sm:pt-36 md:pb-28 md:pt-44">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid gap-8 border-b border-slate-200 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#7B2CBF]" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B2CBF]">
                Agenda en línea
              </p>
            </div>

            <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-slate-950 md:text-5xl lg:text-[58px]">
              Reserve su cita{' '}
              <span className="font-normal text-[#7B2CBF]">
                en tiempo real.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 md:text-lg">
              Seleccione el servicio, consulte únicamente los espacios
              disponibles y confirme su cita sin esperar una respuesta por
              mensaje.
            </p>
          </div>

          <div className="grid gap-3 text-xs text-slate-500 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <span className="flex items-center gap-2">
              <CalendarCheck2
                size={16}
                className="text-[#7B2CBF]"
              />
              Disponibilidad real
            </span>

            <span className="flex items-center gap-2">
              <Clock3
                size={16}
                className="text-[#7B2CBF]"
              />
              Mar-Dom · 7AM-4PM
            </span>

            <span className="flex items-center gap-2">
              <ShieldCheck
                size={16}
                className="text-[#7B2CBF]"
              />
              Reserva protegida
            </span>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
          <Suspense fallback={<BookingFlowFallback />}>
            <BookingFlow />
          </Suspense>
        </div>

      </div>
    </section>
  );
}