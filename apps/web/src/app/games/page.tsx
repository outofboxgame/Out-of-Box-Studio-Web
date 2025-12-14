import Section from '../../components/Section';
import GameCard from '../../components/GameCard';

export default function GamesPage() {
  return (
    <Section className="py-20 max-w-7xl">
      <h1 className="text-3xl font-semibold">Games</h1>
      <p className="mt-4 text-text-muted">Our playable universes.</p>
      <p className="mt-4 text-text-muted max-w-3xl">
        We craft small games with big ideas—quiet adventures, reflective spaces, and playful
        systems that invite curiosity. Each world is designed to be memorable, patient, and
        meaningful.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        <GameCard
          title="Starfall Echoes"
          hook="A quiet journey through collapsing constellations."
          href="/games/starfall-echoes"
          accent="indigo"
        />
        <GameCard
          title="Glassbound"
          hook="Fragile worlds, resilient choices, shimmering paths."
          href="/games/glassbound"
          accent="blue"
        />
        <GameCard
          title="Tide of Ciphers"
          hook="Decode the shoreline; the ocean remembers everything."
          href="/games/tide-of-ciphers"
          accent="cyan"
        />
      </div>
    </Section>
  );
}
