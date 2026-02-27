import Image from 'next/image';
import { ChevronRight, Star, ShieldCheck, HeartPulse, Link } from 'lucide-react';

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
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-brand-purple font-black uppercase tracking-widest text-xs">Procedimiento Profesional</h3>
              <h2 className="text-4xl font-extrabold text-brand-dark">¿Qué es la Quiropodia?</h2>
              <p className="text-slate-600 leading-relaxed">
                Más que un pedicure clínico, la quiropodia es el tratamiento especializado para evaluar la salud de tus uñas y planta del pie. 
                Observa cómo realizamos un examen exhaustivo para eliminar callosidades, tratar uñas y devolverle la vitalidad a tu caminar.
              </p>
              <ul className="space-y-3">
                {['Evaluación de lámina ungueal', 'Tratamiento de hiperqueratosis', 'Hidratación profunda'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Video Container con Sombra Magistral */}
            <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(123,44,191,0.3)] border-8 border-white">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/AeUk4AiiB78" 
                title="¿Qué es la Quiropodia?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-green-100 text-white relative overflow-hidden">
        {/* Círculos decorativos de fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl text-blue-950 font-black mb-6">Tu salud comienza con nuestra higiene</h2>
              <p className="text-slate-400 leading-relaxed">
                Utilizamos instrumental especializado, empacado y esterilizado para cada paciente. 
                Nuestros estrictos protocolos de bioseguridad garantizan un ambiente libre de infecciones y hongos.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 text-center">
                <span className="block text-3xl mb-2">🛡️</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-950">100% Estéril</span>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 text-center">
                <span className="block text-3xl mb-2">🔬</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-950">Tecnología</span>
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="py-24 bg-white">
  <div className="max-w-5xl mx-auto px-6">
    <div className="relative bg-brand-purple rounded-[60px] p-12 lg:p-20 text-center overflow-hidden shadow-[0_50px_100px_-20px_rgba(123,44,191,0.4)]">
      {/* Decoración abstracta */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="relative z-10 space-y-8">
        <h2 className="text-4xl lg:text-6xl font-black text-blue-950 leading-tight">
          ¿Listo para caminar <br /> 
          <span className="text-brand-green italic">sin dolor?</span>
        </h2>
        <p className="text-blue-950 text-lg max-w-2xl mx-auto leading-relaxed">
          No dejes que una molestia se convierta en una patología. Agenda tu cita mensual de quiropodia y dale a tus pies el cuidado profesional que merecen.
        </p>
        <div className="pt-6">
          <Link 
            href="https://wa.me/50662500117"
            className="inline-flex items-center gap-4 bg-emerald-600 text-amber-50 px-12 py-6 rounded-full font-black text-lg uppercase tracking-tighter hover:scale-105 hover:shadow-2xl transition-all duration-500 group"
          >
            Reservar mi Espacio Ahora
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>
        <p className="text-purple-200 text-xs font-bold uppercase tracking-[0.3em]">
          Ubicación: San José, Costa Rica
        </p>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}