'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const tokenomicsCards = [
  { title: 'Token Supply', value: '2m' },
  { title: 'Buy/Sell tax', value: '0%' },
  { title: 'Burnt Liquidity', value: '' },
];

export default function AboutUsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="about-us" ref={ref} className="section-screen relative snap-start">
      <Image
        src="/assets/aboutus.jpg.avif"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.15)_50%,rgba(0,0,0,0.45)_100%)]" />

      <div className="section-inner relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-6 lg:grid lg:grid-cols-[0.7fr_1.3fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9, rotateX: -15 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 70 }}
            className="mx-auto flex max-h-[35dvh] w-full max-w-[320px] items-center lg:max-h-[60dvh] lg:max-w-[380px]"
            style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
          >
            <Image
              src="/assets/chipper6.png"
              alt="Chipper character"
              width={1042}
              height={1024}
              className="max-h-full w-full object-contain drop-shadow-[0_20px_18px_rgba(0,0,0,0.45)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: 15 }}
            animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 70 }}
            className="rounded-[20px] border-2 border-black bg-white/98 px-5 py-6 shadow-[0_12px_0_rgba(0,0,0,0.22)] sm:px-7 sm:py-7 w-full max-w-md"
            style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
          >
            <div className="text-center mb-6 sm:mb-7">
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-bubblegum text-black"
                style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)' }}
              >
                Chippernomics
              </motion.h3>
            </div>

            <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
              {tokenomicsCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 25, scale: 0.9, rotateX: 20 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.45 + i * 0.12, type: 'spring', stiffness: 120 }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="rounded-[16px] bg-[#FFE234] p-4 text-center shadow-[0_7px_0_rgba(0,0,0,0.2)] sm:p-5 cursor-pointer"
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: 1000,
                    transform: hoveredIndex === i ? 'rotateX(5deg) translateY(-10px) scale(1.05)' : 'rotateX(0deg) translateY(0px) scale(1)',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <p className="font-bubblegum text-base leading-tight text-black sm:text-lg">
                    {card.title}
                    {card.value ? ` ${card.value}` : ''}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}