'use client';
import { X, Send, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ModalReserva({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [minDate, setMinDate] = useState('');

  // Establecer fecha mínima como "hoy" para el calendario
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-120 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative bg-white w-full max-w-md rounded-[40px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/20">
        
        {/* Cabecera */}
        <div className="bg-slate-950 p-8 text-white relative">
          <button 
            onClick={onClose} 
            title="Cerrar modal de reserva"
            className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          <h3 className="text-2xl font-black tracking-tighter italic">Nueva Valoración</h3>
          <p className="text-[10px] text-[#7B2CBF] uppercase font-black tracking-[0.3em] mt-2">Especialista Ximena Alvarado</p>
        </div>

        <form 
          action="https://formspree.io/f/xzdjlgbr" 
          method="POST" 
          className="p-8 space-y-4 bg-white"
        >
          {/* Nombre */}
          <div className="space-y-1">
            <label className="text-[9px] uppercase font-black text-slate-400 ml-2 tracking-widest">Nombre del Paciente</label>
            <input 
              name="nombre" 
              type="text" 
              required 
              className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 text-sm font-bold focus:outline-none focus:border-[#7B2CBF] transition-colors" 
              placeholder="Nombre completo" 
            />
          </div>

          {/* Teléfono */}
          <div className="space-y-1">
            <label className="text-[9px] uppercase font-black text-slate-400 ml-2 tracking-widest">Teléfono de Contacto</label>
            <input 
              name="telefono" 
              type="tel" 
              required 
              className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 text-sm font-bold focus:outline-none focus:border-[#7B2CBF] transition-colors" 
              placeholder="+506 0000-0000" 
            />
          </div>

          {/* Fecha y Bloque */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label htmlFor="fecha_cita" className="text-[9px] uppercase font-black text-slate-400 ml-2 tracking-widest">Fecha (Mar-Dom)</label>
              <input 
                id="fecha_cita"
                name="fecha_cita" 
                type="date" 
                required 
                min={minDate}
                title="Seleccione la fecha de su cita"
                className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 text-[12px] font-bold focus:outline-none focus:border-[#7B2CBF] transition-colors" 
              />
            </div>
            <div className="space-y-1">
              <label className="text-[9px] uppercase font-black text-slate-400 ml-2 tracking-widest">Bloque</label>
              <select 
                name="bloque_horario" 
                title="Seleccione el bloque horario"
                required
                className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 text-[12px] font-bold focus:outline-none focus:border-[#7B2CBF] transition-colors appearance-none"
              >
                <option value="" disabled selected>Seleccione</option>
                <option value="mañana">Mañana</option>
                <option value="tarde">Tarde</option>
              </select>
            </div>
          </div>

          {/* Nota Horario Específico */}
          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tight px-2 text-center">
            Horario: Martes a Domingo (Lunes Cerrado)
          </p>

          {/* Nota de Confirmación WhatsApp */}
          <div className="bg-purple-50 p-4 rounded-2xl border border-purple-100 flex gap-3 items-start">
            <Clock className="text-[#7B2CBF] shrink-0" size={16} />
            <p className="text-[10px] leading-relaxed text-slate-600 font-medium">
              <span className="font-black text-[#7B2CBF] uppercase">Confirmación:</span> Tras enviar, <span className="font-bold text-slate-900 underline">Ximena le contactará vía WhatsApp</span> para validar la disponibilidad final.
            </p>
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#7B2CBF] text-white py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.4em] hover:bg-slate-950 transition-all flex items-center justify-center gap-3 shadow-xl shadow-purple-500/20"
          >
            Confirmar Reserva <Send size={14} />
          </button>

          {/* Sello Nexflow */}
          <p className="text-[8px] text-center text-slate-400 font-bold uppercase tracking-[0.3em] mt-4">
            Powered by <span className="text-slate-900 border-b-2 border-slate-900">Nexflow Digital</span>
          </p>
        </form>
      </div>
    </div>
  );
}