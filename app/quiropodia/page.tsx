'use client';

import { useState } from 'react'; // AÑADIDO
import { Microscope, ShieldCheck, Stethoscope, Footprints, Activity, Thermometer, Syringe, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import Image from 'next/image';
import ModalReserva from '../components/ModalReserva'; // Asegúrate de crear este archivo (paso 3)

export default function QuiropodiaDetallada() {
  const [isModalOpen, setIsModalOpen] = useState(false); // AÑADIDO: Estado del modal

  const pilares = [
    {
      title: "Diagnóstico Clínico Integral",
      desc: "Evaluación dermatológica y vascular profunda de la lámina ungueal para detectar patologías antes de que limiten su movilidad.",
      icon: <Stethoscope size={24} />,
      detail: "Exploración de pulsos y sensibilidad."
    },
    {
      title: "Tratamiento de Onicopatías",
      desc: "Corte técnico y fresado de uñas engrosadas o encarnadas (onicocriptosis) con tecnología de micro-motor indoloro.",
      icon: <Microscope size={24} />,
      detail: "Eliminación de espículas sin dolor."
    },
    {
      title: "Desbridamiento de Hiperqueratosis",
      desc: "Eliminación segura de callosidades y helomas (ojos de gallo) devolviendo la elasticidad natural a la piel.",
      icon: <Activity size={24} />,
      detail: "Uso de instrumental quirúrgico estéril."
    },
    {
      title: "Terapia de Hidratación Profunda",
      desc: "Masaje terapéutico con urea al 40% para restaurar la barrera lipídica y prevenir grietas en los talones.",
      icon: <Thermometer size={24} />,
      detail: "Prevención de infecciones dérmicas."
    }
  ];

  const indicadores = [
    "Cambios en la coloración o grosor de las uñas.",
    "Dolor punzante en los bordes de los dedos al usar calzado.",
    "Presencia de durezas dolorosas en la planta del pie.",
    "Pacientes con diagnóstico de diabetes o problemas circulatorios."
  ];

return (
    <section className="py-32 md:py-44 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. ENCABEZADO PREMIUM */}
        <div className="max-w-4xl mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#25D366]"></div>
            <h3 className="text-[#25D366] font-black uppercase tracking-[0.4em] text-[10px]">Especialidad en Quiropodología</h3>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
            Más que estética, <br />
            <span className="text-[#7B2CBF] font-light">salud clínica funcional.</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-10 items-start mt-12">
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium flex-1">
              A diferencia de un servicio convencional, la quiropodia es un <strong className="text-slate-900 font-bold">acto médico preventivo y correctivo</strong>. Nuestro protocolo garantiza la eliminación de focos infecciosos, restaurando la salud de sus pies para prevenir complicaciones severas en su biomecánica, rodillas y espalda.
            </p>
            
            {/* Badges de Confianza */}
            <div className="flex flex-col sm:flex-row gap-8 border-l-2 border-slate-200 pl-8 shrink-0">
              <div>
                <p className="text-3xl font-black text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="text-[#25D366]" size={28} />
                  100%
                </p>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-1">Bioseguridad Estéril</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-slate-200"></div>
              <div>
                <p className="text-3xl font-black text-slate-900 flex items-center gap-2">
                  <Clock className="text-[#7B2CBF]" size={28} />
                  45m
                </p>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-1">Precisión Clínica</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. CONTENIDO PRINCIPAL EN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* COLUMNA IZQUIERDA: Pilares y Educación */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* Grid de Pilares Clínicos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pilares.map((pilar, i) => (
                <div key={i} className="group p-8 rounded-4xl bg-white border border-slate-200/60 hover:border-[#7B2CBF]/30 hover:shadow-[0_20px_40px_-15px_rgba(123,44,191,0.1)] transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-10 group-hover:bg-[#7B2CBF]/5 transition-colors duration-500"></div>
                  
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#7B2CBF] group-hover:bg-[#7B2CBF] group-hover:text-white transition-all duration-500 mb-8 shadow-sm">
                    {pilar.icon}
                  </div>
                  <h5 className="font-black text-slate-900 text-xl mb-4 tracking-tight group-hover:text-[#7B2CBF] transition-colors">{pilar.title}</h5>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">{pilar.desc}</p>
                  
                  <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest pt-4 border-t border-slate-100 group-hover:text-[#25D366] transition-colors">
                    <CheckCircle2 size={14} className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                    <span className="transform -translate-x-6 group-hover:translate-x-0 transition-transform duration-300">{pilar.detail}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* NUEVO: Bloque Educativo - ¿Cuándo acudir? */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200/60 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center">
                  <AlertCircle className="text-amber-500" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900 tracking-tight">Indicadores de Evaluación Inmediata</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-1">¿Cuándo programar una cita?</p>
                </div>
              </div>
              <ul className="space-y-4">
                {indicadores.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-slate-600 text-sm font-medium leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Banner de Impacto Mejorado */}
            <div className="p-10 bg-slate-900 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#7B2CBF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
              <div className="w-20 h-20 shrink-0 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-md border border-white/10">
                <Footprints size={32} className="text-white" strokeWidth={1.5} />
              </div>
              <div className="relative z-10">
                <h4 className="text-2xl font-black mb-3 tracking-tight">Impacto en la Salud Postural</h4>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                  Caminar con dolor altera involuntariamente su cadena biomecánica. Una sesión clínica de quiropodia no solo alivia el pie, sino que previene el desgaste prematuro y lesiones crónicas en tobillos, rodillas y zona lumbar.
                </p>
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA: Sticky Profile & CTA */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32 space-y-8">
              
              {/* Tarjeta de Perfil Premium */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group border-[8px] border-white bg-white">
                <Image 
                  src="/images/ximenafotoperfil.jpeg"
                  alt="Ximena Alvarado - Directora Clínica"
                  width={600}
                  height={800}
                  className="object-cover h-[500px] w-full group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="bg-[#25D366] w-12 h-1.5 rounded-full mb-6"></div>
                  <p className="text-white font-medium text-xl leading-snug mb-6">
                    "La salud de sus pies es el cimiento indiscutible de su libertad de movimiento y calidad de vida."
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="text-white font-black uppercase tracking-[0.2em] text-xs">
                      Ximena Alvarado
                    </p>
                    <span className="text-slate-400 text-[10px] uppercase tracking-widest border border-slate-600 px-3 py-1 rounded-full">
                      Dir. Clínica
                    </span>
                  </div>
                </div>
              </div>

              {/* Prueba Social */}
              <div className="p-8 bg-white border border-slate-200/60 rounded-[2rem] shadow-sm flex items-center justify-between group hover:border-[#25D366]/30 transition-colors">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 overflow-hidden shadow-sm">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Paciente" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-right">
                  <p className="text-slate-900 font-black text-2xl group-hover:text-[#25D366] transition-colors">+200</p>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">Pacientes Tratados</p>
                </div>
              </div>

              {/* Botón de Acción Principal */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="relative overflow-hidden w-full bg-slate-900 text-white py-6 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-[#7B2CBF] transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(123,44,191,0.2)] hover:-translate-y-1 flex items-center justify-center gap-3 group"
              >
                <span>Agendar Valoración Clínica</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>

      <ModalReserva 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}