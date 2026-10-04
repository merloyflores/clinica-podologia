import { NextResponse } from 'next/server';
import { clearAdminSession } from '@/app/lib/admin-auth';

export async function POST() {
  await clearAdminSession();
  return NextResponse.json({ success: true });
}
