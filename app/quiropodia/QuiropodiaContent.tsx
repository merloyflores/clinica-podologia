'use client';

import { Microscope, ShieldCheck, Stethoscope, Footprints, Activity, Thermometer, Clock, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function QuiropodiaContent() {
  const pilares = [
    { title: 'Valoración Podológica Integral', desc: 'Evaluación dermatológica y vascular profunda de la lámina ungueal para detectar patologías antes de que limiten su movilidad.', icon: <Stethoscope size={21} />, detail: 'Exploración de pulsos y sensibilidad.' },
    { title: 'Tratamiento de Onicopatías', desc: 'Corte técnico y fresado de uñas engrosadas o encarnadas (onicocriptosis) con tecnología de micro-motor indoloro.', icon: <Microscope size={21} />, detail: 'Eliminación de espículas sin dolor.' },
    { title: 'Desbridamiento de Hiperqueratosis', desc: 'Eliminación segura de callosidades y helomas (ojos de gallo) devolviendo la elasticidad natural a la piel.', icon: <Activity size={21} />, detail: 'Uso de instrumental estéril de grado profesional.' },
    { title: 'Terapia de Hidratación Profunda', desc: 'Masaje terapéutico con urea al 40% para restaurar la barrera lipídica y prevenir grietas en los talones.', icon: <Thermometer size={21} />, detail: 'Prevención de infecciones dérmicas.' },
  ];
  const indicadores = ['Cambios en la coloración o grosor de las uñas.', 'Dolor punzante en los bordes de los dedos al usar calzado.', 'Presencia de durezas dolorosas en la planta del pie.', 'Pacientes con diagnóstico de diabetes o problemas circulatorios.'];

  return (
    <section className="bg-[#faf9fb] py-24 md:py-32 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-5xl border-b border-slate-200 pb-14 md:pb-16">
          <div className="mb-5 flex items-center gap-3"><span className="h-px w-9 bg-[#7B2CBF]" /><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B2CBF]">Especialidad en Quiropodología</p></div>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.07] tracking-[-0.045em] text-slate-950 md:text-5xl lg:text-[60px]">Más que estética, <span className="font-normal text-[#7B2CBF]">salud podológica funcional.</span></h1>
          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-3xl text-base leading-7 text-slate-500 md:text-lg">A diferencia de un servicio convencional, la quiropodia es un <strong className="font-semibold text-slate-800">procedimiento podológico preventivo y correctivo</strong>. Nuestro protocolo cuida la eliminación de focos infecciosos, restaurando la salud de sus pies para prevenir complicaciones en su biomecánica, rodillas y espalda.</p>
            <div className="flex gap-8 border-l border-slate-200 pl-7">
              <div><p className="flex items-center gap-2 text-xl font-semibold text-slate-900"><ShieldCheck className="text-[#25D366]" size={21} />100%</p><p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-400">Bioseguridad estéril</p></div>
              <div><p className="flex items-center gap-2 text-xl font-semibold text-slate-900"><Clock className="text-[#7B2CBF]" size={21} />45m</p><p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-400">Precisión técnica</p></div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-8 lg:col-span-7">
            <div className="grid gap-4 md:grid-cols-2">
              {pilares.map((pilar) => (
                <article key={pilar.title} className="rounded-[18px] border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.035)]">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-[#7B2CBF]/10 bg-[#7B2CBF]/5 text-[#7B2CBF]">{pilar.icon}</div>
                  <h3 className="text-lg font-semibold leading-6 tracking-[-0.02em] text-slate-950">{pilar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{pilar.desc}</p>
                  <div className="mt-6 flex items-start gap-2.5 border-t border-slate-100 pt-5 text-[11px] leading-5 text-slate-500"><CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#25D366]" />{pilar.detail}</div>
                </article>
              ))}
            </div>

            <div className="rounded-[18px] border border-slate-200 bg-white p-7 md:p-9">
              <div className="flex items-start gap-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600"><AlertCircle size={20} /></div><div><p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">¿Cuándo programar una cita?</p><h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-950">Indicadores de evaluación inmediata</h3></div></div>
              <ul className="mt-7 grid gap-4 sm:grid-cols-2">{indicadores.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7B2CBF]" />{item}</li>)}</ul>
            </div>

            <div className="flex flex-col gap-6 rounded-[20px] bg-[#19161d] p-8 text-white md:flex-row md:items-center md:p-10">
              <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]"><Footprints size={24} /></div>
              <div><h3 className="text-xl font-semibold tracking-tight">Impacto en la salud postural</h3><p className="mt-2 text-sm leading-6 text-slate-400">Caminar con dolor altera involuntariamente su cadena biomecánica. Una sesión de quiropodia no solo alivia el pie, sino que ayuda a prevenir el desgaste prematuro y molestias crónicas en tobillos, rodillas y zona lumbar.</p></div>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
                <div className="relative h-[430px] md:h-[520px]"><Image src="/images/ximenafotoperfil.jpeg" alt="Ximena Alvarado - Especialista en Podología" fill className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/15 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-7 md:p-8"><p className="text-lg leading-7 text-white">“La salud de sus pies es el cimiento indiscutible de su libertad de movimiento y calidad de vida.”</p><p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">Ximena Alvarado · Especialista en Podología</p></div></div>
                <div className="p-5"><Link href="/reservar?service=quiropodia" className="flex h-14 w-full items-center justify-center gap-2.5 rounded-xl bg-[#6f2aa8] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#5d228f]">Consultar horarios y agendar <ArrowRight size={17} /></Link></div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
