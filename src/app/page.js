
import HeroSection from '@/components/sections/HeroSection';
import StatsBar from '@/components/sections/StatsBar';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TherapistSection from '@/components/sections/TherapistSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CtaBanner from '@/components/sections/CtaBanner';
import ContactFaqSection from '@/components/sections/ContactFaqSection';
import BlogSection from '@/components/sections/BlogSection';

export default function Home() {
  return (
    <>

      <main>
        <HeroSection />
        <StatsBar />
        <StatsSection />
        <ServicesSection />
        <TherapistSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CtaBanner />
        <ContactFaqSection />
        <BlogSection />
      </main>

    </>
  );
}
