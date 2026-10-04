import type { Metadata } from 'next';
import ContactenosContent from './ContactenosContent';

export const metadata: Metadata = {
  title: 'Contáctenos',
  description:
    'Consulte horarios disponibles y reserve su cita en línea con el Centro Podológico Ximena Alvarado en Sabana Norte, San José, Costa Rica. Atención de martes a domingo.',
  alternates: { canonical: '/contactenos' },
};

export default function Page() {
  return <ContactenosContent />;
}
