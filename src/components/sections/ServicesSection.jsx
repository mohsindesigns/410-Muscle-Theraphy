'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import data from '@/lib/data.json';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServicesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  
  const { label, titleLine1, titleLine2, titleLine3, titleItalicWord, description, ctaAll, ctaLearnMore, items } = data.services;
  const active = items[activeIdx];

  return (
    <section id="services" className="bg-dark py-20 md:py-28 overflow-hidden">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1.1fr_400px] gap-12 lg:gap-0 items-stretch">

          {/* ── Col 1: Intro (25%) ── Full Height Stretch ── */}
          <div className="w-full lg:pr-10 lg:border-r border-border-dark flex flex-col justify-between py-2">
            <div>
              <p className="section-label mb-4 md:mb-5">{label}</p>
              <h2 className="display-heading text-[28px] min-[400px]:text-[32px] md:text-[36px] text-white leading-[1.15] mb-4 md:mb-5">
                {titleLine1}<br className="hidden lg:block" /> {titleLine2}<br className="hidden lg:block" /> {titleLine3}{' '}
                <em className="text-gold not-italic italic">{titleItalicWord}</em>
              </h2>
              <p className="text-white/40 text-[13.5px] leading-[1.8] mb-6 lg:mb-0">
                {description}
              </p>
            </div>
            <Link href="/contact" className="btn-outline-white text-[11px] self-start mt-8 lg:mt-auto">
              {ctaAll} <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>

          {/* ── Col 2: Service List (33%) ────────────────── */}
          <div className="w-full lg:px-10 lg:border-r border-border-dark overflow-hidden flex flex-col justify-center py-2">
            <div className="flex flex-col">
              {items.map((svc, i) => (
                <button
                  key={svc.id}
                  onClick={() => setActiveIdx(i)}
                  className={`w-full text-left flex items-center gap-4 px-4 py-3.5 border-b border-border-dark transition-all duration-200 group relative
                    ${i === activeIdx ? 'bg-white/[0.04]' : 'hover:bg-white/[0.02]'}`}
                >
                  {i === activeIdx && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className={`text-[11px] font-bold tracking-widest w-7 flex-shrink-0 transition-colors ${i === activeIdx ? 'text-gold' : 'text-white/20 group-hover:text-white/40'}`}>
                    {svc.id}
                  </span>
                  <span className={`text-[14px] md:text-[14.5px] font-medium transition-colors ${i === activeIdx ? 'text-white' : 'text-white/45 group-hover:text-white/75'}`}>
                    {svc.name}
                  </span>
                  {i === activeIdx && (
                    <ArrowRight size={16} className="ml-auto text-gold" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ── Col 3: Active Detail (42%) ── Full Height Stretch ── */}
          <div className="w-full lg:pl-10 flex flex-col min-h-[460px] lg:min-h-[540px] mt-6 lg:mt-0 justify-between py-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="flex flex-col justify-between h-full w-full"
              >
                {/* Upper block */}
                <div>
                  {/* Service image — using CSS class for reliable height */}
                  <div className="img-service-preview">
                    <Image
                      src="/images/service-massage.webp"
                      alt={active.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 400px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-dark/25" />
                    <span className="absolute bottom-3 right-4 text-[56px] md:text-[64px] font-bold leading-none text-white/10 font-serif select-none">
                      {active.id}
                    </span>
                  </div>

                  <h3 className="display-heading text-[22px] md:text-[24px] text-white mb-3 leading-tight">{active.name}</h3>
                  <p className="text-white/45 text-[13.5px] leading-relaxed mb-5">
                    {active.description}
                  </p>

                  {active.benefits && (
                    <ul className="flex flex-col gap-3 mb-7">
                      {active.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-3 text-white/65 text-[13.5px]">
                          <span className="w-[5px] h-[5px] rounded-full bg-gold flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Lower block (Pushed to bottom) */}
                <Link href="/contact" className="btn-gold self-start mt-auto">
                  {ctaLearnMore} <ArrowRight size={14} className="ml-1" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
