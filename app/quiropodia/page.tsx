'use client';

import { CheckCircle2, Microscope, ShieldCheck, Stethoscope, Footprints, Activity } from 'lucide-react';
import Image from 'next/image';

export default function QuiropodiaDetallada() {
  const pilares = [
    {
      title: "Diagnóstico Clínico Inicial",
      desc: "No solo cortamos uñas; realizamos una exploración dermatológica y vascular profunda. Evaluamos el estado de la lámina ungueal y detectamos posibles focos de infección antes de que se conviertan en un problema mayor.",
      icon: <Stethoscope size={28} />
    },
    {
      title: "Tratamiento de Onicopatías",
      desc: "Abordamos de forma profesional el corte técnico y fresado de uñas engrosadas o con tendencia a encarnarse (onicocriptosis), utilizando fresas de alta velocidad que garantizan un acabado indoloro y preciso.",
      icon: <Microscope size={28} />
    },
    {
      title: "Eliminación de Hiperqueratosis",
      desc: "Mediante el uso de instrumental quirúrgico estéril, eliminamos de forma segura las durezas y callosidades (helomas) que causan dolor al caminar, devolviendo la elasticidad natural a la piel del pie.",
      icon: <Activity size={28} />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado Expandido */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <h3 className="text-[#25D366] font-black uppercase tracking-[0.3em] text-[11px] mb-4">Ciencia Aplicada a tus Pies</h3>
            <h2 className="text-5xl md:text-7xl font-black text-brand-dark tracking-tighter leading-none">
              La Quiropodia <br />
              <span className="text-[#7B2CBF] italic">como Medicina Preventiva</span>
            </h2>
          </div>
          <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-[#25D366] pl-8 py-2 font-medium">
            A diferencia de la pedicura convencional, la quiropodia es un procedimiento sanitario realizado bajo estrictas normas de bioseguridad. El objetivo es tratar patologías existentes y prevenir futuras afecciones que comprometan tu movilidad.
          </p>
        </div>

        {/* Bloque Informativo Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Columna Izquierda: Detalles Técnicos */}
          <div className="lg:col-span-7 space-y-12">
            <div className="prose prose-slate max-w-none">
              <h4 className="text-2xl font-black text-brand-dark mb-6">¿Por qué es vital una sesión mensual?</h4>
              <p className="text-slate-500 text-lg mb-6">
                El pie soporta todo el peso de nuestro cuerpo y es la zona que más sufre por el uso de calzado inadecuado o malas posturas. Durante una sesión de quiropodia con la especialista Ximena Alvarado, se realiza un mantenimiento preventivo que evita la formación de úlceras, infecciones por hongos y deformidades en las uñas.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100">
                  <h5 className="font-black text-brand-dark mb-3 flex items-center gap-2">
                    <Footprints className="text-[#7B2CBF]" /> Salud Postural
                  </h5>
                  <p className="text-sm text-slate-500">Un pie con dolor altera tu forma de caminar, lo que genera problemas secundarios en rodillas, cadera y columna vertebral.</p>
                </div>
                <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100">
                  <h5 className="font-black text-brand-dark mb-3 flex items-center gap-2">
                    <ShieldCheck className="text-[#25D366]" /> Asepsia Total
                  </h5>
                  <p className="text-sm text-slate-500">Todo el material utilizado pasa por un proceso de autoclave de grado médico, garantizando un ambiente 100% libre de contaminación.</p>
                </div>
              </div>
            </div>

            {/* Lista de Pilares */}
            <div className="space-y-6">
              {pilares.map((pilar, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-3xl hover:shadow-xl hover:shadow-purple-500/5 transition-all border border-transparent hover:border-purple-100 group">
                  <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center text-[#7B2CBF] group-hover:bg-[#7B2CBF] group-hover:text-white transition-colors">
                    {pilar.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-dark text-xl mb-1">{pilar.title}</h5>
                    <p className="text-slate-500 text-sm leading-relaxed">{pilar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Imagen y Remate de Confianza */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="relative rounded-[60px] overflow-hidden shadow-2xl border-8 border-white">
               <Image 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"
                alt="Ximena Alvarado en consulta"
                width={600}
                height={800}
                className="object-cover h-125"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-dark/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-white font-black text-2xl leading-tight">
                  "Tus pies son el motor de tu vida, dales el cuidado que merecen."
                </p>
                <p className="text-[#25D366] font-bold uppercase tracking-widest text-[10px] mt-2">
                  — Ximena Alvarado, Quiropodista
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-8 bg-[#7B2CBF] rounded-[40px] text-white text-center">
              <p className="text-sm font-bold opacity-80 mb-4 uppercase tracking-widest">Atención en San José</p>
              <h5 className="text-2xl font-black mb-6">¿Molestias al caminar?</h5>
              <button 
                className="w-full bg-[#25D366] text-white! py-4 rounded-full font-black uppercase tracking-tighter hover:scale-105 transition-transform"
                style={{ color: 'white' }}
              >
                Agendar Valoración
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}