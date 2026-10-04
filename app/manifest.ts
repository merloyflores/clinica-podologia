import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Centro Podológico Ximena Alvarado',
    short_name: 'Ximena Alvarado',
    description: 'Atención podológica especializada en Sabana Norte, San José, Costa Rica.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#7B2CBF',
    lang: 'es-CR',
    icons: [{ src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
  };
}
