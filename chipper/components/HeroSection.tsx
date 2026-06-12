'use client';

import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function HeroSection() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(-y, { stiffness: 100, damping: 30 });
  const rotateY = useSpring(x, { stiffness: 100, damping: 30 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const rotateXDeg = ((mouseY - centerY) / centerY) * 16;
    const rotateYDeg = ((mouseX - centerX) / centerX) * 16;
    x.set(rotateYDeg);
    y.set(rotateXDeg);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="section-screen relative snap-start overflow-hidden"
    >
      <Image
        src="/assets/background1.jpg.avif"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0.05)_100%)]" />

      <div className="section-inner relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-0 flex-1 flex flex-col justify-end pb-4">
          {/* Welcome Box - Desktop: top-right */}
          <motion.div
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: 'preserve-3d',
              perspective: 1000,
            }}
            initial={{ opacity: 0, y: 20, x: 0 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="z-20 w-full max-w-md mx-auto lg:absolute lg:top-24 lg:right-8 lg:mx-0"
          >
            <div className="rounded-[8px] border-2 border-black bg-white/95 px-4 py-4 shadow-[0_8px_0_rgba(0,0,0,0.18)] transition-shadow duration-300 hover:shadow-[0_18px_0_rgba(0,0,0,0.24),0_20px_35px_rgba(0,0,0,0.15)] sm:px-5 sm:py-5">
              <p className="font-bubblegum text-sm font-semibold leading-normal text-[#24180a] sm:text-base">
                Welcome to Chipper world! A place full of fun, smiles, and endless adventure.
                Let&apos;s crack open some joy together! Join Chipper as he bounces through life, spreading positivity wherever he goes. Whether you&apos;re a creator, a collector, or just someone looking for a new adventure, Chipper is all about connecting like-minded individuals through unique experiences. Get ready for a delightful journey with our new favorite character!
              </p>
            </div>
          </motion.div>

          {/* Main Character Image - Centered */}
          <motion.div
            style={{
              rotateX: rotateY,
              rotateY: rotateX,
              transformStyle: 'preserve-3d',
              perspective: 1000,
            }}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
            viewport={{ once: false }}
            transition={{
              opacity: { duration: 0.9, delay: 0.3 },
              scale: { duration: 0.9, delay: 0.3, type: 'spring', stiffness: 80 },
              y: {
                duration: 3,
                delay: 0.3,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              },
            }}
            className="relative z-10 mx-auto flex max-h-[60dvh] w-full max-w-[400px] items-end lg:max-h-[70dvh] lg:mx-0"
          >
            <Image
              src="/assets/chipper.png"
              alt="Chipper"
              width={626}
              height={615}
              className="max-h-full w-full object-contain drop-shadow-[0_20px_18px_rgba(0,0,0,0.35)]"
              priority
            />
          </motion.div>

          {/* CHIPPER Text - Mobile: bottom center, Desktop: bottom-right (higher) */}
          <motion.h1
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: 'preserve-3d',
              perspective: 1000,
            }}
            aria-hidden="true"
            className="pointer-events-none z-20 font-bubblegum text-black leading-none select-none text-center lg:absolute lg:bottom-32 lg:right-8 lg:text-right"
            initial={{ opacity: 0, y: 20, x: 0 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', WebkitTextStroke: '2px #000', paintOrder: 'stroke fill', opacity: 0.92, textShadow: '2px 2px 0 rgba(0,0,0,0.75), 4px 4px 0 rgba(0,0,0,0.55), 6px 6px 0 rgba(0,0,0,0.35), 8px 8px 14px rgba(0,0,0,0.2)' }}>
              CHIPPER
            </span>
          </motion.h1>
        </div>
      </div>
    </section>
  );
}