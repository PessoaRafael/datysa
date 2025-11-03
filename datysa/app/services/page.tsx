import ServicesPageClient from './ServicePageClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nossos Serviços - Datysa',
  description:
    'Conheça todas as soluções em dados e análise que oferecemos para transformar seu negócio.',
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
