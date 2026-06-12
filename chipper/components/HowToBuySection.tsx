'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const steps = [
  {
    num: '01',
    title: 'Set Up a Crypto Wallet',
    body: "First, you'll need a crypto wallet to store your Chipper tokens. You can use popular wallets like MetaMask. Ensure your wallet supports Ethereum-based tokens (ERC-20) for easy transactions.",
  },
  {
    num: '02',
    title: 'Purchase Ethereum (ETH)',
    body: 'Buy Ethereum (ETH) on a crypto exchange like Binance, Coinbase, or Kraken. Ethereum is required to swap for Chipper tokens. You can buy ETH using your preferred payment method.',
  },
  {
    num: '03',
    title: 'Swap Ethereum for Chipper',
    body: 'Once you have ETH in your wallet, head to a decentralized exchange (DEX) like Uniswap or SushiSwap. Connect your wallet, search for "Chipper" token, and swap your ETH for Chipper.',
  },
];

export default function HowToBuySection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section id="how-to-buy" className="section-screen relative snap-start">
      <Image src="/assets/sand.jpeg" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,238,191,0.28),rgba(198,120,38,0.18)_55%,rgba(72,38,15,0.35))]" />

      <div className="section-inner relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
          className="mb-3 shrink-0 text-center font-bubblegum text-black"
          style={{
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            WebkitTextStroke: '1px #000',
            paintOrder: 'stroke fill',
            transformStyle: 'preserve-3d',
            perspective: 1000,
          }}
        >
          How to Buy
        </motion.h2>

        <div className="flex min-h-0 flex-1 flex-col items-center justify-between gap-2 lg:grid lg:grid-cols-[0.7fr_1.3fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.75, type: 'spring', stiffness: 78 }}
            className="mx-auto flex max-h-[25dvh] w-full max-w-[300px] items-center lg:max-h-[85dvh] lg:max-w-[700px]"
            style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
          >
            <Image
              src="/assets/chiper3.png"
              alt="Chipper walking"
              width={1042}
              height={1024}
              className="max-h-full w-full object-contain drop-shadow-[0_20px_16px_rgba(0,0,0,0.35)]"
            />
          </motion.div>

          <div className="grid min-h-0 gap-2 grid-cols-1 lg:grid-cols-3 lg:gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30, rotateX: 30, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: i * 0.15, type: 'spring', stiffness: 82 }}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
                className="rounded-[8px] border-2 border-black bg-white/95 p-3 sm:p-4 shadow-[0_6px_0_rgba(0,0,0,0.18)] cursor-pointer"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: 1000,
                  transform: hoveredStep === i
                    ? 'rotateX(10deg) translateZ(25px) translateY(-12px) scale(1.06)'
                    : 'rotateX(0deg) translateZ(0px) translateY(0px) scale(1)',
                  transition: 'transform 0.35s ease',
                }}
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.2 }}
                  className="block font-bubblegum text-xl text-[#FFE234] mb-1"
                >
                  {step.num}
                </motion.span>
                <h3 className="font-bubblegum text-sm sm:text-lg font-extrabold leading-snug text-black">
                  {step.title}
                </h3>
                <p className="mt-2 font-bubblegum text-[11px] sm:text-sm font-semibold leading-snug text-[#38230d]">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}