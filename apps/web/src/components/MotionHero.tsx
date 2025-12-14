'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@out-of-box-studio/ui';

export function MotionHero() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };
  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <motion.div
        className="text-center select-none -translate-y-6 sm:-translate-y-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-5xl sm:text-7xl font-extrabold tracking-tight"
          variants={item}
        >
          <span className="relative inline-block">
            <span className="absolute -inset-x-6 bottom-0 h-3 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 blur-md" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white">
              Out Of Box
            </span>
          </span>{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            Studio
          </span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg text-text-muted"
          variants={item}
        >
          Crafting Games Beyond Imagination
        </motion.p>
      </motion.div>
      <div className="mt-10 flex items-center justify-center gap-4">
        <Link href="/games">
          <Button className="px-6 py-3 rounded-md bg-accent text-black hover:shadow-[0_0_20px_theme(colors.accent.glow)] transition-shadow">
            View Games
          </Button>
        </Link>
        <Link href="/contact">
          <Button className="px-6 py-3 rounded-md bg-transparent border border-accent text-text hover:shadow-[0_0_20px_theme(colors.accent.glow)] transition-shadow">
            Contact for Publishing
          </Button>
        </Link>
      </div>
    </div>
  );
}
