'use client';
import { useEffect, useState, Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import data from '@/lib/data.json';
import { motion } from 'framer-motion';

export default function StickyServicesSection() {
  const { items, stickyLabel, stickyHeading, servicePrefix, ctaExplore, ctaBook } = data.services;
  const [activeId, setActiveId] = useState(items[0].id);

  // Bulletproof Sentinel-based Observer for 100% synchronized sidebar active state
  useEffect(() => {
    const sentinels = document.querySelectorAll('.service-sentinel');
    if (!sentinels.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const serviceId = entry.target.getAttribute('data-service-id');
            if (serviceId) {
              setActiveId(serviceId);
            }
          }
        });
      },
      {
        rootMargin: '-130px 0px -70% 0px',
        threshold: 0
      }
    );

    sentinels.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveId(id);
    const sentinel = document.querySelector(`[data-service-id="${id}"]`);
    if (sentinel) {
      const targetY = sentinel.getBoundingClientRect().top + window.pageYOffset - 130;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  return (
    <section id="services-list" className="bg-dark relative border-b border-border-dark py-16 md:py-24">
      {/* Subtle Ambient Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent pointer-events-none" />

      <div className="site-container relative flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

        {/* Left Sticky Sidebar */}
        <div className="w-full lg:w-[320px] lg:sticky lg:top-[140px] z-30 bg-dark/90 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none py-4 lg:py-0 border-b lg:border-b-0 border-border-dark/50">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-2">{stickyLabel}</p>
              <h2 className="display-heading text-[28px] md:text-[36px] text-white">{stickyHeading}</h2>
            </div>

            <nav className="relative mt-4">
              {/* Left subtle vertical track */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 hidden lg:block" />

              <ul className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-none">
                {items.map((service) => {
                  const isActive = activeId === service.id;
                  return (
                    <li key={service.id} className="relative flex-shrink-0">
                      {/* Active Indicator Line */}
                      {isActive && (
                        <motion.div
                          layoutId="sidebarActiveIndicator"
                          className="absolute left-0 top-0 bottom-0 w-[2px] bg-gold hidden lg:block"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}

                      <a
                        href={`#${service.id}`}
                        onClick={(e) => handleNavClick(e, service.id)}
                        className={`flex items-center justify-between text-[13px] md:text-[14px] px-4 lg:px-6 py-3 rounded-lg lg:rounded-r-lg transition-all duration-300 font-medium whitespace-nowrap
                          ${isActive
                            ? 'text-gold bg-gold/10 lg:bg-gold/5 font-semibold'
                            : 'text-white/50 hover:text-white hover:bg-white/5'}`}
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-[10px] font-bold tracking-widest opacity-60">{service.id}</span>
                          {service.name}
                        </span>
                        <ArrowRight
                          size={14}
                          className={`hidden lg:block transition-transform duration-300 ${isActive ? 'opacity-100 translate-x-0 text-gold' : 'opacity-0 -translate-x-2'}`}
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>

        {/* Right Stackable Sticky Cards Column */}
        <div id="cards-container" className="w-full lg:flex-1 flex flex-col relative z-10">
          {items.map((service, index) => (
            <Fragment key={service.id}>
              {/* Invisible sentinel for 100% accurate scroll sync */}
              <div
                data-service-id={service.id}
                className="service-sentinel w-full h-px pointer-events-none opacity-0"
              />

              {/* Sticky Card - Direct child of cards-container for true CSS card-over-card stacking */}
              <div
                id={`card-${service.id}`}
                className={`service-card-item sticky top-[130px] w-full bg-dark border border-white/15 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.95)] transition-all duration-300 group ${index === items.length - 1 ? 'mb-[10vh]' : 'mb-[60vh]'}`}
                style={{
                  zIndex: index + 1
                }}
              >
                <div className="flex flex-col lg:flex-row lg:min-h-[440px]">

                  {/* Content Area */}
                  <div className="p-4 min-[360px]:p-6 md:p-8 lg:w-[58%] flex flex-col justify-between relative bg-gradient-to-br from-white/[0.04] to-transparent">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase px-3 py-1 bg-gold/10 rounded-full border border-gold/20">
                          {servicePrefix} {service.id}
                        </span>
                        <span className="text-white/30 text-[11px] font-mono tracking-widest uppercase">
                          {index + 1} / {items.length}
                        </span>
                      </div>

                      <h3 className="display-heading text-[26px] md:text-[32px] text-white leading-tight mb-3 group-hover:text-gold transition-colors duration-300">
                        <Link href={`/services/${service.slug || service.id}`}>
                          {service.name}
                        </Link>
                      </h3>

                      <p className="text-white/70 text-[13.5px] md:text-[14px] leading-relaxed font-light mb-4">
                        {service.description}
                      </p>

                      {/* Key Benefits Vertical List (Top 3) */}
                      <div className="flex flex-col gap-2 mb-5">
                        {service.benefits.slice(0, 3).map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2.5">
                            <CheckCircle2 size={14} className="text-gold flex-shrink-0" />
                            <span className="text-[12.5px] md:text-[13px] text-white/80 font-medium leading-snug">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6">
                      <Link
                        href={`/services/${service.slug || service.id}`}
                        className="btn-gold"
                      >
                        {ctaExplore} <ArrowRight size={14} className="ml-1" />
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-gold text-[11.5px] font-bold tracking-widest uppercase transition-colors py-1"
                      >
                        {ctaBook} <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>

                  {/* Image Area (Clickable) */}
                  <Link href={`/services/${service.slug || service.id}`} className="relative h-[280px] lg:h-auto lg:w-[42%] overflow-hidden bg-black/60 block group/img">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover object-center group-hover/img:scale-105 transition-transform duration-700 opacity-90 group-hover/img:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent lg:bg-gradient-to-r lg:from-dark/80 lg:to-transparent pointer-events-none" />
                  </Link>

                </div>
              </div>
            </Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
