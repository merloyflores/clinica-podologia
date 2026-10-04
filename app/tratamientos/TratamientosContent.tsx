'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, CheckCircle2, MessageCircle, CalendarCheck2 } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const tratamientos = [
  {
    category: "Procedimientos Correctivos",
    items: [
      {
        slug: "matricectomia-ungueal",
        title: "Matricectomía Ungueal",
        desc: "Procedimiento correctivo que puede considerarse en casos seleccionados de uña encarnada recurrente, previa valoración profesional.",
        longDesc: "La matricectomía es un procedimiento técnico menor realizado bajo anestesia local que puede considerarse en casos seleccionados de uña encarnada recurrente. Su indicación depende de la valoración del borde ungueal y del historial de recurrencia.",
        benefits: ["Opción correctiva", "Seguimiento posterior", "Enfoque individual"],
        price: "₡60,000",
        img: "/images/servicios/matricectomia.webp",
        tag: "Procedimiento Correctivo"
      },
      {
        slug: "una-encarnada",
        title: "Onicocriptosis (Uña Encarnada)",
        desc: "Manejo técnico de la espícula ungueal y limpieza del canal, orientado a reducir la presión, la irritación y las molestias.",
        longDesc: "Se realiza la extracción de la espícula (el trozo de uña clavado) mediante técnicas podológicas precisas. Se acompaña de una limpieza exhaustiva del canal ungueal y tratamiento antiséptico para eliminar infecciones.",
        benefits: ["Manejo de la presión local", "Limpieza especializada", "Cuidado posterior"],
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
        slug: "hongos-unas",
        title: "Onicomicosis (Hongos)",
        desc: "Manejo podológico para cambios compatibles con onicomicosis, con seguimiento de la lámina ungueal y evolución según cada caso.",
        longDesc: "El manejo se define después de valorar la lámina ungueal, su grosor, coloración y extensión del cambio. Puede incluir cuidado local y seguimiento periódico de acuerdo con la evolución observada.",
        benefits: ["Cuidado de la lámina ungueal", "Seguimiento de la evolución", "Orientación preventiva"],
        price: "₡25,000",
        img: "/images/servicios/onicomicosis.png",
        tag: "Tratamiento Especializado"
      },
      {
        slug: "verrugas-plantares",
        title: "Verrugas Plantares + Pedicura",
        desc: "Atención podológica focalizada para verrugas plantares, combinada con cuidado local y recomendaciones de higiene según la valoración.",
        longDesc: "La lesión se valora antes de definir el manejo local. Según sus características puede requerir tratamiento podológico y controles posteriores, junto con recomendaciones para evitar manipulación o irritación de la zona.",
        benefits: ["Manejo localizado", "Seguimiento según evolución", "Orientación de higiene"],
        price: "₡24,000",
        img: "/images/servicios/verrugas-plantares.png",
        tag: "Higiene + Salud"
      },
      {
        title: "Onicomiquia (Dedos con Pus)",
        desc: "Atención especializada para infecciones bacterianas en los dedos que generan pus y dolor severo. Incluye drenaje y antisepsia.",
        longDesc: "Drenaje profesional y asepsia profunda en focos infecciosos agudos. Limpiamos el área para aliviar la presión y el dolor punzante, aplicando el protocolo necesario para la recuperación.",
        benefits: ["Drenaje seguro", "Alivio del dolor", "Control bacteriano"],
        price: "₡20,000",
        img: "/images/servicios/onicomiquia.png",
        tag: "Atención de Urgencia"
      }
    ]
  },
  {
    category: "Unidad Especializada de Pie Diabético",
    items: [
      {
        slug: "pie-diabetico",
        title: "Valoración Inicial de Riesgo",
        desc: "Valoración preventiva del estado de la piel, uñas, sensibilidad y zonas de presión en personas con diabetes.",
        longDesc: "Evaluación exhaustiva de sensibilidad (neuropatía) y riego sanguíneo (vasculopatía). Detectamos puntos de presión y lesiones mínimas que podrían complicarse si no se tratan a tiempo.",
        benefits: ["Enfoque preventivo", "Revisión de factores de riesgo", "Orientación de autocuidado"],
        price: "₡15,000",
        img: "/images/servicios/valoracion.jpg",
        tag: "Consulta Vital"
      },
      {
        title: "Tratamiento de Anomalías",
        desc: "Cuidado podológico adaptado a personas con diabetes, bajo protocolos de bioseguridad y valoración individual.",
        longDesc: "Cuidado especializado para pies con callosidades extremas, grietas o uñas con malformaciones, bajo protocolos estrictos de bioseguridad para evitar cualquier herida comprometida.",
        benefits: ["Protocolo de bioseguridad", "Técnicas no invasivas", "Cuidado experto"],
        price: "₡27,000",
        img: "/images/servicios/pie_diabetico.webp",
        tag: "Cuidado Avanzado"
      }
    ]
  },
  {
    category: "Mantenimiento y Estética Podológica",
    items: [
      {
        slug: "callosidades",
        title: "Helomas + Pedicura Podológica",
        desc: "Eliminación profesional de 'ojos de gallo' y durezas profundas, complementada con una limpieza podológica completa.",
        longDesc: "Retiro técnico de callosidades profundas y dolorosas que impiden el caminar cómodo, seguido de un mantenimiento integral del pie.",
        benefits: ["Reducción de durezas", "Limpieza profunda", "Mayor confort"],
        price: "₡24,000",
        img: "/images/servicios/callos-en-los-pies.webp",
        tag: "Confort Total"
      },
      {
        slug: "pedicura-podologica",
        title: "Pedicura Podológica (Pie Sano)",
        desc: "Mantenimiento preventivo para pies sin patologías. Corte técnico, fresado terapéutico e hidratación profunda.",
        longDesc: "El mantenimiento ideal para mantener pies sanos. Incluye corte técnico de uñas, fresado de la planta del pie e hidratación profunda.",
        benefits: ["Prevención", "Piel suave", "Salud podológica"],
        price: "₡20,000",
        img: "/images/servicios/pedicura-podologica.png",
        tag: "Mantenimiento"
      },
      {
        title: "Reconstrucción Ungueal",
        desc: "Restauración estética temporal de la lámina ungueal dañada por traumatismos. Duración aproximada de 15 días.",
        longDesc: "Aplicación de resina especializada para reconstruir visualmente una uña dañada. Es un procedimiento estético temporal para eventos o periodos de 15 días.",
        benefits: ["Estética inmediata", "Uña con aspecto natural", "Ideal para eventos"],
        price: "₡16,000",
        img: "/images/servicios/reconstruccion-ungueal.png",
        tag: "Cosmética Podológica"
      }
    ]
  }
];

