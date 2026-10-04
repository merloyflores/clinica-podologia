import { createHmac, timingSafeEqual } from 'crypto';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'cpx_agenda_admin';

function secret() {
  return process.env.AGENDA_ADMIN_PASSWORD || '';
}

function signature() {
  return createHmac('sha256', secret()).update('centro-podologico-agenda-admin-v1').digest('hex');
}

export function hasAdminPassword() {
  return Boolean(secret());
}

export function passwordIsValid(value: string) {
  const expected = Buffer.from(secret());
  const received = Buffer.from(value || '');
  return expected.length > 0 && expected.length === received.length && timingSafeEqual(expected, received);
}

export async function isAdminAuthenticated() {
  if (!hasAdminPassword()) return false;
  const store = await cookies();
  const value = store.get(COOKIE_NAME)?.value || '';
  const expected = signature();
  if (value.length !== expected.length) return false;
  return timingSafeEqual(Buffer.from(value), Buffer.from(expected));
}

export async function setAdminSession() {
  const store = await cookies();
  store.set(COOKIE_NAME, signature(), {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 8,
  });
}

export async function clearAdminSession() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}
