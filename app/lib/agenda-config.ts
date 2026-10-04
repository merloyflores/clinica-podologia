export const CLINIC_TIMEZONE = 'America/Costa_Rica';
export const CLINIC_UTC_OFFSET = '-06:00';
export const SLOT_STEP_MINUTES = 60; // Cada cita inicia en un bloque horario exclusivo. Mantener >= duración máxima de los servicios para evitar solapamientos simultáneos.
export const BOOKING_LEAD_MINUTES = 60;
export const BOOKING_WINDOW_DAYS = 90;

export const WEEKLY_HOURS: Record<number, { open: string; close: string } | null> = {
  0: { open: '07:00', close: '16:00' }, // Domingo
  1: null, // Lunes cerrado
  2: { open: '07:00', close: '16:00' },
  3: { open: '07:00', close: '16:00' },
  4: { open: '07:00', close: '16:00' },
  5: { open: '07:00', close: '16:00' },
  6: { open: '07:00', close: '16:00' },
};

export const AGENDA_SERVICES = [
  { id: 'valoracion', name: 'Valoración podológica', duration: 45, price: '₡15,000' },
  { id: 'quiropodia', name: 'Quiropodia', duration: 45, price: null },
  { id: 'una-encarnada', name: 'Onicocriptosis (uña encarnada)', duration: 45, price: '₡25,000' },
  { id: 'matricectomia', name: 'Matricectomía ungueal', duration: 60, price: '₡60,000' },
  { id: 'onicomicosis', name: 'Onicomicosis (hongos)', duration: 45, price: '₡25,000' },
  { id: 'verrugas', name: 'Verrugas plantares + pedicura', duration: 60, price: '₡24,000' },
  { id: 'pie-diabetico', name: 'Tratamiento de anomalías · pie diabético', duration: 60, price: '₡27,000' },
  { id: 'helomas', name: 'Helomas + pedicura podológica', duration: 60, price: '₡24,000' },
  { id: 'pedicura', name: 'Pedicura podológica (pie sano)', duration: 45, price: '₡20,000' },
  { id: 'reconstruccion', name: 'Reconstrucción ungueal', duration: 45, price: '₡16,000' },
] as const;

export type AgendaService = (typeof AGENDA_SERVICES)[number];

export function getService(id: string) {
  return AGENDA_SERVICES.find((service) => service.id === id);
}

export function clinicDateTime(date: string, time: string) {
  return new Date(`${date}T${time}:00${CLINIC_UTC_OFFSET}`);
}

export function isoDateInClinic(date = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: CLINIC_TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

export function dayOfWeekInClinic(date: string) {
  return clinicDateTime(date, '12:00').getUTCDay();
}

export function addMinutes(date: Date, minutes: number) {
  return new Date(date.getTime() + minutes * 60_000);
}

export function minutesToTime(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

export function timeToMinutes(time: string) {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

export function formatClinicTime(iso: string) {
  return new Intl.DateTimeFormat('es-CR', {
    timeZone: CLINIC_TIMEZONE,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(new Date(iso));
}
