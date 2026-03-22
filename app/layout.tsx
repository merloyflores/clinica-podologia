import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BotonWhatsApp from './components/BotonWhatsApp' // 1. Importamos el nuevo componente

export const metadata = {
  title: 'Ximena Alvarado | Quiropodía Profesional',
  description: 'Especialista en salud ungueal y pie diabético en San José, Costa Rica.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>
        <Navbar />
        
        {children}
        
        {/* 2. Lo colocamos aquí para que flote sobre todo el contenido */}
        <BotonWhatsApp />
        
        <Footer />
      </body>
    </html>
  )
}

