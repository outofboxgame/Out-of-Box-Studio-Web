import Section from '../../components/Section';
import GameCard from '../../components/GameCard';
import Landing from '../../components/Landing';
import { readContent } from '../../lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Games — Out Of Box Studio'
};

export default function GamesPage() {
  const content = readContent();
  return (
    <Section className="py-20 max-w-7xl">
      <Landing>
        <h1 className="text-3xl font-semibold">Games</h1>
        <p className="mt-4 text-text-muted">Our playable universes.</p>
        <p className="mt-4 text-text-muted max-w-3xl">
          We craft small games with big ideas—quiet adventures, reflective spaces, and playful
          systems that invite curiosity. Each world is designed to be memorable, patient, and
          meaningful.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {content.games.list.map((g) => (
            <GameCard
              key={g.slug}
              title={g.title}
              hook={g.hook}
              href={`/games/${g.slug}`}
              accent={g.accent}
            />
          ))}
        </div>
      </Landing>
    </Section>
  );
}
