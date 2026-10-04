'use client';

import { WhatsApp } from '@mui/icons-material';
import Link from 'next/link';
import { CalendarCheck2, Clock, Lock, MapPin } from 'lucide-react';

export default function ContactenosContent() {
  return (
    <section id="contactenos" className="bg-[#faf9fb] py-24 md:py-32 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5 lg:pt-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[#7B2CBF]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B2CBF]">Atención inmediata</p>
            </div>
            <h1 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 md:text-5xl lg:text-[58px]">Hablemos de <span className="font-normal text-[#7B2CBF]">tu salud.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 md:text-lg">¿Tiene dudas sobre un tratamiento o desea agendar una valoración? Nuestro equipo está listo para asistirle.</p>

            <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
              <a href="https://wa.me/50662500117" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 py-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#25D366] transition-colors group-hover:border-[#25D366]/30"><WhatsApp sx={{ fontSize: 22 }} /></div>
                <div><p className="text-[11px] font-medium text-slate-400">Línea directa</p><p className="mt-1 text-lg font-semibold tracking-tight text-slate-900">(+506) 6250-0117</p></div>
              </a>
              <div className="flex items-center gap-5 py-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#7B2CBF]"><MapPin size={21} /></div>
                <div><p className="text-[11px] font-medium text-slate-400">Ubicación</p><p className="mt-1 text-lg font-semibold tracking-tight text-slate-900">Sabana Norte, San José, CR.</p></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-[24px] border border-slate-800 bg-[#19161d] text-white shadow-[0_26px_70px_rgba(29,20,36,0.16)]">
              <div className="border-b border-white/10 px-7 py-8 md:px-10 md:py-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b98ada]">Agenda y consultas</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em] md:text-4xl">Reserve según disponibilidad real</h3>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400 md:text-base">Consulte los horarios libres dentro de nuestra jornada y confirme su cita directamente. Si necesita orientación antes de reservar, también puede escribirnos por WhatsApp.</p>
              </div>

              <div className="grid grid-cols-1 divide-y divide-slate-800 md:grid-cols-2 md:divide-x md:divide-y-0">
                <div className="p-7 md:p-8"><Clock className="mb-5 text-[#25D366]" size={21} /><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Martes - Domingo</p><p className="mt-2 text-lg font-medium text-white">7:00 AM - 4:00 PM</p></div>
                <div className="p-7 md:p-8"><Lock className="mb-5 text-[#b98ada]" size={21} /><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Lunes</p><p className="mt-2 text-lg font-medium text-white">Cerrado</p></div>
              </div>

              <div className="border-t border-slate-800 p-7 md:p-8">
                <div className="grid gap-3 sm:grid-cols-2">
                  <Link href="/reservar" className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#6f2aa8] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#5d228f]"><CalendarCheck2 size={19} /> Agendar cita</Link>
                  <a href="https://wa.me/50662500117" target="_blank" rel="noopener noreferrer" className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#20bd5a]"><WhatsApp sx={{ fontSize: 20 }} /> Consultar por WhatsApp</a>
                </div>
                <p className="mt-4 text-center text-[11px] text-slate-500">La agenda en línea muestra los espacios disponibles en tiempo real.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
