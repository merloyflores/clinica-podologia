import { NextRequest, NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/app/lib/admin-auth';
import { clinicDateTime } from '@/app/lib/agenda-config';
import { createBlock, isGoogleCalendarConfigured } from '@/app/lib/google-calendar';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: 'No autorizado.' }, { status: 401 });
  const body = await request.json();
  const date = String(body.date || '');
  const startTime = String(body.startTime || '');
  const endTime = String(body.endTime || '');
  const reason = String(body.reason || 'Espacio no disponible').trim().slice(0, 120);
  if (!date || !startTime || !endTime || startTime >= endTime) return NextResponse.json({ error: 'Revise el horario del bloqueo.' }, { status: 400 });
  if (!isGoogleCalendarConfigured()) return NextResponse.json({ success: true, demo: true });
  await createBlock({ summary: reason, start: clinicDateTime(date, startTime).toISOString(), end: clinicDateTime(date, endTime).toISOString() });
  return NextResponse.json({ success: true, demo: false });
}
