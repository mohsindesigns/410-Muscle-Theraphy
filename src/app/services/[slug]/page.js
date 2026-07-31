'use client';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Clock, Activity, Target, Sparkles, UserCheck } from 'lucide-react';
import data from '@/lib/data.json';
import ContactFaqSection from '@/components/sections/ContactFaqSection';

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [service, setService] = useState(null);

  const pg = data.serviceDetailPage;

  useEffect(() => {
    if (params?.slug) {
      const found = data.services.items.find(
        (item) => item.slug === params.slug || item.id === params.slug
      );
      if (found) {
        setService(found);
      } else {
        router.push('/services');
      }
    }
  }, [params, router]);

  if (!service) {
    return (
      <main className="bg-dark min-h-screen pt-[140px] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin" />
      </main>
    );
  }

  const relatedServices = data.services.items.filter((item) => item.id !== service.id).slice(0, 3);

  return (
    <>
      <main className="bg-dark min-h-screen pt-[140px] pb-20 relative">
        {/* Ambient Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold/5 rounded-full blur-[180px] pointer-events-none" />

        <div className="site-container relative z-10">
          
          {/* Top Breadcrumb Link */}
          <div className="mb-10 lg:mb-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-white/50 hover:text-gold text-[12px] font-bold tracking-widest uppercase transition-colors"
            >
              <ArrowLeft size={16} />
              {pg.backLink}
            </Link>
          </div>

          {/* Service Header */}
          <div className="max-w-3xl mb-14 lg:mb-18">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-[11px] font-bold tracking-[0.25em] uppercase">{pg.specialtyBadge}</span>
            </div>

            <h1 className="display-heading text-[38px] sm:text-[52px] lg:text-[62px] text-white leading-[1.08] mb-6">
              {service.name}
            </h1>

            <p className="text-white/70 text-[16px] md:text-[18px] leading-[1.8] font-light max-w-[680px]">
              {service.description}
            </p>
          </div>

          {/* Main 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
            
            {/* Left Column: Media & Session Quick Specs (Sticky) */}
            <div className="lg:col-span-5 lg:sticky lg:top-[130px] flex flex-col gap-6">
              {/* Image Frame */}
              <div className="relative w-full h-[320px] sm:h-[380px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-dark/85 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <p className="text-white text-[13px] font-bold">{pg.tailoredLabel}</p>
                      <p className="text-white/45 text-[11px]">{pg.tailoredSub}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Specs Grid */}
              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center text-gold">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="block text-white/40 text-[10px] uppercase tracking-wider font-bold">{pg.specDurationLabel}</span>
                    <span className="text-white text-[13.5px] font-semibold">{pg.specDurationValue}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center text-gold">
                    <Activity size={18} />
                  </div>
                  <div>
                    <span className="block text-white/40 text-[10px] uppercase tracking-wider font-bold">{pg.specIntensityLabel}</span>
                    <span className="text-white text-[13.5px] font-semibold">{pg.specIntensityValue}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center text-gold">
                    <Target size={18} />
                  </div>
                  <div>
                    <span className="block text-white/40 text-[10px] uppercase tracking-wider font-bold">{pg.specFocusLabel}</span>
                    <span className="text-white text-[13.5px] font-semibold">{pg.specFocusValue}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center text-gold">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <span className="block text-white/40 text-[10px] uppercase tracking-wider font-bold">{pg.specResultsLabel}</span>
                    <span className="text-white text-[13.5px] font-semibold">{pg.specResultsValue}</span>
                  </div>
                </div>
              </div>

              {/* Booking Action Card */}
              <div className="bg-gradient-to-br from-gold/15 via-gold/5 to-transparent border border-gold/30 rounded-3xl p-6 text-center">
                <h3 className="text-white text-[18px] font-bold mb-2">Ready to Book {service.name}?</h3>
                <p className="text-white/60 text-[13px] font-light mb-5">
                  {pg.bookingDesc}
                </p>
                <Link href="/contact" className="btn-gold justify-center w-full py-4 text-[12px] font-bold">
                  {pg.bookingCta} <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Right Column: Detailed Breakdown */}
            <div className="lg:col-span-7 flex flex-col gap-12">
              
              {/* Clinical Benefits Breakdown */}
              <div>
                <h2 className="display-heading text-[26px] sm:text-[32px] text-white leading-tight mb-6">
                  {pg.benefitsTitle}
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="bg-white/[0.03] hover:bg-gold/[0.05] border border-white/10 hover:border-gold/40 rounded-2xl p-5 transition-all duration-300 flex items-start gap-3.5"
                    >
                      <div className="w-7 h-7 rounded-lg bg-gold/15 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                        <CheckCircle2 size={16} />
                      </div>
                      <div>
                        <h4 className="text-white text-[15px] font-bold leading-snug mb-1">{benefit}</h4>
                        <p className="text-white/55 text-[12.5px] font-light leading-relaxed">
                          {pg.benefitCardDesc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who Is This Therapy For */}
              <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold">
                    <UserCheck size={20} />
                  </div>
                  <h2 className="display-heading text-[24px] sm:text-[28px] text-white leading-tight">
                    {pg.whoTitle}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pg.whoProfiles.map((profile, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <span className="block text-gold text-[12px] font-mono font-bold uppercase mb-1">{profile.label}</span>
                      <p className="text-white/70 text-[13px] font-light">{profile.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What To Expect During Your Session */}
              <div>
                <h2 className="display-heading text-[26px] sm:text-[32px] text-white leading-tight mb-6">
                  {pg.sessionTitle}
                </h2>

                <div className="space-y-4">
                  {pg.sessionSteps.map((step) => (
                    <div key={step.num} className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                      <div className="w-10 h-10 rounded-xl bg-dark border border-gold/30 flex items-center justify-center text-gold font-mono font-bold text-[14px] flex-shrink-0">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="text-white text-[16px] font-bold mb-1">{step.title}</h4>
                        <p className="text-white/60 text-[13.5px] font-light leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* ── Related Services Section ── */}
          <div className="pt-16 border-t border-white/10">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-gold text-[11px] font-bold tracking-[0.25em] uppercase mb-2">{pg.relatedLabel}</p>
                <h3 className="display-heading text-[28px] sm:text-[36px] text-white">{pg.relatedTitle}</h3>
              </div>
              <Link href="/services" className="text-white/60 hover:text-gold text-[12px] font-bold tracking-widest uppercase transition-colors hidden sm:inline-flex items-center gap-1">
                {pg.relatedViewAll} <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/services/${rel.slug || rel.id}`}
                  className="group bg-white/[0.03] hover:bg-gold/[0.04] border border-white/10 hover:border-gold/50 rounded-3xl p-6 transition-all duration-400 flex flex-col justify-between"
                >
                  <div className="relative w-full h-[180px] rounded-2xl overflow-hidden mb-5">
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h4 className="display-heading text-[20px] text-white group-hover:text-gold transition-colors mb-2">
                    {rel.name}
                  </h4>

                  <p className="text-white/60 text-[13px] font-light line-clamp-2 mb-4">
                    {rel.description}
                  </p>

                  <span className="text-gold text-[11.5px] font-bold uppercase tracking-wider inline-flex items-center gap-1">
                    {pg.relatedCardCta} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>

      <ContactFaqSection />
    </>
  );
}
