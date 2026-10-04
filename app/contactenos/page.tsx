import type { Metadata } from 'next';
import ContactenosContent from './ContactenosContent';

export const metadata: Metadata = {
  title: 'Contáctenos',
  description:
    'Agende su cita por WhatsApp con el Centro Podológico Ximena Alvarado en Sabana Norte, San José, Costa Rica. Atención Martes a Domingo.',
  alternates: { canonical: '/contactenos' },
};

export default function Page() {
  return <ContactenosContent />;
}
