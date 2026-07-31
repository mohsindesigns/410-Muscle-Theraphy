'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import data from '@/lib/data.json';
import { usePathname } from 'next/navigation';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../../public/images/logo.png';

function LogoMark() {
  return (
    <svg width="36" height="42" viewBox="0 0 42 48" fill="none" className="md:w-[42px] md:h-[48px]">
      <path d="M21 1L40 9.5V25C40 36.5 31.5 44.5 21 47C10.5 44.5 2 36.5 2 25V9.5L21 1Z" fill="#C8960C" />
      <text x="21" y="33" textAnchor="middle" fill="#0A0A0A" fontFamily="Georgia,serif" fontSize="20" fontWeight="bold" fontStyle="italic">M</text>
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { logoText1, logoText2, bookBtn, links } = data.navbar;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to determine if link is active
  const isLinkActive = (href) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return false; // Hard to track hash accurately without scroll spy
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-dark shadow-[0_4px_24px_rgba(0,0,0,0.6)] py-1' : 'bg-transparent py-3'}`}
      >
        <div className="site-container flex items-center justify-between h-[76px]">

          {/* ── Logo ───────────────────────────────────── */}
          <Link href="#" className="flex items-center gap-2 md:gap-3">
            <Image src={logo} width={150} height={150} alt="logo" className="object-contain w-[85px] h-[85px] min-[400px]:w-[110px] min-[400px]:h-[110px] sm:w-[150px] sm:h-[150px]" />
          </Link>

          {/* ── Desktop Nav Links ──────────────────────── */}
          <ul className="hidden md:flex items-center gap-7">
            {links.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 text-[13.5px] font-medium transition-colors duration-200
                      ${active
                        ? 'text-gold border-b border-gold pb-0.5'
                        : 'text-white/75 hover:text-white'
                      }`}
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown size={14} className="opacity-70" />}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── Desktop CTA / Mobile Trigger ───────────── */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.styleseat.com/m/v/410muscletherapy"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-gold"
            >
              {bookBtn} <ArrowRight size={14} className="ml-1" />
            </a>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </nav>

      {/* ── Mobile Menu Drawer ─────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-0 top-[76px] z-40 bg-dark border-b border-border-dark flex flex-col px-6 py-8 md:hidden gap-6 shadow-[0_12px_32px_rgba(0,0,0,0.8)]"
          >
            <ul className="flex flex-col gap-4">
              {links.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-[15px] font-medium py-1 transition-colors
                        ${active ? 'text-gold' : 'text-white/70 hover:text-white'}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <a
              href="https://www.styleseat.com/m/v/410muscletherapy"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gold justify-center w-full py-3.5"
            >
              {bookBtn} <ArrowRight size={14} className="ml-1" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
