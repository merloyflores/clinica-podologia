import StructuredData from './components/StructuredData';
import { serviceAreas, servicePages, siteConfig } from './lib/seo';

export default function JsonLd() {
  const areaServed = serviceAreas.flatMap((area) => [
    { '@type': 'AdministrativeArea', name: area.region },
    ...area.places.map((place) => ({ '@type': 'Place', name: `${place}, ${area.region}, Costa Rica` })),
  ]);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        alternateName: 'Centro Podológico Ximena Alvarado San José',
        description: siteConfig.description,
        inLanguage: 'es-CR',
        publisher: { '@id': `${siteConfig.url}/#organization` },
      },
      {
        '@type': ['LocalBusiness', 'MedicalClinic'],
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: ['Ximena Alvarado Podología', 'Centro Podológico Ximena Alvarado San José'],
        url: siteConfig.url,
        logo: `${siteConfig.url}/images/logonavbar.PNG`,
        image: [
          `${siteConfig.url}/images/logonavbar.PNG`,
          `${siteConfig.url}/images/ximenaalvarado-trabajando.webp`,
          `${siteConfig.url}/images/ximenafotoperfil.jpeg`,
        ],
        description: siteConfig.description,
        telephone: siteConfig.phone,
        priceRange: '₡₡',
        medicalSpecialty: 'Podiatric',
        currenciesAccepted: 'CRC',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Sabana Norte',
          addressLocality: 'San José',
          addressRegion: 'San José',
          addressCountry: 'CR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 9.9333,
          longitude: -84.1136,
        },
        hasMap: 'https://www.google.com/maps?cid=1812822452243445851',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '07:00',
            closes: '16:00',
          },
        ],
        areaServed,
        sameAs: [siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.social.threads],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: siteConfig.phone,
          contactType: 'customer service',
          areaServed: 'CR',
          availableLanguage: ['es'],
        },
        employee: {
          '@id': `${siteConfig.url}/#ximena-alvarado`,
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Servicios podológicos',
          itemListElement: servicePages.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.name,
              url: `${siteConfig.url}/tratamientos/${service.slug}`,
              description: service.description,
            },
          })),
        },
      },
      {
        '@type': 'Person',
        '@id': `${siteConfig.url}/#ximena-alvarado`,
        name: 'Ximena Alvarado',
        jobTitle: 'Especialista en Podología',
        worksFor: { '@id': `${siteConfig.url}/#organization` },
        image: `${siteConfig.url}/images/ximenafotoperfil.jpeg`,
        url: siteConfig.url,
      },
    ],
  };

  return <StructuredData data={schema} />;
}
