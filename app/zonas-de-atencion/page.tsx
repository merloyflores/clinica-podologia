import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendarCheck2, MapPin, Route, Clock3 } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import StructuredData from '../components/StructuredData';
import { serviceAreas, siteConfig } from '../lib/seo';

export const metadata: Metadata = {
  title: 'Centro podológico en Sabana Norte | Atención a San José y GAM',
  description:
    'Centro Podológico Ximena Alvarado en Sabana Norte, San José. Atención con cita previa para pacientes de San José, Heredia, Alajuela, Cartago y zonas de la GAM.',
  alternates: { canonical: '/zonas-de-atencion' },
  openGraph: {
    title: 'Centro podológico en Sabana Norte | Atención a San José y GAM',
    description: 'Ubicación del Centro Podológico Ximena Alvarado y zonas desde donde atendemos pacientes en la Gran Área Metropolitana.',
    url: '/zonas-de-atencion',
    type: 'website',
  },
};

export default function ZonasDeAtencionPage() {
  const pageUrl = `${siteConfig.url}/zonas-de-atencion`;
  const breadcrumbs = [
    { label: 'Inicio', href: '/' },
    { label: 'Zonas de atención' },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Centro podológico en Sabana Norte | Atención a San José y GAM',
        description: 'Información de ubicación y cobertura regional del Centro Podológico Ximena Alvarado.',
        inLanguage: 'es-CR',
        isPartOf: { '@id': `${siteConfig.url}/#website` },
        about: { '@id': `${siteConfig.url}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteConfig.url },
          { '@type': 'ListItem', position: 2, name: 'Zonas de atención', item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <StructuredData data={schema} />
      <section className="bg-white pb-24 pt-32 sm:pt-40 md:pb-32 md:pt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />

          <header className="max-w-4xl border-b border-slate-200 pb-12">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#7B2CBF]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B2CBF]">Ubicación y cobertura regional</p>
            </div>
            <h1 className="text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-slate-950 md:text-5xl lg:text-[58px]">
              Atención podológica en <span className="font-normal text-[#7B2CBF]">Sabana Norte y la GAM.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              Nuestra sede física se encuentra en <strong className="font-semibold text-slate-900">Sabana Norte, San José</strong>. Atendemos con cita previa a pacientes que se desplazan desde distintos puntos de San José, Heredia, Alajuela, Cartago y otras zonas de la Gran Área Metropolitana.
            </p>
          </header>

          <div className="grid gap-6 py-12 md:grid-cols-3">
            <div className="rounded-[18px] border border-slate-200 p-6">
              <MapPin className="text-[#7B2CBF]" size={22} />
              <h2 className="mt-5 text-lg font-semibold text-slate-950">Una sola sede</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">El centro está ubicado en Sabana Norte, San José. No contamos con sucursales en otras provincias.</p>
            </div>
            <div className="rounded-[18px] border border-slate-200 p-6">
              <Route className="text-[#7B2CBF]" size={22} />
              <h2 className="mt-5 text-lg font-semibold text-slate-950">Atención regional</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">La ubicación facilita el acceso desde distintos puntos de la GAM para pacientes que buscan atención podológica especializada.</p>
            </div>
            <div className="rounded-[18px] border border-slate-200 p-6">
              <Clock3 className="text-[#7B2CBF]" size={22} />
              <h2 className="mt-5 text-lg font-semibold text-slate-950">Con cita previa</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">Atendemos de martes a domingo, de 7:00 AM a 4:00 PM. La agenda en línea muestra únicamente horarios disponibles.</p>
            </div>
          </div>

          <section aria-labelledby="zonas-gam" className="border-y border-slate-200 py-14">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7B2CBF]">Gran Área Metropolitana</p>
              <h2 id="zonas-gam" className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-slate-950 md:text-4xl">Zonas desde donde nos visitan pacientes</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">Estas referencias indican áreas de procedencia habituales y cercanas; la atención siempre se realiza en nuestra sede de Sabana Norte.</p>
            </div>

            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {serviceAreas.map((area) => (
                <article key={area.region} className="rounded-[18px] border border-slate-200 bg-[#faf9fb] p-6">
                  <h3 className="text-xl font-semibold text-slate-950">{area.region}</h3>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                    {area.places.map((place) => <li key={place}>• {place}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-10 py-14 lg:grid-cols-[1fr_360px] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.035em] text-slate-950">Cómo llegar y planificar su cita</h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">Al reservar, seleccione primero el servicio y un horario disponible. Si viene desde otra provincia o necesita confirmar indicaciones de llegada, puede escribirnos por WhatsApp después de agendar. La ubicación exacta se comparte para facilitar su llegada.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/reservar" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#6f2aa8] px-7 text-sm font-semibold text-white hover:bg-[#5d228f]"><CalendarCheck2 size={18} />Ver horarios disponibles</Link>
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-200 px-7 text-sm font-semibold text-slate-700 hover:bg-slate-50">Consultar por WhatsApp</a>
              </div>
            </div>
            <div className="rounded-[20px] border border-slate-200 bg-[#17151b] p-7 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c69ae5]">Sede principal</p>
              <h2 className="mt-3 text-2xl font-semibold">Sabana Norte, San José</h2>
              <p className="mt-4 text-sm leading-6 text-slate-400">Martes a domingo<br />7:00 AM – 4:00 PM</p>
              <p className="mt-5 text-sm font-medium text-white">{siteConfig.displayPhone}</p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
