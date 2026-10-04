import type { Metadata } from 'next';
import ResultadosContent from './ResultadosContent';

export const metadata: Metadata = {
  title: 'Resultados y Testimonios',
  description:
    'Casos reales de antes y después, y testimonios de pacientes atendidos en el Centro Podológico Ximena Alvarado, San José, Costa Rica.',
  alternates: { canonical: '/resultados' },
};

export default function Page() {
  return <ResultadosContent />;
}
