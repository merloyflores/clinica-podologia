import { createSign, createHash } from 'crypto';
import { CLINIC_TIMEZONE } from './agenda-config';

const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const CALENDAR_API = 'https://www.googleapis.com/calendar/v3';
const SCOPE = 'https://www.googleapis.com/auth/calendar';

export type BusyPeriod = { start: string; end: string };
export type CalendarEvent = {
  id: string;
  summary?: string;
  description?: string;
  start?: { dateTime?: string; date?: string };
  end?: { dateTime?: string; date?: string };
  status?: string;
  extendedProperties?: { private?: Record<string, string> };
};

function base64url(input: string | Buffer) {
  return Buffer.from(input)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function config() {
  const clientEmail = process.env.GOOGLE_CALENDAR_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_CALENDAR_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const calendarId = process.env.GOOGLE_CALENDAR_ID;
  return { clientEmail, privateKey, calendarId };
}

export function isGoogleCalendarConfigured() {
  const { clientEmail, privateKey, calendarId } = config();
  return Boolean(clientEmail && privateKey && calendarId);
}

async function accessToken() {
  const { clientEmail, privateKey } = config();
  if (!clientEmail || !privateKey) throw new Error('Google Calendar no está configurado.');

  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claims = base64url(JSON.stringify({
    iss: clientEmail,
    scope: SCOPE,
    aud: TOKEN_URL,
    iat: now,
    exp: now + 3600,
  }));
  const unsigned = `${header}.${claims}`;
  const signer = createSign('RSA-SHA256');
  signer.update(unsigned);
  signer.end();
  const signature = base64url(signer.sign(privateKey));
  const assertion = `${unsigned}.${signature}`;

  const response = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
    cache: 'no-store',
  });

  if (!response.ok) throw new Error(`No se pudo autenticar con Google (${response.status}).`);
  const data = await response.json();
  return data.access_token as string;
}

async function googleFetch(path: string, init: RequestInit = {}) {
  const token = await accessToken();
  return fetch(`${CALENDAR_API}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(init.headers || {}),
    },
    cache: 'no-store',
  });
}

export async function getBusy(timeMin: string, timeMax: string): Promise<BusyPeriod[]> {
  const { calendarId } = config();
  if (!calendarId) throw new Error('Falta GOOGLE_CALENDAR_ID.');
  const response = await googleFetch('/freeBusy', {
    method: 'POST',
    body: JSON.stringify({ timeMin, timeMax, timeZone: CLINIC_TIMEZONE, items: [{ id: calendarId }] }),
  });
  if (!response.ok) throw new Error(`No se pudo consultar disponibilidad (${response.status}).`);
  const data = await response.json();
  return data.calendars?.[calendarId]?.busy ?? [];
}

export function deterministicEventId(startIso: string) {
  // Google acepta a-v y 0-9. SHA-256 en hexadecimal usa únicamente 0-9/a-f.
  return createHash('sha256').update(`cpx:${startIso}`).digest('hex').slice(0, 40);
}

export async function createAppointment(input: {
  id: string;
  summary: string;
  description: string;
  start: string;
  end: string;
  phone: string;
  name: string;
  serviceId: string;
}) {
  const { calendarId } = config();
  if (!calendarId) throw new Error('Falta GOOGLE_CALENDAR_ID.');
  const response = await googleFetch(`/calendars/${encodeURIComponent(calendarId)}/events?sendUpdates=none`, {
    method: 'POST',
    body: JSON.stringify({
      id: input.id,
      summary: input.summary,
      description: input.description,
      start: { dateTime: input.start, timeZone: CLINIC_TIMEZONE },
      end: { dateTime: input.end, timeZone: CLINIC_TIMEZONE },
      visibility: 'private',
      extendedProperties: {
        private: {
          source: 'centro-podologico-web',
          patientName: input.name,
          patientPhone: input.phone,
          serviceId: input.serviceId,
        },
      },
    }),
  });
  if (response.status === 409) return { conflict: true as const };
  if (!response.ok) throw new Error(`No se pudo crear la cita (${response.status}).`);
  return { conflict: false as const, event: await response.json() };
}

export async function listEvents(timeMin: string, timeMax: string): Promise<CalendarEvent[]> {
  const { calendarId } = config();
  if (!calendarId) throw new Error('Falta GOOGLE_CALENDAR_ID.');
  const params = new URLSearchParams({
    timeMin,
    timeMax,
    singleEvents: 'true',
    orderBy: 'startTime',
    maxResults: '250',
  });
  const response = await googleFetch(`/calendars/${encodeURIComponent(calendarId)}/events?${params}`);
  if (!response.ok) throw new Error(`No se pudieron cargar eventos (${response.status}).`);
  const data = await response.json();
  return data.items ?? [];
}

export async function createBlock(input: { summary: string; start: string; end: string }) {
  const { calendarId } = config();
  if (!calendarId) throw new Error('Falta GOOGLE_CALENDAR_ID.');
  const response = await googleFetch(`/calendars/${encodeURIComponent(calendarId)}/events?sendUpdates=none`, {
    method: 'POST',
    body: JSON.stringify({
      summary: `BLOQUEO · ${input.summary}`,
      start: { dateTime: input.start, timeZone: CLINIC_TIMEZONE },
      end: { dateTime: input.end, timeZone: CLINIC_TIMEZONE },
      visibility: 'private',
      extendedProperties: { private: { source: 'centro-podologico-admin', type: 'block' } },
    }),
  });
  if (!response.ok) throw new Error(`No se pudo crear el bloqueo (${response.status}).`);
  return response.json();
}

export async function deleteEvent(eventId: string) {
  const { calendarId } = config();
  if (!calendarId) throw new Error('Falta GOOGLE_CALENDAR_ID.');
  const response = await googleFetch(`/calendars/${encodeURIComponent(calendarId)}/events/${encodeURIComponent(eventId)}`, { method: 'DELETE' });
  if (!response.ok && response.status !== 410 && response.status !== 404) {
    throw new Error(`No se pudo eliminar el evento (${response.status}).`);
  }
}
