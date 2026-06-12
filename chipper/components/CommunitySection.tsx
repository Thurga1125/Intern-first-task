'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CONTRACT_ADDRESS = '0x71297312753EA7A2570a5a3278eD';

function CopyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M5 15V5a2 2 0 012-2h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.623 0 12 0zm5.562 8.248l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function CommunityCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const bMX = useMotionValue(0);
  const bMY = useMotionValue(0);
  const bRotX = useSpring(bMY, { stiffness: 140, damping: 20 });
  const bRotY = useSpring(bMX, { stiffness: 140, damping: 20 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!boxRef.current) return;
    const r = boxRef.current.getBoundingClientRect();
    bMX.set(((e.clientX - r.left) / r.width - 0.5) * 14);
    bMY.set(((e.clientY - r.top) / r.height - 0.5) * -14);
  };
  const onLeave = () => { bMX.set(0); bMY.set(0); };

  return (
    <motion.div
      ref={boxRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: bRotX, rotateY: bRotY, transformStyle: 'preserve-3d', perspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function CommunitySection() {
  const [copied, setCopied] = useState(false);
  const [isSocialHovered, setIsSocialHovered] = useState<string | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  return (
    <section id="tokenomics" className="section-screen relative flex snap-start flex-col">
      <Image src="/assets/beach.jpg.avif" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,247,207,0.2),rgba(84,156,87,0.12)_50%,rgba(30,83,36,0.25))]" />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col px-4 pt-6 pb-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl min-h-0 flex-1">
          {/* Mobile Layout */}
          <div className="flex flex-col items-center justify-between w-full h-full lg:hidden">
            <motion.div
              initial={{ opacity: 0, y: -16, rotateZ: 3, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateZ: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 90 }}
              className="mb-4 flex shrink-0 justify-center"
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              <div className="inline-flex items-center gap-2 rounded-[8px] border-2 border-black bg-white/95 px-3 py-2 shadow-[0_5px_0_rgba(0,0,0,0.18)] sm:gap-3 sm:px-4">
                <code className="font-mono text-[10px] font-bold text-black sm:text-xs">{CONTRACT_ADDRESS}</code>
                <motion.button
                  onClick={handleCopy}
                  whileHover={{ scale: 1.08, rotate: 5 }}
                  whileTap={{ scale: 0.94 }}
                  className="flex h-7 w-7 items-center justify-center rounded-md text-black hover:bg-black/5"
                  title={copied ? 'Copied!' : 'Copy address'}
                  aria-label="Copy contract address"
                >
                  {copied ? '✓' : <CopyIcon />}
                </motion.button>
              </div>
            </motion.div>

            {/* Chipper Image */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              viewport={{ once: false }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 0.8,
                type: 'spring',
                stiffness: 75,
                y: {
                  duration: 2.8,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                },
              }}
              className="mx-auto flex max-h-[35dvh] w-full max-w-[300px] items-end"
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              <Image
                src="/assets/chipper2.png"
                alt="Chipper the king"
                width={1042}
                height={1024}
                className="max-h-full w-full object-contain drop-shadow-[0_24px_20px_rgba(0,0,0,0.45)]"
              />
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.1, type: 'spring', stiffness: 75 }}
              className="flex items-center gap-2 my-2"
            >
              <motion.a
                href="#"
                aria-label="Telegram"
                onMouseEnter={() => setIsSocialHovered('telegram')}
                onMouseLeave={() => setIsSocialHovered(null)}
                whileHover={{ scale: 1.2, y: -7, rotateZ: 8 }}
                whileTap={{ scale: 0.88 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-black bg-white text-black"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: 1000,
                  boxShadow: isSocialHovered === 'telegram' ? '0 14px 0 rgba(0,0,0,0.28), 0 14px 24px rgba(0,0,0,0.18)' : '0 4px 0 rgba(0,0,0,0.18)',
                  transform: isSocialHovered === 'telegram' ? 'rotateY(18deg) rotateX(-5deg) translateZ(20px)' : 'rotateY(0deg) translateZ(0px)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <TelegramIcon />
              </motion.a>
              <motion.a
                href="#"
                aria-label="X (Twitter)"
                onMouseEnter={() => setIsSocialHovered('x')}
                onMouseLeave={() => setIsSocialHovered(null)}
                whileHover={{ scale: 1.2, y: -7, rotateZ: -8 }}
                whileTap={{ scale: 0.88 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-black bg-white text-black"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: 1000,
                  boxShadow: isSocialHovered === 'x' ? '0 14px 0 rgba(0,0,0,0.28), 0 14px 24px rgba(0,0,0,0.18)' : '0 4px 0 rgba(0,0,0,0.18)',
                  transform: isSocialHovered === 'x' ? 'rotateY(-18deg) rotateX(-5deg) translateZ(20px)' : 'rotateY(0deg) translateZ(0px)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <XIcon />
              </motion.a>
            </motion.div>

            {/* Community Box */}
            <CommunityCard className="w-full max-w-md">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: 0.1, type: 'spring', stiffness: 70 }}
                className="rounded-[8px] border-2 border-black bg-white/95 p-4 pb-7 shadow-[0_10px_0_rgba(0,0,0,0.2)] sm:p-5 sm:pb-8"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <p className="font-bubblegum text-sm font-extrabold leading-snug text-[#291b0c] sm:text-base">
                  Be part of something exciting and fun! Connect with like-minded individuals, stay updated
                  on the latest developments, and participate in exclusive events. Whether you&apos;re a crypto
                  enthusiast, a creator, or just someone looking for a positive space, the Chipper community
                  is where the action is.
                </p>
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    y: -4,
                    rotateX: 6,
                    boxShadow: '0 16px 0 rgba(0,0,0,0.3)',
                  }}
                  whileTap={{ scale: 0.92, y: 0, boxShadow: '0 4px 0 rgba(0,0,0,0.22)' }}
                  className="btn-ripple mt-3 w-full rounded-[8px] bg-[#FFE234] px-6 py-3 font-bubblegum text-lg text-black shadow-[0_6px_0_rgba(0,0,0,0.24)] sm:text-xl"
                  style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
                >
                  Join Community
                </motion.button>
              </motion.div>
            </CommunityCard>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:flex-col lg:w-full lg:h-full">
            <motion.div
              initial={{ opacity: 0, y: -16, rotateZ: 3, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateZ: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 90 }}
              className="mt-16 mb-4 flex shrink-0 justify-end"
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              <div className="inline-flex items-center gap-2 rounded-[8px] border-2 border-black bg-white/95 px-3 py-2 shadow-[0_5px_0_rgba(0,0,0,0.18)] sm:gap-3 sm:px-4">
                <code className="font-mono text-[10px] font-bold text-black sm:text-xs">{CONTRACT_ADDRESS}</code>
                <motion.button
                  onClick={handleCopy}
                  whileHover={{ scale: 1.08, rotate: 5 }}
                  whileTap={{ scale: 0.94 }}
                  className="flex h-7 w-7 items-center justify-center rounded-md text-black hover:bg-black/5"
                  title={copied ? 'Copied!' : 'Copy address'}
                  aria-label="Copy contract address"
                >
                  {copied ? '✓' : <CopyIcon />}
                </motion.button>
              </div>
            </motion.div>

            <div className="grid min-h-0 flex-1 items-center gap-2 lg:grid-cols-[1fr_0.9fr] lg:gap-5">
              <div className="flex flex-col justify-end gap-3">
                <motion.div
                  initial={{ opacity: 0, x: -30, scale: 0.9, rotateY: -20 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
                  viewport={{ once: false }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 0.8,
                    type: 'spring',
                    stiffness: 75,
                    y: {
                      duration: 2.8,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                    },
                  }}
                  className="mx-auto flex max-h-[42dvh] w-full max-w-[360px] items-end lg:mx-0 lg:max-h-[48dvh] lg:max-w-[440px]"
                  style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
                >
                  <Image
                    src="/assets/chipper2.png"
                    alt="Chipper the king"
                    width={1042}
                    height={1024}
                    className="max-h-full w-full object-contain drop-shadow-[0_24px_20px_rgba(0,0,0,0.45)]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.1, type: 'spring', stiffness: 75 }}
                  className="flex items-center gap-2"
                >
                  <motion.a
                    href="#"
                    aria-label="Telegram"
                    onMouseEnter={() => setIsSocialHovered('telegram-d')}
                    onMouseLeave={() => setIsSocialHovered(null)}
                    whileHover={{ scale: 1.2, y: -7, rotateZ: 8 }}
                    whileTap={{ scale: 0.88 }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-black bg-white text-black"
                    style={{
                      transformStyle: 'preserve-3d',
                      perspective: 1000,
                      boxShadow: isSocialHovered === 'telegram-d' ? '0 14px 0 rgba(0,0,0,0.28), 0 14px 24px rgba(0,0,0,0.18)' : '0 4px 0 rgba(0,0,0,0.18)',
                      transform: isSocialHovered === 'telegram-d' ? 'rotateY(18deg) rotateX(-5deg) translateZ(20px)' : 'rotateY(0deg) translateZ(0px)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                  >
                    <TelegramIcon />
                  </motion.a>
                  <motion.a
                    href="#"
                    aria-label="X (Twitter)"
                    onMouseEnter={() => setIsSocialHovered('x-d')}
                    onMouseLeave={() => setIsSocialHovered(null)}
                    whileHover={{ scale: 1.2, y: -7, rotateZ: -8 }}
                    whileTap={{ scale: 0.88 }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-black bg-white text-black"
                    style={{
                      transformStyle: 'preserve-3d',
                      perspective: 1000,
                      boxShadow: isSocialHovered === 'x-d' ? '0 14px 0 rgba(0,0,0,0.28), 0 14px 24px rgba(0,0,0,0.18)' : '0 4px 0 rgba(0,0,0,0.18)',
                      transform: isSocialHovered === 'x-d' ? 'rotateY(-18deg) rotateX(-5deg) translateZ(20px)' : 'rotateY(0deg) translateZ(0px)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                  >
                    <XIcon />
                  </motion.a>
                </motion.div>
              </div>

              <CommunityCard>
                <motion.div
                  initial={{ opacity: 0, x: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.7, delay: 0.1, type: 'spring', stiffness: 70 }}
                  className="rounded-[8px] border-2 border-black bg-white/95 p-4 pb-7 shadow-[0_10px_0_rgba(0,0,0,0.2)] sm:p-5 sm:pb-8"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <p className="font-bubblegum text-sm font-extrabold leading-snug text-[#291b0c] sm:text-base">
                    Be part of something exciting and fun! Connect with like-minded individuals, stay updated
                    on the latest developments, and participate in exclusive events. Whether you&apos;re a crypto
                    enthusiast, a creator, or just someone looking for a positive space, the Chipper community
                    is where the action is.
                  </p>
                  <motion.button
                    whileHover={{
                      scale: 1.08,
                      y: -4,
                      rotateX: 6,
                      boxShadow: '0 16px 0 rgba(0,0,0,0.3)',
                    }}
                    whileTap={{ scale: 0.92, y: 0, boxShadow: '0 4px 0 rgba(0,0,0,0.22)' }}
                    className="btn-ripple mt-3 w-full rounded-[8px] bg-[#FFE234] px-6 py-3 font-bubblegum text-lg text-black shadow-[0_6px_0_rgba(0,0,0,0.24)] sm:w-auto sm:text-xl"
                    style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
                  >
                    Join Community
                  </motion.button>
                </motion.div>
              </CommunityCard>
            </div>
          </div>
        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 80 }}
        className="relative z-10 shrink-0 py-2"
        style={{ background: 'rgba(90,55,25,0.85)' }}
      >
        <p className="text-center font-bubblegum text-xs font-bold tracking-wide text-white">
          @2024 Chipper All Right Reserved
        </p>
      </motion.footer>
    </section>
  );
}
