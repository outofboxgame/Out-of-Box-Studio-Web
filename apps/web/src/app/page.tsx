import Section from '../components/Section';
import { MotionHero } from '../components/MotionHero';
import StorySection from '../components/StorySection';
import GamesSection from '../components/GamesSection';
import FounderSection from '../components/FounderSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Out Of Box Studio — Indie Games Beyond Imagination'
};

export default function HomePage() {
  return (
    <main className="relative">
      <Section className="min-h-[70vh] sm:min-h-[85vh] flex items-center justify-center">
        <MotionHero />
      </Section>
      <StorySection />
      <GamesSection />
      <FounderSection />
    </main>
  );
}
