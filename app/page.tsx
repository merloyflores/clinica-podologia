import { Star, ShieldCheck, HeartPulse, Activity, CheckCircle2, ArrowUpRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { WhatsApp } from '@mui/icons-material';

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* SECCIÓN 1: HERO */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#151319] px-6 pt-32 sm:pt-40 lg:px-8">  
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay loop muted playsInline
            className="h-full w-full object-cover opacity-36" 
          >
            <source src="/videos/clinica-vitruvio-hero.mp4" type="video/mp4" />
          </video>
          {/* Overlay más sobrio: Azul profundo a Morado marca */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,16,22,0.94)_0%,rgba(18,16,22,0.76)_48%,rgba(18,16,22,0.54)_100%)]"></div>
        </div>

        {/* 2. CONTENIDO */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between lg:flex-row">
          <div className="max-w-3xl flex-1 space-y-7 py-16 md:py-24">
            {/* Badge de Marca con Animación Sutil */}
            <div className="inline-flex items-center gap-2.5 border-l-2 border-[#a66bd5] pl-3">
              <Star size={14} className="text-[#25D366] fill-[#25D366]" />
              <span className="text-white/80 text-[12px] font-semibold tracking-[0.04em]">
                Centro Podológico Ximena Alvarado
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold text-white leading-[1.02] tracking-[-0.045em]">
              Salud y bienestar <br />
              <span className="text-[#b982df]">podológico.</span>
            </h1>

            {/* Subtexto */}
            <p className="max-w-2xl text-base md:text-lg text-slate-300 leading-8 font-normal">
              Atención podológica especializada en el tratamiento de patologías del pie, bajo estrictos estándares de bioseguridad. <span className="text-white font-bold">Alivio real desde la primera cita.</span>
            </p>
            
            {/* CTAs con Micro-interacciones */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Link href="/contactenos" className="inline-flex min-h-13 items-center justify-center rounded-xl bg-[#7B2CBF] px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(123,44,191,0.22)] transition-colors hover:bg-[#68239f]">
                Agendar Consulta
              </Link>
              <Link href="/tratamientos" className="inline-flex min-h-13 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-slate-950">
                Ver Tratamientos
              </Link>
            </div>

            {/* Elemento de confianza */}
            <div className="flex items-center gap-4 border-t border-white/10 pt-7">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/8">
                <ShieldCheck size={18} className="text-white" />
              </div>
              <div className="text-left">
                <p className="text-white text-sm font-semibold">Atención Especializada</p>
                <p className="text-slate-400 text-xs font-normal">Pacientes atendidos en San José, Costa Rica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: PILARES DE EXCELENCIA */}
      <section className="relative overflow-hidden bg-[#f8f8fa] px-6 py-24 lg:px-8 lg:py-28">
        {/* Decoración de fondo de ingeniería */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="absolute -right-24 top-1/4 w-96 h-96 bg-[#7B2CBF]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto">
          
          {/* HEADER ESTRATÉGICO */}
          <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-[#7B2CBF]"></span>
                <span className="text-[#7B2CBF] font-semibold text-xs tracking-[0.06em]">Estándares Profesionales</span>
              </div>
              <h2 className="text-slate-900 font-bold text-4xl md:text-5xl tracking-[-0.04em] leading-[1.05]">
                Nuestros Pilares de <br />
                <span className="text-[#7B2CBF]">Excelencia Profesional</span>
              </h2>
            </div>
            <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed max-w-md border-l-2 border-slate-200 pl-6">
              Fundamentamos nuestra práctica en protocolos que cuidan la salud de sus pies, de la mano de la <span className="text-slate-900 font-bold">Especialista en Podología Ximena Alvarado</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pilar 1: Bioseguridad Avanzada */}
            <div className="group relative rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[0_10px_35px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.07)]">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                <ShieldCheck size={120} />
              </div>
              
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-[#25D366] ring-1 ring-emerald-100">
                <ShieldCheck size={32} strokeWidth={2} />
              </div>
              
              <h4 className="font-bold text-slate-900 text-xl mb-4 tracking-tight">Bioseguridad estricta</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6">
                Protocolos estrictos de higiene y esterilización que eliminan cualquier riesgo de contaminación cruzada.
              </p>

              <ul className="space-y-3 border-t border-slate-100 pt-6">
                {['Instrumental sellado al vacío', 'Autoclave de última generación', 'Material 100% descartable'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#25D366] shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Pilar 2: Especialización Humana */}
            <div className="group relative rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[0_10px_35px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.07)]">
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-[#7B2CBF] ring-1 ring-purple-100">
                <HeartPulse size={32} strokeWidth={2} />
              </div>
              
              <h4 className="font-bold text-slate-900 text-xl mb-4 tracking-tight">Atención especializada</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6">
                Trato cercano y experto para cada patología, enfocado en la recuperación total del paciente.
              </p>

              <ul className="space-y-3 border-t border-slate-100 pt-6">
                {['Valoración personalizada', 'Seguimiento post-tratamiento', 'Enfoque preventivo integral'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7B2CBF] shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pilar 3: Tecnología & Resultados */}
            <div className="group relative rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[0_10px_35px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.07)]">
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-700 ring-1 ring-slate-200">
                <Star size={32} strokeWidth={2} />
              </div>
              
              <h4 className="font-bold text-slate-900 text-xl mb-4 tracking-tight">Resultados comprobados</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6">
                Tratamientos indoloros y efectivos, respaldados por casos de éxito reales.
              </p>

              <ul className="space-y-3 border-t border-slate-100 pt-6">
                {['Alivio desde la primera sesión', 'Técnicas no invasivas', 'Retorno a la movilidad'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
      
      {/* SECCIÓN 3: QUIROPODIA PROFESIONAL & EDUCATIVA */}
      <section id="quiropodia" className="relative overflow-hidden bg-white py-24 lg:py-28">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-20 z-0" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* BLOQUE SUPERIOR: VIDEO Y DESCRIPCIÓN */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24">
            
            {/* 1. Lado Izquierdo: El Concepto */}
            <div className="w-full lg:w-[40%] space-y-8">
              <div className="inline-flex items-center gap-2 border-l-2 border-[#7B2CBF] pl-3">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#7B2CBF] opacity-30"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#7B2CBF]"></span>
                </span>
                <span className="text-[#7B2CBF] font-semibold tracking-[0.06em] text-xs">
                  Educación Podológica
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.05] tracking-[-0.04em]">
                ¿Qué es la <br />
                <span className="text-[#b982df]">Quiropodia?</span>
              </h2>

              <p className="text-slate-600 leading-relaxed text-base font-medium">
                Muchos pacientes confunden el cuidado podológico con la estética. La <span className="text-slate-900 font-bold">Quiropodia</span> es el procedimiento podológico fundamental para prevenir infecciones y tratar dolores crónicos causados por callosidades o uñas mal tratadas.
              </p>

              <div className="space-y-4">
                {[
                  { t: 'Tratamiento Podológico', d: 'No es un pedicure; es salud del pie.' },
                  { t: 'Prevención Activa', d: 'Evita la formación de úlceras y abscesos.' },
                  { t: 'Bienestar Inmediato', d: 'Elimina la presión dolorosa al caminar.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 border-b border-slate-100 py-4 last:border-0">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-[#25D366]">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{item.t}</p>
                      <p className="text-xs text-slate-500 font-medium">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Lado Derecho: El Video con mayor peso visual */}
            <div className="w-full lg:w-[60%]">
              <div className="relative group">
                <div className="absolute -inset-3 rounded-3xl bg-[#7B2CBF]/5 blur-2xl"></div>
                
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-[0_18px_55px_rgba(15,23,42,0.12)]">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/AeUk4AiiB78?modestbranding=1&rel=0" 
                    title="Procedimiento Quiropodia"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* --- NUEVA SUB-SECCIÓN: EL PASO A PASO EDUCATIVO (Fotos/Iconos) --- */}
          <div className="pt-20 border-t border-slate-100">
            {/* --- BLOQUE INTRODUCTORIO DEL PROTOCOLO --- */}
            <div className="max-w-7xl mx-auto text-center mb-20 space-y-6">
              <div className="flex justify-center items-center gap-4 mb-2">
                <div className="h-px w-12 bg-slate-200"></div>
                <h3 className="text-[#7B2CBF] font-semibold text-xs tracking-[0.08em]">Metodología Avanzada</h3>
                <div className="h-px w-12 bg-slate-200"></div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-[-0.04em] leading-[1.05]">
                El Protocolo de Tratamiento <br />
                <span className="text-slate-500">de Especialidad</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-10">
                <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed border-l-2 border-[#25D366] pl-6">
                  En el <strong>Centro Podológico Ximena Alvarado</strong>, cada sesión de Quiropodia se rige por un sistema de cuatro etapas. Este protocolo no solo busca el alivio estético, sino la resolución profunda de patologías mediante el uso de tecnología rotatoria de última generación y estrictos protocolos de bioseguridad.
                </p>
                <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
                  Nuestra prioridad es la <strong>seguridad del paciente</strong>. Por ello, implementamos una trazabilidad completa en cada procedimiento, asegurando que cada paso, desde la inspección inicial hasta la hidratación final, cumpla con los más altos estándares de bioseguridad podológica.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  step: '01', 
                  title: 'Evaluación', 
                  desc: 'Inspección dérmica y vascular para detectar patologías ocultas.',
                  img: '/images/paso-1.jpg'
                },
                { 
                  step: '02', 
                  title: 'Quiropodia', 
                  desc: 'Eliminación indolora de helomas y durezas (callos).',
                  img: '/images/paso-2.jpg'
                },
                { 
                  step: '03', 
                  title: 'Fresado', 
                  desc: 'Tratamiento de la lámina ungueal con tecnología rotatoria.',
                  img: '/images/paso-3.jpg'
                },
                { 
                  step: '04', 
                  title: 'Hidratación', 
                  desc: 'Masaje terapéutico con bálsamos de grado profesional.',
                  img: '/images/paso-4.jpg'
                }
              ].map((fase) => (
                <div key={fase.step} className="group cursor-default">
                  <div className="relative mb-5 h-64 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                    {/* Imagen de la clínica real de Ximena */}
                    <Image src={fase.img} alt={fase.title} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    <span className="absolute bottom-5 left-5 text-3xl font-semibold text-white/65">{fase.step}</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#7B2CBF] transition-colors">{fase.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{fase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
            
      {/* SECCIÓN 4: HIGIENE, SEGURIDAD Y CONFIANZA */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-28">
        {/* Decoración técnica: Malla de precisión clínica */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            
            {/* LADO IZQUIERDO: Copy Persuasivo y Badges */}
            <div className="w-full lg:w-[55%] space-y-10">


              {/* Titulo de Alto Impacto */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.08] tracking-[-0.045em]">
                La bioseguridad <br /> no es opcional, <br />
                <span className="text-[#7B2CBF]">es nuestra regla.</span>
              </h2>

              {/* Texto Empático */}
              <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium max-w-lg border-l-4 border-[#7B2CBF] pl-6">
                Entendemos el miedo al contagio o al dolor. Por eso, la Especialista en Podología <strong className="text-slate-900">Ximena Alvarado</strong> ejecuta cada procedimiento bajo estrictos protocolos de esterilización. Tu tranquilidad es el primer paso hacia tu bienestar.
              </p>

              {/* Tarjetas transformadas en Lista de Valor Premium */}
              <div className="flex flex-col gap-5 pt-4">
                
                {/* Feature 1: Esterilización */}
                <div className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-[#fafafa] p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white text-[#25D366]">
                    <ShieldCheck size={28} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-base mb-1.5">100% estéril (Clase B)</h4>
                    <p className="text-slate-500 text-xs font-medium leading-relaxed">Instrumental sellado al vacío y procesado en autoclave. Se abre exclusivamente frente a ti.</p>
                  </div>
                </div>

                {/* Feature 2: Tecnología Indolora */}
                <div className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-[#fafafa] p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white text-[#7B2CBF]">
                    <Activity size={28} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-base mb-1.5">Técnica indolora</h4>
                    <p className="text-slate-500 text-xs font-medium leading-relaxed">Precisión micromotora que elimina patologías sin dañar el tejido sano, garantizando un alivio inmediato sin sufrimiento.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* LADO DERECHO: La Foto de Ximena (El cierre de confianza) */}
            <div className="w-full lg:w-[45%] relative mt-10 lg:mt-0">
               {/* Sombras y formas traseras para darle profundidad a la foto */}
               <div className="absolute -inset-3 rounded-3xl bg-[#7B2CBF]/6"></div>
               <div className="absolute inset-0 rounded-2xl bg-slate-100"></div>

               {/* Contenedor de la Imagen */}
               <div className="relative flex items-end justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white pt-10 shadow-[0_18px_55px_rgba(15,23,42,0.10)]">
                  {/* Como la foto tiene fondo blanco, el bg-white del contenedor hará que se fusione perfecto */}
                  <img
                    src="/images/ximenaalvarado-trabajando.png"
                    alt="Especialista Ximena Alvarado en procedimiento podológico"
                    className="h-auto w-[90%] translate-y-4 object-contain"
                  />

                  {/* Badge Flotante de Autoridad */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-center gap-4 rounded-xl border border-slate-200 bg-white/95 p-4 shadow-[0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur-sm">
                     <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                        <CheckCircle2 size={24} className="text-[#25D366]" />
                     </div>
                     <div>
                       <p className="text-[11px] font-medium text-slate-500">Atención Especializada</p>
                       <p className="text-sm font-semibold tracking-tight text-slate-900">Especialista Ximena Alvarado</p>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* SECCIÓN 5: SERVICIOS DETALLADOS (EL PUENTE) */}
      <section className="relative bg-white px-6 py-24 lg:px-8 lg:py-28">
        <div className="max-w-7xl mx-auto">
          
          {/* Encabezado de Sección */}
          <div className="mb-16">
            <h3 className="mb-4 text-xs font-semibold tracking-[0.07em] text-[#7B2CBF]">Tratamientos Específicos</h3>
            <h2 className="text-slate-900 font-bold text-4xl md:text-5xl tracking-[-0.04em]">
              Soluciones para <br />
              <span className="text-slate-400">patologías comunes.</span>
            </h2>
          </div>

          {/* Lista de Servicios Estilo "Medical List" */}
          <div className="divide-y divide-slate-100 border-t border-slate-100 mb-16">
            {[
              { 
                id: '01', 
                name: 'Onicocriptosis', 
                tag: 'Uña Encarnada', 
                desc: 'Extracción técnica y definitiva mediante procedimientos mínimamente invasivos que garantizan el alivio inmediato del dolor crónico.' 
              },
              { 
                id: '02', 
                name: 'Onicomicosis', 
                tag: 'Hongos en Uñas', 
                desc: 'Tratamiento avanzado para la eliminación de agentes fúngicos, recuperando la salud y estética natural de la lámina ungueal.'
              },
              { 
                id: '03', 
                name: 'Pie Diabético', 
                tag: 'Cuidado Preventivo', 
                desc: 'Protocolo de inspección y mantenimiento especializado para prevenir complicaciones vasculares o infecciosas en pacientes de riesgo.' 
              },
              { 
                id: '04', 
                name: 'Helomas y Durezas', 
                tag: 'Callosidades', 
                desc: 'Desbridamiento profesional de capas queratósicas mediante tecnología rotatoria, devolviendo la suavidad y el confort al caminar.' 
              }
            ].map((servicio) => (
              <div 
                key={servicio.id} 
                className="group flex flex-col justify-between gap-6 py-9 transition-colors hover:bg-slate-50/70 md:flex-row md:items-center md:px-4"
              >
                <div className="flex items-center gap-8 md:w-1/3">
                  <span className="text-xl font-semibold text-slate-300 transition-colors group-hover:text-[#7B2CBF]">
                    {servicio.id}
                  </span>
                  <div>
                    <h4 className="text-slate-900 font-bold text-xl tracking-tight">{servicio.name}</h4>
                    <span className="text-[11px] font-semibold text-[#299c56]">{servicio.tag}</span>
                  </div>
                </div>
                
                <p className="text-slate-500 text-sm md:text-base font-medium max-w-md md:w-1/2">
                  {servicio.desc}
                </p>

                <div className="md:w-1/6 flex md:justify-end">
                   <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 transition-all group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white">
                      <ArrowUpRight size={20} />
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botón Sutil - El Impulso a la página de Tratamientos */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <p className="text-xs font-medium tracking-[0.03em] text-slate-400">¿No encuentra lo que busca?</p>
            <Link 
              href="/tratamientos" 
              className="group inline-flex items-center gap-3 rounded-xl border border-slate-300 px-8 py-4 text-sm font-semibold text-slate-900 transition-all hover:border-slate-900 hover:bg-slate-900 hover:text-white"
            >
              Explorar Catálogo Completo y Tarifas
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          {/* LÍNEA DIVISORA */}
          <div className="w-full max-w-8xl h-px bg-linear-to-r from-transparent via-slate-200 to-transparent mt-12" />
        </div>
      </section>

      {/* SECCIÓN 6: CTA FINAL - Estilo "Estructura Clínica Premium" */}
      <section className="py-2 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Contenedor Principal (Tarjeta Premium) */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[#f8f8fa] p-8 md:p-14 lg:p-16">

            {/* Decoración de fondo del contenedor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-white/60 to-transparent pointer-events-none"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#7B2CBF]/5 rounded-full blur-[80px]"></div>

            <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
              
              {/* LADO IZQUIERDO: Copy Extendido y Explicativo */}
              <div className="w-full lg:w-3/5 text-left space-y-8">

                {/* Título - Escala ajustada para texto largo */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.06] tracking-[-0.045em]">
                  Recupere el placer <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7B2CBF] to-[#9D4EDD] italic pr-6">
                    de caminar sin dolor.
                  </span>
                </h2>

                {/* Textos explicativos profundos (Sin miedo a escribir) */}
                <div className="space-y-5">
                  <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed">
                    Sus pies son el pilar de su calidad de vida. No permita que patologías tratables como uñas encarnadas crónicas, callosidades severas o infecciones fúngicas limiten su movilidad diaria o comprometan su salud general.
                  </p>
                  <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed">
                    Bajo la atención de la Especialista en Podología <strong className="text-slate-900">Ximena Alvarado</strong>, recibirá una valoración precisa y un plan de tratamiento a su medida. Priorizamos su bienestar mediante técnicas modernas, indoloras y con estrictos estándares de bioseguridad.
                  </p>
                </div>
              </div>

              {/* LADO DERECHO: Panel de Acción */}
              <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-end text-center lg:text-left">
                <div className="flex w-full flex-col items-center gap-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_12px_35px_rgba(15,23,42,0.05)] md:p-10 lg:items-start">
                  
                  <div>
                    <h4 className="text-slate-900 font-bold text-2xl tracking-tight mb-2">Inicie su tratamiento</h4>
                    <p className="text-slate-500 text-sm font-medium">Agende su valoración inicial hoy mismo.</p>
                  </div>

                  <a 
                    href="https://wa.me/50662500117?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20valoraci%C3%B3n%20podol%C3%B3gica"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#20bd5b]"
                  >
                    <WhatsApp sx={{ fontSize: 24 }} />
                    Contactar por WhatsApp
                  </a>
                  
                  {/* Puntos de Garantía */}
                  <div className="flex flex-col gap-4 w-full border-t border-slate-100 pt-6">
                    <div className="flex items-center justify-center lg:justify-start gap-3 text-slate-600 text-sm font-bold">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center">
                        <CheckCircle2 size={14} className="text-[#25D366]" />
                      </div>
                      <span>Respuesta inmediata</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-3 text-slate-600 text-sm font-bold">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center">
                        <CheckCircle2 size={14} className="text-[#25D366]" />
                      </div>
                      <span>Valoración completa</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}