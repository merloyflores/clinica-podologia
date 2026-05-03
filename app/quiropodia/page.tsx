'use client';

import { useState } from 'react'; // AÑADIDO
import { Microscope, ShieldCheck, Stethoscope, Footprints, Activity, Thermometer, Syringe, Clock } from 'lucide-react';
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

  return (
    <section className="py-44 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. ENCABEZADO */}
        <div className="max-w-4xl mb-20">
          <h3 className="text-[#25D366] font-black uppercase tracking-[0.3em] text-[10px] mb-4">Especialidad en Quiropodología</h3>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
            Más que estética, <br />
            <span className="text-[#7B2CBF] italic font-light">es salud clínica funcional.</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <p className="text-slate-500 text-lg leading-relaxed font-medium flex-1">
              A diferencia de un servicio convencional, la quiropodia es un acto médico que garantiza la eliminación de focos infecciosos y la prevención de complicaciones severas en rodillas y espalda.
            </p>
            <div className="flex gap-4 border-l border-slate-200 pl-8">
              <div>
                <p className="text-2xl font-black text-slate-900">100%</p>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Estéril</p>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div>
                <p className="text-2xl font-black text-slate-900">45min</p>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Precisión</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. CONTENIDO PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pilares.map((pilar, i) => (
                <div key={i} className="group p-8 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:border-[#7B2CBF]/20 hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#7B2CBF] group-hover:bg-[#7B2CBF] group-hover:text-white transition-colors mb-6 shadow-sm">
                    {pilar.icon}
                  </div>
                  <h5 className="font-black text-slate-900 text-lg mb-3 tracking-tight">{pilar.title}</h5>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">{pilar.desc}</p>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-[#25D366] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-4 h-px bg-[#25D366]"></span>
                    {pilar.detail}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-10 bg-slate-900 rounded-[50px] text-white flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 shrink-0 bg-[#7B2CBF]/20 rounded-3xl flex items-center justify-center">
                <Footprints size={40} className="text-[#7B2CBF]" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 tracking-tight">Impacto en Salud Postural</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  Caminar con dolor altera la cadena biomecánica. Una sesión de quiropodia previene lesiones crónicas en tobillos, rodillas y zona lumbar.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32 space-y-6">
              <div className="relative rounded-[60px] overflow-hidden shadow-2xl group border-[6px] border-white">
                <Image 
                  src="/images/XimenaFotoPerfil.jpeg"
                  alt="Ximena Alvarado en consulta"
                  width={600}
                  height={800}
                  className="object-cover h-125 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-[#25D366] w-12 h-1 rounded-full mb-4"></div>
                  <p className="text-white font-black text-2xl leading-tight tracking-tighter">
                    "La salud de sus pies es la base de su libertad de movimiento."
                  </p>
                  <p className="text-[#25D366] font-bold uppercase tracking-[0.3em] text-[10px] mt-4">
                    Especialista Ximena Alvarado
                  </p>
                </div>
              </div>

              <div className="p-8 bg-white border border-slate-100 rounded-[40px] shadow-sm flex items-center justify-between">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div className="text-right">
                  <p className="text-slate-900 font-black text-lg">+200</p>
                  <p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest">Pacientes Satisfechos</p>
                </div>
              </div>

              {/* BOTÓN ACTUALIZADO */}
              <button 
                onClick={() => setIsModalOpen(true)} // AÑADIDO
                className="w-full bg-slate-950 text-white py-6 rounded-full font-black uppercase tracking-tighter hover:bg-[#7B2CBF] transition-all duration-300 shadow-xl"
              >
                Reservar Valoración Clínica
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL INTEGRADO */}
      <ModalReserva 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}