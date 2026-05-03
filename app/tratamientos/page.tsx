'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, CheckCircle2, MessageCircle } from 'lucide-react';

const tratamientos = [
  {
    category: "Cirugía y Procedimientos Correctivos",
    items: [
      {
        title: "Matricectomía Ungueal",
        desc: "Procedimiento quirúrgico definitivo en los laterales de la uña para eliminar la raíz que causa el encarnamiento. Es la solución final para pacientes crónicos.",
        longDesc: "La matricectomía es una intervención clínica menor realizada bajo anestesia local. El objetivo es cauterizar la raíz de la uña en los laterales para evitar que vuelva a crecer hacia los lados. Es la solución definitiva para pacientes crónicos que sufren de inflamaciones constantes.",
        benefits: ["Solución permanente", "Recuperación rápida", "Resultados estéticos"],
        price: "₡60,000",
        img: "/images/servicios/matricectomia.webp",
        tag: "Cirugía Definitiva"
      },
      {
        title: "Onicocriptosis (Uña Encarnada)",
        desc: "Extracción técnica de la espícula ungueal y limpieza profunda del canal. Alivio inmediato del dolor y la inflamación.",
        longDesc: "Se realiza la extracción de la espícula (el trozo de uña clavado) mediante técnicas podológicas precisas. Se acompaña de una limpieza exhaustiva del canal ungueal y tratamiento antiséptico para eliminar infecciones.",
        benefits: ["Alivio instantáneo", "Elimina la infección", "Procedimiento indoloro"],
        price: "₡25,000",
        img: "/images/servicios/una-encarnada.jpg",
        tag: "1 Uña: ₡25k / 2 Uñas: ₡30k"
      }
    ]
  },
  {
    category: "Tratamientos Infecciosos y Patológicos",
    items: [
      {
        title: "Onicomicosis (Hongos)",
        desc: "Tratamiento avanzado con Ácido Nítrico. Protocolo clínico con una duración estimada de 4 a 8 meses según el avance de la infección fúngica.",
        longDesc: "Tratamiento de alta eficacia basado en la aplicación de Ácido Nítrico para eliminar esporas de hongos en la lámina ungueal. Es un proceso controlado que no afecta el tejido sano y permite que la uña nueva crezca sana.",
        benefits: ["Eficacia probada", "Sin efectos secundarios", "Seguimiento experto"],
        price: "₡25,000",
        img: "/images/servicios/onicomicosis.jfif",
        tag: "Tratamiento Clínico"
      },
      {
        title: "Verrugas Plantares + Pedicura",
        desc: "Tratamiento focalizado para la eliminación de verrugas (papilomas) combinado con una limpieza clínica integral del pie para evitar contagios.",
        longDesc: "Cauterización química especializada para eliminar el tejido infectado por el virus del papiloma. Incluye pedicura clínica para asegurar que la piel circundante esté sana y libre de virus.",
        benefits: ["Eliminación de raíz", "Evita el contagio", "Higiene integral"],
        price: "₡24,000",
        img: "/images/servicios/verrugas-plantares.jfif",
        tag: "Higiene + Salud"
      },
      {
        title: "Onicomiquia (Dedos con Pus)",
        desc: "Atención especializada para infecciones bacterianas en los dedos que generan pus y dolor severo. Incluye drenaje y antisepsia.",
        longDesc: "Drenaje profesional y asepsia profunda en focos infecciosos agudos. Limpiamos el área para aliviar la presión y el dolor punzante, aplicando el protocolo necesario para la recuperación.",
        benefits: ["Drenaje seguro", "Alivio del dolor", "Control bacteriano"],
        price: "₡20,000",
        img: "/images/servicios/onicomiquia.jfif",
        tag: "Atención de Urgencia"
      }
    ]
  },
  {
    category: "Unidad Especializada de Pie Diabético",
    items: [
      {
        title: "Valoración Inicial de Riesgo",
        desc: "Examen exhaustivo de sensibilidad, pulso y estado de la piel para pacientes diabéticos. Vital para prevenir ulceraciones.",
        longDesc: "Evaluación exhaustiva de sensibilidad (neuropatía) y riego sanguíneo (vasculopatía). Detectamos puntos de presión y lesiones mínimas que podrían complicarse si no se tratan a tiempo.",
        benefits: ["Prevención de úlceras", "Evaluación vascular", "Paz mental"],
        price: "₡15,000",
        img: "/images/servicios/pie_diabetico.webp",
        tag: "Consulta Vital"
      },
      {
        title: "Tratamiento de Anomalías",
        desc: "Procedimiento especializado para el manejo de complicaciones derivadas del pie diabético bajo estrictas normas de bioseguridad.",
        longDesc: "Cuidado clínico para pies con callosidades extremas, grietas o uñas con malformaciones bajo protocolos estrictos de bioseguridad para evitar cualquier herida comprometida.",
        benefits: ["Protocolo de bioseguridad", "Técnicas no invasivas", "Cuidado experto"],
        price: "₡27,000",
        img: "/images/servicios/pie_diabetico.jfif",
        tag: "Cuidado Avanzado"
      }
    ]
  },
  {
    category: "Mantenimiento y Estética Clínica",
    items: [
      {
        title: "Helomas + Pedicura Clínica",
        desc: "Eliminación profesional de 'ojos de gallo' y durezas profundas, complementada con una limpieza podológica completa.",
        longDesc: "Retiro técnico de callosidades profundas y dolorosas que impiden el caminar cómodo, seguido de un mantenimiento integral del pie.",
        benefits: ["Cero dolor al caminar", "Limpieza profunda", "Confort total"],
        price: "₡24,000",
        img: "/images/servicios/callos-en-los-pies.webp",
        tag: "Confort Total"
      },
      {
        title: "Pedicura Clínica (Pie Sano)",
        desc: "Mantenimiento preventivo para pies sin patologías. Corte técnico, fresado terapéutico e hidratación profunda.",
        longDesc: "El mantenimiento ideal para mantener pies sanos. Incluye corte técnico de uñas, fresado de la planta del pie e hidratación profunda.",
        benefits: ["Prevención", "Piel suave", "Salud podológica"],
        price: "₡20,000",
        img: "/images/servicios/pedicuraclínica.png",
        tag: "Mantenimiento"
      },
      {
        title: "Reconstrucción Ungueal",
        desc: "Restauración estética temporal de la lámina ungueal dañada por traumatismos. Duración aproximada de 15 días.",
        longDesc: "Aplicación de resina especializada para reconstruir visualmente una uña dañada. Es un procedimiento estético temporal para eventos o periodos de 15 días.",
        benefits: ["Estética inmediata", "Uña con aspecto natural", "Ideal para eventos"],
        price: "₡16,000",
        img: "/images/servicios/reconstruccion-ungueal.jfif",
        tag: "Cosmética Clínica"
      }
    ]
  }
];

