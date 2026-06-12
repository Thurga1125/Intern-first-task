'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Road Map', href: '#roadmap' },
  { label: 'How To Buy', href: '#how-to-buy' },
  { label: 'Tokenomics', href: '#tokenomics' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');

  const updateActiveSection = useCallback(() => {
    const offset = window.innerHeight * 0.35;
    let current = navLinks[0].label;

    for (const link of navLinks) {
      const el = document.querySelector(link.href);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (window.scrollY >= top - offset) {
          current = link.label;
        }
      }
    }

    setActive(current);
  }, []);

  useEffect(() => {
    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [updateActiveSection]);

  const handleNavClick = (label: string, href: string) => {
    setActive(label);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
        style={{
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('Home', '#home');
            }}
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative h-10 w-10 overflow-hidden rounded-full bg-white/90 border border-black/20">
              <Image
                src="/assets/chipper.png"
                alt="Chipper logo"
                width={626}
                height={615}
                className="absolute left-1/2 top-1/2 w-14 max-w-none -translate-x-1/2 -translate-y-[42%]"
              />
            </span>
            <span className="font-bubblegum text-black text-xl tracking-wide">Chipper</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.button
                key={link.label}
                onClick={() => handleNavClick(link.label, link.href)}
                className={`px-4 py-2 rounded-full text-sm font-semibold font-bubblegum transition-all duration-200 border ${
                  active === link.label
                    ? 'bg-white text-black border-black shadow-md'
                    : 'text-black/80 border-transparent hover:bg-white/40'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/30 transition"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-black rounded transition-all"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-black rounded transition-all"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-black rounded transition-all"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 overflow-hidden border-b border-white/10"
            style={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div className="flex flex-col px-6 py-4 gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNavClick(link.label, link.href)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold font-bubblegum transition-all duration-200 border ${
                    active === link.label
                      ? 'bg-white text-black border-black'
                      : 'text-black/80 border-transparent hover:bg-white/40'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
