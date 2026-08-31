export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Podiatric',
    'name': 'Centro Podológico Ximena Alvarado',
    'image': 'https://centropodologicoximenaalvarado.com/og-image.jpg',
    '@id': 'https://centropodologicoximenaalvarado.com',
    'url': 'https://centropodologicoximenaalvarado.com',
    'telephone': '(+506) 6250-0117',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Paseo Colón, San José, CR.',
      'addressLocality': 'San José',
      'addressRegion': 'San José',
      'addressCountry': 'CR'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 9.0000,
      'longitude': -84.0000
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '08:00',
        'closes': '18:00'
      }
    ],
    'priceRange': '$$'
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}