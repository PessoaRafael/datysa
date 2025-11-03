import LandingClient from './LandingClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datysa - Democratizando Dados para PMEs',
  description: 'Transforme seus dados em decisões inteligentes com dashboards, insights e análise preditiva.',
};

export default function Page() {
  return <LandingClient />;
}
