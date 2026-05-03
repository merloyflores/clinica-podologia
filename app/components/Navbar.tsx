'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Instagram, Facebook, Menu, X } from 'lucide-react';
import { WhatsApp } from '@mui/icons-material';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Quiropodia', href: '/quiropodia' },
    { name: 'Tratamientos', href: '/tratamientos' },
    { name: 'Resultados', href: '/resultados' },
    { name: 'Contactenos', href: '/contactenos' },
  ];

  const activeColor = "text-[#7B2CBF]"; 
  const hoverColor = "hover:text-[#7B2CBF]";

  return (
    <header className="fixed w-full top-0 z-100 transition-all duration-300 shadow-lg">
      {/* 1. TOP BAR - Ahora en tono con el Footer (Slate 900) */}
      <div className="bg-slate-900 text-slate-300 py-2 px-6 lg:px-20 hidden sm:flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-black border-b border-slate-800">
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <Phone size={12} className="text-[#25D366]" /> 
            Citas WhatsApp: <span className="text-white">(506) 6250-0117</span>
          </span>
        </div>
        <div className="flex gap-5 items-center">
          <span className="text-slate-500 hidden md:block">Síguenos en redes:</span>
          <a href="https://facebook.com/XimenaAlvaradoQuiropodista/" target="_blank" rel="noopener noreferrer">
            <Facebook size={14} className="hover:text-blue-600 cursor-pointer transition-colors" />
          </a>
          <a href="https://instagram.com/centropd_ximena.alvarado/" target="_blank" rel="noopener noreferrer">
            <Instagram size={14} className="hover:text-pink-600 cursor-pointer transition-colors" />
          </a>
          <a href="https://wa.me/50662500117" target="_blank" rel="noopener noreferrer">
            <WhatsApp sx={{ fontSize: 14 }} className="hover:text-green-600 cursor-pointer transition-colors" />
          </a>
        </div>
      </div>

      {/* 2. MAIN NAV - Estética de cristal con bordes suaves */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 lg:px-20 py-4 flex justify-between items-center relative">
        <Link href="/" className="z-50 hover:opacity-80 transition-opacity">
          <Image 
            src="/images/logonavbar.PNG" 
            alt="Logo Ximena Alvarado" 
            width={240} 
            height={80} 
            className="h-9 md:h-11 w-auto object-contain"
          />
        </Link>

        {/* Links de escritorio */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name}
                href={link.href}
                className={`group relative text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  isActive ? activeColor : 'text-slate-600 hover:text-[#7B2CBF]'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 h-0.75 bg-[#7B2CBF] rounded-full transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4 z-50">
          <Link 
            href="https://wa.me/50662500117"
            target="_blank"
            className="hidden sm:flex items-center gap-3 bg-slate-900 hover:bg-[#7B2CBF] px-8 py-3.5 rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 group"
          >
            <span className="text-white font-black text-[10px] uppercase tracking-widest">Agendar Cita</span>
            <div className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
            </div>
          </Link>

          {/* Menú Hamburguesa */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-900 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MENÚ MÓVIL - Ahora con fondo Slate 900 para coherencia */}
        <div className={`absolute top-full left-0 w-full bg-slate-900 transition-all duration-500 lg:hidden overflow-hidden shadow-2xl ${
          isOpen ? 'max-h-screen opacity-100 py-12' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col gap-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-black uppercase tracking-[0.3em] transition-colors ${
                  pathname === link.href ? 'text-[#7B2CBF]' : 'text-white hover:text-[#7B2CBF]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px w-20 bg-slate-800 my-2"></div>
            <Link 
              href="https://wa.me/50662500117"
              className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-lg hover:bg-white hover:text-[#25D366] transition-all"
            >
              Agendar Consulta
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}