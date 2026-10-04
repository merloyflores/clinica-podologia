'use client';

import { useEffect, useMemo, useState } from 'react';
import { CalendarClock, CalendarOff, Loader2, LockKeyhole, LogOut, RefreshCw, Trash2 } from 'lucide-react';

type EventItem = {
  id: string;
  summary?: string;
  description?: string;
  start?: { dateTime?: string; date?: string };
  end?: { dateTime?: string; date?: string };
  extendedProperties?: { private?: Record<string, string> };
};

export default function AgendaAdminClient() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [mode, setMode] = useState('demo');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [block, setBlock] = useState({ date: '', startTime: '12:00', endTime: '13:00', reason: 'Espacio no disponible' });

  const fetchEvents = async () => {
    setLoading(true);
    setMessage('');
    try {
      const response = await fetch('/api/agenda/admin/events', { cache: 'no-store' });
      if (response.status === 401) {
        setAuthenticated(false);
        return;
      }
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'No fue posible cargar la agenda.');
      setAuthenticated(true);
      setEvents(data.events || []);
      setMode(data.mode || 'demo');
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchEvents(); }, []);

  const login = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage('');
    const response = await fetch('/api/agenda/admin/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) });
    const data = await response.json();
    if (!response.ok) setMessage(data.error || 'No fue posible ingresar.');
    else { setPassword(''); await fetchEvents(); }
    setLoading(false);
  };

  const createBlock = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const response = await fetch('/api/agenda/admin/block', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(block) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'No fue posible crear el bloqueo.');
      setMessage(data.demo ? 'Bloqueo simulado. Configure Google Calendar para guardarlo.' : 'Bloqueo agregado correctamente.');
      await fetchEvents();
    } catch (error: any) { setMessage(error.message); }
    finally { setLoading(false); }
  };

  const removeEvent = async (id: string) => {
    if (!window.confirm('¿Desea liberar este espacio? Esta acción elimina el evento del calendario.')) return;
    setLoading(true);
    setMessage('');
    try {
      const response = await fetch(`/api/agenda/admin/event?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'No fue posible eliminar el evento.');
      setMessage(data.demo ? 'Acción simulada en modo demo.' : 'Espacio liberado correctamente.');
      await fetchEvents();
    } catch (error: any) { setMessage(error.message); }
    finally { setLoading(false); }
  };

  const logout = async () => {
    await fetch('/api/agenda/admin/logout', { method: 'POST' });
    setAuthenticated(false);
    setEvents([]);
  };

  const grouped = useMemo(() => events.reduce<Record<string, EventItem[]>>((acc, item) => {
    const iso = item.start?.dateTime || item.start?.date || '';
    const key = iso ? new Intl.DateTimeFormat('es-CR', { timeZone: 'America/Costa_Rica', dateStyle: 'full' }).format(new Date(iso)) : 'Sin fecha';
    (acc[key] ||= []).push(item);
    return acc;
  }, {}), [events]);

  if (authenticated === null) return <div className="flex min-h-[420px] items-center justify-center"><Loader2 className="animate-spin text-[#7B2CBF]" /></div>;

  if (!authenticated) {
    return (
      <div className="mx-auto max-w-md rounded-[22px] border border-slate-200 bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.06)] md:p-9">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7B2CBF]/7 text-[#7B2CBF]"><LockKeyhole size={21} /></div>
        <h2 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-slate-950">Acceso privado</h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">Ingrese la contraseña administrativa para consultar citas y bloquear espacios.</p>
        <form onSubmit={login} className="mt-6 space-y-4">
          <input autoFocus type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-[#7B2CBF]/50" />
          {message && <p className="text-xs leading-5 text-red-600">{message}</p>}
          <button disabled={loading} className="flex h-12 w-full items-center justify-center rounded-xl bg-[#6f2aa8] text-sm font-semibold text-white hover:bg-[#5d228f] disabled:bg-slate-300">{loading ? 'Validando…' : 'Ingresar a la agenda'}</button>
        </form>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
      <aside className="space-y-6">
        <div className="rounded-[20px] border border-slate-200 bg-white p-6 md:p-7">
          <div className="flex items-center justify-between"><div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7B2CBF]">Administración</p><h2 className="mt-1 text-xl font-semibold text-slate-950">Bloquear horario</h2></div><CalendarOff className="text-[#7B2CBF]" size={22} /></div>
          <p className="mt-3 text-sm leading-6 text-slate-500">Use bloqueos para almuerzo, vacaciones, diligencias o cualquier espacio que no deba ofrecerse en la web.</p>
          <form onSubmit={createBlock} className="mt-6 space-y-4">
            <div><label className="mb-2 block text-xs font-medium text-slate-600">Fecha</label><input required type="date" value={block.date} onChange={(e) => setBlock({ ...block, date: e.target.value })} className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-[#7B2CBF]/50" /></div>
            <div className="grid grid-cols-2 gap-3"><div><label className="mb-2 block text-xs font-medium text-slate-600">Desde</label><input required type="time" value={block.startTime} onChange={(e) => setBlock({ ...block, startTime: e.target.value })} className="h-12 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#7B2CBF]/50" /></div><div><label className="mb-2 block text-xs font-medium text-slate-600">Hasta</label><input required type="time" value={block.endTime} onChange={(e) => setBlock({ ...block, endTime: e.target.value })} className="h-12 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#7B2CBF]/50" /></div></div>
            <div><label className="mb-2 block text-xs font-medium text-slate-600">Motivo</label><input value={block.reason} onChange={(e) => setBlock({ ...block, reason: e.target.value })} className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-[#7B2CBF]/50" /></div>
            <button disabled={loading} className="flex h-12 w-full items-center justify-center rounded-xl bg-[#19161d] text-sm font-semibold text-white hover:bg-slate-800 disabled:bg-slate-300">Guardar bloqueo</button>
          </form>
        </div>
        <div className="rounded-[18px] border border-slate-200 bg-[#faf9fb] p-5 text-xs leading-5 text-slate-500">
          <strong className="text-slate-800">Horario público:</strong> martes a domingo, 7:00 AM a 4:00 PM. El lunes permanece cerrado por configuración.
        </div>
      </aside>

      <div className="rounded-[20px] border border-slate-200 bg-white">
        <div className="flex flex-col gap-4 border-b border-slate-200 p-6 sm:flex-row sm:items-center sm:justify-between md:p-7">
          <div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7B2CBF]">Próximos 60 días</p><h2 className="mt-1 text-xl font-semibold text-slate-950">Citas y bloqueos</h2></div>
          <div className="flex gap-2"><button onClick={fetchEvents} className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 px-3 text-xs font-semibold text-slate-600 hover:bg-slate-50"><RefreshCw size={14} /> Actualizar</button><button onClick={logout} className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50" aria-label="Cerrar sesión"><LogOut size={15} /></button></div>
        </div>
        {mode === 'demo' && <div className="border-b border-amber-200 bg-amber-50 px-6 py-3 text-xs text-amber-700 md:px-7">Modo demo: configure Google Calendar para ver citas reales y persistir bloqueos.</div>}
        {message && <div className="border-b border-slate-200 px-6 py-3 text-xs text-slate-600 md:px-7">{message}</div>}
        <div className="max-h-[720px] overflow-y-auto">
          {loading && !events.length ? <div className="flex h-40 items-center justify-center text-slate-400"><Loader2 className="mr-2 animate-spin" size={17} /> Cargando agenda…</div> : Object.keys(grouped).length === 0 ? <div className="p-10 text-center"><CalendarClock className="mx-auto text-slate-300" /><p className="mt-4 text-sm text-slate-500">No hay eventos próximos para mostrar.</p></div> : Object.entries(grouped).map(([date, items]) => (
            <div key={date} className="border-b border-slate-100 last:border-0">
              <div className="bg-[#faf9fb] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-slate-500 md:px-7">{date}</div>
              <div className="divide-y divide-slate-100">{items.map((item) => {
                const start = item.start?.dateTime ? new Intl.DateTimeFormat('es-CR', { timeZone: 'America/Costa_Rica', hour: 'numeric', minute: '2-digit', hour12: true }).format(new Date(item.start.dateTime)) : 'Todo el día';
                const end = item.end?.dateTime ? new Intl.DateTimeFormat('es-CR', { timeZone: 'America/Costa_Rica', hour: 'numeric', minute: '2-digit', hour12: true }).format(new Date(item.end.dateTime)) : '';
                const isBlock = item.extendedProperties?.private?.type === 'block' || item.summary?.startsWith('BLOQUEO');
                return <div key={item.id} className="flex items-center gap-4 px-6 py-5 md:px-7"><div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${isBlock ? 'bg-slate-100 text-slate-500' : 'bg-[#7B2CBF]/7 text-[#7B2CBF]'}`}>{isBlock ? <CalendarOff size={18} /> : <CalendarClock size={18} />}</div><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-slate-900">{item.summary || 'Evento'}</p><p className="mt-1 text-xs text-slate-400">{start}{end ? ` – ${end}` : ''}{isBlock ? ' · Bloqueo' : ' · Reserva'}</p></div><button onClick={() => removeEvent(item.id)} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-400 hover:border-red-200 hover:bg-red-50 hover:text-red-600" aria-label="Eliminar evento"><Trash2 size={15} /></button></div>;
              })}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
