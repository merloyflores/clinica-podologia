import { Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-50 text-white pt-16 pb-8 px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Info Marca */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-950 mb-2">XIMENA ALVARADO</h3>
          <p className="text-slate-400 text-sm">
            Centro especializado en quiropodia y salud integral del pie. 
            Calidad humana y profesionalismo en cada consulta.
          </p>
        </div>

        {/* Enlaces Rápidos */}
        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest  text-blue-950">Navegación</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li className="hover:text-brand-green cursor-pointer">Servicios</li>
            <li className="hover:text-brand-green cursor-pointer">Casos de Éxito</li>
            <li className="hover:text-brand-green cursor-pointer">Blog de Salud</li>
            <li className="hover:text-brand-green cursor-pointer">Contacto</li>
          </ul>
        </div>

        {/* Contacto Directo */}
        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-blue-950">Redes Sociales</h4>
          <div className="flex gap-4">
            <div className="p-3 bg-slate-800 rounded-full hover:text-brand-green transition cursor-pointer">
              <Instagram size={20} />
            </div>
            <div className="p-3 bg-slate-800 rounded-full hover:text-brand-green transition cursor-pointer">
              <Facebook size={20} />
            </div>
            <div className="p-3 bg-slate-800 rounded-full hover:text-brand-green transition cursor-pointer">
              <MessageCircle size={20} />
            </div>
            <div className="p-3 bg-brand-green text-white rounded-full hover:scale-110 transition cursor-pointer">
              <MessageCircle size={20} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-xs">
        © {new Date().getFullYear()} Centro Podológico Ximena Alvarado. Todos los derechos reservados.
      </div>
    </footer>
  );
}