export default function TratamientosContent() {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <section className="py-24 md:py-32 lg:py-36 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Tratamientos' }]} />
        
      {/* Encabezado Estilo Protocolo Clínico */}
      <div className="max-w-7xl mx-auto mb-16 border-b border-slate-200 pb-14">
        
        {/* Etapa Superior: Título con Líneas Laterales */}
        <div className="flex flex-col items-start mb-10 text-left">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-px bg-[#7B2CBF]"></div>
            <h3 className="text-[#7B2CBF] font-semibold uppercase tracking-[0.18em] text-[11px]">
              Metodología de Especialidad
            </h3>
            <div className="w-9 h-px bg-[#7B2CBF]"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[58px] font-semibold text-slate-950 tracking-[-0.045em] leading-[1.06]">
            Tratamientos <br />
            <span className="font-normal text-[#7B2CBF]">Podológicos</span>
          </h1>
        </div>

        {/* Grid de 2 Columnas Estilo Home */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 text-slate-500 text-base md:text-lg leading-7">

          {/* Columna 1: Con Acento Verde Lateral */}
          <div className="border-l-2 border-[#7B2CBF] pl-6 md:pl-8">
            <p>
              La salud de sus pies es el cimiento de su movilidad y bienestar general. En nuestro centro, bajo la atención de la Especialista en Podología <strong className="text-slate-900 font-bold">Ximena Alvarado</strong>, transformamos la atención podológica tradicional en una experiencia de salud integral basada en la precisión, la bioseguridad y el cuidado profesional de cada caso.
            </p>
          </div>

          {/* Columna 2: Texto Explicativo Secundario */}
          <div className="pt-2">
            <p>
              A continuación, le invitamos a explorar nuestro catálogo completo de tratamientos especializados. Hemos diseñado cada procedimiento —desde correcciones permanentes hasta protocolos preventivos para pacientes diabéticos— utilizando tecnología moderna y estrictos estándares de esterilización. Nuestro objetivo es que usted conozca a detalle las opciones de tratamiento disponibles para recuperar el placer de caminar con total confort y seguridad.
            </p>
          </div>

        </div>
      </div>

      {/* Listado de Categorías */}
        <div className="space-y-20">
          {tratamientos.map((categoria, idx) => (
            <div key={idx}>
              
              {/* Separador de Categoría Premium */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-slate-200"></div>
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 bg-white px-3">
                  {categoria.category}
                </h4>
                <div className="h-px flex-1 bg-slate-200"></div>
              </div>

              {/* Grid de Tarjetas */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {categoria.items.map((item, i) => (
                  <div 
                    key={i} 
                    className="group relative bg-white rounded-[18px] overflow-hidden flex flex-col md:flex-row border border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.035)] transition-colors duration-300 hover:border-[#7B2CBF]/25"
                  >
                    
                    {/* Imagen con Overlay y Zoom Suave */}
                    <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden bg-slate-100">
                      <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent z-10 transition-colors duration-500" />
                      <Image 
                        src={item.img} 
                        alt={item.title} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 20vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" 
                      />
                      
                      {/* Tag Estilo Glassmorphism */}
                      <div className="absolute top-4 left-4 z-20 bg-white/92 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/50">
                        <span className="text-[9px] font-semibold text-[#7B2CBF] uppercase tracking-[0.14em]">
                          {item.tag}
                        </span>
                      </div>
                    </div>

                    {/* Contenido Separado en Cuerpo y Footer */}
                    <div className="md:w-3/5 flex flex-col justify-between">
                      
                      {/* Área de Texto Principal */}
                      <div className="p-8 md:p-10">
                        <h5 className="text-xl md:text-2xl font-semibold text-slate-950 mb-3 tracking-[-0.02em]">
                          {item.title}
                        </h5>
                        <p className="text-slate-500 text-sm leading-6">
                          {item.desc}
                        </p>
                      </div>
                      
                      {/* Área de Inversión (Footer de la Tarjeta) */}
                      <div className="px-8 py-6 md:px-10 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between mt-auto group-hover:bg-[#7B2CBF]/[0.02] transition-colors duration-500">
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase font-medium tracking-[0.12em] mb-1">Inversión</p>
                          <p className="text-2xl font-semibold text-slate-950">{item.price}</p>
                        </div>
                        
                        {/* Botón Animado */}
                        <div className="flex items-center gap-2">
                          {item.slug && (
                            <Link
                              href={`/tratamientos/${item.slug}`}
                              className="hidden text-xs font-semibold text-[#6f2aa8] hover:underline sm:inline"
                              aria-label={`Leer información completa sobre ${item.title}`}
                            >
                              Información completa
                            </Link>
                          )}
                          <button 
                          onClick={() => setSelectedService(item)}
                          title="Ver detalles del tratamiento"
                          aria-label={`Ver detalles de ${item.title}`}
                          className="relative overflow-hidden w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-700 hover:bg-[#7B2CBF] hover:text-white hover:border-[#7B2CBF] transition-all duration-300"
                        >
                          {/* El icono gira 90 grados al hacer hover sobre la tarjeta */}
                          <svg className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Remate: Pedicura Clínica */}
        <div className="mt-20 p-8 md:p-12 bg-[#19161d] rounded-[20px] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366]/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left">
              <h4 className="text-[#b98ada] font-semibold uppercase tracking-[0.16em] text-[10px] mb-2">Mantenimiento Preventivo</h4>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-[-0.035em] mb-4">Pedicura Podológica Integral</h3>
              <p className="text-slate-400 max-w-xl font-medium">
                Ideal para pies saludables que buscan prevención. Incluye onicotomía técnica, desbridamiento suave y fresado terapéutico.
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-end gap-2">
              <span className="text-4xl font-semibold text-white">₡20,000</span>
              <span className="text-[10px] font-medium text-slate-500 uppercase tracking-[0.14em]">Precio de Sesión</span>
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
          
          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[22px] shadow-2xl flex flex-col md:flex-row overflow-hidden animate-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedService(null)} 
              title="Cerrar detalle"
              aria-label="Cerrar detalle"
              className="absolute top-6 right-6 z-30 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 hover:text-red-500 transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <Image src={selectedService.img} alt={selectedService.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>

            <div className="md:w-1/2 p-8 md:p-12">
              <span className="text-[#7B2CBF] font-semibold uppercase text-[10px] tracking-[0.14em]">{selectedService.tag}</span>
              <h3 className="text-3xl font-semibold text-slate-950 mt-2 mb-6 tracking-[-0.03em]">{selectedService.title}</h3>
              <p className="text-slate-600 mb-8 leading-7">{selectedService.longDesc}</p>
              
              <div className="space-y-3 mb-10">
                {selectedService.benefits.map((benefit: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                    <CheckCircle2 size={18} className="text-[#25D366]" /> {benefit}
                  </div>
                ))}
              </div>

              {/* Dentro del Modal, debajo de los beneficios */}
              <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400 mb-2">Protocolo de Bioseguridad</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Este procedimiento se realiza bajo estrictas normas de esterilización de instrumental y bioseguridad para reducir riesgos y mantener condiciones seguras de atención.
                </p>
              </div>

              <div className="flex items-center justify-between border-t pt-8">
                <div>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-[0.12em]">Inversión</p>
                  <p className="text-3xl font-semibold text-slate-950">{selectedService.price}</p>
                </div>
                <Link
                  href={selectedService.slug ? `/reservar?service=${selectedService.slug}` : "/reservar"}
                  className="flex items-center gap-2 rounded-xl bg-[#6f2aa8] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#5d228f]"
                >
                  RESERVAR <CalendarCheck2 size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}