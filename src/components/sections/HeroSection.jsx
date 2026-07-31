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
    <section className="relative bg-dark min-h-screen flex items-center overflow-hidden border-b border-border-dark">
      
      {/* Subtle gold glow behind text for luxury depth */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-gold/[0.05] rounded-full blur-[120px] pointer-events-none z-0" />

      {/* ── Blended Hero Image Background (More Visible Photo) ── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <Image
          src="/images/hero-bg.webp"
          alt="Expert muscle therapy session"
          fill
          sizes="100vw"
          className="object-cover object-right lg:object-center opacity-85 filter contrast-105"
          priority
        />
        
        {/* Multi-directional Luxury Gradient Masks */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-transparent to-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-l from-dark/40 via-transparent to-transparent" />
      </motion.div>

      {/* ── Main Content ───────────────────────────────── */}
      <div className="relative site-container pt-32 pb-16 md:pt-40 md:pb-24 w-full z-10">
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
