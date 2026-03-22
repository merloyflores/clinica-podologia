'use client';

import { useState } from 'react';
import { WhatsApp, Close } from '@mui/icons-material';

export default function BotonWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-100 flex flex-col items-end">
      
      {/* 1. CUADRO DE TEXTO (Formulario estilo Tendency) */}
      {isOpen && (
        <div className="bg-white w-[320px] rounded-[30px] shadow-2xl border border-slate-100 mb-5 overflow-hidden transition-all duration-500 animate-in slide-in-from-bottom-5 fade-in">
          {/* Encabezado del Chat */}
          <div className="bg-[#1a3a3a] p-5 text-white relative">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
                <WhatsApp sx={{ fontSize: 20 }} />
              </div>
              <div>
                <h3 className="font-black text-[13px] uppercase tracking-wider">Ximena - Centro Podológico</h3>
                <p className="text-[10px] text-slate-300">¡Rellene sus datos para iniciar!</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              title="Cerrar chat"
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <Close sx={{ fontSize: 18 }} />
            </button>
          </div>

          {/* Cuerpo del Formulario */}
          <div className="p-6 space-y-4 bg-slate-50/50">
            <input 
              type="text" 
              placeholder="Nombre completo" 
              className="w-full p-3 bg-white rounded-xl border border-slate-200 text-xs font-bold focus:outline-none focus:border-[#25D366] transition-colors" 
            />
            <div className="flex gap-2">
              <div className="bg-white border border-slate-200 rounded-xl px-3 flex items-center gap-1 text-[10px] font-black italic">
                🇨🇷 +506
              </div>
              <input 
                type="tel" 
                placeholder="Teléfono" 
                className="w-full p-3 bg-white rounded-xl border border-slate-200 text-xs font-bold focus:outline-none focus:border-[#25D366]" 
              />
            </div>
            <a 
              href="https://wa.me/50662500117" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white py-3.5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#1eb954] transition-all flex items-center justify-center gap-2 shadow-green-500/20"
            >
              <WhatsApp sx={{ fontSize: 16 }} /> Enviar Mensaje
            </a>
            <p className="text-[9px] text-center text-slate-400 font-bold uppercase tracking-tighter">
              Powered by <span className="text-slate-600">Nexflow Digital</span>
            </p>
          </div>
        </div>
      )}

      {/* 2. EL BOTÓN FLOTANTE (Tu código original con toggle) */}
      <div className="flex items-center group">
        {/* Tooltip (Solo se ve si el cuadro está cerrado) */}
        {!isOpen && (
          <div className="bg-white text-slate-900 px-4 py-2 rounded-2xl shadow-xl mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 hidden md:block border border-slate-100">
            <p className="text-xs font-black uppercase tracking-widest whitespace-nowrap">
              ¿En qué podemos ayudarle?
            </p>
          </div>
        )}

        {/* Botón Circular */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          title={isOpen ? "Cerrar chat de WhatsApp" : "Abrir chat de WhatsApp"}
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1eb954] transition-all transform hover:scale-110 active:scale-90 flex items-center justify-center relative outline-none"
        >
          {/* Efecto de Pulso si está cerrado */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
          )}
          
          {isOpen ? (
            <Close sx={{ fontSize: 24 }} className="relative z-10" />
          ) : (
            <WhatsApp sx={{ fontSize: 24 }} className="relative z-10" />
          )}
        </button>
      </div>
    </div>
  );
}