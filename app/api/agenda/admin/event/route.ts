import { NextRequest, NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/app/lib/admin-auth';
import { deleteEvent, isGoogleCalendarConfigured } from '@/app/lib/google-calendar';

export const runtime = 'nodejs';

export async function DELETE(request: NextRequest) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: 'No autorizado.' }, { status: 401 });
  const eventId = request.nextUrl.searchParams.get('id') || '';
  if (!eventId) return NextResponse.json({ error: 'Falta el evento.' }, { status: 400 });
  if (!isGoogleCalendarConfigured()) return NextResponse.json({ success: true, demo: true });
  await deleteEvent(eventId);
  return NextResponse.json({ success: true, demo: false });
}
