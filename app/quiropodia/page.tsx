import type { Metadata } from 'next';
import StructuredData from '../components/StructuredData';
import { siteConfig } from '../lib/seo';
import QuiropodiaContent from './QuiropodiaContent';

export const metadata: Metadata = {
  title: 'Quiropodia en San José | Cuidado profesional de los pies',
  description:
    'Quiropodia en Sabana Norte, San José: cuidado profesional de uñas, callosidades y piel del pie con enfoque preventivo, bioseguridad y atención personalizada.',
  alternates: { canonical: '/quiropodia' },
  openGraph: {
    title: 'Quiropodia en San José | Centro Podológico Ximena Alvarado',
    description: 'Conozca el protocolo de quiropodia y cuidado preventivo del pie en Sabana Norte, San José.',
    url: '/quiropodia',
    type: 'article',
  },
};

export default function Page() {
  const url = `${siteConfig.url}/quiropodia`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: 'Quiropodia en San José',
        description: 'Información sobre quiropodia y cuidado preventivo del pie en el Centro Podológico Ximena Alvarado.',
        inLanguage: 'es-CR',
        isPartOf: { '@id': `${siteConfig.url}/#website` },
        about: {
          '@type': 'Service',
          name: 'Quiropodia',
          provider: { '@id': `${siteConfig.url}/#organization` },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteConfig.url },
          { '@type': 'ListItem', position: 2, name: 'Quiropodia', item: url },
        ],
      },
    ],
  };
  return <><StructuredData data={schema} /><QuiropodiaContent /></>;
}
