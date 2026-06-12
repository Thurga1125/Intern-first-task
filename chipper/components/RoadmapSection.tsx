'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const phases = [
  {
    phase: '01',
    title: 'Phase 01',
    body: "In this initial phase, our focus is on laying the groundwork for Chipper. We'll establish a strong community by creating engaging content, building partnerships, and introducing the Chipper token to the world.",
  },
  {
    phase: '02',
    title: 'Phase 02',
    body: "With the community in place, Chipper will officially launch its token on major exchanges. This phase will focus on liquidity, trading, and expanding the token's presence across multiple platforms.",
  },
  {
    phase: '03',
    title: 'Phase 03',
    body: 'In Phase 3, we will integrate Chipper with NFTs to create a unique experience for users. This will involve the creation of limited-edition NFT collectibles and interactive experiences that bring the Chipper brand to life.',
  },
  {
    phase: '04',
    title: 'Phase 04',
    body: "In the final phase, Chipper will focus on securing strategic partnerships with other projects, platforms, and brands to drive global adoption. We will enhance our token's functionality and value through real-world utility.",
  },
];

export default function RoadmapSection() {
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  return (
    <section id="roadmap" className="section-screen relative snap-start bg-transparent">
      <Image src="/assets/stone path.png" alt="" fill sizes="100vw" className="object-cover z-0" priority />

      <div className="section-inner relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20, rotateZ: -2 }}
          whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="mb-4 shrink-0 text-center"
        >
          <h2
            className="font-bubblegum text-black inline-block"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              WebkitTextStroke: '1px #000',
              paintOrder: 'stroke fill',
            }}
          >
            Roadmap
          </h2>
        </motion.div>

        <div className="relative min-h-0 flex-1">
          {/* Mobile Layout */}
          <div className="flex flex-col items-center justify-between py-2 h-full lg:hidden">
            {/* Phase 01 */}
            <motion.div
              initial={{ opacity: 0, y: -20, rotateX: -20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0, type: 'spring', stiffness: 72 }}
              onMouseEnter={() => setHoveredPhase(0)}
              onMouseLeave={() => setHoveredPhase(null)}
              className="z-20 w-full max-w-[350px]"
              style={{
                transformStyle: 'preserve-3d',
                perspective: 1000,
                transform: hoveredPhase === 0 ? 'rotateX(5deg) translateZ(20px) scale(1.05)' : 'rotateX(0deg) translateZ(0px) scale(1)',
                transition: 'transform 0.3s ease',
              }}
            >
              <div className="rounded-[20px] border-2 border-black bg-white p-3 sm:p-4 shadow-[0_6px_0_rgba(0,0,0,0.18)]">
                <h3 className="font-bubblegum text-lg sm:text-xl text-black text-center">Phase 01</h3>
                <p className="mt-2 font-bubblegum text-sm sm:text-base font-semibold leading-snug text-[#33230f] text-center">
                  {phases[0].body}
                </p>
              </div>
            </motion.div>

            {/* Phase 02 */}
            <motion.div
              initial={{ opacity: 0, y: -20, rotateX: -20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.08, type: 'spring', stiffness: 72 }}
              onMouseEnter={() => setHoveredPhase(1)}
              onMouseLeave={() => setHoveredPhase(null)}
              className="z-20 w-full max-w-[350px]"
              style={{
                transformStyle: 'preserve-3d',
                perspective: 1000,
                transform: hoveredPhase === 1 ? 'rotateX(5deg) translateZ(20px) scale(1.05)' : 'rotateX(0deg) translateZ(0px) scale(1)',
                transition: 'transform 0.3s ease',
              }}
            >
              <div className="rounded-[20px] border-2 border-black bg-white p-3 sm:p-4 shadow-[0_6px_0_rgba(0,0,0,0.18)]">
                <h3 className="font-bubblegum text-lg sm:text-xl text-black text-center">Phase 02</h3>
                <p className="mt-2 font-bubblegum text-sm sm:text-base font-semibold leading-snug text-[#33230f] text-center">
                  {phases[1].body}
                </p>
              </div>
            </motion.div>

            {/* Chipper in Center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotateZ: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
              viewport={{ once: false }}
              animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
              transition={{
                opacity: { duration: 0.7, delay: 0.32, type: 'spring', stiffness: 80 },
                scale: { duration: 0.7, delay: 0.32, type: 'spring', stiffness: 80 },
                rotateZ: { duration: 0.7, delay: 0.32, type: 'spring', stiffness: 80 },
                y: {
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                },
                rotate: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                },
              }}
              className="pointer-events-none z-10 w-[120px] sm:w-[180px]"
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              <Image
                src="/assets/chipper5.png"
                alt="Chipper on the stone path"
                width={1042}
                height={1024}
                className="w-full object-contain drop-shadow-[0_16px_14px_rgba(0,0,0,0.3)]"
              />
            </motion.div>

            {/* Phase 03 */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotateX: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.16, type: 'spring', stiffness: 72 }}
              onMouseEnter={() => setHoveredPhase(2)}
              onMouseLeave={() => setHoveredPhase(null)}
              className="z-20 w-full max-w-[350px]"
              style={{
                transformStyle: 'preserve-3d',
                perspective: 1000,
                transform: hoveredPhase === 2 ? 'rotateX(-5deg) translateZ(20px) scale(1.05)' : 'rotateX(0deg) translateZ(0px) scale(1)',
                transition: 'transform 0.3s ease',
              }}
            >
              <div className="rounded-[20px] border-2 border-black bg-white p-3 sm:p-4 shadow-[0_6px_0_rgba(0,0,0,0.18)]">
                <h3 className="font-bubblegum text-lg sm:text-xl text-black text-center">Phase 03</h3>
                <p className="mt-2 font-bubblegum text-sm sm:text-base font-semibold leading-snug text-[#33230f] text-center">
                  {phases[2].body}
                </p>
              </div>
            </motion.div>

            {/* Phase 04 */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotateX: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.24, type: 'spring', stiffness: 72 }}
              onMouseEnter={() => setHoveredPhase(3)}
              onMouseLeave={() => setHoveredPhase(null)}
              className="z-20 w-full max-w-[350px]"
              style={{
                transformStyle: 'preserve-3d',
                perspective: 1000,
                transform: hoveredPhase === 3 ? 'rotateX(-5deg) translateZ(20px) scale(1.05)' : 'rotateX(0deg) translateZ(0px) scale(1)',
                transition: 'transform 0.3s ease',
              }}
            >
              <div className="rounded-[20px] border-2 border-black bg-white p-3 sm:p-4 shadow-[0_6px_0_rgba(0,0,0,0.18)]">
                <h3 className="font-bubblegum text-lg sm:text-xl text-black text-center">Phase 04</h3>
                <p className="mt-2 font-bubblegum text-sm sm:text-base font-semibold leading-snug text-[#33230f] text-center">
                  {phases[3].body}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block h-full">
            {/* Phase 01 - Top Left */}
            <motion.div
              initial={{ opacity: 0, x: -40, rotateY: -20, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0, type: 'spring', stiffness: 72 }}
              onMouseEnter={() => setHoveredPhase(0)}
              onMouseLeave={() => setHoveredPhase(null)}
              className="absolute top-12 left-12 z-20 w-full max-w-[350px]"
              style={{
                transformStyle: 'preserve-3d',
                perspective: 1000,
                transform: hoveredPhase === 0 ? 'rotateY(5deg) translateZ(20px) scale(1.05)' : 'rotateY(0deg) translateZ(0px) scale(1)',
                transition: 'transform 0.3s ease',
              }}
            >
              <div className="rounded-[20px] border-2 border-black bg-white p-3 sm:p-4 shadow-[0_6px_0_rgba(0,0,0,0.18)]">
                <h3 className="font-bubblegum text-lg sm:text-xl text-black text-center">Phase 01</h3>
                <p className="mt-2 font-bubblegum text-sm sm:text-base font-semibold leading-snug text-[#33230f] text-center">
                  {phases[0].body}
                </p>
              </div>
            </motion.div>

            {/* Phase 02 - Top Right */}
            <motion.div
              initial={{ opacity: 0, x: 40, rotateY: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.08, type: 'spring', stiffness: 72 }}
              onMouseEnter={() => setHoveredPhase(1)}
              onMouseLeave={() => setHoveredPhase(null)}
              className="absolute top-24 right-12 z-20 w-full max-w-[350px]"
              style={{
                transformStyle: 'preserve-3d',
                perspective: 1000,
                transform: hoveredPhase === 1 ? 'rotateY(-5deg) translateZ(20px) scale(1.05)' : 'rotateY(0deg) translateZ(0px) scale(1)',
                transition: 'transform 0.3s ease',
              }}
            >
              <div className="rounded-[20px] border-2 border-black bg-white p-3 sm:p-4 shadow-[0_6px_0_rgba(0,0,0,0.18)]">
                <h3 className="font-bubblegum text-lg sm:text-xl text-black text-center">Phase 02</h3>
                <p className="mt-2 font-bubblegum text-sm sm:text-base font-semibold leading-snug text-[#33230f] text-center">
                  {phases[1].body}
                </p>
              </div>
            </motion.div>

            {/* Phase 03 - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, x: -40, rotateY: -20, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.16, type: 'spring', stiffness: 72 }}
              onMouseEnter={() => setHoveredPhase(2)}
              onMouseLeave={() => setHoveredPhase(null)}
              className="absolute bottom-32 left-12 z-20 w-full max-w-[350px]"
              style={{
                transformStyle: 'preserve-3d',
                perspective: 1000,
                transform: hoveredPhase === 2 ? 'rotateY(5deg) translateZ(20px) scale(1.05)' : 'rotateY(0deg) translateZ(0px) scale(1)',
                transition: 'transform 0.3s ease',
              }}
            >
              <div className="rounded-[20px] border-2 border-black bg-white p-3 sm:p-4 shadow-[0_6px_0_rgba(0,0,0,0.18)]">
                <h3 className="font-bubblegum text-lg sm:text-xl text-black text-center">Phase 03</h3>
                <p className="mt-2 font-bubblegum text-sm sm:text-base font-semibold leading-snug text-[#33230f] text-center">
                  {phases[2].body}
                </p>
              </div>
            </motion.div>

            {/* Phase 04 - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, x: 40, rotateY: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.24, type: 'spring', stiffness: 72 }}
              onMouseEnter={() => setHoveredPhase(3)}
              onMouseLeave={() => setHoveredPhase(null)}
              className="absolute bottom-24 right-12 z-20 w-full max-w-[350px]"
              style={{
                transformStyle: 'preserve-3d',
                perspective: 1000,
                transform: hoveredPhase === 3 ? 'rotateY(-5deg) translateZ(20px) scale(1.05)' : 'rotateY(0deg) translateZ(0px) scale(1)',
                transition: 'transform 0.3s ease',
              }}
            >
              <div className="rounded-[20px] border-2 border-black bg-white p-3 sm:p-4 shadow-[0_6px_0_rgba(0,0,0,0.18)]">
                <h3 className="font-bubblegum text-lg sm:text-xl text-black text-center">Phase 04</h3>
                <p className="mt-2 font-bubblegum text-sm sm:text-base font-semibold leading-snug text-[#33230f] text-center">
                  {phases[3].body}
                </p>
              </div>
            </motion.div>

            {/* Chipper in Center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotateZ: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
              viewport={{ once: false }}
              animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
              transition={{
                opacity: { duration: 0.7, delay: 0.32, type: 'spring', stiffness: 80 },
                scale: { duration: 0.7, delay: 0.32, type: 'spring', stiffness: 80 },
                rotateZ: { duration: 0.7, delay: 0.32, type: 'spring', stiffness: 80 },
                y: {
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                },
                rotate: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                },
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[200px] sm:w-[240px] -translate-x-1/2 -translate-y-1/2"
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              <Image
                src="/assets/chipper5.png"
                alt="Chipper on the stone path"
                width={1042}
                height={1024}
                className="w-full object-contain drop-shadow-[0_16px_14px_rgba(0,0,0,0.3)]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}