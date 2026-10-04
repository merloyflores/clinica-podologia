import type { Metadata } from 'next';
import StructuredData from '../components/StructuredData';
import { siteConfig } from '../lib/seo';
import ContactenosContent from './ContactenosContent';

export const metadata: Metadata = {
  title: 'Contacto y ubicación | Centro podológico en Sabana Norte',
  description:
    'Contacto, horario y ubicación del Centro Podológico Ximena Alvarado en Sabana Norte, San José. Reserve en línea o consulte por WhatsApp.',
  alternates: { canonical: '/contactenos' },
  openGraph: {
    title: 'Contacto | Centro Podológico Ximena Alvarado',
    description: 'Horario, ubicación y formas de contacto del centro en Sabana Norte, San José.',
    url: '/contactenos',
    type: 'website',
  },
};

export default function Page() {
  const url = `${siteConfig.url}/contactenos`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${url}#webpage`,
        url,
        name: 'Contacto y ubicación del Centro Podológico Ximena Alvarado',
        inLanguage: 'es-CR',
        isPartOf: { '@id': `${siteConfig.url}/#website` },
        about: { '@id': `${siteConfig.url}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteConfig.url },
          { '@type': 'ListItem', position: 2, name: 'Contacto', item: url },
        ],
      },
    ],
  };
  return <><StructuredData data={schema} /><ContactenosContent /></>;
}
