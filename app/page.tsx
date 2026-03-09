import Image from 'next/image';
import { ChevronRight, Star, ShieldCheck, HeartPulse, Activity } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* SECCIÓN 1: HERO - Ajustado a Deep Clinical */}
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

        {/* 2. CONTENIDO (Ahora sobre el video) */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 space-y-8 py-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-sm">
              <Star size={14} className="text-[#25D366] fill-[#25D366]" />
              <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
                Centro Podológico Ximena Alvarado
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              Salud y estética <br />
              <span className="text-[#7B2CBF]">quirúrgica.</span>
            </h1>

            <p className="text-lg text-slate-300 max-w-lg leading-relaxed font-medium">
              Diagnóstico y tratamiento especializado bajo estándares hospitalarios en el Centro Podológico Ximena Alvarado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/agendar" className="inline-flex items-center px-10 py-5 rounded-full font-bold text-white bg-[#7B2CBF] hover:bg-[#6a24a3] shadow-xl transition-all duration-300">
                Agendar Consulta
              </Link>
              <Link href="/servicios" className="inline-flex items-center px-10 py-5 rounded-full font-bold text-white border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-slate-950 transition-all duration-300">
                Ver Tratamientos
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex flex-1"></div>
        </div>
      </section>

      {/* SECCIÓN 2: VALORES */}
      <section className="py-24 bg-[#F8FAFC] px-6 lg:px-20 relative overflow-hidden">
        {/* Decoración de fondo sutil para separar secciones */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Valor 1: Bioseguridad */}
            <div className="group p-8 bg-white rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 hover:border-brand-green/30 hover:shadow-[0_30px_60px_rgba(37,211,102,0.1)] transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-50 rounded-2xl text-[#25D366] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck size={36} strokeWidth={1.5} />
              </div>
              <h4 className="font-black text-brand-dark text-xl mb-3 tracking-tight">Bioseguridad</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Protocolos rigurosos de esterilización con instrumental sellado para tu total tranquilidad y seguridad médica.
              </p>
            </div>
            
            {/* Valor 2: Atención Humana */}
            <div className="group p-8 bg-white rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 hover:border-brand-purple/30 hover:shadow-[0_30px_60px_rgba(123,44,191,0.1)] transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl text-[#7B2CBF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <HeartPulse size={36} strokeWidth={1.5} />
              </div>
              <h4 className="font-black text-brand-dark text-xl mb-3 tracking-tight">Atención Humana</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Trato cercano y personalizado de la mano de la especialista Ximena Alvarado, priorizando tu bienestar.
              </p>
            </div>

            {/* Valor 3: Resultados Reales */}
            <div className="group p-8 bg-white rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 hover:border-blue-200 hover:shadow-[0_30px_60px_rgba(59,130,246,0.1)] transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl text-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Star size={36} strokeWidth={1.5} />
              </div>
              <h4 className="font-black text-brand-dark text-xl mb-3 tracking-tight">Resultados Reales</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Cientos de pacientes satisfechos con tratamientos indoloros, efectivos y garantizados desde la primera cita.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECCIÓN 3: QUIROPODIA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-20 z-0" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* 1. Lado Izquierdo: Información Compacta y Elegante */}
            <div className="w-full lg:w-[35%] space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100">
                <div className="w-2 h-2 rounded-full bg-brand-purple animate-pulse"></div>
                <span className="text-brand-purple font-black uppercase tracking-[0.2em] text-[9px]">
                  Cuidado Especializado
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-brand-dark leading-tight tracking-tighter">
                ¿Qué es la <br />
                <span className="text-brand-purple">Quiropodia?</span>
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                Es el tratamiento podológico profesional dedicado a la salud integral de tus pies. 
                Mediante técnicas especializadas, eliminamos callosidades y tratamos afecciones de las uñas para devolverte el bienestar al caminar.
              </p>

              {/* Lista de beneficios simplificada */}
              <div className="grid grid-cols-1 gap-3 pt-4">
                {[
                  'Eliminación de durezas y callos',
                  'Corte y fresado terapéutico de uñas',
                  'Tratamiento de talones agrietados'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-[13px] font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Lado Derecho: EL VIDEO PROTAGONISTA (Ahora más grande) */}
            <div className="w-full lg:w-[65%]">
              <div className="relative group">
                {/* Brillo decorativo detrás del video */}
                <div className="absolute -inset-1 bg-linear-to-r from-brand-purple to-brand-green rounded-[45px] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative aspect-video w-full bg-black rounded-[40px] overflow-hidden shadow-2xl border-[6px] border-white">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/AeUk4AiiB78?modestbranding=1&rel=0" 
                    title="¿Qué es la Quiropodia?"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Badge Flotante sobre el video */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl hidden md:block border border-slate-100 animate-bounce-slow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-purple/10 rounded-2xl flex items-center justify-center text-brand-purple">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Ver Proceso</p>
                      <p className="text-sm font-bold text-brand-dark tracking-tight">Paso a Paso</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            
      {/* SECCIÓN 4: HIGIENE Y SEGURIDAD - Estilo Clínico Pulcro */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Decoración técnica sutil: una malla de puntos o líneas que evoque precisión */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
            
            {/* Texto Descriptivo - Ahora en Slate oscuro para legibilidad profesional */}
            <div className="max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
                <span className="text-emerald-600 font-black uppercase tracking-[0.2em] text-[10px]">Protocolos de Grado Médico</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">
                Tu salud comienza con <br />
                <span className="text-[#25D366]">nuestra higiene.</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                En el Centro Podológico Ximena Alvarado, la seguridad no es negociable. Utilizamos instrumental especializado, 
                <span className="text-slate-900 font-bold"> empacado y esterilizado </span> 
                individualmente bajo estrictas normas de bioseguridad.
              </p>
            </div>

            {/* Tarjetas Minimalistas - Sin Glassmorphism pesado, solo limpieza */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-auto">
              {/* Tarjeta 1: Estéril */}
              <div className="p-10 bg-white rounded-[40px] border border-slate-200/60 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/5 group">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={28} className="text-[#25D366]" />
                </div>
                <h4 className="text-slate-900 font-black text-sm uppercase tracking-widest mb-2">100% Estéril</h4>
                <p className="text-slate-400 text-[11px] font-bold uppercase tracking-tighter leading-tight">
                  Autoclave Clase B <br /> Instrumental Sellado
                </p>
              </div>

              {/* Tarjeta 2: Tecnología */}
              <div className="p-10 bg-white rounded-[40px] border border-slate-200/60 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/5 group">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Activity size={28} className="text-[#7B2CBF]" />
                </div>
                <h4 className="text-slate-900 font-black text-sm uppercase tracking-widest mb-2">Tecnología</h4>
                <p className="text-slate-400 text-[11px] font-bold uppercase tracking-tighter leading-tight">
                  Diagnóstico Digital <br /> Alta Precisión
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECCIÓN 5: CTA FINAL - Estilo "Open Canvas" Light Premium */}
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Elementos decorativos de fondo (Sutiles gradientes de limpieza) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#7B2CBF]/5 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#25D366]/5 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="space-y-10">
            
            {/* Badge de Autoridad - Ahora con contraste sutil */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-slate-50">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
              <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">Citas Disponibles • San José</span>
            </div>

            {/* Título de gran escala - Texto en Slate-900 para máxima legibilidad */}
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-black text-slate-900 leading-[0.85] tracking-tighter">
              Recupere el placer <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7B2CBF] to-[#9D4EDD] italic">de caminar.</span>
            </h2>

            {/* Subtexto refinado - Color suavizado para no competir con el título */}
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              No permita que una molestia limite su movilidad. Inicie su tratamiento clínico con la <span className="text-slate-900 font-bold">Especialista Ximena Alvarado</span> y note la diferencia desde la primera sesión.
            </p>

            {/* Botón de Acción Principal - Manteniendo el verde para "Call to Action" */}
            <div className="pt-10 flex flex-col items-center gap-6">
              <a 
                href="https://wa.me/50662500117"
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-16 py-8 rounded-full bg-[#25D366] text-white font-black text-xl uppercase tracking-tighter transition-all duration-500 hover:scale-105 hover:bg-[#1eb954] shadow-[0_20px_50px_rgba(37,211,102,0.25)]"
              >
                <span className="relative z-10 flex items-center gap-4">
                  Agendar Valoración Médica
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </span>
              </a>
              
              {/* Leyenda de confianza - Espaciado de letras para toque técnico */}
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.4em]">
                Atención Profesional e Indolora
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}