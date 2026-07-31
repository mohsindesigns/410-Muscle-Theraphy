'use client';
import { useState } from 'react';
import Image from 'next/image';
import data from '@/lib/data.json';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  
  const { label, title1, title2, quoteIcon, dash, items, results } = data.testimonials;
  const activeTestimonial = items[activeIdx];

  const prev = () => setActiveIdx((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setActiveIdx((i) => (i === items.length - 1 ? 0 : i + 1));

  return (
    <section id="testimonials" className="bg-dark py-16 md:py-24 overflow-hidden relative">

      {/* Subtle bg texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, #C8960C 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="site-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-12 lg:gap-16 items-stretch">

          {/* ── Left: Quote ──────────────────────────── */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="section-label mb-4 md:mb-5">{label}</p>

              <h2 className="display-heading text-white leading-[1.06] mb-8 md:mb-10">
                <span className="text-[32px] min-[400px]:text-[38px] md:text-[48px]">{title1}</span><br />
                <span className="text-[32px] min-[400px]:text-[38px] md:text-[48px] text-gold italic">{title2}</span>
              </h2>

              {/* Quote card */}
              <div className="border border-border-dark bg-dark-3/60 p-6 md:p-8 mb-6 md:mb-8 relative min-h-[240px] flex flex-col justify-between">
                {/* Large decorative quote mark */}
                <span className="absolute -top-5 left-6 text-[70px] md:text-[80px] leading-none text-gold font-serif select-none">
                  {quoteIcon}
                </span>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIdx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    <p className="text-white/80 text-[14.5px] md:text-[16px] leading-[1.7] md:leading-[1.75] font-display italic pt-4 mb-6">
                      {activeTestimonial.quote}
                    </p>

                    {/* Stars + name */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border-dark">
                      <div className="flex gap-0.5 text-gold">
                        {Array.from({ length: activeTestimonial.stars }).map((_, i) => (
                          <Star key={i} size={13} fill="currentColor" stroke="none" />
                        ))}
                      </div>
                      <span className="text-gold text-[12px] md:text-[13px] font-semibold tracking-wide">
                        {dash} {activeTestimonial.name}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 md:w-12 md:h-12 border border-border-dark text-white/50 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-200"
              >
                <ChevronLeft size={18} className="md:w-5 md:h-5" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 md:w-12 md:h-12 border border-border-dark text-white/50 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-200"
              >
                <ChevronRight size={18} className="md:w-5 md:h-5" />
              </button>
              {/* Dots */}
              <div className="flex gap-2 ml-3">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-200
                      ${i === activeIdx ? 'bg-gold w-5' : 'bg-white/20 hover:bg-gold/50'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Result Cards (6 Images Grid) ────── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 h-full mt-8 lg:mt-0">
            {results.map((result) => (
              <div key={result.id} className="group relative overflow-hidden cursor-pointer h-full border border-border-dark bg-dark-3">
                {/* Photo */}
                <div className="img-testimonial-tile relative h-full">
                  <Image
                    src={result.image}
                    alt={result.label}
                    fill
                    sizes="(max-width: 640px) 45vw, 20vw"
                    className="object-cover"
                  />
                  {/* Strong gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />

                  {/* Gold corner accent */}
                  <div className="absolute top-0 left-0 w-6 h-6 m-2 opacity-50 group-hover:opacity-100 transition-opacity">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gold" />
                    <div className="absolute top-0 left-0 h-full w-[2px] bg-gold" />
                  </div>
                </div>

                {/* Caption */}
                <p className="absolute bottom-4 left-3 right-3 text-white text-[11px] md:text-[11.5px] font-semibold leading-snug opacity-85 group-hover:opacity-100 transition-opacity">
                  {result.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
