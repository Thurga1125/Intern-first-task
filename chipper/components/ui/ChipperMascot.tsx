'use client';

import { motion } from 'framer-motion';

interface ChipperMascotProps {
  className?: string;
  animate?: boolean;
  variant?: 'standing' | 'sitting' | 'walking';
  delay?: number;
}

export default function ChipperMascot({
  className = '',
  animate = true,
  variant = 'standing',
  delay = 0,
}: ChipperMascotProps) {
  const floatAnim = animate
    ? {
        y: [0, -16, 0],
        rotate: [0, 1.5, 0, -1.5, 0],
        transition: {
          y: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' as const, delay },
          rotate: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' as const, delay },
        },
      }
    : undefined;

  const sittingAnim = animate
    ? {
        y: [0, -8, 0],
        transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' as const, delay },
      }
    : undefined;

  if (variant === 'sitting') {
    return (
      <motion.div
        className={className}
        animate={sittingAnim}
      >
        <svg viewBox="0 0 220 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
          {/* Shadow */}
          <ellipse cx="110" cy="238" rx="60" ry="9" fill="rgba(0,0,0,0.2)" />
          {/* Legs folded */}
          <path d="M 75 195 Q 60 215 50 230" stroke="#E8C878" strokeWidth="22" strokeLinecap="round" fill="none" />
          <path d="M 145 195 Q 160 215 170 230" stroke="#E8C878" strokeWidth="22" strokeLinecap="round" fill="none" />
          {/* Shoes */}
          <ellipse cx="45" cy="232" rx="24" ry="11" fill="#7B4F2E" />
          <ellipse cx="175" cy="232" rx="24" ry="11" fill="#7B4F2E" />
          {/* Main egg body */}
          <ellipse cx="110" cy="140" rx="72" ry="82" fill="#F2D9A8" />
          {/* Body gradient highlight */}
          <ellipse cx="90" cy="118" rx="28" ry="36" fill="rgba(255,255,255,0.18)" />
          {/* Blue jacket lower */}
          <path d="M 42 168 Q 48 228 110 232 Q 172 228 178 168 Q 158 200 110 204 Q 62 200 42 168 Z" fill="#4A7FD4" />
          {/* Jacket chest */}
          <path d="M 68 148 Q 72 168 82 176 Q 94 184 110 186 Q 126 184 138 176 Q 148 168 152 148 Z" fill="#5A8FE4" />
          {/* White shirt/collar */}
          <ellipse cx="110" cy="152" rx="22" ry="13" fill="white" />
          {/* Bow tie */}
          <polygon points="98,154 110,148 98,142" fill="#1A252F" />
          <polygon points="122,154 110,148 122,142" fill="#1A252F" />
          <circle cx="110" cy="148" r="5" fill="#0D1B24" />
          {/* Left arm */}
          <path d="M 44 168 Q 25 185 18 205" stroke="#4A7FD4" strokeWidth="28" strokeLinecap="round" fill="none" />
          <circle cx="16" cy="207" r="17" fill="#F2D9A8" />
          {/* Right arm raised */}
          <path d="M 176 165 Q 195 148 200 128" stroke="#4A7FD4" strokeWidth="28" strokeLinecap="round" fill="none" />
          <circle cx="203" cy="124" r="17" fill="#F2D9A8" />
          {/* Face */}
          <ellipse cx="88" cy="115" rx="12" ry="14" fill="#1A0A05" />
          <ellipse cx="132" cy="115" rx="12" ry="14" fill="#1A0A05" />
          <ellipse cx="92" cy="111" rx="5" ry="6" fill="white" />
          <ellipse cx="136" cy="111" rx="5" ry="6" fill="white" />
          <circle cx="93" cy="111" r="2" fill="#333" />
          <circle cx="137" cy="111" r="2" fill="#333" />
          <ellipse cx="110" cy="130" rx="5" ry="4" fill="#DBA88A" />
          <ellipse cx="74" cy="132" rx="16" ry="9" fill="#FF9BAA" opacity="0.45" />
          <ellipse cx="146" cy="132" rx="16" ry="9" fill="#FF9BAA" opacity="0.45" />
          <path d="M 92 140 Q 110 156 128 140" stroke="#1A0A05" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          {/* Hat brim */}
          <ellipse cx="110" cy="58" rx="52" ry="13" fill="#3D6EB5" />
          <ellipse cx="110" cy="56" rx="48" ry="12" fill="#4A7FD4" />
          {/* Hat body */}
          <path d="M 62 56 Q 68 14 110 10 Q 152 14 158 56 Z" fill="#4A7FD4" />
          <path d="M 72 54 Q 76 26 110 22 Q 144 26 148 54" stroke="#3D6EB5" strokeWidth="2" fill="none" opacity="0.7" />
          <circle cx="110" cy="11" r="7" fill="#3D6EB5" />
          <circle cx="110" cy="11" r="4" fill="#5A8FE4" />
          {/* Jacket buttons */}
          <circle cx="110" cy="170" r="4" fill="#3D6EB5" />
          <circle cx="110" cy="185" r="4" fill="#3D6EB5" />
        </svg>
      </motion.div>
    );
  }

  if (variant === 'walking') {
    return (
      <motion.div
        className={className}
        animate={animate ? { y: [0, -10, 0], transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' as const, delay } } : undefined}
      >
        <svg viewBox="0 0 200 290" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
          <ellipse cx="100" cy="287" rx="55" ry="8" fill="rgba(0,0,0,0.18)" />
          {/* Legs - walking pose */}
          <path d="M 78 218 Q 68 245 60 268" stroke="#E8C878" strokeWidth="22" strokeLinecap="round" fill="none" />
          <path d="M 122 218 Q 135 242 140 260" stroke="#E8C878" strokeWidth="22" strokeLinecap="round" fill="none" />
          <ellipse cx="56" cy="270" rx="22" ry="10" fill="#7B4F2E" />
          <ellipse cx="143" cy="263" rx="22" ry="10" fill="#7B4F2E" />
          {/* Egg body */}
          <ellipse cx="100" cy="135" rx="72" ry="88" fill="#F2D9A8" />
          <ellipse cx="82" cy="112" rx="28" ry="36" fill="rgba(255,255,255,0.18)" />
          {/* Blue jacket */}
          <path d="M 30 168 Q 36 230 100 235 Q 164 230 170 168 Q 150 196 100 200 Q 50 196 30 168 Z" fill="#4A7FD4" />
          <path d="M 60 145 Q 64 168 76 178 Q 88 186 100 188 Q 112 186 124 178 Q 136 168 140 145 Z" fill="#5A8FE4" />
          <ellipse cx="100" cy="150" rx="22" ry="13" fill="white" />
          <polygon points="88,152 100,146 88,140" fill="#1A252F" />
          <polygon points="112,152 100,146 112,140" fill="#1A252F" />
          <circle cx="100" cy="146" r="5" fill="#0D1B24" />
          {/* Arms - one forward, one back */}
          <path d="M 32 170 Q 12 188 6 208" stroke="#4A7FD4" strokeWidth="28" strokeLinecap="round" fill="none" />
          <circle cx="5" cy="210" r="17" fill="#F2D9A8" />
          <path d="M 168 165 Q 188 148 195 128" stroke="#4A7FD4" strokeWidth="28" strokeLinecap="round" fill="none" />
          <circle cx="197" cy="124" r="17" fill="#F2D9A8" />
          {/* Face */}
          <ellipse cx="80" cy="110" rx="12" ry="14" fill="#1A0A05" />
          <ellipse cx="120" cy="110" rx="12" ry="14" fill="#1A0A05" />
          <ellipse cx="84" cy="106" rx="5" ry="6" fill="white" />
          <ellipse cx="124" cy="106" rx="5" ry="6" fill="white" />
          <circle cx="85" cy="106" r="2" fill="#333" />
          <circle cx="125" cy="106" r="2" fill="#333" />
          <ellipse cx="100" cy="126" rx="5" ry="4" fill="#DBA88A" />
          <ellipse cx="66" cy="128" rx="15" ry="9" fill="#FF9BAA" opacity="0.45" />
          <ellipse cx="134" cy="128" rx="15" ry="9" fill="#FF9BAA" opacity="0.45" />
          <path d="M 84 136 Q 100 152 116 136" stroke="#1A0A05" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          {/* Hat */}
          <ellipse cx="100" cy="54" rx="52" ry="13" fill="#3D6EB5" />
          <ellipse cx="100" cy="52" rx="48" ry="12" fill="#4A7FD4" />
          <path d="M 52 52 Q 58 10 100 6 Q 142 10 148 52 Z" fill="#4A7FD4" />
          <path d="M 64 50 Q 68 22 100 18 Q 132 22 136 50" stroke="#3D6EB5" strokeWidth="2" fill="none" opacity="0.7" />
          <circle cx="100" cy="8" r="7" fill="#3D6EB5" />
          <circle cx="100" cy="8" r="4" fill="#5A8FE4" />
          <circle cx="100" cy="166" r="4" fill="#3D6EB5" />
          <circle cx="100" cy="181" r="4" fill="#3D6EB5" />
        </svg>
      </motion.div>
    );
  }

  // Default: standing
  return (
    <motion.div
      className={className}
      animate={floatAnim}
    >
      <svg viewBox="0 0 200 285" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
        {/* Shadow */}
        <ellipse cx="100" cy="282" rx="55" ry="9" fill="rgba(0,0,0,0.2)" />
        {/* Legs */}
        <rect x="70" y="222" width="24" height="44" rx="12" fill="#E8C878" />
        <rect x="106" y="222" width="24" height="44" rx="12" fill="#E8C878" />
        {/* Shoes */}
        <ellipse cx="82" cy="268" rx="25" ry="11" fill="#7B4F2E" />
        <ellipse cx="118" cy="268" rx="25" ry="11" fill="#7B4F2E" />
        <ellipse cx="76" cy="263" rx="12" ry="5" fill="#9B6F4E" opacity="0.4" />
        <ellipse cx="112" cy="263" rx="12" ry="5" fill="#9B6F4E" opacity="0.4" />
        {/* Main egg body */}
        <ellipse cx="100" cy="135" rx="72" ry="90" fill="#F2D9A8" />
        {/* Highlight on body */}
        <ellipse cx="80" cy="110" rx="28" ry="38" fill="rgba(255,255,255,0.18)" />
        {/* Blue jacket lower half */}
        <path d="M 30 168 Q 36 232 100 237 Q 164 232 170 168 Q 150 198 100 202 Q 50 198 30 168 Z" fill="#4A7FD4" />
        {/* Jacket chest */}
        <path d="M 60 145 Q 65 170 76 178 Q 88 186 100 188 Q 112 186 124 178 Q 135 170 140 145 Z" fill="#5A8FE4" />
        {/* White shirt collar */}
        <ellipse cx="100" cy="150" rx="23" ry="14" fill="white" />
        {/* Bow tie */}
        <polygon points="87,153 100,147 87,140" fill="#1A252F" />
        <polygon points="113,153 100,147 113,140" fill="#1A252F" />
        <circle cx="100" cy="147" r="5.5" fill="#0D1B24" />
        {/* Left arm */}
        <path d="M 32 172 Q 12 190 7 212" stroke="#4A7FD4" strokeWidth="29" strokeLinecap="round" fill="none" />
        <circle cx="6" cy="214" r="17" fill="#F2D9A8" />
        {/* Right arm - slightly raised/waving */}
        <path d="M 168 167 Q 188 150 196 130" stroke="#4A7FD4" strokeWidth="29" strokeLinecap="round" fill="none" />
        <circle cx="198" cy="126" r="17" fill="#F2D9A8" />
        {/* Face */}
        <ellipse cx="80" cy="112" rx="12" ry="14" fill="#1A0A05" />
        <ellipse cx="120" cy="112" rx="12" ry="14" fill="#1A0A05" />
        {/* Eye whites */}
        <ellipse cx="84" cy="108" rx="5" ry="6" fill="white" />
        <ellipse cx="124" cy="108" rx="5" ry="6" fill="white" />
        {/* Pupils */}
        <circle cx="85" cy="108" r="2.5" fill="#333" />
        <circle cx="125" cy="108" r="2.5" fill="#333" />
        {/* Eyelashes */}
        <line x1="72" y1="103" x2="68" y2="98" stroke="#1A0A05" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="77" y1="100" x2="75" y2="95" stroke="#1A0A05" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="113" y1="100" x2="115" y2="95" stroke="#1A0A05" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="118" y1="103" x2="122" y2="98" stroke="#1A0A05" strokeWidth="1.8" strokeLinecap="round" />
        {/* Nose */}
        <ellipse cx="100" cy="127" rx="5" ry="4" fill="#DBA88A" />
        {/* Cheeks */}
        <ellipse cx="65" cy="130" rx="16" ry="10" fill="#FF9BAA" opacity="0.45" />
        <ellipse cx="135" cy="130" rx="16" ry="10" fill="#FF9BAA" opacity="0.45" />
        {/* Smile */}
        <path d="M 84 138 Q 100 155 116 138" stroke="#1A0A05" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        {/* Cheek lines */}
        <line x1="57" y1="126" x2="53" y2="122" stroke="#FF7A8A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="59" y1="131" x2="54" y2="131" stroke="#FF7A8A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="143" y1="126" x2="147" y2="122" stroke="#FF7A8A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="141" y1="131" x2="146" y2="131" stroke="#FF7A8A" strokeWidth="1.5" strokeLinecap="round" />
        {/* Hat brim */}
        <ellipse cx="100" cy="58" rx="53" ry="14" fill="#3D6EB5" />
        <ellipse cx="100" cy="56" rx="49" ry="13" fill="#4A7FD4" />
        {/* Hat body */}
        <path d="M 51 56 Q 58 12 100 8 Q 142 12 149 56 Z" fill="#4A7FD4" />
        <path d="M 64 54 Q 68 24 100 20 Q 132 24 136 54" stroke="#3D6EB5" strokeWidth="2" fill="none" opacity="0.7" />
        {/* Hat top button */}
        <circle cx="100" cy="10" r="7" fill="#3D6EB5" />
        <circle cx="100" cy="10" r="4" fill="#5A8FE4" />
        {/* Jacket buttons */}
        <circle cx="100" cy="168" r="4.5" fill="#3D6EB5" />
        <circle cx="100" cy="183" r="4.5" fill="#3D6EB5" />
        {/* Jacket pocket with coin */}
        <rect x="114" y="170" width="20" height="22" rx="4" fill="none" stroke="#3D6EB5" strokeWidth="2" />
        <circle cx="124" cy="177" r="6" fill="#FFD700" />
        <text x="124" y="180" textAnchor="middle" fontSize="6" fill="#B8860B" fontWeight="bold">₿</text>
      </svg>
    </motion.div>
  );
}