export default function SeccionTratamientos() {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <section className="py-44 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h3 className="text-[#25D366] font-black uppercase tracking-[0.3em] text-[10px] mb-4">Portafolio de Especialidades</h3>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-6">
            Soluciones Avanzadas <br />
            <span className="text-[#7B2CBF] italic font-light">para cada patología.</span>
          </h2>
          <p className="text-slate-500 font-medium">
            Precios competitivos bajo estándares de bioseguridad hospitalaria. 
            Su salud merece un diagnóstico profesional.
          </p>
        </div>

        {/* Listado de Categorías */}
        <div className="space-y-24">
          {tratamientos.map((categoria, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px flex-1 bg-slate-200"></div>
                <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">{categoria.category}</h4>
                <div className="h-px flex-1 bg-slate-200"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {categoria.items.map((item, i) => (
                  <div key={i} className="group bg-white rounded-[45px] overflow-hidden flex flex-col md:flex-row border border-slate-100 hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-500">
                    {/* Imagen */}
                    <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                      <Image 
                        src={item.img} 
                        alt={item.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                        <span className="text-[9px] font-black text-[#7B2CBF] uppercase tracking-widest">{item.tag}</span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="md:w-3/5 p-8 flex flex-col justify-between">
                      <div>
                        <h5 className="text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-[#7B2CBF] transition-colors">
                          {item.title}
                        </h5>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                          {item.desc}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Inversión</p>
                          <p className="text-2xl font-black text-slate-900">{item.price}</p>
                        </div>
                        {/* BOTÓN + CON FUNCIONALIDAD MODAL */}
                        <button 
                          onClick={() => setSelectedService(item)}
                          title="Ver detalles del tratamiento"
                          aria-label={`Ver detalles de ${item.title}`}
                          className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white hover:bg-[#7B2CBF] transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Remate: Pedicura Clínica */}
        <div className="mt-24 p-12 bg-slate-900 rounded-2xl text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366]/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left">
              <h4 className="text-[#25D366] font-black uppercase tracking-[0.3em] text-[10px] mb-2">Mantenimiento Preventivo</h4>
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">Pedicura Clínica Integral</h3>
              <p className="text-slate-400 max-w-xl font-medium">
                Ideal para pies saludables que buscan prevención. Incluye onicotomía técnica, desbridamiento suave y fresado terapéutico.
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-end gap-2">
              <span className="text-5xl font-black text-white">₡20,000</span>
              <span className="text-[10px] font-bold text-[#25D366] uppercase tracking-[0.4em]">Precio de Sesión</span>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL: Se muestra solo cuando selectedService no es null */}
      {selectedService && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-300" 
            onClick={() => setSelectedService(null)}
          ></div>
          
          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[40px] shadow-2xl flex flex-col md:flex-row overflow-hidden animate-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedService(null)} 
              title="Cerrar detalle"
              aria-label="Cerrar detalle"
              className="absolute top-6 right-6 z-30 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 hover:text-red-500 transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <Image src={selectedService.img} alt={selectedService.title} fill className="object-cover" />
            </div>

            <div className="md:w-1/2 p-8 md:p-12">
              <span className="text-[#7B2CBF] font-black uppercase text-[10px] tracking-widest">{selectedService.tag}</span>
              <h3 className="text-3xl font-black text-slate-900 mt-2 mb-6">{selectedService.title}</h3>
              <p className="text-slate-600 font-medium mb-8 leading-relaxed italic">{selectedService.longDesc}</p>
              
              <div className="space-y-3 mb-10">
                {selectedService.benefits.map((benefit: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 text-slate-800 text-sm font-bold">
                    <CheckCircle2 size={18} className="text-[#25D366]" /> {benefit}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t pt-8">
                <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Inversión</p>
                  <p className="text-3xl font-black text-slate-900">{selectedService.price}</p>
                </div>
                <a 
                  href="https://wa.me/50662500117"
                  className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-black text-sm flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  RESERVAR <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}