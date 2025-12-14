'use client';
import type { ReactElement } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundFX(): ReactElement {
  return (
    <div aria-hidden="true">
      {/* Base gradient wash */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black via-bg to-black" />

      {/* Animated accent gradients - GPU-friendly (transform only) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <motion.div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(147,197,253,0.12), transparent 30%), radial-gradient(circle at 80% 30%, rgba(99,102,241,0.12), transparent 35%), radial-gradient(circle at 50% 80%, rgba(14,165,233,0.12), transparent 30%)'
          }}
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={{ x: 24, y: -16, scale: 1.02 }}
          transition={{
            duration: 28,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'linear'
          }}
        />
      </div>

      {/* Subtle starfield */}
      <motion.div
        className="fixed inset-0 -z-10 opacity-[0.08]"
        initial={{ x: 0 }}
        animate={{ x: -20 }}
        transition={{ duration: 40, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
        style={{
          backgroundImage:
            'radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.25), transparent), radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 70% 30%, rgba(255,255,255,0.25), transparent)'
        }}
      />

      {/* Vignette edges for cinematic framing */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%)'
        }}
      />
    </div>
  );
}
