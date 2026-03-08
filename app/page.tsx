import Image from 'next/image';
import { ChevronRight, Star, ShieldCheck, HeartPulse, Link } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* SECCIÓN 1: HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 lg:px-20 pt-24 overflow-hidden bg-brand-dark">  
      {/* 1. VIDEO DE FONDO CON TINTE Y BLUR */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 blur-xs opacity-50" 
        >
          <source src="/videos/clinica-vitruvio-hero.mp4" type="video/mp4" />
        </video>

        {/* TINTE MORADO SUTIL (Overlay) */}
        <div className="absolute inset-0 bg-linear-to-tr from-brand-dark via-[#7B2CBF]/30 to-brand-dark/40"></div>
        
        {/* MALLA DE PUNTOS (Opcional, para textura profesional) */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

        {/* 2. CONTENIDO (Ahora sobre el video) */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between">
          
          {/* Lado Izquierdo: Texto y Acción */}
          <div className="flex-1 space-y-8 py-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm">
              <Star size={14} className="text-brand-green fill-brand-green" />
              <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
                Quiropodista Especializada
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              Salud y estética <br />
              <span className="text-brand-purple">para tus pies.</span>
            </h1>
            
            <p className="text-lg text-slate-200 max-w-lg leading-relaxed font-medium">
              En el Centro Podológico Ximena Alvarado, combinamos tecnología de vanguardia y calidez humana para que vuelvas a caminar con total confianza.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              {/* Botón Principal: Agendar Consulta */}
              <button className="px-10 py-5 rounded-full font-bold text-white bg-[#7B2CBF] hover:bg-[#9D4EDD] hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform active:scale-95 border-none">
                Agendar Consulta
              </button>

              {/* Botón Secundario: Nuestros Servicios */}
              <button className="px-10 py-5 rounded-full font-bold text-white border-2 border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-indigo-950 hover:-translate-y-1 transition-all duration-300 transform active:scale-95">
                Nuestros Servicios
              </button>
            </div>
          </div>

          {/* Espacio vacío a la derecha para dejar ver el video en desktop */}
          <div className="hidden lg:flex flex-1"></div>
        </div>
      </section>

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
      
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Fondo decorativo minimalista */}
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
            
      <section className="py-24 bg-linear-to-br from-[#0F172A] via-[#0F172A] to-[#064E3B] text-white relative overflow-hidden">
        {/* Círculos decorativos de fondo: Morado para el inicio azul y Verde para el final oscuro */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#7B2CBF]/20 rounded-full -mr-20 -mt-20 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-[#25D366]/10 rounded-full -ml-32 -mb-32 blur-[130px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
            
            {/* Texto Descriptivo */}
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                Tu salud comienza con <br />
                <span className="text-green-600">nuestra higiene</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                En el Centro Podológico Ximena Alvarado, utilizamos instrumental especializado, 
                <span className="text-white font-semibold"> empacado y esterilizado </span> 
                individualmente para cada paciente. Nuestros estrictos protocolos garantizan un ambiente libre de infecciones.
              </p>
            </div>

            {/* Tarjetas con Efecto Glassmorphism */}
            <div className="grid grid-cols-2 gap-6 w-full lg:w-auto">
              {/* Tarjeta 1: Estéril */}
              <div className="p-8 bg-white/5 backdrop-blur-md rounded-[40px] border border-white/10 text-center group hover:border-[#7B2CBF]/50 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10">
                <div className="w-16 h-16 bg-[#7B2CBF]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#7B2CBF] transition-colors shadow-lg shadow-purple-500/20">
                  <span className="text-3xl">🛡️</span>
                </div>
                <span className="text-[11px] uppercase font-black tracking-[0.3em] text-white/90">100% Estéril</span>
                <p className="text-[10px] text-slate-500 mt-2 font-bold uppercase">Protocolos Clase B</p>
              </div>

              {/* Tarjeta 2: Tecnología */}
              <div className="p-8 bg-white/5 backdrop-blur-md rounded-[40px] border border-white/10 text-center group hover:border-[#25D366]/50 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10">
                <div className="w-16 h-16 bg-[#25D366]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#25D366] transition-colors shadow-lg shadow-green-500/20">
                  <span className="text-3xl">🔬</span>
                </div>
                <span className="text-[11px] uppercase font-black tracking-[0.3em] text-white/90">Tecnología</span>
                <p className="text-[10px] text-slate-500 mt-2 font-bold uppercase">Alta Precisión</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#7B2CBF]/10 rounded-full blur-[100px] -translate-x-1/2"></div>
        
        <div className="max-w-6xl mx-auto px-6">
          {/* Contenedor con el nuevo degradado profundo */}
          <div className="relative bg-linear-to-br from-[#a3f5b7] via-[#a7c5b6] to-[#73857e] rounded-[60px] p-12 lg:p-24 text-center overflow-hidden shadow-[0_50px_100px_-20px_rgba(123,44,191,0.5)] border border-white/10">
            
            <div className="relative z-10 space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter">
                  ¿Listo para caminar <br /> 
                  <span className="text-green-600 italic">sin dolor?</span>
                </h2>
                <div className="w-24 h-1.5 bg-[#25D366] mx-auto rounded-full"></div>
              </div>

              <p className="text-purple-50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                No dejes que una molestia se convierta en una patología. Agenda tu cita de quiropodia con la especialista Ximena Alvarado.
              </p>

              <div className="pt-6">
                <a 
                  href="https://wa.me/50662500117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-6 bg-[#25D366] text-white! px-14 py-7 rounded-full font-black text-xl uppercase tracking-tighter hover:bg-[#1eb954] hover:scale-105 transition-all duration-500 shadow-xl border-none"
                  style={{ color: '#FFFFFF' }}
                >
                  <span className="flex items-center gap-4">
                    RESERVAR MI CITA AHORA
                    <span className="text-2xl">→</span>
                  </span>
                </a>
              </div>

              <div className="pt-4 text-white/40 font-bold uppercase tracking-[0.3em] text-[10px]">
                Ubicación: San José, Costa Rica
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}