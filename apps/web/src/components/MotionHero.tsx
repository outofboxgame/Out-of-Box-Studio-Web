'use client';
import Link from 'next/link';
import { Button } from '@out-of-box-studio/ui';
import Landing from './Landing';

export function MotionHero() {
  return (
    <Landing>
      <div className="flex flex-col items-center justify-center text-center select-none">
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight">
          <span className="relative inline-block">
            <span className="absolute -inset-x-6 bottom-0 h-3 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 blur-md" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white">
              Out Of Box
            </span>
          </span>{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            Studio
          </span>
        </h1>

        <p className="mt-4 text-lg text-text-muted">Crafting Games Beyond Imagination</p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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
    </Landing>
  );
}
