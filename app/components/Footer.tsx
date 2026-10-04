import { WhatsApp } from '@mui/icons-material';
import { MapPin, Facebook, Instagram, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-[#17151b] pb-10 pt-16 text-slate-300 md:pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-slate-800/80 pb-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <Image src="/images/logonavbar.PNG" alt="Logo Ximena Alvarado" width={180} height={60} className="mb-6 h-10 w-auto object-contain brightness-0 invert" />
            <p className="max-w-sm text-sm font-normal leading-7 text-slate-400">
              Especialista en Podología, enfocada en salud ungueal y pie diabético. Comprometida con la excelencia profesional y el bienestar integral en San José, Costa Rica.
            </p>
            <div className="mt-6 flex gap-2">
              <a href="https://www.facebook.com/XimenaAlvaradoQuiropodista/" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 text-slate-400 transition-colors hover:border-slate-600 hover:text-white"><Facebook size={17} /></a>
              <a href="https://www.instagram.com/centropd_ximena.alvarado/" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 text-slate-400 transition-colors hover:border-slate-600 hover:text-white"><Instagram size={17} /></a>
              <a href="https://wa.me/50662500117" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 text-slate-400 transition-colors hover:border-[#25D366]/50 hover:text-[#25D366]"><WhatsApp sx={{ fontSize: 18 }} /></a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold text-white">Horario de Atención</h4>
            <div className="space-y-4 text-sm">
              <div><p className="text-slate-500">Martes a Domingo</p><p className="mt-1 font-medium text-slate-200">7:00 AM - 4:00 PM</p></div>
              <div><p className="text-slate-500">Lunes</p><p className="mt-1 font-medium text-slate-200">Cerrado</p></div>
            </div>
            <p className="mt-7 border-l-2 border-[#7B2CBF] pl-4 text-xs leading-6 text-slate-400">
              Atención exclusiva <span className="font-semibold text-slate-200">con cita previa</span> para garantizar su espacio.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold text-white">Ubicación</h4>
            <div className="mb-5 flex gap-3">
              <MapPin className="mt-0.5 shrink-0 text-[#a66bd5]" size={18} />
              <p className="text-sm font-medium leading-6 text-slate-300">
                Sabana Norte, San Jose Costa Rica.<br />
                <span className="text-xs font-normal text-slate-500">Consulta exacta vía WhatsApp tras agendar.</span>
              </p>
            </div>
            <div className="aspect-video w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15721.285880424694!2d-84.113600!3d9.933300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e342ad260d5b%3A0x1928646b978938!2sSabana%20Norte%2C%20San%20Jos%C3%A9!5e0!3m2!1ses!2scr!4v1710000000000!5m2!1ses!2scr" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>

          <div>
            <div className="rounded-2xl border border-slate-800 bg-white/[0.03] p-7">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]"><ShieldCheck size={23} /></div>
              <h4 className="mb-2 text-sm font-semibold text-white">Bioseguridad Garantizada</h4>
              <p className="text-xs font-normal leading-6 text-slate-400">Cumplimos con los más altos estándares de esterilización y asepsia para su seguridad.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center md:flex-row md:text-left">
          <p className="text-[11px] font-medium text-slate-500">© {currentYear} Ximena Alvarado. Todos los derechos reservados.</p>
          <p className="text-[11px] font-medium text-slate-600">Powered by <a href="https://nexflow-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-400 transition-colors hover:text-[#a66bd5]">Nexflow Digital</a></p>
        </div>
      </div>
    </footer>
  );
}
