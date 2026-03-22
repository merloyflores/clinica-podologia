'use client';

import Image from 'next/image';
import { Star, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { WhatsApp } from '@mui/icons-material';

const casos = [
  {
    titulo: "Corrección de Onicocriptosis",
    paciente: "Paciente recurrente",
    diagnostico: "Uña encarnada grado II con inflamación severa.",
    resultado: "Extracción de espícula y recuperación total en 7 días.",
    imgAntes: "/images/resultados/Antes1.png",
    imgDespues: "/images/resultados/Despues1.png",
    tag: "Cirugía Menor"
  },
  {
    titulo: "Tratamiento de Onicomicosis",
    paciente: "Tratamiento 6 meses",
    diagnostico: "Infección fúngica crónica en 4 láminas ungueales.",
    resultado: "Limpieza total de hongo con protocolo de Ácido Nítrico.",
    imgAntes: "/images/resultados/Antes.jpg",
    imgDespues: "/images/resultados/Despues.jpg",
    tag: "Protocolo Clínico"
  }
];

const testimonios = [
  {
    nombre: "Andrés Retana",
    texto: "Tenía años con un problema de uña encarnada y Ximena lo solucionó en una cita. El trato es sumamente profesional y el lugar impecable.",
    estrellas: 5
  },
  {
    nombre: "María Fernanda Rojas",
    texto: "Excelente atención para pie diabético. Mi mamá se siente muy segura con los protocolos de limpieza que manejan. 100% recomendada.",
    estrellas: 5
  }
];

export default function SeccionResultados() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabecera de Resultados */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <h4 className="text-[#7B2CBF] font-black uppercase tracking-[0.3em] text-[10px] mb-4">Evidencia Clínica</h4>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">
              Resultados <span className="italic font-light text-slate-400">Reales.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm pb-2">
            Cada pie es un caso único. Aquí mostramos la evolución de nuestros pacientes bajo protocolos estrictos.
          </p>
        </div>

        {/* Grid de Casos Antes/Después */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {casos.map((caso, i) => (
            <div key={i} className="group">
              <div className="relative flex gap-4 mb-6">
                <div className="w-1/2 aspect-square rounded-4xl overflow-hidden bg-slate-100 border border-slate-100 relative">
                  <Image src={caso.imgAntes} alt="Antes" fill className="object-cover grayscale" />
                  <span className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-[9px] font-black uppercase px-3 py-1 rounded-full">Antes</span>
                </div>
                <div className="w-1/2 aspect-square rounded-4xl overflow-hidden bg-slate-50 border-2 border-[#7B2CBF]/20 relative">
                  <Image src={caso.imgDespues} alt="Después" fill className="object-cover" />
                  <span className="absolute top-4 left-4 bg-[#7B2CBF] text-white text-[9px] font-black uppercase px-3 py-1 rounded-full">Después</span>
                </div>
              </div>
              <div className="px-2">
                <span className="text-[10px] font-black text-[#7B2CBF] uppercase tracking-widest">{caso.tag}</span>
                <h3 className="text-2xl font-black text-slate-900 mt-1 mb-3">{caso.titulo}</h3>
                <div className="space-y-2">
                  <p className="text-sm text-slate-500 font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> Diagnóstico: {caso.diagnostico}
                  </p>
                  <p className="text-sm text-slate-900 font-bold flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#25D366]" /> Resultado: {caso.resultado}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de Testimonios */}
        <div className="bg-slate-50 rounded-[60px] p-12 md:p-20 relative overflow-hidden mb-24">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <MessageCircle size={120} className="text-[#7B2CBF]" />
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">Lo que dicen <br/> nuestros pacientes</h3>
              <p className="text-slate-500 font-medium">La confianza se construye con resultados y buen trato. Más de 500 pacientes atendidos en San José.</p>
            </div>
            
            <div className="space-y-6">
              {testimonios.map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-[35px] shadow-sm border border-slate-100">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.estrellas)].map((_, i) => (
                      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 font-bold italic mb-4 leading-relaxed">"{t.texto}"</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">— {t.nombre}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA FINAL DE REMATE */}
        <div className="text-center">
          <div className="inline-block p-1 bg-slate-900 rounded-[40px] w-full overflow-hidden shadow-2xl shadow-purple-500/20">
            <div className="p-12 md:p-20 bg-slate-900 rounded-[36px] flex flex-col items-center border border-slate-800">
              <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter mb-8">
                ¿Listo para caminar <br/> <span className="text-[#7B2CBF] italic">sin dolor?</span>
              </h2>
              <p className="text-slate-400 font-medium mb-12 max-w-lg">
                Agende su valoración hoy mismo. Atendemos emergencias y citas de mantenimiento preventivo.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="https://wa.me/50662500117" className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center gap-3 hover:scale-105 transition-all">
                  Agendar por WhatsApp <WhatsApp sx={{ fontSize: 18 }} />
                </a>
                <a href="tel:50662500117" className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center gap-3 border border-slate-200 hover:bg-slate-50 hover:scale-105 transition-all">
                  Llamar ahora <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}