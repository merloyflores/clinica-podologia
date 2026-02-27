import Image from 'next/image';
import { ChevronRight, Star, ShieldCheck, HeartPulse } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* SECCIÓN 1: HERO - IMPACTO VISUAL */}
      <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 bg-linear-to-b from-white to-slate-50 pt-24 overflow-hidden">
        
        {/* Lado Izquierdo: Texto y Acción */}
        <div className="flex-1 z-10 space-y-8 py-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 shadow-sm">
            <Star size={14} className="text-brand-purple fill-brand-purple" />
            <span className="text-brand-purple text-[10px] font-black uppercase tracking-[0.2em]">
              Quiropodista Especializada
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-8xl font-black text-brand-dark leading-[0.9] tracking-tighter">
            Salud y estética <br />
            <span className="text-brand-purple">para tus pies.</span>
          </h1>
          
          <p className="text-lg text-slate-500 max-w-lg leading-relaxed font-medium">
            En el Centro Podológico Ximena Alvarado, combinamos tecnología de vanguardia y calidez humana para que vuelvas a caminar con total confianza.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            {/* Botón Principal: Agendar Consulta */}
            <button className="px-10 py-5 rounded-full font-bold text-brand-dark border-2 border-slate-200 bg-white hover:border-brand-purple hover:text-brand-purple hover:-translate-y-1 hover:shadow-md transition-all duration-300 transform active:scale-95">
              Agendar Consulta
            </button>

            {/* Botón Secundario: Nuestros Servicios */}
            <button className="px-10 py-5 rounded-full font-bold text-brand-dark border-2 border-slate-200 bg-white hover:border-brand-purple hover:text-brand-purple hover:-translate-y-1 hover:shadow-md transition-all duration-300 transform active:scale-95">
              Nuestros Servicios
            </button>
          </div>
        </div>

        {/* Lado Derecho: Imagen de Ximena (Principal1.png) */}
        <div className="flex-1 relative w-full flex justify-center lg:justify-end self-end">
          {/* Elemento decorativo detrás de la foto */}
          <div className="absolute bottom-20 right-0 w-[80%] h-[60%] bg-brand-purple/5 rounded-[100px] rotate-6 -z-10" />
          
          <div className="relative w-full max-w-150 lg:max-w-none lg:w-[110%] flex justify-center">
            <Image 
              src="/images/Principal1.png" 
              alt="Ximena Alvarado - Quiropodista Profesional" 
              width={900} 
              height={1100}
              priority
              className="object-contain drop-shadow-[0_35px_35px_rgba(123,44,191,0.15)]"
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: VALORES Y CONFIANZA */}
      <section className="py-20 bg-white px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex items-start gap-5">
            <div className="p-4 bg-green-50 rounded-2xl text-brand-green">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h4 className="font-bold text-brand-dark text-xl mb-2">Bioseguridad</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Protocolos rigurosos de esterilización para tu total tranquilidad y seguridad médica.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-5">
            <div className="p-4 bg-purple-50 rounded-2xl text-brand-purple">
              <HeartPulse size={32} />
            </div>
            <div>
              <h4 className="font-bold text-brand-dark text-xl mb-2">Atención Humana</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Trato cercano y personalizado de la mano de la especialista Ximena Alvarado.</p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="p-4 bg-blue-50 rounded-2xl text-blue-500">
              <Star size={32} />
            </div>
            <div>
              <h4 className="font-bold text-brand-dark text-xl mb-2">Resultados Reales</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Cientos de pacientes satisfechos con tratamientos indoloros y efectivos.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}