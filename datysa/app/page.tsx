import HeroSection from '@/components/sections/HeroSection';
import WhyDataVisualizationSection from '@/components/sections/WhyDataVisualizationSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import CtaSection from '@/components/sections/CtaSection';
import CasesSection from '@/components/sections/CasesSection';
export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyDataVisualizationSection />
      <SolutionsSection />
      <IndustriesSection />
      <CtaSection />
    </main>
  );
}