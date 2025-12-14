import { Button } from '@out-of-box-studio/ui';
import { notFound } from 'next/navigation';
import Section from '../../../components/Section';

type Game = {
  title: string;
  tagline: string;
  description: string;
  trailerGradient: string;
  screenshots: string[];
};

const GAMES: Record<string, Game> = {
  'starfall-echoes': {
    title: 'Starfall Echoes',
    tagline: 'A quiet journey through collapsing constellations.',
    description:
      'Traverse fading skies where constellations whisper the last notes of their stories. Starfall Echoes blends meditative exploration with subtle puzzle rhythms—guiding fragments of light to reconcile drifting worlds. It is less about winning, more about listening to the cosmos.',
    trailerGradient:
      'linear-gradient(135deg, rgba(147,197,253,0.2) 0%, rgba(59,130,246,0.25) 50%, rgba(6,182,212,0.2) 100%)',
    screenshots: [
      'linear-gradient(135deg, rgba(59,130,246,0.25), rgba(147,197,253,0.2))',
      'linear-gradient(135deg, rgba(6,182,212,0.25), rgba(125,211,252,0.2))',
      'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(165,180,252,0.2))',
      'linear-gradient(135deg, rgba(14,165,233,0.25), rgba(147,197,253,0.2))'
    ]
  },
  glassbound: {
    title: 'Glassbound',
    tagline: 'Fragile worlds, resilient choices, shimmering paths.',
    description:
      'Glassbound is a reflective journey through delicate spaces—where each step leaves a trail and each decision refracts into new possibilities. Minimal mechanics, maximal mood. Keep moving; the world will remember how you did.',
    trailerGradient:
      'linear-gradient(135deg, rgba(99,102,241,0.22) 0%, rgba(79,70,229,0.25) 50%, rgba(165,180,252,0.2) 100%)',
    screenshots: [
      'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(165,180,252,0.2))',
      'linear-gradient(135deg, rgba(79,70,229,0.25), rgba(147,197,253,0.18))',
      'linear-gradient(135deg, rgba(147,197,253,0.22), rgba(99,102,241,0.2))'
    ]
  },
  'tide-of-ciphers': {
    title: 'Tide of Ciphers',
    tagline: 'Decode the shoreline; the ocean remembers everything.',
    description:
      'A slow coast along encrypted horizons. Tide of Ciphers invites you to read the sea—patterns and codes woven into foam and tide pools. It rewards curiosity and patience, letting meaning surface in fragments before the bigger shape becomes clear.',
    trailerGradient:
      'linear-gradient(135deg, rgba(6,182,212,0.22) 0%, rgba(34,211,238,0.25) 50%, rgba(125,211,252,0.2) 100%)',
    screenshots: [
      'linear-gradient(135deg, rgba(6,182,212,0.25), rgba(34,211,238,0.2))',
      'linear-gradient(135deg, rgba(125,211,252,0.25), rgba(147,197,253,0.2))',
      'linear-gradient(135deg, rgba(14,165,233,0.22), rgba(6,182,212,0.2))',
      'linear-gradient(135deg, rgba(59,130,246,0.22), rgba(99,102,241,0.18))'
    ]
  }
};

export default function GameDetailPage({ params }: { params: { slug: string } }) {
  const game = GAMES[params.slug];
  if (!game) {
    notFound();
  }

  return (
    <main>
      {/* Title + tagline */}
      <div className="bg-[#0d1015]">
        <Section className="py-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text">
            {game.title}
          </h1>
          <p className="mt-3 text-lg text-text-muted">{game.tagline}</p>
        </Section>
      </div>

      {/* Trailer placeholder */}
      <div className="bg-[#0f1217]">
        <Section className="py-10">
          <div
            className="relative h-56 sm:h-72 rounded-lg border border-white/10 overflow-hidden"
            style={{ background: game.trailerGradient }}
          >
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  'radial-gradient(ellipse at 20% 30%, rgba(255,255,255,0.12), transparent 40%), radial-gradient(ellipse at 80% 70%, rgba(255,255,255,0.08), transparent 35%)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full border border-white/30 bg-black/40 shadow-[0_0_24px_rgba(255,255,255,0.06)]" />
            </div>
          </div>
        </Section>
      </div>

      {/* Screenshot gallery */}
      <div className="bg-[#101318]">
        <Section className="py-12">
          <div className="overflow-x-auto">
            <div className="flex gap-4 snap-x snap-mandatory min-w-0">
              {game.screenshots.map((bg, i) => (
                <div
                  key={i}
                  className="snap-start shrink-0 w-64 h-40 sm:w-72 sm:h-44 rounded-lg border border-white/10 overflow-hidden"
                  style={{ background: bg }}
                >
                  <div
                    className="w-full h-full opacity-20"
                    style={{
                      backgroundImage:
                        'radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.12), transparent 40%), radial-gradient(ellipse at 70% 60%, rgba(255,255,255,0.08), transparent 35%)'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* Description */}
      <div className="bg-[#0f1217]">
        <Section className="py-12">
          <div className="mx-auto max-w-3xl">
            <p className="text-text-muted leading-relaxed">{game.description}</p>
          </div>
        </Section>
      </div>

      {/* CTA */}
      <div className="bg-[#101318]">
        <Section className="py-14">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="px-6 py-3 rounded-md bg-accent text-black hover:shadow-[0_0_20px_theme(colors.accent.glow)] transition-shadow">
              Play / Wishlist
            </Button>
            <Button className="px-6 py-3 rounded-md bg-transparent border border-accent text-text hover:shadow-[0_0_20px_theme(colors.accent.glow)] transition-shadow">
              Contact for Publishing
            </Button>
          </div>
        </Section>
      </div>
    </main>
  );
}
