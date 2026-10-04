import type { Metadata } from 'next';
import QuiropodiaContent from './QuiropodiaContent';

export const metadata: Metadata = {
  title: 'Quiropodia en San José',
  description:
    'Qué es la quiropodia y cómo ayuda a prevenir y tratar patologías del pie. Atención especializada con la Especialista en Podología Ximena Alvarado, en San José, Costa Rica.',
  alternates: { canonical: '/quiropodia' },
};

export default function Page() {
  return <QuiropodiaContent />;
}
