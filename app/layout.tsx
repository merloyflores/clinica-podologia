import type { Metadata, Viewport } from 'next';
import './globals.css' assert { type: 'css' };
import FloatingCareDock from './components/FloatingCareDock';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import JsonLd from './JsonLd';
import { siteConfig } from './lib/seo';

const SITE_TITLE = 'Podología en San José | Centro Podológico Ximena Alvarado';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: SITE_TITLE,
    template: '%s | Ximena Alvarado',
  },
  description: siteConfig.description,
  keywords: [
    'podología San José Costa Rica',
    'podólogo San José',
    'centro podológico San José',
    'quiropodia San José',
    'uña encarnada San José',
    'hongos en las uñas San José',
    'pie diabético San José',
    'callos en los pies San José',
    'podología Sabana Norte',
    'Ximena Alvarado podología',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'healthcare',
  alternates: {
    canonical: '/',
    languages: { 'es-CR': '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: SITE_TITLE,
    description: siteConfig.description,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Centro Podológico Ximena Alvarado en Sabana Norte, San José',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: siteConfig.description,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CR" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <JsonLd />
        <div className="relative flex flex-col grow pb-10">
          <Navbar />
          <main className="grow">{children}</main>
          <FloatingCareDock />
        </div>
        <Footer />
      </body>
    </html>
  );
}
