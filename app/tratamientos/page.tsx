import type { Metadata } from 'next';
import TratamientosContent from './TratamientosContent';

export const metadata: Metadata = {
  title: 'Tratamientos y Tarifas',
  description:
    'Catálogo de tratamientos podológicos: uña encarnada, hongos en las uñas, pie diabético, helomas y pedicura podológica, con tarifas. Centro Podológico Ximena Alvarado, San José.',
  alternates: { canonical: '/tratamientos' },
};

export default function Page() {
  return <TratamientosContent />;
}
