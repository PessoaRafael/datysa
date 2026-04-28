import HeroSection from '@/components/sections/HeroSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import PricingSection from '@/components/sections/PricingSection';
import CtaSection from '@/components/sections/CtaSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <SolutionsSection />
      <IndustriesSection />
      <PricingSection />
      <CtaSection />
    </main>
  );
}