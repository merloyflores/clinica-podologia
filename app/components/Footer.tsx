// components/JsonLd.tsx

export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['MedicalBusiness', 'Podiatric'],
    '@id': 'https://centropodologicoximenaalvarado.com/#organization',
    'name': 'Centro Podológico Ximena Alvarado',
    'alternateName': 'Ximena Alvarado Quiropodista',
    'url': 'https://centropodologicoximenaalvarado.com',
    'logo': 'https://centropodologicoximenaalvarado.com/images/logonavbar.PNG',
    'image': 'https://centropodologicoximenaalvarado.com/images/logonavbar.PNG',
    'description': 'Especialista en salud ungueal y pie diabético. Comprometida con la excelencia clínica y el bienestar integral en San José, Costa Rica.',
    'telephone': '+50662500117',
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Sabana Norte',
      'addressLocality': 'San José',
      'addressRegion': 'San José',
      'addressCountry': 'CR'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 9.933300,
      'longitude': -84.113600
    },
    'hasMap': 'https://www.google.com/maps?cid=1812822452243445851',
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        'opens': '07:00',
        'closes': '16:00'
      }
    ],
    'sameAs': [
      'https://www.facebook.com/XimenaAlvaradoQuiropodista/',
      'https://www.instagram.com/centropd_ximena.alvarado/',
      'https://wa.me/50662500117'
    ],
    'medicalSpecialty': 'Podiatric',
    'availableService': [
      {
        '@type': 'MedicalProcedure',
        'name': 'Salud Ungueal'
      },
      {
        '@type': 'MedicalProcedure',
        'name': 'Atención y Cuidado del Pie Diabético'
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}