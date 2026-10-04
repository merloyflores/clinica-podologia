import type { Metadata } from 'next';
import StructuredData from '../components/StructuredData';
import { servicePages, siteConfig } from '../lib/seo';
import TratamientosContent from './TratamientosContent';

export const metadata: Metadata = {
  title: 'Tratamientos podológicos en San José | Uñas, hongos y pie diabético',
  description:
    'Tratamientos podológicos en Sabana Norte, San José: uña encarnada, hongos en las uñas, pie diabético, callosidades, verrugas plantares y cuidado preventivo.',
  alternates: { canonical: '/tratamientos' },
  openGraph: {
    title: 'Tratamientos podológicos en San José',
    description: 'Conozca los principales servicios del Centro Podológico Ximena Alvarado en Sabana Norte, San José.',
    url: '/tratamientos',
    type: 'website',
  },
};

export default function Page() {
  const url = `${siteConfig.url}/tratamientos`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${url}#webpage`,
        url,
        name: 'Tratamientos podológicos en San José',
        description: 'Catálogo de servicios podológicos del Centro Podológico Ximena Alvarado.',
        inLanguage: 'es-CR',
        isPartOf: { '@id': `${siteConfig.url}/#website` },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: servicePages.map((service, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: service.name,
            url: `${siteConfig.url}/tratamientos/${service.slug}`,
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteConfig.url },
          { '@type': 'ListItem', position: 2, name: 'Tratamientos', item: url },
        ],
      },
    ],
  };

  return <><StructuredData data={schema} /><TratamientosContent /></>;
}
