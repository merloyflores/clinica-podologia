import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendarCheck2 } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import StructuredData from '../components/StructuredData';
import { siteConfig } from '../lib/seo';

const faqs = [
  { question: '¿Dónde está ubicado el Centro Podológico Ximena Alvarado?', answer: 'La sede se encuentra en Sabana Norte, San José, Costa Rica. La ubicación exacta puede confirmarse al coordinar la cita.' },
  { question: '¿Cuál es el horario de atención?', answer: 'El centro atiende de martes a domingo, de 7:00 AM a 4:00 PM. Los lunes permanece cerrado.' },
  { question: '¿Cómo puedo reservar una cita?', answer: 'Puede utilizar la agenda en línea del sitio web para consultar horarios disponibles y reservar. También puede comunicarse por WhatsApp si necesita orientación antes de elegir un servicio.' },
  { question: '¿Qué pasa si no sé cuál tratamiento reservar?', answer: 'Puede seleccionar una valoración o comunicarse por WhatsApp. El objetivo es orientar la cita sin que tenga que autodiagnosticarse.' },
  { question: '¿Atienden uña encarnada?', answer: 'Sí. Se realiza valoración y manejo podológico de onicocriptosis o uña encarnada, y en casos seleccionados puede valorarse una alternativa correctiva para recurrencias.' },
  { question: '¿Atienden hongos en las uñas?', answer: 'Sí. Se realiza valoración del estado de la uña y manejo podológico de cambios compatibles con onicomicosis, con seguimiento según la evolución.' },
  { question: '¿Atienden personas con diabetes?', answer: 'Sí. El centro ofrece valoración preventiva y cuidado podológico del pie diabético. Cualquier herida o cambio importante puede requerir también valoración médica según el caso.' },
  { question: '¿La instrumentalización se esteriliza?', answer: 'El centro trabaja con protocolos de bioseguridad y esterilización del instrumental utilizado en los procedimientos podológicos.' },
  { question: '¿Atienden pacientes de Alajuela, Heredia o Cartago?', answer: 'Sí. La sede está únicamente en Sabana Norte, San José, pero se atienden pacientes que se desplazan desde Alajuela, Heredia, Cartago y otras zonas de la Gran Área Metropolitana.' },
  { question: '¿Debo llegar con las uñas sin esmalte?', answer: 'Cuando la consulta está relacionada con cambios de color, grosor o textura de la uña, es preferible que la superficie esté visible para facilitar la valoración.' },
];

export const metadata: Metadata = {
  title: 'Preguntas frecuentes sobre podología y citas en San José',
  description: 'Respuestas sobre citas, horarios, ubicación, uña encarnada, hongos en las uñas, pie diabético y atención podológica en Sabana Norte, San José.',
  alternates: { canonical: '/preguntas-frecuentes' },
};

export default function PreguntasFrecuentesPage() {
  const pageUrl = `${siteConfig.url}/preguntas-frecuentes`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <StructuredData data={schema} />
      <section className="bg-white pb-24 pt-32 sm:pt-40 md:pb-32 md:pt-44">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Preguntas frecuentes' }]} />
          <header className="border-b border-slate-200 pb-12">
            <div className="mb-5 flex items-center gap-3"><span className="h-px w-10 bg-[#7B2CBF]" /><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B2CBF]">Información para pacientes</p></div>
            <h1 className="text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-slate-950 md:text-5xl lg:text-[58px]">Preguntas frecuentes sobre <span className="font-normal text-[#7B2CBF]">atención podológica.</span></h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">Información práctica para preparar su visita, elegir el servicio adecuado y conocer cómo funciona la atención en Sabana Norte, San José.</p>
          </header>

          <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq) => (
              <details key={faq.question} className="py-6">
                <summary className="cursor-pointer list-none pr-6 text-lg font-semibold text-slate-950 marker:hidden">{faq.question}</summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>

          <div className="mt-12 rounded-[20px] border border-slate-200 bg-[#faf9fb] p-7 md:flex md:items-center md:justify-between md:gap-8 md:p-9">
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">¿Listo para reservar?</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Consulte la disponibilidad real de la agenda y seleccione el horario que mejor le funcione.</p>
            </div>
            <Link href="/reservar" className="mt-6 inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#6f2aa8] px-7 text-sm font-semibold text-white hover:bg-[#5d228f] md:mt-0"><CalendarCheck2 size={18} />Agendar cita</Link>
          </div>
        </div>
      </section>
    </>
  );
}
