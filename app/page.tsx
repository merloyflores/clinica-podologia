import { Star, ShieldCheck, HeartPulse, Activity, CheckCircle2, ArrowUpRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { WhatsApp } from '@mui/icons-material';

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* SECCIÓN 1: HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 lg:px-20 pt-24 overflow-hidden bg-slate-950">  
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay loop muted playsInline
            className="w-full h-full object-cover scale-105 blur-xs opacity-40" 
          >
            <source src="/videos/clinica-vitruvio-hero.mp4" type="video/mp4" />
          </video>
          {/* Overlay más sobrio: Azul profundo a Morado marca */}
          <div className="absolute inset-0 bg-linear-to-tr from-slate-950 via-[#7B2CBF]/20 to-slate-950/80"></div>
        </div>

        {/* 2. CONTENIDO */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
          <div className="flex-1 space-y-8 py-10">
            {/* Badge de Marca con Animación Sutil */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-sm">
              <Star size={14} className="text-[#25D366] fill-[#25D366]" />
              <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
                Centro Podológico Ximena Alvarado
              </span>
            </div>
            
            {/* Headline con Tracking más agresivo */}
            <h1 className="text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              Salud y estética <br />
              <span className="text-[#7B2CBF]">quirúrgica.</span>
            </h1>

            {/* Subtexto: Añadimos 'Alivio Inmediato' para generar deseo */}
            <p className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed font-medium">
              Especialistas en el diagnóstico y tratamiento avanzado de patologías del pie bajo estrictos estándares de bioseguridad hospitalaria. <span className="text-white font-bold">Alivio definitivo desde la primera cita.</span>
            </p>
            
            {/* CTAs con Micro-interacciones */}
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/contactenos" className="inline-flex items-center justify-center px-10 py-5 rounded-full font-bold text-white bg-[#7B2CBF] hover:bg-[#6a24a3] shadow-[0_15px_30px_rgba(123,44,191,0.3)] transition-all duration-300 hover:scale-105">
                Agendar Consulta
              </Link>
              <Link href="/tratamientos" className="inline-flex items-center justify-center px-10 py-5 rounded-full font-bold text-white border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-slate-950 transition-all duration-300">
                Ver Tratamientos
              </Link>
            </div>

            {/* --- NUEVO: ELEMENTO DE PRUEBA SOCIAL / CONFIANZA --- */}
            <div className="pt-8 flex items-center gap-6 border-t border-white/10">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center overflow-hidden">
                     <img src={`/images/user-${i}.jpg`} alt="Paciente" className="w-full h-full object-cover opacity-80" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-slate-950 bg-[#25D366] flex items-center justify-center text-[10px] font-black text-white">
                  +5k
                </div>
              </div>
              <div className="text-left">
                <p className="text-white text-xs font-black uppercase tracking-widest">Confianza Médica</p>
                <p className="text-slate-400 text-[11px] font-medium">+200 Pacientes satisfechos en San José</p>
              </div>
            </div>
            {/* -------------------------------------------------- */}
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: PILARES DE EXCELENCIA */}
      <section className="py-32 bg-[#F8FAFC] px-6 lg:px-20 relative overflow-hidden">
        {/* Decoración de fondo de ingeniería */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="absolute -right-24 top-1/4 w-96 h-96 bg-[#7B2CBF]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto">
          
          {/* HEADER ESTRATÉGICO */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-[#7B2CBF]"></span>
                <span className="text-[#7B2CBF] font-black text-xs uppercase tracking-[0.3em]">Estándares Médicos</span>
              </div>
              <h2 className="text-slate-900 font-black text-4xl md:text-5xl uppercase tracking-tighter leading-none">
                Nuestros Pilares de <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7B2CBF] to-[#25D366]">Excelencia Clínica</span>
              </h2>
            </div>
            <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed max-w-md border-l-2 border-slate-200 pl-6">
              Fundamentamos nuestra práctica en protocolos que garantizan la salud y el alivio definitivo de sus pies bajo la dirección de la <span className="text-slate-900 font-bold">Especialista Ximena Alvarado</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pilar 1: Bioseguridad Avanzada */}
            <div className="group relative p-10 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(37,211,102,0.1)]">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                <ShieldCheck size={120} />
              </div>
              
              <div className="w-16 h-16 bg-green-50 rounded-2xl text-[#25D366] flex items-center justify-center mb-8 group-hover:bg-[#25D366] group-hover:text-white transition-all duration-500 shadow-sm">
                <ShieldCheck size={32} strokeWidth={2} />
              </div>
              
              <h4 className="font-black text-slate-900 text-2xl mb-4 tracking-tight">Bioseguridad <br/>Grado B</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6">
                Protocolos quirúrgicos estrictos que eliminan cualquier riesgo de contaminación cruzada.
              </p>
              
              <ul className="space-y-3 border-t border-slate-50 pt-6">
                {['Instrumental sellado al vacío', 'Autoclave de última generación', 'Material 100% descartable'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#25D366]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Pilar 2: Especialización Humana */}
            <div className="group relative p-10 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(123,44,191,0.1)]">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl text-[#7B2CBF] flex items-center justify-center mb-8 group-hover:bg-[#7B2CBF] group-hover:text-white transition-all duration-500 shadow-sm">
                <HeartPulse size={32} strokeWidth={2} />
              </div>
              
              <h4 className="font-black text-slate-900 text-2xl mb-4 tracking-tight">Atención <br/>Especializada</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6">
                Trato cercano y experto para cada patología, enfocado en la recuperación total del paciente.
              </p>

              <ul className="space-y-3 border-t border-slate-50 pt-6">
                {['Diagnóstico personalizado', 'Seguimiento post-tratamiento', 'Enfoque preventivo integral'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7B2CBF]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pilar 3: Tecnología & Resultados */}
            <div className="group relative p-10 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(59,130,246,0.1)]">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl text-blue-500 flex items-center justify-center mb-8 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-sm">
                <Star size={32} strokeWidth={2} />
              </div>
              
              <h4 className="font-black text-slate-900 text-2xl mb-4 tracking-tight">Resultados <br/>Garantizados</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6">
                Tratamientos indoloros y efectivos respaldados por cientos de casos de éxito comprobados.
              </p>

              <ul className="space-y-3 border-t border-slate-50 pt-6">
                {['Alivio en la primera sesión', 'Técnicas no invasivas', 'Retorno a la movilidad'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
      
      {/* SECCIÓN 3: QUIROPODIA PROFESIONAL & EDUCATIVA */}
      <section id="quiropodia" className="py-22 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-20 z-0" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* BLOQUE SUPERIOR: VIDEO Y DESCRIPCIÓN */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24">
            
            {/* 1. Lado Izquierdo: El Concepto */}
            <div className="w-full lg:w-[40%] space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7B2CBF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7B2CBF]"></span>
                </span>
                <span className="text-[#7B2CBF] font-black uppercase tracking-[0.2em] text-[10px]">
                  Educación Podológica
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter">
                ¿Qué es la <br />
                <span className="text-[#7B2CBF]">Quiropodia?</span>
              </h2>

              <p className="text-slate-600 leading-relaxed text-base font-medium">
                Muchos pacientes confunden el cuidado clínico con la estética. La <span className="text-slate-900 font-bold">Quiropodia</span> es el procedimiento médico fundamental para prevenir infecciones y tratar dolores crónicos causados por callosidades o uñas mal tratadas.
              </p>

              <div className="space-y-4">
                {[
                  { t: 'Tratamiento Médico', d: 'No es un pedicure; es salud quirúrgica.' },
                  { t: 'Prevención Activa', d: 'Evita la formación de úlceras y abscesos.' },
                  { t: 'Bienestar Inmediato', d: 'Elimina la presión dolorosa al caminar.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900 uppercase tracking-tight">{item.t}</p>
                      <p className="text-xs text-slate-500 font-medium">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Lado Derecho: El Video con mayor peso visual */}
            <div className="w-full lg:w-[60%]">
              <div className="relative group">
                <div className="absolute -inset-4 bg-linear-to-r from-[#7B2CBF]/20 to-[#25D366]/20 rounded-[50px] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                
                <div className="relative aspect-video w-full bg-black rounded-[40px] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-200">
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
                <h3 className="text-[#7B2CBF] font-black text-xs uppercase tracking-[0.4em]">Metodología Avanzada</h3>
                <div className="h-px w-12 bg-slate-200"></div>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                El Protocolo Clínico <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-900 to-slate-500">de Especialidad</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-10">
                <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed border-l-2 border-[#25D366] pl-6">
                  En el <strong>Centro Podológico Ximena Alvarado</strong>, cada sesión de Quiropodia se rige por un sistema de cuatro etapas críticas. Este protocolo no solo busca el alivio estético, sino la resolución profunda de patologías mediante el uso de tecnología rotatoria de última generación y bioseguridad grado hospitalario.
                </p>
                <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
                  Nuestra prioridad es la <strong>seguridad del paciente</strong>. Por ello, implementamos una trazabilidad completa en cada procedimiento, asegurando que cada paso, desde la inspección inicial hasta la regeneración dérmica final, cumpla con los más altos estándares de salud quirúrgica.
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
                  desc: 'Masaje terapéutico con bálsamos de grado médico.',
                  img: '/images/paso-4.jpg'
                }
              ].map((fase) => (
                <div key={fase.step} className="group cursor-default">
                  <div className="relative h-64 mb-6 rounded-4xl overflow-hidden bg-slate-100 border border-slate-200">
                    {/* Imagen de la clínica real de Ximena */}
                    <img src={fase.img} alt={fase.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    <span className="absolute bottom-6 left-6 text-4xl font-black text-white/20 group-hover:text-[#25D366] transition-colors">{fase.step}</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 uppercase mb-2 group-hover:text-[#7B2CBF] transition-colors">{fase.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{fase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
            
      {/* SECCIÓN 4: HIGIENE, SEGURIDAD Y CONFIANZA */}
      <section className="py-22 bg-white relative overflow-hidden">
        {/* Decoración técnica: Malla de precisión clínica */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            
            {/* LADO IZQUIERDO: Copy Persuasivo y Badges */}
            <div className="w-full lg:w-[55%] space-y-10">


              {/* Titulo de Alto Impacto */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                La bioseguridad <br /> no es opcional, <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7B2CBF] to-[#25D366]">es nuestra regla.</span>
              </h2>

              {/* Texto Empático */}
              <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium max-w-lg border-l-4 border-[#7B2CBF] pl-6">
                Entendemos el miedo al contagio o al dolor. Por eso, la Especialista <strong className="text-slate-900">Ximena Alvarado</strong> ejecuta cada procedimiento bajo estrictos protocolos de esterilización hospitalaria. Tu tranquilidad es el primer paso hacia tu sanidad.
              </p>

              {/* Tarjetas transformadas en Lista de Valor Premium */}
              <div className="flex flex-col gap-5 pt-4">
                
                {/* Feature 1: Esterilización */}
                <div className="flex items-start gap-5 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#25D366]/40 hover:shadow-[0_10px_30px_rgba(37,211,102,0.1)] transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#25D366] shrink-0">
                    <ShieldCheck size={28} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-black text-sm uppercase tracking-widest mb-1.5">100% Estéril (Clase B)</h4>
                    <p className="text-slate-500 text-xs font-medium leading-relaxed">Instrumental médico sellado al vacío y procesado en autoclave hospitalario. Se abre exclusivamente frente a ti.</p>
                  </div>
                </div>

                {/* Feature 2: Tecnología Indolora */}
                <div className="flex items-start gap-5 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#7B2CBF]/40 hover:shadow-[0_10px_30px_rgba(123,44,191,0.1)] transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#7B2CBF] shrink-0">
                    <Activity size={28} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-black text-sm uppercase tracking-widest mb-1.5">Técnica Indolora</h4>
                    <p className="text-slate-500 text-xs font-medium leading-relaxed">Precisión micromotora que elimina patologías sin dañar el tejido sano, garantizando un alivio inmediato sin sufrimiento.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* LADO DERECHO: La Foto de Ximena (El cierre de confianza) */}
            <div className="w-full lg:w-[45%] relative mt-10 lg:mt-0">
               {/* Sombras y formas traseras para darle profundidad a la foto */}
               <div className="absolute inset-0 bg-linear-to-tr from-[#7B2CBF]/20 to-[#25D366]/20 rounded-[3rem] -rotate-6 scale-105 transition-transform duration-700 hover:rotate-0"></div>
               <div className="absolute inset-0 bg-slate-100 rounded-[3rem] rotate-3 scale-105 transition-transform duration-700 hover:rotate-0"></div>

               {/* Contenedor de la Imagen */}
               <div className="relative rounded-[3rem] overflow-hidden bg-white border border-slate-200 shadow-2xl flex items-end justify-center pt-10">
                  {/* Como la foto tiene fondo blanco, el bg-white del contenedor hará que se fusione perfecto */}
                  <img
                    src="/images/ximenaalvarado-trabajando.png"
                    alt="Especialista Ximena Alvarado en procedimiento podológico"
                    className="w-[90%] h-auto object-contain translate-y-4 hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badge Flotante de Autoridad */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white shrink-0">
                        <CheckCircle2 size={24} className="text-[#25D366]" />
                     </div>
                     <div>
                       <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Atención Especializada</p>
                       <p className="text-sm text-slate-900 font-black tracking-tight">Especialista Ximena Alvarado</p>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* SECCIÓN 5: SERVICIOS DETALLADOS (EL PUENTE) */}
      <section className="py-22 bg-white px-6 lg:px-20 relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Encabezado de Sección */}
          <div className="mb-16">
            <h3 className="text-[#7B2CBF] font-black text-xs uppercase tracking-[0.3em] mb-4">Tratamientos Específicos</h3>
            <h2 className="text-slate-900 font-black text-4xl md:text-5xl uppercase tracking-tighter">
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
                desc: 'Tratamiento clínico avanzado para la eliminación de agentes fúngicos, recuperando la salud y estética natural de la lámina ungueal.' 
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
                className="group py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:px-8 transition-all duration-500 hover:bg-slate-50"
              >
                <div className="flex items-center gap-8 md:w-1/3">
                  <span className="text-slate-300 font-black text-2xl group-hover:text-[#7B2CBF] transition-colors">
                    {servicio.id}
                  </span>
                  <div>
                    <h4 className="text-slate-900 font-black text-xl uppercase tracking-tight">{servicio.name}</h4>
                    <span className="text-[10px] font-bold text-[#25D366] uppercase tracking-[0.2em]">{servicio.tag}</span>
                  </div>
                </div>
                
                <p className="text-slate-500 text-sm md:text-base font-medium max-w-md md:w-1/2">
                  {servicio.desc}
                </p>

                <div className="md:w-1/6 flex md:justify-end">
                   <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300">
                      <ArrowUpRight size={20} />
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botón Sutil - El Impulso a la página de Tratamientos */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">¿No encuentra lo que busca?</p>
            <Link 
              href="/tratamientos" 
              className="group inline-flex items-center gap-4 px-12 py-6 rounded-full border-2 border-slate-900 text-slate-900 font-black uppercase text-xs tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-500"
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
          <div className="bg-slate-50 rounded-[3rem] border border-slate-100 p-8 md:p-16 lg:p-20 relative overflow-hidden">

            {/* Decoración de fondo del contenedor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-white/60 to-transparent pointer-events-none"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#7B2CBF]/5 rounded-full blur-[80px]"></div>

            <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
              
              {/* LADO IZQUIERDO: Copy Extendido y Explicativo */}
              <div className="w-full lg:w-3/5 text-left space-y-8">

                {/* Título - Escala ajustada para texto largo */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.05] tracking-tighter">
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
                    Bajo la atención especializada de <strong className="text-slate-900">Ximena Alvarado</strong>, recibirá un diagnóstico clínico preciso y un plan de tratamiento definitivo. Priorizamos su bienestar mediante técnicas modernas, indoloras y con estrictos estándares de bioseguridad médica.
                  </p>
                </div>
              </div>

              {/* LADO DERECHO: Panel de Acción */}
              <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-end text-center lg:text-left">
                <div className="w-full p-8 md:p-10 rounded-4xl bg-white border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col items-center lg:items-start gap-8">
                  
                  <div>
                    <h4 className="text-slate-900 font-black text-2xl tracking-tight mb-2">Inicie su tratamiento</h4>
                    <p className="text-slate-500 text-sm font-medium">Agende su valoración inicial hoy mismo.</p>
                  </div>

                  <a 
                    href="https://wa.me/50662500117?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20valoraci%C3%B3n%20podol%C3%B3gica"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full group relative flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-[#25D366] text-white font-black text-lg uppercase tracking-tighter transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(37,211,102,0.3)]"
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
                      <span>Evaluación clínica completa</span>
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