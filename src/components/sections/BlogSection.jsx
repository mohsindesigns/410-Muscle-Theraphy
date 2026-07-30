'use client';
import Image from 'next/image';
import data from '@/lib/data.json';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BlogSection() {
  const { label, title, ctaAll, ctaReadMore, items } = data.blog;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="site-container">

        {/* ── Header ──────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="section-label mb-3 md:mb-4">{label}</p>
            <h2 className="display-heading text-[32px] md:text-[44px] text-dark">{title}</h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-gold text-[12px] font-bold tracking-[0.12em] uppercase hover:gap-3 transition-all duration-200"
          >
            {ctaAll} <ArrowRight size={14} />
          </a>
        </div>

        {/* ── Article Grid ────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {items.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="blog-card group"
            >

              {/* Image */}
              <div className="img-blog">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Tag chip */}
                <span className="absolute top-4 left-4 bg-gold text-dark text-[10px] font-bold tracking-wider uppercase px-3 py-1.5">
                  {post.tag}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-dark font-bold text-[17px] md:text-[18px] leading-snug mb-3 group-hover:text-gold transition-colors duration-200">
                {post.title}
              </h3>
              <p className="text-muted text-[13.5px] leading-relaxed mb-5">
                {post.excerpt}
              </p>
              <a
                href="#"
                className="flex items-center gap-2 text-gold text-[12px] font-bold tracking-wide uppercase hover:gap-3 transition-all duration-200"
              >
                {ctaReadMore} <ArrowRight size={14} />
              </a>

            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
