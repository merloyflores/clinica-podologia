import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CalendarCheck2, CheckCircle2, MapPin, ShieldCheck } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import StructuredData from '../../components/StructuredData';
import { servicePageMap, servicePages, siteConfig } from '../../lib/seo';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePageMap[slug];
  if (!service) return {};

  const canonical = `/tratamientos/${service.slug}`;
  return {
    title: service.seoTitle,
    description: service.description,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      locale: 'es_CR',
      url: canonical,
      title: service.seoTitle,
      description: service.description,
      images: [{ url: service.image, alt: service.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.seoTitle,
      description: service.description,
      images: [service.image],
    },
    robots: { index: true, follow: true },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicePageMap[slug];
  if (!service) notFound();

  const relatedServices = service.related
    .map((relatedSlug) => servicePageMap[relatedSlug])
    .filter(Boolean);

  const pageUrl = `${siteConfig.url}/tratamientos/${service.slug}`;
  const breadcrumbs = [
    { label: 'Inicio', href: '/' },
    { label: 'Tratamientos', href: '/tratamientos' },
    { label: service.name },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: service.seoTitle,
        description: service.description,
        inLanguage: 'es-CR',
        isPartOf: { '@id': `${siteConfig.url}/#website` },
        about: { '@id': `${pageUrl}#service` },
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: service.name,
        description: service.description,
        provider: { '@id': `${siteConfig.url}/#organization` },
        areaServed: [
          { '@type': 'City', name: 'San José' },
          { '@type': 'AdministrativeArea', name: 'Heredia' },
          { '@type': 'AdministrativeArea', name: 'Alajuela' },
          { '@type': 'AdministrativeArea', name: 'Cartago' },
        ],
        url: pageUrl,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.label,
          item: item.href ? `${siteConfig.url}${item.href === '/' ? '' : item.href}` : pageUrl,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <StructuredData data={schema} />
      <article className="bg-white pb-24 pt-32 sm:pt-40 md:pb-32 md:pt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />

          <header className="grid gap-10 border-b border-slate-200 pb-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-16">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#7B2CBF]" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B2CBF]">{service.eyebrow}</p>
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-slate-950 md:text-5xl lg:text-[58px]">
                {service.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                {service.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={`/reservar?service=${service.bookingServiceId}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#6f2aa8] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#5d228f]">
                  <CalendarCheck2 size={18} /> Agendar cita
                </Link>
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-200 px-7 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50">
                  Consultar por WhatsApp
                </a>
              </div>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-slate-500">
                <span className="inline-flex items-center gap-2"><MapPin size={15} className="text-[#7B2CBF]" />Sabana Norte, San José</span>
                <span className="inline-flex items-center gap-2"><ShieldCheck size={15} className="text-[#7B2CBF]" />Atención con cita previa</span>
                {service.price && <span className="text-slate-700">{service.price}</span>}
              </div>
            </div>

            <div className="relative h-[360px] overflow-hidden rounded-[22px] border border-slate-200 bg-slate-100 shadow-[0_24px_70px_rgba(15,23,42,0.07)] md:h-[440px]">
              <Image src={service.image} alt={`${service.name} - Centro Podológico Ximena Alvarado`} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/35 via-transparent to-transparent" />
            </div>
          </header>

          <div className="grid gap-14 py-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-20">
            <div className="space-y-16">
              <section aria-labelledby="sobre-tratamiento">
                <h2 id="sobre-tratamiento" className="text-3xl font-semibold tracking-[-0.035em] text-slate-950 md:text-4xl">Información sobre el tratamiento</h2>
                <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                  {service.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>

              <section aria-labelledby="cuando-consultar" className="rounded-[20px] border border-slate-200 bg-[#faf9fb] p-7 md:p-9">
                <h2 id="cuando-consultar" className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">¿Cuándo conviene solicitar una valoración?</h2>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {service.whenToConsult.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#7B2CBF]" />{item}
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="como-trabajamos">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7B2CBF]">Atención profesional</p>
                  <h2 id="como-trabajamos" className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-slate-950 md:text-4xl">Cómo se aborda cada caso</h2>
                  <p className="mt-4 text-base leading-7 text-slate-600">El procedimiento final depende de la valoración individual. Este es el flujo general de atención.</p>
                </div>
                <div className="mt-8 grid gap-5 md:grid-cols-3">
                  {service.process.map((step, index) => (
                    <div key={step.title} className="rounded-[18px] border border-slate-200 bg-white p-6">
                      <span className="text-xs font-semibold text-[#7B2CBF]">0{index + 1}</span>
                      <h3 className="mt-4 text-lg font-semibold text-slate-950">{step.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section aria-labelledby="consideraciones">
                <h2 id="consideraciones" className="text-3xl font-semibold tracking-[-0.035em] text-slate-950">Recomendaciones importantes</h2>
                <div className="mt-7 divide-y divide-slate-100 border-y border-slate-100">
                  {service.considerations.map((item, index) => (
                    <div key={item} className="flex gap-5 py-5">
                      <span className="text-sm font-semibold text-slate-300">0{index + 1}</span>
                      <p className="text-sm leading-7 text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section aria-labelledby="preguntas-frecuentes">
                <h2 id="preguntas-frecuentes" className="text-3xl font-semibold tracking-[-0.035em] text-slate-950">Preguntas frecuentes</h2>
                <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">
                  {service.faq.map((item) => (
                    <details key={item.question} className="group py-5">
                      <summary className="cursor-pointer list-none pr-6 text-base font-semibold text-slate-900 marker:hidden">{item.question}</summary>
                      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-5 lg:sticky lg:top-36 lg:self-start">
              <div className="rounded-[20px] border border-slate-200 bg-[#17151b] p-7 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c69ae5]">Atención en Sabana Norte</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">Reserve un espacio disponible.</h2>
                <p className="mt-4 text-sm leading-6 text-slate-400">La agenda en línea muestra los horarios disponibles dentro del horario del centro.</p>
                <Link href={`/reservar?service=${service.bookingServiceId}`} className="mt-6 flex min-h-12 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100">Ver disponibilidad</Link>
              </div>
              <div className="rounded-[18px] border border-slate-200 bg-white p-6">
                <h2 className="text-sm font-semibold text-slate-950">Pacientes de toda la GAM</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">Además de San José, atendemos pacientes que se desplazan desde Heredia, Alajuela, Cartago y otras zonas de la Gran Área Metropolitana.</p>
                <Link href="/zonas-de-atencion" className="mt-4 inline-flex text-sm font-semibold text-[#6f2aa8] hover:underline">Ver zonas de atención</Link>
              </div>
              <p className="px-1 text-xs leading-5 text-slate-400">La información de esta página es general y no sustituye una valoración individual. Ante una urgencia médica, acuda al servicio de salud correspondiente.</p>
            </aside>
          </div>

          {relatedServices.length > 0 && (
            <section className="border-t border-slate-200 pt-14" aria-labelledby="relacionados">
              <h2 id="relacionados" className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">También puede interesarle</h2>
              <div className="mt-7 grid gap-5 md:grid-cols-3">
                {relatedServices.map((related) => (
                  <Link key={related.slug} href={`/tratamientos/${related.slug}`} className="group rounded-[18px] border border-slate-200 p-6 transition-colors hover:border-[#7B2CBF]/30 hover:bg-[#faf9fb]">
                    <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#7B2CBF]">{related.eyebrow}</p>
                    <h3 className="mt-3 text-lg font-semibold text-slate-950 group-hover:text-[#6f2aa8]">{related.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{related.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </>
  );
}
