'use client';
import { X, Send, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ModalReserva({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [minDate, setMinDate] = useState('');
  useEffect(() => setMinDate(new Date().toISOString().split('T')[0]), []);
  if (!isOpen) return null;

  const inputClass = 'w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-[#7B2CBF]/55 focus:ring-3 focus:ring-[#7B2CBF]/7';
  const labelClass = 'mb-2 block text-[11px] font-medium text-slate-500';

  return (
    <div className="fixed inset-0 z-[120] flex items-end justify-center bg-slate-950/45 p-0 backdrop-blur-sm sm:items-center sm:p-5">
      <button className="absolute inset-0" aria-label="Cerrar modal" onClick={onClose} />
      <div className="relative max-h-[92dvh] w-full overflow-y-auto rounded-t-[24px] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.28)] sm:max-w-md sm:rounded-[22px]">
        <div className="border-b border-slate-200 bg-[#19161d] px-6 py-6 text-white sm:px-7">
          <button onClick={onClose} title="Cerrar modal de reserva" className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl text-white/55 transition-colors hover:bg-white/10 hover:text-white"><X size={19} /></button>
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#b98ada]">Especialista en Podología Ximena Alvarado</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">Nueva valoración</h3>
        </div>

        <form action="https://formspree.io/f/xzdjlgbr" method="POST" className="space-y-5 p-6 sm:p-7">
          <div><label className={labelClass}>Nombre del paciente</label><input name="nombre" type="text" required className={inputClass} placeholder="Nombre completo" /></div>
          <div><label className={labelClass}>Teléfono de contacto</label><input name="telefono" type="tel" required className={inputClass} placeholder="+506 0000-0000" /></div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div><label htmlFor="fecha_cita" className={labelClass}>Fecha (Mar-Dom)</label><input id="fecha_cita" name="fecha_cita" type="date" required min={minDate} title="Seleccione la fecha de su cita" className={inputClass} /></div>
            <div><label className={labelClass}>Bloque horario</label><select name="bloque_horario" title="Seleccione el bloque horario" required defaultValue="" className={inputClass}><option value="" disabled>Seleccione</option><option value="mañana">Mañana</option><option value="tarde">Tarde</option></select></div>
          </div>
          <p className="text-center text-[10px] text-slate-400">Horario: Martes a Domingo · Lunes cerrado</p>
          <div className="flex items-start gap-3 rounded-xl border border-[#7B2CBF]/10 bg-[#7B2CBF]/5 p-4"><Clock className="mt-0.5 shrink-0 text-[#7B2CBF]" size={16} /><p className="text-[11px] leading-5 text-slate-600"><span className="font-semibold text-[#6f2aa8]">Confirmación:</span> Tras enviar, <span className="font-medium text-slate-800">Ximena le contactará vía WhatsApp</span> para validar la disponibilidad final.</p></div>
          <button type="submit" className="flex h-13 w-full items-center justify-center gap-2.5 rounded-xl bg-[#6f2aa8] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#5d228f]">Confirmar reserva <Send size={15} /></button>
          <p className="text-center text-[9px] text-slate-400">Powered by <span className="font-medium text-slate-600">Nexflow Digital</span></p>
        </form>
      </div>
    </div>
  );
}
