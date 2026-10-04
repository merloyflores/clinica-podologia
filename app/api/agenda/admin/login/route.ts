import { NextRequest, NextResponse } from 'next/server';
import { hasAdminPassword, passwordIsValid, setAdminSession } from '@/app/lib/admin-auth';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  const { password = '' } = await request.json();
  if (!hasAdminPassword()) return NextResponse.json({ error: 'Configure AGENDA_ADMIN_PASSWORD en .env.local.' }, { status: 503 });
  if (!passwordIsValid(password)) return NextResponse.json({ error: 'Contraseña incorrecta.' }, { status: 401 });
  await setAdminSession();
  return NextResponse.json({ success: true });
}
