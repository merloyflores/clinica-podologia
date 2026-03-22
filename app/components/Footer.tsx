import { WhatsApp } from '@mui/icons-material';
import { MapPin, Phone, Facebook, Instagram, Clock, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 pt-24 pb-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Ajuste en el grid: text-center para móvil, text-left para LG */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20 text-center lg:text-left">
          
          {/* Columna 1: Branding */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
            <div className="mb-6">
              <Image 
                src="/images/LogoNavBar.png" 
                alt="Logo Ximena Alvarado" 
                width={180} 
                height={60}
                className="h-9 md:h-11 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
              Especialista en salud ungueal y pie diabético. Comprometida con la excelencia clínica y el bienestar integral en San José, Costa Rica.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="https://www.facebook.com/XimenaAlvaradoQuiropodista/" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/centropd_ximena.alvarado/" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-600 transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/50662500117" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-green-600 transition-all">
                <WhatsApp sx={{ fontSize: 18 }} />
              </a>
            </div>
          </div>

          {/* Columna 2: Horarios */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-8">Horario de Atención</h4>
            <ul className="space-y-4 w-full">
              {[
                { days: "Martes a Domingo", time: "7:00 AM - 4:00 PM" },
                { days: "Lunes", time: "Cerrado" }
              ].map((item, i) => (
                <li key={i} className="flex flex-col">
                  <span className="text-[10px] font-black uppercase text-slate-500 tracking-wider">{item.days}</span>
                  <span className="text-sm font-bold text-slate-200">{item.time}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-800 w-full">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 group">
                <div className="w-1.5 h-1.5 rounded-full bg-[#7B2CBF] lg:mt-1.5 animate-pulse shadow-[0_0_8px_#7B2CBF]"></div>
                <p className="text-[11px] font-bold text-slate-400 leading-relaxed tracking-wide uppercase italic">
                  Atención exclusiva <span className="text-white font-black">bajo cita previa</span> para garantizar su espacio.
                </p>
              </div>
            </div>
          </div>

          {/* Columna 3: Ubicación */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-8">Ubicación Clínica</h4>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 mb-6">
              <MapPin className="text-[#a855f7] shrink-0" size={20} />
              <p className="text-sm font-bold text-slate-200 leading-relaxed">
                Sabana Norte, San Jose Costa Rica.<br />
                <span className="font-medium text-slate-500 text-xs">Consulta exacta vía WhatsApp tras agendar.</span>
              </p>
            </div>
            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-800 shadow-sm relative transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15721.285880424694!2d-84.113600!3d9.933300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e342ad260d5b%3A0x1928646b978938!2sSabana%20Norte%2C%20San%20Jos%C3%A9!5e0!3m2!1ses!2scr!4v1710000000000!5m2!1ses!2scr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Columna 4: Certificación */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
            <div className="p-8 bg-slate-800/50 rounded-2xl border border-slate-800 w-full flex flex-col items-center lg:items-start">
              <ShieldCheck className="text-[#25D366] mb-4" size={32} />
              <h4 className="text-white font-black text-sm mb-2">Bioseguridad Garantizada</h4>
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                Cumplimos con los más altos estándares de esterilización y asepsia para su seguridad.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            © {currentYear} Ximena Alvarado. Todos los derechos reservados.
          </p>
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest flex items-center justify-center gap-2">
            Powered by 
            <a 
              href="https://nexflow-portfolio.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-500 border-b border-slate-700 font-black hover:text-[#7B2CBF] hover:border-[#7B2CBF] transition-all duration-300"
            >
              Nexflow Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}