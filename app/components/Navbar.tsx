import Link from 'next/link';
import Image from 'next/image';
import { Phone, Instagram, Facebook, Clock } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300">


      {/* 2. MAIN NAV: El "Cristal" */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 px-6 lg:px-20 py-4 flex justify-between items-center shadow-sm">
        <Link href="/" className="group transition-transform hover:scale-[1.02]">
          <Image 
            src="/images/LogoCompleto.PNG" 
            alt="Ximena Alvarado Centro Podológico" 
            width={240} 
            height={70} 
            className="h-12 w-auto object-contain rounded-2xl"
          />
        </Link>

        {/* Links con efecto Underline */}
        <div className="hidden lg:flex items-center gap-10">
          {['Inicio', 'Quiropodia', 'Tratamientos', 'Resultados', 'Blog'].map((item) => (
            <Link 
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative text-[13px] font-bold uppercase tracking-widest text-brand-dark hover:text-brand-purple transition-colors group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Botón de Acción con Animación */}
        <Link 
          href="https://wa.me/50662500117"
          target="_blank"
          className="relative flex items-center gap-3 bg-brand-green text-white bg-gray-400 px-7 py-3 rounded-full font-black text-xs uppercase tracking-tighter hover:bg-[#1eb954] transition-all shadow-lg hover:shadow-green-200/50 overflow-hidden group"
        >
          <span className="relative z-10">Agendar Cita</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          {/* Círculo de pulso para atención */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green"></span>
          </span>
        </Link>
      </nav>
    </header>
  );
}