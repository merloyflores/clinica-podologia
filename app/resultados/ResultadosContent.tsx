'use client';

import Image from 'next/image';
import { Star, CheckCircle2, MessageCircle } from 'lucide-react';
import { Call, WhatsApp } from '@mui/icons-material';

const casos = [
  {
    titulo: 'Corrección de Onicocriptosis',
    paciente: 'Paciente recurrente',
    diagnostico: 'Uña encarnada grado II con inflamación severa.',
    resultado: 'Extracción de espícula y recuperación total en 7 días.',
    imgAntes: '/images/resultados/antes1.png',
    imgDespues: '/images/resultados/despues1.png',
    tag: 'Cirugía Menor',
  },
  {
    titulo: 'Tratamiento de Onicomicosis',
    paciente: 'Tratamiento 6 meses',
    diagnostico: 'Infección fúngica crónica en 4 láminas ungueales.',
    resultado: 'Limpieza total de hongo con protocolo de Ácido Nítrico.',
    imgAntes: '/images/resultados/antes.jpg',
    imgDespues: '/images/resultados/despues.jpg',
    tag: 'Protocolo de Tratamiento',
  },
];

const testimonios = [
  { nombre: 'Andrés Retana', texto: 'Tenía años con un problema de uña encarnada y Ximena lo solucionó en una cita. El trato es sumamente profesional y el lugar impecable.', estrellas: 5 },
  { nombre: 'María Fernanda Rojas', texto: 'Excelente atención para pie diabético. Mi mamá se siente muy segura con los protocolos de limpieza que manejan. 100% recomendada.', estrellas: 5 },
];

export default function ResultadosContent() {
  return (
    <section className="overflow-hidden bg-white py-24 md:py-32 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 grid gap-8 border-b border-slate-200 pb-12 md:grid-cols-[1fr_auto] md:items-end md:pb-14">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3"><span className="h-px w-9 bg-[#7B2CBF]" /><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B2CBF]">Casos atendidos</p></div>
            <h1 className="text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-slate-950 md:text-5xl lg:text-[58px]">Resultados <span className="font-normal text-slate-400">reales.</span></h1>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-500 md:text-base">Cada pie es un caso único. Aquí mostramos la evolución de nuestros pacientes bajo protocolos estrictos.</p>
        </div>

        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-10 lg:gap-14">
          {casos.map((caso) => (
            <article key={caso.titulo} className="group">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-square overflow-hidden rounded-[18px] border border-slate-200 bg-slate-100">
                  <Image src={caso.imgAntes} alt={`Antes - ${caso.titulo}`} fill className="object-cover grayscale-[25%]" />
                  <span className="absolute left-3 top-3 rounded-lg bg-slate-950/72 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">Antes</span>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-[18px] border border-[#7B2CBF]/15 bg-slate-50">
                  <Image src={caso.imgDespues} alt={`Después - ${caso.titulo}`} fill className="object-cover" />
                  <span className="absolute left-3 top-3 rounded-lg bg-[#6f2aa8] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white">Después</span>
                </div>
              </div>
              <div className="pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7B2CBF]">{caso.tag}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-slate-950">{caso.titulo}</h3>
                <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                  <p className="text-sm leading-6 text-slate-500"><span className="font-medium text-slate-700">Diagnóstico:</span> {caso.diagnostico}</p>
                  <p className="flex items-start gap-2.5 text-sm font-medium leading-6 text-slate-800"><CheckCircle2 size={17} className="mt-1 shrink-0 text-[#25D366]" /> <span><span className="text-slate-500">Resultado:</span> {caso.resultado}</span></p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 overflow-hidden rounded-[24px] border border-slate-200 bg-[#faf9fb] md:mt-28">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="border-b border-slate-200 p-8 md:p-12 lg:border-b-0 lg:border-r lg:p-14">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-[#7B2CBF]/10 bg-white text-[#7B2CBF]"><MessageCircle size={21} /></div>
              <h3 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 md:text-4xl">Lo que dicen nuestros pacientes</h3>
              <p className="mt-5 max-w-md text-sm leading-6 text-slate-500 md:text-base">La confianza se construye con resultados y buen trato, cita tras cita, en San José.</p>
            </div>
            <div className="divide-y divide-slate-200 bg-white">
              {testimonios.map((t) => (
                <div key={t.nombre} className="p-8 md:p-10 lg:px-12 lg:py-11">
                  <div className="mb-5 flex gap-1">{[...Array(t.estrellas)].map((_, i) => <Star key={i} size={14} className="fill-amber-400 text-amber-400" />)}</div>
                  <p className="text-base leading-7 text-slate-700">“{t.texto}”</p>
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">{t.nombre}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 overflow-hidden rounded-[24px] bg-[#19161d] px-7 py-12 text-center text-white md:px-12 md:py-16 lg:mt-28 lg:px-20 lg:py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b98ada]">Recupere su bienestar hoy</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-5xl lg:text-6xl">Vuelva a caminar <span className="font-normal text-[#c9a6e4]">con total libertad.</span></h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">No permita que una molestia se convierta en una limitación. Agende su valoración con la <span className="font-medium text-white">Especialista Ximena Alvarado</span> y reciba atención profesional inmediata.</p>
          <div className="mx-auto mt-9 grid max-w-xl gap-3 sm:grid-cols-2">
            <a href="https://wa.me/50662500117" target="_blank" rel="noopener noreferrer" className="flex h-14 items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#20bd5a]"><WhatsApp sx={{ fontSize: 21 }} /> Agendar por WhatsApp</a>
            <a href="tel:50662500117" className="flex h-14 items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.04] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-white/[0.08]"><Call sx={{ fontSize: 21 }} /> Llamar ahora</a>
          </div>
          <p className="mt-6 text-[10px] uppercase tracking-[0.14em] text-slate-600">Atención Martes a Domingo · Sabana Norte, San José</p>
        </div>
      </div>
    </section>
  );
}
