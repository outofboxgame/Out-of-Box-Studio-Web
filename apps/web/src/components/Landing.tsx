'use client';
import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

type LandingProps = PropsWithChildren<{ className?: string }>;

export default function Landing({ children, className }: LandingProps) {
  const pathname = usePathname();
  const key = `landingPlayed:${pathname ?? '/'}`;
  const play =
    typeof window !== 'undefined' && sessionStorage.getItem(key) !== '1';

  if (typeof window !== 'undefined' && play) {
    sessionStorage.setItem(key, '1');
  }

  return (
    <motion.div
      initial={play ? { opacity: 0, y: 12 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  );
}

