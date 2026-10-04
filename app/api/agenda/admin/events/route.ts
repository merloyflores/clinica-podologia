import { NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/app/lib/admin-auth';
import { CLINIC_UTC_OFFSET } from '@/app/lib/agenda-config';
import { isGoogleCalendarConfigured, listEvents } from '@/app/lib/google-calendar';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: 'No autorizado.' }, { status: 401 });
  if (!isGoogleCalendarConfigured()) return NextResponse.json({ events: [], mode: 'demo' });
  const now = new Date();
  const in60Days = new Date(now.getTime() + 60 * 24 * 60 * 60_000);
  const events = await listEvents(now.toISOString(), in60Days.toISOString());
  return NextResponse.json({ events, mode: 'google-calendar', timezone: CLINIC_UTC_OFFSET });
}
