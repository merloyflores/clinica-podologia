'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  CalendarCheck2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Facebook,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Stethoscope,
  X,
} from 'lucide-react';
import { WhatsApp } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThreads } from '@fortawesome/free-brands-svg-icons';

const treatmentLinks = [
  { name: 'Uña encarnada', href: '/tratamientos/una-encarnada', note: 'Onicocriptosis y manejo podológico' },
  { name: 'Hongos en las uñas', href: '/tratamientos/hongos-unas', note: 'Onicomicosis y seguimiento ungueal' },
  { name: 'Pie diabético', href: '/tratamientos/pie-diabetico', note: 'Valoración preventiva y cuidado especializado' },
  { name: 'Callosidades', href: '/tratamientos/callosidades', note: 'Helomas, durezas y confort al caminar' },
  { name: 'Verrugas plantares', href: '/tratamientos/verrugas-plantares', note: 'Valoración y manejo localizado' },
  { name: 'Matricectomía ungueal', href: '/tratamientos/matricectomia-ungueal', note: 'Procedimiento correctivo en casos indicados' },
  { name: 'Pedicura podológica', href: '/tratamientos/pedicura-podologica', note: 'Mantenimiento preventivo del pie sano' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setMobileTreatmentsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Quiropodia', href: '/quiropodia' },
    { name: 'Resultados', href: '/resultados' },
    { name: 'Contáctenos', href: '/contactenos' },
  ];

  const treatmentActive = pathname === '/tratamientos' || pathname.startsWith('/tratamientos/');

  return (
    <header className="fixed inset-x-0 top-0 z-100 border-b border-slate-200 bg-white shadow-[0_6px_24px_rgba(15,23,42,0.06)] sm:border-slate-200/80 sm:bg-white/95 sm:shadow-none sm:backdrop-blur-xl">
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

      <nav className="mx-auto flex h-[74px] max-w-7xl items-center justify-between bg-white px-6 sm:bg-transparent lg:px-8">
        <Link href="/" className="relative z-50 transition-opacity hover:opacity-80" onClick={() => setIsOpen(false)}>
          <Image src="/images/logonavbar.PNG" alt="Centro Podológico Ximena Alvarado" width={240} height={80} className="h-10 w-auto object-contain md:h-11" priority />
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          {navLinks.slice(0, 2).map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.name} href={link.href} className={`relative py-2 text-[13px] font-semibold tracking-[-0.01em] transition-colors ${active ? 'text-[#6e27aa]' : 'text-slate-600 hover:text-slate-950'}`}>
                {link.name}
                <span className={`absolute inset-x-0 -bottom-0.5 mx-auto h-0.5 rounded-full bg-[#7B2CBF] transition-all ${active ? 'w-full' : 'w-0'}`} />
              </Link>
            );
          })}

          <div className="group relative">
            <Link
              href="/tratamientos"
              className={`relative flex items-center gap-1.5 py-2 text-[13px] font-semibold tracking-[-0.01em] transition-colors ${treatmentActive ? 'text-[#6e27aa]' : 'text-slate-600 hover:text-slate-950'}`}
              aria-haspopup="true"
            >
              Tratamientos
              <ChevronDown size={14} className="mt-0.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
              <span className={`absolute inset-x-0 -bottom-0.5 mx-auto h-0.5 rounded-full bg-[#7B2CBF] transition-all ${treatmentActive ? 'w-full' : 'w-0'}`} />
            </Link>

            <div className="invisible absolute left-1/2 top-full w-[660px] -translate-x-1/2 translate-y-3 pt-5 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.14)]">
                <div className="grid grid-cols-[1fr_220px]">
                  <div className="p-6">
                    <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7B2CBF]">Atención especializada</p>
                        <p className="mt-1 text-sm font-semibold text-slate-950">Tratamientos podológicos</p>
                      </div>
                      <Link href="/tratamientos" className="flex items-center gap-1 text-xs font-semibold text-slate-500 transition-colors hover:text-[#7B2CBF]">
                        Ver todos <ChevronRight size={14} />
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {treatmentLinks.map((item) => (
                        <Link key={item.href} href={item.href} className="group/item rounded-xl px-3 py-3 transition-colors hover:bg-[#7B2CBF]/[0.045] focus:bg-[#7B2CBF]/[0.045] focus:outline-none">
                          <span className="block text-[13px] font-semibold text-slate-800 transition-colors group-hover/item:text-[#6e27aa]">{item.name}</span>
                          <span className="mt-0.5 block text-[10.5px] leading-4 text-slate-500">{item.note}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between border-l border-slate-100 bg-[#faf9fb] p-6">
                    <div>
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#7B2CBF]/10 bg-[#7B2CBF]/7 text-[#7B2CBF]">
                        <Stethoscope size={19} />
                      </div>
                      <p className="text-sm font-semibold leading-5 text-slate-900">¿No sabe cuál tratamiento necesita?</p>
                      <p className="mt-2 text-xs leading-5 text-slate-500">Puede reservar una valoración y recibir orientación según su caso.</p>
                    </div>
                    <Link href="/reservar" className="mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-[#6f2aa8] px-4 text-xs font-semibold text-white transition-colors hover:bg-[#5d228f]">
                      <CalendarCheck2 size={15} /> Agendar valoración
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {navLinks.slice(2).map((link) => {
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
          <Link href="/reservar" className="hidden sm:inline-flex h-11 items-center justify-center rounded-xl bg-[#6f2aa8] px-6 text-[13px] font-semibold text-white shadow-[0_8px_24px_rgba(111,42,168,0.18)] transition-all hover:bg-[#5d228f] hover:shadow-[0_10px_28px_rgba(111,42,168,0.24)]">
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

      <div className={`xl:hidden fixed inset-x-0 bottom-0 top-[74px] border-t border-slate-100 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.12)] transition-all duration-300 sm:top-[110px] sm:shadow-none ${isOpen ? 'visible opacity-100' : 'invisible pointer-events-none opacity-0'}`}>
        <div className="mx-auto flex h-full max-w-xl flex-col overflow-y-auto px-6 py-8">
          <div className="flex flex-col border-y border-slate-100">
            {navLinks.slice(0, 2).map((link) => (
              <Link key={link.name} href={link.href} className={`flex items-center justify-between border-b border-slate-100 py-5 text-lg font-semibold tracking-tight transition-colors ${pathname === link.href ? 'text-[#7B2CBF]' : 'text-slate-800 hover:text-[#7B2CBF]'}`}>
                {link.name}
                <span className={`h-1.5 w-1.5 rounded-full ${pathname === link.href ? 'bg-[#7B2CBF]' : 'bg-slate-200'}`} />
              </Link>
            ))}

            <div className="border-b border-slate-100">
              <button
                type="button"
                onClick={() => setMobileTreatmentsOpen((value) => !value)}
                aria-expanded={mobileTreatmentsOpen}
                className={`flex w-full items-center justify-between py-5 text-left text-lg font-semibold tracking-tight transition-colors ${treatmentActive ? 'text-[#7B2CBF]' : 'text-slate-800'}`}
              >
                <span>Tratamientos</span>
                <ChevronDown size={19} className={`transition-transform duration-200 ${mobileTreatmentsOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`grid transition-[grid-template-rows] duration-300 ${mobileTreatmentsOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <div className="mb-5 rounded-2xl border border-slate-200 bg-[#faf9fb] p-2">
                    <Link href="/tratamientos" className="mb-1 flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-[#6e27aa] transition-colors hover:bg-white">
                      Ver todos los tratamientos <ChevronRight size={16} />
                    </Link>
                    {treatmentLinks.map((item) => (
                      <Link key={item.href} href={item.href} className="flex items-center justify-between rounded-xl px-3 py-3 text-[13px] font-medium text-slate-700 transition-colors hover:bg-white hover:text-[#6e27aa]">
                        {item.name}<ChevronRight size={14} className="text-slate-300" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link key={link.name} href={link.href} className={`flex items-center justify-between border-b border-slate-100 py-5 text-lg font-semibold tracking-tight transition-colors ${pathname === link.href ? 'text-[#7B2CBF]' : 'text-slate-800 hover:text-[#7B2CBF]'}`}>
                {link.name}
                <span className={`h-1.5 w-1.5 rounded-full ${pathname === link.href ? 'bg-[#7B2CBF]' : 'bg-slate-200'}`} />
              </Link>
            ))}
          </div>

          <div className="mt-auto grid gap-3 pt-8">
            <Link href="/reservar" className="flex h-14 items-center justify-center rounded-xl bg-[#6f2aa8] text-sm font-semibold text-white">
              Agendar cita
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
