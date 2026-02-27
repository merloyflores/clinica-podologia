import Link from 'next/link';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react'; // Instala lucide-react

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-100">
      {/* BARRA SUPERIOR (Contacto y Redes) */}
      <div className="bg-slate-50 py-2 px-6 hidden md:flex justify-between items-center text-sm text-slate-600">
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <Phone size={16} className="text-brand-purple" /> +506 8888-8888
          </span>
          <span className="flex items-center gap-2">
            <Mail size={16} className="text-brand-purple" /> info@ximenaalvarado.com
          </span>
        </div>
        <div className="flex gap-4">
          <Instagram size={18} className="hover:text-brand-purple cursor-pointer transition" />
          <Facebook size={18} className="hover:text-brand-purple cursor-pointer transition" />
        </div>
      </div>

      {/* BARRA PRINCIPAL (Logo y Menú) */}
      <div className="py-4 px-6 flex justify-between items-center bg-white">
        {/* LOGO: Texto Morado con estilo profesional */}
        <div className="flex flex-col">
          <span className="text-2xl font-bold tracking-tighter text-brand-purple leading-none">
            XIMENA ALVARADO
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-slate-500">
            Centro Podológico · Quiropodista
          </span>
        </div>

        {/* MENÚ DE NAVEGACIÓN */}
        <div className="hidden lg:flex items-center gap-8 font-medium text-slate-700">
          <Link href="/" className="hover:text-brand-purple transition">Inicio</Link>
          <Link href="/quiropodia" className="hover:text-brand-purple transition">Quiropodia</Link>
          <Link href="/servicios" className="hover:text-brand-purple transition">Tratamientos</Link>
          <Link href="/casos" className="hover:text-brand-purple transition">Casos Reales</Link>
          <Link href="/blog" className="hover:text-brand-purple transition">Blog</Link>
          
          {/* BOTÓN WHATSAPP (Basado en el estilo de la imagen) */}
          <Link 
            href="https://wa.me/tu-numero" 
            className="bg-brand-green text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-opacity-90 transition shadow-md"
          >
            Agendar Cita
          </Link>
        </div>
      </div>
    </nav>
  );
}