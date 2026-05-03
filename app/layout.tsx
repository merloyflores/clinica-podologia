import './globals.css'
import BotonWhatsApp from "./components/BotonWhatsApp"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
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