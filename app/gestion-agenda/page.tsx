import type { Metadata } from 'next';
import AgendaAdminClient from './AgendaAdminClient';

export const metadata: Metadata = {
  title: 'Gestión de agenda',
  robots: { index: false, follow: false },
};

export default function GestionAgendaPage() {
  return (
    <section className="min-h-screen bg-[#faf9fb] pb-24 pt-28 sm:pt-36 md:pt-44">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 flex items-center gap-3"><span className="h-px w-9 bg-[#7B2CBF]" /><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B2CBF]">Uso administrativo</p></div>
          <h1 className="text-4xl font-semibold tracking-[-0.045em] text-slate-950 md:text-5xl">Gestión de <span className="font-normal text-[#7B2CBF]">agenda.</span></h1>
          <p className="mt-4 text-base leading-7 text-slate-500">Consulte las próximas reservas y bloquee horarios que no deben estar disponibles para pacientes.</p>
        </div>
        <AgendaAdminClient />
      </div>
    </section>
  );
}
