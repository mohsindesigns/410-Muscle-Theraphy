'use client';
import data from '@/lib/data.json';
import { motion } from 'framer-motion';
import { Target, Award, Activity, ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function WhyChooseUsSection() {
  const { label, titleLine1, titleLine2, titleItalicWord, items } = data.whyChooseUs;

  return (
    <section className="bg-[#FAF8F5] relative py-24 md:py-36 border-b border-black/10 overflow-hidden">
      
      {/* Subtle Luxury Pattern & Background Glows */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gold-dark/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-gold-dark/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="site-container relative z-10">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-dark/15 border border-gold-dark/30 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-dark animate-pulse" />
              <span className="text-gold-dark text-[11px] font-bold tracking-[0.25em] uppercase">{label}</span>
            </div>

            <h2 className="display-heading text-[38px] sm:text-[48px] lg:text-[56px] text-dark leading-[1.1] max-w-[640px]">
              {titleLine1} {titleLine2}{' '}
              <span className="text-gold-dark italic font-light">{titleItalicWord}</span>
            </h2>
          </div>

          <p className="text-dark/70 text-[15px] leading-[1.8] font-light max-w-[380px]">
            We go beyond temporary relief to provide lasting results through targeted manual therapy and clinical recovery plans.
          </p>
        </div>

        {/* ── Award-Level Asymmetric Bento Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* ── Bento Card 1: Featured Image & Clinical Guarantee (5 Cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-black/10 shadow-[0_15px_40px_rgba(0,0,0,0.04)] bg-white group min-h-[420px] flex flex-col justify-between p-8"
          >
            {/* Background Photo with Gradient Blend */}
            <div className="absolute inset-0">
              <Image
                src="/images/therapist-portrait.webp"
                alt="Clinical Precision Therapy"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent" />
            </div>

            {/* Top Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark/75 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-wider uppercase shadow-md">
                <ShieldCheck size={14} className="text-gold-dark" />
                Clinical Standard
              </span>
              <span className="text-white/60 text-[12px] font-mono font-bold tracking-widest uppercase">
                Est. 2016
              </span>
            </div>

            {/* Bottom Floating Glass Card Overlay */}
            <div className="relative z-10 mt-auto pt-20">
              <div className="p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-gold-dark">
                    <Sparkles size={16} />
                    <span className="text-[12px] font-bold tracking-wider uppercase">Proven Standard</span>
                  </div>
                  <span className="text-[18px] font-heading font-bold text-dark">98% Success</span>
                </div>
                
                <p className="text-dark/75 text-[13px] font-light leading-relaxed mb-3">
                  Every treatment plan is built on diagnostic postural mapping and targeted manual therapy protocols.
                </p>

                <div className="flex items-center gap-4 text-dark/80 text-[12px] font-medium pt-2 border-t border-black/5">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-gold-dark" />
                    <span>Postural Analysis</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-gold-dark" />
                    <span>Myofascial Isolation</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Bento Cards 2, 3, 4: Feature Grid (7 Cols) ── */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 2: Clinical Precision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group relative bg-white hover:bg-[#FAF5EA] border border-black/10 hover:border-gold-dark/60 rounded-3xl p-7 lg:p-8 transition-all duration-500 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-2xl flex flex-col justify-between overflow-hidden min-h-[260px]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gold-dark/10 border border-gold-dark/30 flex items-center justify-center text-gold-dark group-hover:bg-gold-dark group-hover:text-white transition-all duration-500 shadow-sm">
                    <Target size={22} />
                  </div>
                  <span className="text-[36px] font-serif font-bold text-gold-dark/20 group-hover:text-gold-dark transition-colors duration-500 select-none">
                    01
                  </span>
                </div>

                <h3 className="display-heading text-[22px] text-dark leading-tight mb-2 group-hover:text-gold-dark transition-colors duration-300">
                  {items[0]?.title || "Clinical Precision"}
                </h3>
                <p className="text-dark/65 text-[13.5px] leading-relaxed font-light group-hover:text-dark transition-colors duration-300">
                  {items[0]?.description || "Customized manual techniques mapping specific muscle trigger points to eliminate pain."}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-black/5 flex items-center justify-between text-dark/40 group-hover:text-gold-dark transition-colors">
                <span className="text-[11px] font-bold tracking-widest uppercase">Targeted Technique</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.div>

            {/* Card 3: Certified Specialists */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="group relative bg-white hover:bg-[#FAF5EA] border border-black/10 hover:border-gold-dark/60 rounded-3xl p-7 lg:p-8 transition-all duration-500 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-2xl flex flex-col justify-between overflow-hidden min-h-[260px]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gold-dark/10 border border-gold-dark/30 flex items-center justify-center text-gold-dark group-hover:bg-gold-dark group-hover:text-white transition-all duration-500 shadow-sm">
                    <Award size={22} />
                  </div>
                  <span className="text-[36px] font-serif font-bold text-gold-dark/20 group-hover:text-gold-dark transition-colors duration-500 select-none">
                    02
                  </span>
                </div>

                <h3 className="display-heading text-[22px] text-dark leading-tight mb-2 group-hover:text-gold-dark transition-colors duration-300">
                  {items[1]?.title || "Certified Specialists"}
                </h3>
                <p className="text-dark/65 text-[13.5px] leading-relaxed font-light group-hover:text-dark transition-colors duration-300">
                  {items[1]?.description || "Over 8+ years of clinical experience treating competitive athletes and professionals."}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-black/5 flex items-center justify-between text-dark/40 group-hover:text-gold-dark transition-colors">
                <span className="text-[11px] font-bold tracking-widest uppercase">Expert Practice</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.div>

            {/* Card 4: Biomechanical Results (Spans Full Width on Small Grid) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="sm:col-span-2 group relative bg-white hover:bg-[#FAF5EA] border border-black/10 hover:border-gold-dark/60 rounded-3xl p-7 lg:p-8 transition-all duration-500 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 overflow-hidden"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-gold-dark/10 border border-gold-dark/30 flex items-center justify-center text-gold-dark group-hover:bg-gold-dark group-hover:text-white transition-all duration-500 shadow-sm flex-shrink-0">
                  <Activity size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[11px] font-bold font-mono text-gold-dark tracking-widest">03</span>
                    <h3 className="display-heading text-[22px] text-dark leading-tight group-hover:text-gold-dark transition-colors duration-300">
                      {items[2]?.title || "Biomechanical Results"}
                    </h3>
                  </div>
                  <p className="text-dark/65 text-[13.5px] leading-relaxed font-light max-w-[440px] group-hover:text-dark transition-colors duration-300">
                    {items[2]?.description || "We focus on structural alignment and joint decompression rather than temporary symptom masking."}
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0">
                <Link href="/contact" className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center text-dark/40 group-hover:bg-gold-dark group-hover:border-gold-dark group-hover:text-white transition-all duration-300">
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Bottom Action Strip */}
        <div className="mt-16 text-center">
          <Link href="/contact" className="btn-gold">
            Experience 410 Muscle Therapy <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
