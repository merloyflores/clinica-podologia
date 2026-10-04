import type { Metadata } from 'next';
import './globals.css' assert { type: 'css' };
import BotonWhatsApp from "./components/BotonWhatsApp"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import JsonLd from "./JsonLd"

const SITE_URL = 'https://centropodologicoximenaalvarado.com';
const SITE_TITLE = 'Centro Podológico Ximena Alvarado | San José, Costa Rica';
const SITE_DESCRIPTION =
  'Atención podológica especializada en San José, Costa Rica: uña encarnada, hongos en las uñas, pie diabético y callosidades. Especialista en Podología Ximena Alvarado. Agende su cita por WhatsApp.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | Centro Podológico Ximena Alvarado',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'podología San José',
    'uña encarnada Costa Rica',
    'hongos en las uñas',
    'pie diabético',
    'quiropodia San José',
    'Centro Podológico Ximena Alvarado',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    url: SITE_URL,
    siteName: 'Centro Podológico Ximena Alvarado',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/images/logonavbar.PNG'],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/images/logonavbar.PNG'],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <JsonLd />
        {/* Este div relativo controla el área de movimiento del botón */}
        <div className="relative flex flex-col grow pb-10">
          <Navbar />
          <main className="grow">{children}</main>
          <BotonWhatsApp />
        </div>

        <Footer />
      </body>
    </html>
  )
}