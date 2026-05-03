'use client';

import { WhatsApp } from '@mui/icons-material';
import { Phone, MapPin,Lock, Clock, MessageCircle, Navigation, ChevronRight } from 'lucide-react';

export default function SeccionContactenos() {
  return (
    <section id="contactenos" className="py-42 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Columna Izquierda: Textos y Info */}
          <div className="lg:col-span-5">
            <h4 className="text-[#7B2CBF] font-black uppercase tracking-[0.4em] text-[10px] mb-4">Atención Inmediata</h4>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
              Hablemos de <br />
              <span className="text-[#25D366] italic font-light">tu salud.</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg mb-12 leading-relaxed">
              ¿Tiene dudas sobre un tratamiento o desea agendar una valoración? Nuestro equipo clínico está listo para asistirle.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-[#25D366] group-hover:text-white transition-all duration-500">
                  <WhatsApp sx={{ fontSize: 24 }}/>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Línea Directa</p>
                  <p className="text-xl font-black text-slate-900">(+506) 6250-0117</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-[#7B2CBF] group-hover:text-white transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ubicación</p>
                  <p className="text-xl font-black text-slate-900">Paseo Colón, San José, CR.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta de Acción */}
          <div className="lg:col-span-7">
            <div className="relative p-1 bg-slate-900 rounded-[50px] overflow-hidden shadow-2xl shadow-purple-500/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#7B2CBF]/20 rounded-full blur-[100px]"></div>
              
              <div className="relative z-10 bg-slate-900 rounded-[46px] p-10 md:p-16 border border-slate-800">
                <h3 className="text-3xl font-black text-white mb-4">Agendar vía WhatsApp</h3>
                <p className="text-slate-400 font-medium mb-10">
                  Es la forma más rápida de obtener una cita. Envíenos una foto de su caso para un pre-diagnóstico gratuito.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  <div className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700">
                    <Clock className="text-[#25D366] mb-3" size={20} />
                    <p className="text-xs font-black text-white uppercase tracking-wider">Martes - Domingo</p>
                    <p className="text-sm text-slate-400">7:00 AM - 4:00 PM</p>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700">
                    <Lock className="text-[#7B2CBF] mb-3" size={20} />
                    <p className="text-xs font-black text-white uppercase tracking-wider">Lunes</p>
                    <p className="text-sm text-slate-400">Cerrado</p>
                  </div>
                </div>

                <a 
                  href="https://wa.me/50662500117" 
                  className="w-full bg-[#25D366] hover:bg-[#1eb954] text-white py-6 rounded-2xl font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-4 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-green-500/10"
                >
                  Iniciar Chat de Citas <WhatsApp sx={{ fontSize: 20 }} />
                </a>
                
                <p className="text-center mt-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Respuesta promedio: <span className="text-white text-xs ml-1">30 a 60 minutos</span>
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}