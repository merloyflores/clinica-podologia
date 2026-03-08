import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-emerald-50 pt-16 pb-8 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
        
        {/* Info Marca */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-950 mb-2 tracking-tight">XIMENA ALVARADO</h3>
          <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
            Centro especializado en quiropodia y salud integral del pie. 
            Calidad humana y profesionalismo en cada consulta.
          </p>
        </div>

        {/* Enlaces Rápidos */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-bold mb-6 uppercase text-xs tracking-[0.2em] text-blue-950">Navegación</h4>
          <ul className="space-y-3 text-slate-500 text-sm font-medium">
            <li className="hover:text-brand-purple cursor-pointer transition-colors">Servicios</li>
            <li className="hover:text-brand-purple cursor-pointer transition-colors">Casos de Éxito</li>
            <li className="hover:text-brand-purple cursor-pointer transition-colors">Blog de Salud</li>
            <li className="hover:text-brand-purple cursor-pointer transition-colors">Contacto</li>
          </ul>
        </div>

        {/* Contacto Directo y Redes */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-bold mb-6 uppercase text-xs tracking-[0.2em] text-blue-950">Redes Sociales</h4>
          <div className="flex gap-4">
            <div className="p-3 bg-white border border-slate-200 text-slate-400 rounded-full hover:text-brand-purple hover:border-brand-purple transition-all cursor-pointer shadow-sm">
              <Instagram size={18} />
            </div>
            <div className="p-3 bg-white border border-slate-200 text-slate-400 rounded-full hover:text-brand-purple hover:border-brand-purple transition-all cursor-pointer shadow-sm">
              <Facebook size={18} />
            </div>
            <div className="p-3 bg-brand-green text-white rounded-full hover:scale-110 transition-all cursor-pointer shadow-lg shadow-green-100">
              <MessageCircle size={18} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright y Crédito de Desarrollador */}
      <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
        <p>
          © {new Date().getFullYear()} Centro Podológico Ximena Alvarado.
        </p>
        <p className="flex items-center gap-1">
          Powered by 
          <Link 
            href="https://nexflow-digital.vercel.app/" 
            target="_blank" 
            className="text-brand-purple hover:text-brand-green transition-colors underline decoration-brand-green underline-offset-4"
          >
            Nexflow Digital
          </Link>
        </p>
      </div>
    </footer>
  );
}