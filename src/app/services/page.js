
import ServicesHeroSection from '@/components/sections/ServicesHeroSection';
import StickyServicesSection from '@/components/sections/StickyServicesSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ContactFaqSection from '@/components/sections/ContactFaqSection';
import CtaBanner from '@/components/sections/CtaBanner';
import data from '@/lib/data.json';

export const metadata = {
  title: data.servicesPageHero.metadata.title,
  description: data.servicesPageHero.metadata.description,
};

export default function ServicesPage() {
  return (
    <>

      <main>
        <ServicesHeroSection />
        <WhyChooseUsSection />
        <StickyServicesSection />
        <CtaBanner />
        <HowItWorksSection />
        <ContactFaqSection />
      </main>

    </>
  );
}
