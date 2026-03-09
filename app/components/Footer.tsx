import { MapPin, Phone, Facebook, Instagram, Clock, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // CAMBIO: bg-slate-900 y textos claros
    <footer className="bg-slate-900 pt-24 pb-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Columna 1: Branding */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              {/* CAMBIO: Texto a white */}
              <h2 className="text-xl font-black tracking-tighter text-white">
                XIMENA<span className="text-[#a855f7]">ALVARADO</span>
              </h2>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Quiropodía Profesional</p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
              Especialista en salud ungueal y pie diabético. Comprometida con la excelencia clínica y el bienestar integral en San José, Costa Rica.
            </p>
            <div className="flex gap-4">
              {/* CAMBIO: bg-slate-800 para los botones sociales */}
              <a href="https://www.facebook.com/XimenaAlvaradoQuiropodista/" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-purple-600 transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/centropd_ximena.alvarado/" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-purple-600 transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/50662500117" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-green-600 transition-all">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Columna 2: Horarios */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-8">Horario de Atención</h4>
            <ul className="space-y-4">
              {[
                { days: "Lunes a Viernes", time: "8:00 AM - 6:00 PM" },
                { days: "Sábados", time: "9:00 AM - 2:00 PM" },
                { days: "Domingos", time: "Cerrado" }
              ].map((item, i) => (
                <li key={i} className="flex flex-col">
                  <span className="text-[10px] font-black uppercase text-slate-500 tracking-wider">{item.days}</span>
                  <span className="text-sm font-bold text-slate-200">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Ubicación */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-8">Ubicación Clínica</h4>
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="text-[#a855f7] shrink-0" size={20} />
              <p className="text-sm font-bold text-slate-200 leading-relaxed">
                San José, Costa Rica.<br />
                <span className="font-medium text-slate-500 text-xs">Consulta exacta vía WhatsApp tras agendar.</span>
              </p>
            </div>
            {/* CAMBIO: Borde más oscuro para el mapa */}
            <div className="aspect-video w-full rounded-[30px] overflow-hidden border border-slate-800 shadow-sm relative transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15719.66442431631!2d-84.0911765!3d9.9411984!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e4a713b18d2d%3A0x6a0f12f913e895c0!2sSan%20Jos%C3%A9%2C%20Costa%20Rica!5e0!3m2!1ses!2scr!4v1710000000000!5m2!1ses!2scr" 
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
          <div className="lg:col-span-1">
            {/* CAMBIO: bg-slate-800 para que resalte sobre el fondo 900 */}
            <div className="p-8 bg-slate-800/50 rounded-[40px] border border-slate-800">
              <ShieldCheck className="text-[#25D366] mb-4" size={32} />
              <h4 className="text-white font-black text-sm mb-2">Bioseguridad Garantizada</h4>
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                Cumplimos con los más altos estándares de esterilización y asepsia para su seguridad.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        {/* CAMBIO: border-slate-800 */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            © {currentYear} Ximena Alvarado. Todos los derechos reservados.
          </p>
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest flex items-center gap-2">
            Diseñado por <span className="text-slate-500 border-b border-slate-700 font-black">Nexflow Digital</span>
          </p>
        </div>
      </div>
    </footer>
  );
}