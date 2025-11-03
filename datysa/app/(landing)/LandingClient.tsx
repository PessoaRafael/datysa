'use client';

import HeroSection from '@/components/sections/HeroSection';
import ClientsSection from '@/components/sections/ClientsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import CtaSection from '@/components/sections/CtaSection';
import CasesSection from '@/components/sections/CasesSection';

export default function LandingClient() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ClientsSection />
      <TestimonialsSection />
      <SolutionsSection />
      <CtaSection />
      <CasesSection />
    </div>
  );
}
