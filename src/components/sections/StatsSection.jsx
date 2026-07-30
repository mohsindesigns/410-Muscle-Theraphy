'use client';
import Image from 'next/image';
import data from '@/lib/data.json';
import { motion } from 'framer-motion';

export default function StatsSection() {
  const { label, titleLine1, titleLine2, titleItalicWord, items } = data.stats;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 },
    },
  };

  // 3D perspective fly-in entry animation
  const item3DVariants = {
    hidden: { 
      opacity: 0, 
      rotateX: 35, 
      rotateY: -8, 
      z: -120,
      y: 20
    },
    visible: { 
      opacity: 1, 
      rotateX: 0, 
      rotateY: 0, 
      z: 0,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    },
  };

  return (
    <section className="bg-white py-20 md:py-28 relative overflow-hidden border-y border-border-light/40">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-12 lg:gap-16 items-center">

          {/* ── Left Column: Editorial Photo Frame ──────── */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[480px] w-full rounded-sm overflow-hidden shadow-xl border border-border-light">
            <Image
              src="/images/blog-3.webp"
              alt="Clinical sports massage session"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              priority
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-dark/5" />
            {/* Gold corner brackets */}
            <div className="absolute top-0 left-0 w-8 h-8 m-3">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gold-dark" />
              <div className="absolute top-0 left-0 h-full w-[2px] bg-gold-dark" />
            </div>
          </div>

          {/* ── Right Column: Rich Stats List with 3D Entry ── */}
          <div style={{ perspective: '1200px' }}>
            <p className="section-label text-gold-dark mb-4">{label}</p>
            <h2 className="display-heading text-[36px] md:text-[44px] text-dark leading-tight mb-10">
              {titleLine1}<br />
              {titleLine2} <span className="text-gold-dark italic">{titleItalicWord}</span>
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              style={{ transformStyle: 'preserve-3d' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8"
            >
              {items.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={item3DVariants}
                  style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                  className="flex flex-col pl-4 border-l border-gold-dark/45 hover:border-gold-dark transition-colors duration-300 group cursor-default"
                >
                  {/* Large Value */}
                  <span className="text-[34px] md:text-[38px] font-medium text-dark tracking-tight leading-none mb-2 font-serif group-hover:text-gold-dark transition-colors duration-300">
                    {stat.value}
                  </span>

                  {/* Label */}
                  <span className="text-[10px] md:text-[11px] font-bold text-gold-dark uppercase tracking-[0.15em] mb-2 leading-none">
                    {stat.label}
                  </span>

                  {/* Short description */}
                  <p className="text-muted text-[12.5px] leading-relaxed max-w-[240px]">
                    {stat.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
