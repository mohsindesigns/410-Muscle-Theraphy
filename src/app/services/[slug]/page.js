'use client';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Activity,
  Target,
  Sparkles,
  UserCheck,
  Check
} from 'lucide-react';
import data from '@/lib/data.json';
import ContactFaqSection from '@/components/sections/ContactFaqSection';
import { motion } from 'framer-motion';

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

  const titleWords = service.name.split(' ');
  const mainTitle = titleWords.slice(0, -1).join(' ');
  const lastTitleWord = titleWords[titleWords.length - 1];

  return (
    <>
      <main className="w-full bg-off-white text-body overflow-hidden">
        {/* ════════════════════════════════════════════════════════
           1. HERO SECTION (Matching Site Hero Aesthetics)
           ════════════════════════════════════════════════════════ */}
        <section className="relative bg-dark min-h-[80vh] flex items-center pt-[130px] pb-20 border-b border-border-dark overflow-hidden">
          {/* Completely Blended Ambient Background Image */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <Image
              src={service.image}
              alt={service.name}
              fill
              className="object-cover object-center filter contrast-105 saturate-110"
              priority
            />
            {/* Multi-directional luxury gradient masks */}
            <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-transparent to-dark" />
          </div>

          {/* Subtle Gold Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[450px] h-[450px] bg-gold/[0.07] rounded-full blur-[140px] pointer-events-none z-0" />

          <div className="site-container relative z-10 w-full">
            {/* Top Breadcrumb Link */}
            <div className="mb-6">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-white/60 hover:text-gold text-[11.5px] font-bold tracking-[0.2em] uppercase transition-colors"
              >
                <ArrowLeft size={14} className="text-gold" />
                {pg.backLink}
              </Link>
            </div>

            <div className="max-w-[680px]">
              {/* Gold Accent Line + Label */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[1px] bg-gold flex-shrink-0" />
                <p className="section-label text-gold">
                  CLINICAL RECOVERY PROTOCOL
                </p>
              </div>

              {/* Headline with Playfair Display Italic Gold Accent */}
              <h1 className="display-heading text-[38px] min-[400px]:text-[48px] md:text-[62px] lg:text-[70px] text-white leading-[1.08] mb-6 tracking-tight">
                {mainTitle}{' '}
                <span className="text-gold italic font-light block sm:inline">{lastTitleWord}</span>
              </h1>

              {/* Description */}
              <p className="text-white/75 md:text-white/65 text-[15px] md:text-[17px] leading-[1.8] max-w-[540px] mb-8 font-light">
                {service.description} Targeted manual therapy engineered to eliminate chronic pain, unlock joint mobility, and accelerate athletic recovery.
              </p>

              {/* Quick Specs Pill Strip */}
              <div className="flex flex-wrap items-center gap-5 py-3.5 px-6 rounded-md bg-white/[0.05] border border-white/10 backdrop-blur-md mb-9 max-w-fit shadow-xl">
                <div className="flex items-center gap-2 text-white text-[13px] font-medium">
                  <Clock size={16} className="text-gold flex-shrink-0" />
                  <span>{pg.specDurationValue}</span>
                </div>
                <span className="text-white/20">|</span>
                <div className="flex items-center gap-2 text-white text-[13px] font-medium">
                  <Activity size={16} className="text-gold flex-shrink-0" />
                  <span>{pg.specIntensityValue}</span>
                </div>
                <span className="text-white/20">|</span>
                <div className="flex items-center gap-2 text-white text-[13px] font-medium">
                  <Target size={16} className="text-gold flex-shrink-0" />
                  <span>{pg.specFocusValue}</span>
                </div>
              </div>

              {/* Dual CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link href="/contact" className="btn-gold w-full sm:w-auto justify-center text-center px-8 py-4">
                  {pg.bookingCta} <ArrowRight size={14} className="ml-1" />
                </Link>
                <a href="#overview" className="btn-outline-white w-full sm:w-auto justify-center text-center px-8 py-4">
                  SEE HOW IT HELPS <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
           1.5 HIGHLIGHT STATS STRIP (Dark Luxury Accent)
           ════════════════════════════════════════════════════════ */}
        <div className="bg-dark-2 border-b border-border-dark py-6 relative z-10">
          <div className="site-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="border-r border-white/10 last:border-r-0 pr-4">
                <span className="text-gold font-serif text-[24px] md:text-[30px] font-bold block leading-none mb-1">98%</span>
                <span className="text-white/50 text-[10.5px] font-mono uppercase tracking-widest">Pain Relief Success</span>
              </div>
              <div className="border-r border-white/10 last:border-r-0 pr-4">
                <span className="text-gold font-serif text-[24px] md:text-[30px] font-bold block leading-none mb-1">5,000+</span>
                <span className="text-white/50 text-[10.5px] font-mono uppercase tracking-widest">Sessions Completed</span>
              </div>
              <div className="border-r border-white/10 last:border-r-0 pr-4">
                <span className="text-gold font-serif text-[24px] md:text-[30px] font-bold block leading-none mb-1">Est. 2020</span>
                <span className="text-white/50 text-[10.5px] font-mono uppercase tracking-widest">Clinical Standard</span>
              </div>
              <div>
                <span className="text-gold font-serif text-[24px] md:text-[30px] font-bold block leading-none mb-1">100%</span>
                <span className="text-white/50 text-[10.5px] font-mono uppercase tracking-widest">Targeted Protocols</span>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════
           2. CLINICAL OVERVIEW & KEY ADVANTAGES (Option 1: Modern Magazine Editorial Layout)
           ════════════════════════════════════════════════════════ */}
        <section id="overview" className="py-24 md:py-32 bg-white border-b border-border-light relative overflow-hidden">
          {/* Subtle Ambient Light Texture */}
          <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-gold-dark/[0.03] rounded-full blur-[140px] pointer-events-none" />

          <div className="site-container relative z-10">
            
            {/* Magazine Header Statement */}
            <div className="max-w-3xl mb-16 md:mb-20">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-gold-dark" />
                <p className="section-label text-gold-dark">
                  WHY THIS THERAPY WORKS
                </p>
              </div>

              <h2 className="display-heading text-[36px] min-[400px]:text-[48px] md:text-[60px] text-dark leading-[1.06] tracking-tight">
                Targeted Bodywork.{' '}
                <span className="text-gold-dark italic font-light block sm:inline">
                  Engineered For Recovery.
                </span>
              </h2>
            </div>

            {/* Asymmetric 2-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">

              {/* Left Column: Offset Photography Frame with Floating Badge */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="relative w-full h-full min-h-[460px] rounded-sm overflow-hidden shadow-2xl border border-border-light p-2 bg-warm-white/60 group">
                  <div className="relative w-full h-full min-h-[440px] rounded-sm overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.02]"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />

                    {/* Top Watermark Tag */}
                    <div className="absolute top-5 left-5 bg-dark/85 backdrop-blur-md px-3.5 py-1.5 rounded-sm border border-white/20">
                      <span className="text-gold font-mono text-[10px] font-bold tracking-[0.2em] uppercase">
                        SPECIALIST PRACTICE • EST. 2020
                      </span>
                    </div>

                    {/* Floating Clinical Badge */}
                    <div className="absolute bottom-6 left-6 right-6 p-5 rounded-sm bg-white/95 backdrop-blur-md border border-border-light shadow-2xl flex items-center justify-between text-dark">
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-sm bg-gold-dark/15 border border-gold-dark/30 flex items-center justify-center text-gold-dark flex-shrink-0">
                          <ShieldCheck size={20} />
                        </div>
                        <div>
                          <p className="text-dark text-[13.5px] font-bold">{pg.tailoredLabel}</p>
                          <p className="text-dark/50 text-[10.5px] font-mono uppercase tracking-wider">{pg.tailoredSub}</p>
                        </div>
                      </div>
                      <span className="text-gold-dark font-mono text-[11px] font-bold">98% SUCCESS</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Numbered Feature Rows */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <p className="text-dark/75 text-[16px] md:text-[17.5px] leading-[1.85] font-light mb-10">
                    {service.description} We map postural compensations and active muscle trigger points to eliminate root-cause pain, flush soreness, and decompress joint structures.
                  </p>

                  {/* 4 Numbered Editorial Rows */}
                  <div className="space-y-6 mb-10">
                    {service.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="pb-6 border-b border-border-light/80 last:border-b-0 flex items-start gap-5 group"
                      >
                        <span className="text-gold-dark font-serif font-bold text-[28px] leading-none select-none flex-shrink-0 opacity-90 group-hover:scale-110 transition-transform">
                          0{idx + 1}
                        </span>
                        <div>
                          <h3 className="text-dark font-bold text-[17px] md:text-[18px] mb-1.5 leading-snug group-hover:text-gold-dark transition-colors">
                            {benefit}
                          </h3>
                          <p className="text-dark/65 text-[13.5px] font-light leading-relaxed">
                            {pg.benefitCardDesc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-6 border-t border-border-light flex flex-wrap items-center justify-between gap-4">
                  <a
                    href="https://www.styleseat.com/m/v/410muscletherapy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold px-9 py-4 text-[13px] font-bold tracking-wider"
                  >
                    BOOK YOUR SESSION NOW <ArrowRight size={14} className="ml-1" />
                  </a>

                  <div className="flex items-center gap-2 text-dark/50 text-[12px] font-mono">
                    <CheckCircle2 size={15} className="text-gold-dark" />
                    <span>HIPAA Compliant & Certified</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
           3. TARGET CANDIDATES (High-Impact 2x2 Feature Card Grid)
           ════════════════════════════════════════════════════════ */}
        <section className="py-20 md:py-28 bg-warm-white border-b border-border-light relative">
          <div className="site-container">
            
            {/* Centered Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-3.5">
                <span className="w-6 h-[1px] bg-gold-dark" />
                <p className="section-label text-gold-dark">
                  TARGET CANDIDATES
                </p>
                <span className="w-6 h-[1px] bg-gold-dark" />
              </div>
              <h2 className="display-heading text-[34px] min-[400px]:text-[44px] md:text-[52px] text-dark leading-[1.08] tracking-tight">
                Who Benefits Most From <br />
                <span className="text-gold-dark italic font-light">This Clinical Protocol.</span>
              </h2>
            </div>

            {/* 2x2 High-Impact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pg.whoProfiles.map((profile, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-sm bg-white border border-border-light hover:border-gold-dark/40 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-11 h-11 rounded-sm bg-gold-dark/15 border border-gold-dark/30 flex items-center justify-center text-gold-dark font-mono font-bold text-[14px] group-hover:bg-gold-dark group-hover:text-white transition-colors">
                        0{idx + 1}
                      </div>
                      <span className="text-gold-dark/50 font-mono text-[10.5px] font-bold tracking-widest uppercase">
                        PROFILE 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-dark font-bold text-[18px] mb-2.5 leading-snug group-hover:text-gold-dark transition-colors">
                      {profile.label}
                    </h3>

                    <p className="text-dark/65 text-[14px] font-light leading-relaxed">
                      {profile.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border-light/80 flex items-center justify-between text-gold-dark text-[11.5px] font-bold tracking-wider uppercase">
                    <span>SUITABILITY: HIGH</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
           4. SESSION SEQUENCE PROTOCOL (Ultra-Modern Horizontal Stepper)
           ════════════════════════════════════════════════════════ */}
        <section className="py-24 md:py-32 bg-white border-b border-border-light relative overflow-hidden">
          <div className="site-container relative z-10">
            <div className="max-w-3xl mb-16 md:mb-20">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-gold-dark" />
                <p className="section-label text-gold-dark">
                  02 / SESSION PROTOCOL
                </p>
              </div>
              <h2 className="display-heading text-[36px] min-[400px]:text-[48px] md:text-[58px] text-dark leading-[1.05] tracking-tight">
                3-Phase Treatment.{' '}
                <span className="text-gold-dark italic font-light block sm:inline">
                  Step-By-Step Recovery.
                </span>
              </h2>
            </div>

            {/* 3 Step Horizontal Stepper */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pg.sessionSteps.map((step, idx) => (
                <div
                  key={step.num}
                  className="pt-6 border-t-2 border-gold-dark/40 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-gold-dark font-serif font-bold text-[26px]">
                        0{idx + 1}
                      </span>
                      <span className="px-3 py-1 rounded-sm bg-gold-dark/10 text-gold-dark text-[10.5px] font-mono font-bold tracking-widest uppercase">
                        {idx === 0 ? '15 MIN' : idx === 1 ? '45 MIN' : '15 MIN'}
                      </span>
                    </div>

                    <h3 className="text-dark font-bold text-[18px] mb-3 leading-snug group-hover:text-gold-dark transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-dark/65 text-[14px] font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between pt-4 border-t border-border-light/80 text-gold-dark text-[12px] font-bold tracking-wider uppercase">
                    <span>PHASE 0{idx + 1}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Action Card */}
            <div className="mt-16 p-8 md:p-10 rounded-sm bg-dark text-white border border-border-dark flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
              <div>
                <span className="text-gold font-mono text-[10.5px] font-bold tracking-widest uppercase block mb-1">CLINICAL EXCELLENCE</span>
                <h3 className="display-heading text-[22px] md:text-[28px] text-white">Ready to experience {service.name}?</h3>
              </div>
              <a
                href="https://www.styleseat.com/m/v/410muscletherapy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-9 py-4 text-[13px] font-bold tracking-wider flex-shrink-0 shadow-[0_10px_30px_rgba(200,150,12,0.25)]"
              >
                BOOK YOUR SESSION NOW <ArrowRight size={14} className="ml-1" />
              </a>
            </div>

          </div>
        </section>
      </main>

      {/* Built-in Contact & FAQ Section */}
      <ContactFaqSection />
    </>
  );
}
