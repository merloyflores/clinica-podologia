'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Clock3, Facebook, Instagram, MapPin, Menu, Phone, X } from 'lucide-react';
import { WhatsApp } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThreads } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Quiropodia', href: '/quiropodia' },
    { name: 'Tratamientos', href: '/tratamientos' },
    { name: 'Resultados', href: '/resultados' },
    { name: 'Contactenos', href: '/contactenos' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-100 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="hidden sm:block border-b border-slate-100 bg-[#17151b] text-slate-300">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-5 text-[11px] font-medium">
            <span className="flex items-center gap-2"><MapPin size={12} className="text-[#a66bd5]" />Sabana Norte, San José, Costa Rica</span>
            <span className="hidden lg:flex items-center gap-2"><Clock3 size={12} className="text-[#a66bd5]" />Martes a Domingo · 7:00 AM - 4:00 PM</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+50662500117" className="flex items-center gap-2 text-[11px] font-medium text-slate-200 transition-colors hover:text-white">
              <Phone size={12} /> +(506) 6250-0117
            </a>
            <span className="h-3 w-px bg-slate-700" />
            <a href="https://www.facebook.com/XimenaAlvaradoQuiropodista/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors hover:text-white"><Facebook size={13} /></a>
            <a href="https://www.instagram.com/centropd_ximena.alvarado/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors hover:text-white"><Instagram size={13} /></a>
            <a href="https://www.threads.net/@centropd_ximena.alvarado" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="flex transition-colors hover:text-white"><FontAwesomeIcon icon={faThreads} className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="relative z-50 transition-opacity hover:opacity-80" onClick={() => setIsOpen(false)}>
          <Image src="/images/logonavbar.PNG" alt="Centro Podológico Ximena Alvarado" width={240} height={80} className="h-10 md:h-11 w-auto object-contain" priority />
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.name} href={link.href} className={`relative py-2 text-[13px] font-semibold tracking-[-0.01em] transition-colors ${active ? 'text-[#6e27aa]' : 'text-slate-600 hover:text-slate-950'}`}>
                {link.name}
                <span className={`absolute inset-x-0 -bottom-0.5 mx-auto h-0.5 rounded-full bg-[#7B2CBF] transition-all ${active ? 'w-full' : 'w-0'}`} />
              </Link>
            );
          })}
        </div>

        <div className="relative z-50 flex items-center gap-3">
          <Link href="/contactenos" className="hidden sm:inline-flex h-11 items-center justify-center rounded-xl bg-[#6f2aa8] px-6 text-[13px] font-semibold text-white shadow-[0_8px_24px_rgba(111,42,168,0.18)] transition-all hover:bg-[#5d228f] hover:shadow-[0_10px_28px_rgba(111,42,168,0.24)]">
            Agendar cita
          </Link>
          <a href="https://wa.me/50662500117" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hidden sm:flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-all hover:border-[#25D366]/40 hover:bg-[#25D366]/5 hover:text-[#1f9f50]">
            <WhatsApp sx={{ fontSize: 20 }} />
          </a>
          <button onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'} className="xl:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 transition-colors hover:bg-slate-50">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div className={`xl:hidden fixed inset-x-0 top-[74px] sm:top-[110px] bottom-0 bg-white transition-all duration-300 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'}`}>
        <div className="mx-auto flex h-full max-w-xl flex-col px-6 py-10">
          <div className="flex flex-col divide-y divide-slate-100 border-y border-slate-100">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className={`flex items-center justify-between py-5 text-xl font-semibold tracking-tight transition-colors ${pathname === link.href ? 'text-[#7B2CBF]' : 'text-slate-800 hover:text-[#7B2CBF]'}`}>
                {link.name}
                <span className={`h-1.5 w-1.5 rounded-full ${pathname === link.href ? 'bg-[#7B2CBF]' : 'bg-slate-200'}`} />
              </Link>
            ))}
          </div>

          <div className="mt-auto grid gap-3 pt-8">
            <Link href="/contactenos" onClick={() => setIsOpen(false)} className="flex h-14 items-center justify-center rounded-xl bg-[#6f2aa8] text-sm font-semibold text-white">
              Agendar Consulta
            </Link>
            <a href="https://wa.me/50662500117" target="_blank" rel="noopener noreferrer" className="flex h-14 items-center justify-center gap-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700">
              <WhatsApp sx={{ fontSize: 20 }} /> WhatsApp +(506) 6250-0117
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
