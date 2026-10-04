import { WhatsApp } from '@mui/icons-material';
import { MapPin, Facebook, Instagram, ShieldCheck, CalendarCheck2, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const footerTreatments = [
  { label: 'Uña encarnada', href: '/tratamientos/una-encarnada' },
  { label: 'Hongos en las uñas', href: '/tratamientos/hongos-unas' },
  { label: 'Pie diabético', href: '/tratamientos/pie-diabetico' },
  { label: 'Callosidades', href: '/tratamientos/callosidades' },
  { label: 'Verrugas plantares', href: '/tratamientos/verrugas-plantares' },
  { label: 'Pedicura podológica', href: '/tratamientos/pedicura-podologica' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-[#17151b] pb-10 pt-16 text-slate-300 md:pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-slate-800/80 pb-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <Image src="/images/logonavbar.PNG" alt="Logo Ximena Alvarado" width={180} height={60} className="mb-6 h-10 w-auto object-contain brightness-0 invert" />
            <p className="max-w-sm text-sm font-normal leading-7 text-slate-400">
              Especialista en Podología, enfocada en salud ungueal y pie diabético. Comprometida con la excelencia profesional y el bienestar integral en San José, Costa Rica.
            </p>
            <Link href="/reservar" className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-[#6f2aa8] px-4 text-xs font-semibold text-white transition-colors hover:bg-[#5d228f]"><CalendarCheck2 size={16} /> Agendar cita</Link>
            <div className="mt-4 flex gap-2">
              <a href="https://www.facebook.com/XimenaAlvaradoQuiropodista/" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 text-slate-400 transition-colors hover:border-slate-600 hover:text-white"><Facebook size={17} /></a>
              <a href="https://www.instagram.com/centropd_ximena.alvarado/" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 text-slate-400 transition-colors hover:border-slate-600 hover:text-white"><Instagram size={17} /></a>
              <a href="https://wa.me/50662500117" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 text-slate-400 transition-colors hover:border-[#25D366]/50 hover:text-[#25D366]"><WhatsApp sx={{ fontSize: 18 }} /></a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <h4 className="text-sm font-semibold text-white">Tratamientos</h4>
              <Link href="/tratamientos" className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#c394e5] transition-colors hover:text-white">Ver todos</Link>
            </div>
            <nav aria-label="Tratamientos podológicos" className="grid gap-1">
              {footerTreatments.map((item) => (
                <Link key={item.href} href={item.href} className="group flex items-center justify-between rounded-lg py-2 text-xs font-medium text-slate-400 transition-colors hover:text-white">
                  <span>{item.label}</span>
                  <ChevronRight size={13} className="text-slate-700 transition-all group-hover:translate-x-0.5 group-hover:text-[#a66bd5]" />
                </Link>
              ))}
            </nav>
            <div className="mt-5 border-t border-slate-800 pt-5">
              <Link href="/quiropodia" className="text-xs font-semibold text-slate-300 transition-colors hover:text-white">Conocer el servicio de Quiropodia →</Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-6 text-sm font-semibold text-white">Información</h4>
            <div className="space-y-4 text-sm">
              <div><p className="text-slate-500">Martes a Domingo</p><p className="mt-1 font-medium text-slate-200">7:00 AM - 4:00 PM</p></div>
              <div><p className="text-slate-500">Lunes</p><p className="mt-1 font-medium text-slate-200">Cerrado</p></div>
            </div>
            <p className="mt-6 border-l-2 border-[#7B2CBF] pl-4 text-xs leading-6 text-slate-400">
              Atención exclusiva <span className="font-semibold text-slate-200">con cita previa</span> para garantizar su espacio.
            </p>
            <nav aria-label="Información útil" className="mt-6 flex flex-col gap-2.5 text-xs font-medium">
              <Link href="/preguntas-frecuentes" className="text-slate-400 transition-colors hover:text-white">Preguntas frecuentes</Link>
              <Link href="/zonas-de-atencion" className="text-slate-400 transition-colors hover:text-white">Zonas de atención</Link>
              <Link href="/resultados" className="text-slate-400 transition-colors hover:text-white">Resultados</Link>
              <Link href="/contactenos" className="text-slate-400 transition-colors hover:text-white">Contáctenos</Link>
            </nav>
          </div>

          <div className="lg:col-span-4">
            <h4 className="mb-6 text-sm font-semibold text-white">Ubicación</h4>
            <div className="mb-5 flex gap-3">
              <MapPin className="mt-0.5 shrink-0 text-[#a66bd5]" size={18} />
              <p className="text-sm font-medium leading-6 text-slate-300">
                Sabana Norte, San José, Costa Rica.<br />
                <span className="text-xs font-normal text-slate-500">Consulta exacta vía WhatsApp tras agendar.</span>
              </p>
            </div>
            <Link href="/zonas-de-atencion" className="mb-5 inline-flex text-xs font-semibold text-[#c394e5] transition-colors hover:text-white">Pacientes de San José, Heredia, Alajuela y Cartago →</Link>
            <div className="aspect-[16/7] w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15721.285880424694!2d-84.113600!3d9.933300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e342ad260d5b%3A0x1928646b978938!2sSabana%20Norte%2C%20San%20Jos%C3%A9!5e0!3m2!1ses!2scr!4v1710000000000!5m2!1ses!2scr" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>

        <div className="my-8 flex flex-col gap-5 rounded-2xl border border-slate-800 bg-white/[0.025] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7B2CBF]/10 text-[#c394e5]"><ShieldCheck size={20} /></div>
            <div>
              <p className="text-xs font-semibold text-white">Protocolos de bioseguridad y esterilización</p>
              <p className="mt-1 text-[11px] leading-5 text-slate-500">Atención profesional con protocolos de asepsia orientados a la seguridad de cada paciente.</p>
            </div>
          </div>
          <Link href="/reservar" className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-[#c394e5] transition-colors hover:text-white">Consultar horarios disponibles <ChevronRight size={14} /></Link>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-1 text-center md:flex-row md:text-left">
          <p className="text-[11px] font-medium text-slate-500">© {currentYear} Ximena Alvarado. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4 text-[11px] font-medium text-slate-600"><Link href="/gestion-agenda" className="transition-colors hover:text-slate-400">Gestión de agenda</Link><span className="h-3 w-px bg-slate-800" /><p>Powered by <a href="https://nexflow-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-400 transition-colors hover:text-[#a66bd5]">Nexflow Digital</a></p></div>
        </div>
      </div>
    </footer>
  );
}
