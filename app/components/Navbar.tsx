'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Instagram, Facebook, Menu, X } from 'lucide-react';
import { WhatsApp } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThreads } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Quiropodia', href: '/quiropodia' },
    { name: 'Tratamientos', href: '/tratamientos' },
    { name: 'Resultados', href: '/resultados' },
    { name: 'Contactenos', href: '/contactenos' },
  ];

  return (
    <header className="fixed w-full top-0 z-100 transition-all duration-300 shadow-lg">
      {/* 1. TOP BAR */}
      <div className="bg-slate-900 text-slate-300 py-2 px-6 xl:px-20 hidden sm:flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-black border-b border-slate-800">
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <Phone size={12} className="text-[#25D366]" /> 
            Citas WhatsApp: <span className="text-white">+(506) 6250-0117</span>
          </span>
        </div>
        <div className="flex gap-5 items-center">
          <span className="text-slate-500 hidden md:block">Síguenos en redes:</span>
          
          {/* Facebook */}
          <a href="https://www.facebook.com/XimenaAlvaradoQuiropodista/" target="_blank" rel="noopener noreferrer">
            <Facebook size={14} className="hover:text-blue-600 cursor-pointer transition-colors" />
          </a>
          
          {/* Instagram */}
          <a href="https://www.instagram.com/centropd_ximena.alvarado/" target="_blank" rel="noopener noreferrer">
            <Instagram size={14} className="hover:text-pink-600 cursor-pointer transition-colors" />
          </a>
          
          {/* Threads - Ajustado con FontAwesome */}
          <a href="https://www.threads.net/@centropd_ximena.alvarado" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <FontAwesomeIcon 
              icon={faThreads} 
              className="text-[14px] w-3.5 h-3.5 hover:text-white cursor-pointer transition-colors" 
            />
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/50662500117" target="_blank" rel="noopener noreferrer">
            <WhatsApp sx={{ fontSize: 15 }} className="hover:text-green-600 cursor-pointer transition-colors" />
          </a>
        </div>
      </div>

      {/* 2. MAIN NAV */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 xl:px-20 py-4 flex justify-between items-center relative">
        <Link href="/" className="z-50 hover:opacity-80 transition-opacity">
          <Image 
            src="/images/logonavbar.PNG" 
            alt="Logo" 
            width={240} 
            height={80} 
            className="h-9 md:h-11 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links - Breakpoint 1280px */}
        <div className="hidden xl:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className={`group relative text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                pathname === link.href ? 'text-[#7B2CBF]' : 'text-slate-600 hover:text-[#7B2CBF]'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-0.75 bg-[#7B2CBF] rounded-full transition-all duration-300 ${
                pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 z-50">
          {/* BOTÓN ESCRITORIO CON INDICADOR PARPADEANTE */}
          <Link 
            href="https://wa.me/50662500117"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-3 bg-slate-900 hover:bg-[#7B2CBF] px-8 py-3.5 rounded-2xl shadow-xl transition-all"
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
            className="xl:hidden p-2 text-slate-900 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MENÚ MÓVIL FULL SCREEN */}
        <div className={`fixed top-18 sm:top-27 xl:hidden left-0 w-full bg-slate-900 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'h-[calc(100vh-72px)] opacity-100' : 'h-0 opacity-0'
        }`}>
          <div className="flex flex-col justify-center items-center h-full gap-10 px-6">
            {navLinks.map((link, index) => (
              <Link 
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: isOpen ? `${index * 100}ms` : '0ms' }}
                className={`text-2xl font-black uppercase tracking-[0.2em] transform transition-all ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${
                  pathname === link.href ? 'text-[#7B2CBF]' : 'text-white hover:text-[#7B2CBF]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className={`h-px w-24 bg-slate-800 my-4 transition-all duration-1000 ${isOpen ? 'w-48' : 'w-0'}`}></div>
            
            {/* BOTÓN MÓVIL CON INDICADOR PARPADEANTE */}
            <Link 
              href="https://wa.me/50662500117"
              className={`bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-2xl transform transition-all duration-700 delay-500 flex items-center gap-3 ${
                isOpen ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
              }`}
            >
              <span>Agendar Consulta</span>
              <div className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}