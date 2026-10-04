import type { MetadataRoute } from 'next';
import { servicePages, siteConfig } from './lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteConfig.url}/tratamientos`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteConfig.url}/quiropodia`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${siteConfig.url}/reservar`, changeFrequency: 'daily', priority: 0.8 },
    { url: `${siteConfig.url}/zonas-de-atencion`, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${siteConfig.url}/preguntas-frecuentes`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteConfig.url}/resultados`, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${siteConfig.url}/contactenos`, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = servicePages.map((service) => ({
    url: `${siteConfig.url}/tratamientos/${service.slug}`,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
