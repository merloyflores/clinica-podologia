'use client';

import { Construction, Clock, Sparkles } from 'lucide-react';

export default function SectionPlaceholder({ title }: { title: string }) {
  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden flex items-center justify-center">
      {/* Fondo decorativo sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200 p-12 md:p-20 rounded-[60px] shadow-xl text-center space-y-8">
          
          {/* Icono con Animación */}
          <div className="relative inline-flex items-center justify-center">
            <div className="absolute inset-0 bg-brand-purple/20 rounded-full animate-ping opacity-20"></div>
            <div className="relative w-20 h-20 bg-purple-50 rounded-3xl flex items-center justify-center text-brand-purple border border-purple-100 shadow-sm">
              <Construction size={40} strokeWidth={1.5} />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark tracking-tighter">
              BLOG: <span className="text-brand-purple italic">{title}</span>
            </h2>
            <div className="flex items-center justify-center gap-4 text-brand-green font-black uppercase tracking-[0.3em] text-[10px]">
              <Clock size={14} />
              <span>Próximamente Disponible</span>
              <Sparkles size={14} />
            </div>
          </div>

          <p className="text-slate-500 max-w-md mx-auto leading-relaxed font-medium">
            Ximena Alvarado está trabajando en este contenido para brindarte la mejor información sobre salud podológica.
          </p>

          {/* Botón de aviso sutil con texto forzado a blanco */}
          <div className="pt-4">
            <button 
              disabled
              className="bg-brand-dark text-white! px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest opacity-80 cursor-not-allowed border-none"
              style={{ color: 'white' }}
            >
              Contenido en Desarrollo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}