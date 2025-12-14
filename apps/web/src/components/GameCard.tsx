'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type GameCardProps = {
  title: string;
  hook: string;
  href: string;
  accent?: 'blue' | 'indigo' | 'cyan';
  className?: string;
};

const accentMap = {
  blue:
    'linear-gradient(135deg, rgba(96,165,250,0.35) 0%, rgba(147,197,253,0.2) 40%, rgba(59,130,246,0.25) 100%)',
  indigo:
    'linear-gradient(135deg, rgba(99,102,241,0.35) 0%, rgba(165,180,252,0.2) 40%, rgba(79,70,229,0.25) 100%)',
  cyan:
    'linear-gradient(135deg, rgba(34,211,238,0.35) 0%, rgba(125,211,252,0.2) 40%, rgba(6,182,212,0.25) 100%)'
};

export default function GameCard({
  title,
  hook,
  href,
  accent = 'blue',
  className
}: GameCardProps) {
  const gradient = accentMap[accent];

  // Normalize href to /games/[slug] if a generic path was provided
  function toSlug(input: string) {
    return input
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  const finalHref =
    /^\/games\/[a-z0-9-]+$/.test(href) || href === '/'
      ? href.startsWith('/games/') ? href : `/games/${toSlug(title)}`
      : href === '/games'
        ? `/games/${toSlug(title)}`
        : href.startsWith('/games/')
          ? href
          : `/games/${toSlug(title)}`;

  return (
    <Link
      href={finalHref}
      aria-label={title}
      className={clsx(
        'group block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40',
        className
      )}
    >
      <motion.article
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative rounded-lg overflow-hidden border border-white/5 bg-black/30 shadow-[0_0_0_0_rgba(0,0,0,0)] transition-shadow"
      >
        {/* Cover placeholder */}
        <div className="relative h-40 sm:h-48">
          <motion.div
            className="absolute inset-0"
            style={{ background: gradient }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
          {/* abstract shapes */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(ellipse at 20% 30%, rgba(255,255,255,0.12), transparent 40%), radial-gradient(ellipse at 80% 70%, rgba(255,255,255,0.08), transparent 35%)'
            }}
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-text">{title}</h3>
          <p className="mt-2 text-text-muted">{hook}</p>
        </div>

        {/* Hover accents */}
        <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(147,197,253,0.25)] group-hover:border-accent/40" />
      </motion.article>
    </Link>
  );
}
