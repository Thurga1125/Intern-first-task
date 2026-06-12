'use client';

import Image from 'next/image';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';

const tokenomicsCards = [
  { title: 'Token Supply', value: '2m' },
  { title: 'Buy/Sell tax', value: '0%' },
  { title: 'Burnt Liquidity', value: '' },
];

export default function AboutUsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cardRef = useRef<HTMLDivElement>(null);
  const cardMX = useMotionValue(0);
  const cardMY = useMotionValue(0);
  const cardRotX = useSpring(cardMY, { stiffness: 150, damping: 22 });
  const cardRotY = useSpring(cardMX, { stiffness: 150, damping: 22 });

  const onCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    cardMX.set(((e.clientX - r.left) / r.width - 0.5) * 16);
    cardMY.set(((e.clientY - r.top) / r.height - 0.5) * -16);
  };
  const onCardLeave = () => { cardMX.set(0); cardMY.set(0); };

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
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-6 lg:grid lg:grid-cols-[1.3fr_0.7fr] lg:gap-10">

          <motion.div
            ref={cardRef}
            onMouseMove={onCardMove}
            onMouseLeave={onCardLeave}
            style={{ rotateX: cardRotX, rotateY: cardRotY, transformStyle: 'preserve-3d', perspective: 800 }}
            className="w-full max-w-xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 70 }}
              className="rounded-[20px] border-2 border-black bg-white/98 px-5 py-6 shadow-[0_12px_0_rgba(0,0,0,0.22)] sm:px-7 sm:py-7"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="text-center mb-6 sm:mb-7">
                <motion.h3
                  initial={{ opacity: 0, y: -20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="font-bubblegum text-black"
                  style={{
                    fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
                    textShadow: '1px 1px 0 rgba(0,0,0,0.65), 2px 2px 0 rgba(0,0,0,0.45), 3px 3px 6px rgba(0,0,0,0.2)',
                  }}
                >
                  Chippernomics
                </motion.h3>
              </div>

              <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
                {tokenomicsCards.map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 25, scale: 0.9, rotateX: 20 }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : { opacity: 0, y: 25, scale: 0.9, rotateX: 20 }}
                    transition={{ duration: 0.6, delay: 0.45 + i * 0.12, type: 'spring', stiffness: 120 }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="rounded-[16px] bg-[#FFE234] p-4 text-center cursor-pointer"
                    style={{
                      transformStyle: 'preserve-3d',
                      perspective: 600,
                      transform: hoveredIndex === i
                        ? 'rotateX(10deg) rotateY(8deg) translateZ(38px) translateY(-14px) scale(1.08)'
                        : 'rotateX(0deg) translateZ(0px) translateY(0px) scale(1)',
                      boxShadow: hoveredIndex === i
                        ? '0 22px 0 rgba(0,0,0,0.28), 0 22px 38px rgba(0,0,0,0.18)'
                        : '0 7px 0 rgba(0,0,0,0.2)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9, rotateX: -15 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : { opacity: 0, y: -30, scale: 0.9, rotateX: -15 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 70 }}
            className="mx-auto flex max-h-[35dvh] w-full max-w-[320px] items-center lg:max-h-[60dvh] lg:max-w-[380px]"
            style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
          >
            <Image
              src="/assets/chipper7.png"
              alt="Chipper character"
              width={1042}
              height={1024}
              className="max-h-full w-full object-contain drop-shadow-[0_20px_18px_rgba(0,0,0,0.45)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
