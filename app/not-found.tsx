import Link from 'next/link';
import { CalendarCheck2, Home, Stethoscope } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="flex min-h-[72vh] items-center bg-[#faf9fb] px-6 pb-20 pt-32 sm:pt-40">
      <div className="mx-auto w-full max-w-4xl rounded-[24px] border border-slate-200 bg-white p-8 text-center shadow-[0_24px_70px_rgba(15,23,42,0.05)] md:p-14">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7B2CBF]">Página no encontrada · 404</p>
        <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.045em] text-slate-950 md:text-5xl">La página que busca no está disponible.</h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600">Puede volver al inicio, consultar nuestros tratamientos o revisar la disponibilidad de la agenda.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 text-sm font-semibold text-slate-700 hover:bg-slate-50"><Home size={17} />Volver al inicio</Link>
          <Link href="/tratamientos" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 text-sm font-semibold text-slate-700 hover:bg-slate-50"><Stethoscope size={17} />Ver tratamientos</Link>
          <Link href="/reservar" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#6f2aa8] px-6 text-sm font-semibold text-white hover:bg-[#5d228f]"><CalendarCheck2 size={17} />Agendar cita</Link>
        </div>
      </div>
    </section>
  );
}
