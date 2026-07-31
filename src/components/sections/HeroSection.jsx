'use client';
import Image from 'next/image';
import Link from 'next/link';
import data from '@/lib/data.json';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const { label, title1, title2, description, ctaBook, ctaServices, socialProofText } = data.hero;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="relative bg-dark min-h-screen flex items-center overflow-hidden">
      
      {/* Subtle gold glow behind text for luxury depth */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-gold/[0.04] rounded-full blur-[100px] pointer-events-none z-0" />

      {/* ── Hero Image (right side on desktop, background overlay on mobile) ── */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="img-hero-side z-0"
      >
        <Image
          src="/images/hero-bg.webp"
          alt="Expert muscle therapy session"
          fill
          sizes="(max-width: 768px) 100vw, 54vw"
          className="object-cover object-top"
          priority
        />
        {/* Luxury Gold Frame Overlay inside the image */}
        <div className="absolute inset-4 border border-gold/25 pointer-events-none hidden md:block" />
        
        {/* Dark overlay on mobile to keep text completely readable */}
        <div className="absolute inset-0 bg-dark/65 md:bg-transparent hero-img-overlay" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark to-transparent" />
      </motion.div>

      {/* ── Main Content ───────────────────────────────── */}
      <div className="relative site-container pt-28 pb-16 md:pt-36 md:pb-24 w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[620px] text-center md:text-left mx-auto md:mx-0 flex flex-col items-center md:items-start md:border-l md:border-white/10 md:pl-8"
        >
          {/* Label with delicate line accent */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4 md:mb-5">
            <span className="w-6 h-[1px] bg-gold flex-shrink-0 hidden md:block" />
            <p className="section-label">
              {label}
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="display-heading text-[28px] min-[400px]:text-[38px] md:text-[58px] text-white leading-[1.1] mb-0 tracking-tight">
            {title1}
          </motion.h1>
          <motion.h1 variants={itemVariants} className="display-heading text-[28px] min-[400px]:text-[38px] md:text-[58px] text-gold italic leading-[1.1] mb-6 md:mb-8 tracking-tight">
            {title2}
          </motion.h1>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-white/70 md:text-white/55 text-[14px] md:text-[15px] leading-[1.7] md:leading-[1.8] max-w-[460px] mb-8 md:mb-10">
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10 md:mb-12">
            <Link href="/contact" className="btn-gold w-full sm:w-auto justify-center text-center px-8">
              {ctaBook} <ArrowRight size={14} className="ml-1" />
            </Link>
            <Link href="/#services" className="btn-outline-white w-full sm:w-auto justify-center text-center px-8">
              {ctaServices} <ArrowRight size={14} className="ml-1" />
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex">
              {['bg-slate-500', 'bg-zinc-500', 'bg-stone-500', 'bg-neutral-600'].map((color, i) => (
                <div key={i} className={`w-[34px] h-[34px] rounded-full border-2 border-dark ${color} ${i !== 0 ? '-ml-2.5' : ''}`} />
              ))}
            </div>
            <div className="text-center sm:text-left">
              <div className="flex justify-center sm:justify-start gap-0.5 mb-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" stroke="none" />
                ))}
              </div>
              <p className="text-white/50 text-[12px]">{socialProofText}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
