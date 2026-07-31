'use client';
import { useState } from 'react';
import Image from 'next/image';
import data from '@/lib/data.json';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const stepImages = [
  '/images/blog-1.webp',
  '/images/blog-2.webp',
  '/images/service-massage.webp',
  '/images/testimonial-3.webp',
];

export default function HowItWorksSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const { label, title, description, items } = data.process;

  return (
    <section className="bg-white py-16 md:py-32 relative border-t border-border-light/40">
      <div className="site-container">

        {/* ── Header ────────────────────────────────── */}
        <div className="mb-12 md:mb-20 max-w-xl">
          <p className="section-label text-gold-dark mb-4">{label}</p>
          <h2 className="display-heading text-[28px] min-[400px]:text-[34px] md:text-[48px] text-dark leading-tight">
            {title}
          </h2>
          <p className="text-dark/55 text-[14px] md:text-[15px] leading-relaxed mt-4">
            {description}
          </p>
        </div>

        {/* ── Sticky Scroll Reveal Grid ───────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20">

          {/* Left Column: full-height wrapper, sticky image inside */}
          <div className="hidden md:block">
            <div className="sticky top-32 h-[450px] w-full overflow-hidden rounded-sm shadow-xl border border-border-light bg-dark-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={stepImages[activeIdx]}
                    alt="Recovery Step visual"
                    fill
                    sizes="45vw"
                    className="object-cover"
                    priority
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-dark/10" />
                </motion.div>
              </AnimatePresence>
              {/* Step indicator tag */}
              <div className="absolute bottom-6 left-6 bg-dark/80 backdrop-blur-md px-4 py-2 border border-border-dark rounded-sm">
                <p className="text-gold font-mono font-bold text-[12px] tracking-widest mb-0.5">
                  {data.process.phaseLabel} 0{activeIdx + 1}
                </p>
                <p className="text-white/60 text-[10px] uppercase tracking-wider font-semibold">
                  {items[activeIdx]?.title}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Scroll triggers */}
          <div className="flex flex-col gap-6 md:gap-12">
            {items.map((step, idx) => {
              const actions = step.actions || [];
              const isActive = activeIdx === idx;

              return (
                <motion.div
                  key={step.id}
                  onViewportEnter={() => setActiveIdx(idx)}
                  viewport={{ amount: 0.5 }}
                  className={`py-6 md:py-8 border-b border-border-light transition-all duration-300 flex flex-col justify-center min-h-[220px] md:min-h-[300px]
                    ${isActive ? 'opacity-100 pl-2 md:pl-4' : 'opacity-100 md:opacity-35 pl-0'}`}
                >
                  <span className="text-[36px] md:text-[44px] font-serif font-light text-gold-dark leading-none mb-3 select-none">
                    {step.id}
                  </span>

                  <h3 className="text-dark font-bold text-[18px] md:text-[22px] mb-3 tracking-tight leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-dark/60 text-[13.5px] md:text-[14.5px] leading-relaxed mb-5">
                    {step.description}
                  </p>

                  {/* Checklist */}
                  <ul className="flex flex-col gap-2.5 pt-5 border-t border-border-light/60">
                    {actions.map((act) => (
                      <li key={act} className="flex items-center gap-3 text-dark/70 text-[12.5px] md:text-[13px]">
                        <div className={`w-[18px] h-[18px] md:w-5 md:h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300
                          ${isActive ? 'bg-gold-dark text-white' : 'bg-gold-dark/15 text-gold-dark'}`}>
                          <Check size={10} strokeWidth={2.5} className="md:w-3 md:h-3" />
                        </div>
                        <span className="font-semibold">{act}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
