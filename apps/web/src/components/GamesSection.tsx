'use client';
import Section from './Section';
import GameCard from './GameCard';
import { motion } from 'framer-motion';

const games = [
  {
    title: 'Starfall Echoes',
    hook: 'A quiet journey through collapsing constellations.',
    href: '/games',
    accent: 'indigo' as const
  },
  {
    title: 'Glassbound',
    hook: 'Fragile worlds, resilient choices, shimmering paths.',
    href: '/games',
    accent: 'blue' as const
  },
  {
    title: 'Tide of Ciphers',
    hook: 'Decode the shoreline; the ocean remembers everything.',
    href: '/games',
    accent: 'cyan' as const
  }
];

export default function GamesSection() {
  return (
    <div className="bg-[#0f1217]">
      <Section className="py-20">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-text">Our Games</h2>
          <p className="mt-3 text-text-muted">Experiences crafted with care</p>
        </motion.header>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {games.map((g) => (
            <GameCard
              key={g.title}
              title={g.title}
              hook={g.hook}
              href={g.href}
              accent={g.accent}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}

