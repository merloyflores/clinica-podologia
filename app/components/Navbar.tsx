'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Instagram, Facebook, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Quiropodia', href: '/quiropodia' },
    { name: 'Tratamientos', href: '/tratamientos' },
    { name: 'Resultados', href: '/resultados' },
    { name: 'Blog', href: '/blog' },
  ];

  // Color morado exacto de tu marca para asegurar que funcione
  const activeColor = "text-[#7B2CBF]"; 
  const hoverColor = "hover:text-[#7B2CBF]";

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300">
      {/* 1. TOP BAR */}
      <div className="bg-emerald-900 text-white py-1.5 px-6 lg:px-20 hidden sm:flex justify-between items-center text-[11px] uppercase tracking-[0.15em] font-bold">
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <Phone size={12} className="text-[#25D366]" /> 
            Citas: (506) 6250-0117
          </span>
        </div>
        <div className="flex gap-4">
          <Instagram size={14} className="hover:text-[#25D366] cursor-pointer transition-colors" />
          <Facebook size={14} className="hover:text-[#25D366] cursor-pointer transition-colors" />
        </div>
      </div>

      {/* 2. MAIN NAV */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 lg:px-20 py-4 flex justify-between items-center shadow-sm relative">
        <Link href="/" className="z-50">
          <Image 
            src="/images/LogoCompleto.PNG" 
            alt="Logo Ximena Alvarado" 
            width={220} 
            height={60} 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Links Escritorio - AQUÍ ESTÁ EL CAMBIO DE COLOR */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name}
                href={link.href}
                className={`relative text-[13px] font-extrabold uppercase tracking-widest transition-all duration-300 ${
                  isActive ? 'text-[#7B2CBF]' : 'text-[#1e293b] hover:text-[#7B2CBF]'
                }`}
              >
                {link.name}
                {/* Línea inferior indicadora */}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#7B2CBF] transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full font-bold'
                }`}></span>
              </Link>
            );
          })}
        </div>

        {/* Botón Agendar con texto visible */}
        <div className="flex items-center gap-4 z-50">
          <Link 
            href="https://wa.me/50662500117"
            target="_blank"
            className="hidden sm:flex items-center gap-3 bg-[#25D366] hover:bg-[#1eb954] px-7 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95"
          >
            <span className="text-white font-black text-xs uppercase tracking-tighter">Agendar Cita</span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
          </Link>

          {/* Menú Hamburguesa */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-800"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MENÚ MÓVIL */}
        <div className={`
          absolute top-full left-0 w-full bg-white border-b border-slate-200 transition-all duration-300 lg:hidden overflow-hidden
          ${isOpen ? 'max-h-screen opacity-100 py-8' : 'max-h-0 opacity-0'}
        `}>
          <div className="flex flex-col gap-6 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-black uppercase tracking-widest ${
                  pathname === link.href ? 'text-[#7B2CBF]' : 'text-slate-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="https://wa.me/50662500117"
              className="bg-[#25D366] text-white px-10 py-4 rounded-full font-bold uppercase text-sm shadow-md"
            >
              Agendar Consulta
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}