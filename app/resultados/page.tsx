import type { Metadata } from 'next';
import StructuredData from '../components/StructuredData';
import { siteConfig } from '../lib/seo';
import ResultadosContent from './ResultadosContent';

export const metadata: Metadata = {
  title: 'Resultados de atención podológica | Casos y testimonios',
  description:
    'Conozca casos y testimonios de atención podológica del Centro Podológico Ximena Alvarado en Sabana Norte, San José, Costa Rica.',
  alternates: { canonical: '/resultados' },
  openGraph: {
    title: 'Resultados y testimonios | Centro Podológico Ximena Alvarado',
    description: 'Casos y experiencias de pacientes atendidos en San José, Costa Rica.',
    url: '/resultados',
    type: 'website',
  },
};

export default function Page() {
  const url = `${siteConfig.url}/resultados`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: 'Resultados y testimonios de atención podológica',
        inLanguage: 'es-CR',
        isPartOf: { '@id': `${siteConfig.url}/#website` },
        about: { '@id': `${siteConfig.url}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteConfig.url },
          { '@type': 'ListItem', position: 2, name: 'Resultados', item: url },
        ],
      },
    ],
  };
  return <><StructuredData data={schema} /><ResultadosContent /></>;
}
