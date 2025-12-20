import Section from '../../components/Section';
import Landing from '../../components/Landing';
import { readContent } from '../../lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — Out Of Box Studio'
};

export default function BlogPage() {
  const content = readContent();
  return (
    <main>
      <div className="bg-[#0d1015]">
        <Section className="py-20 max-w-7xl">
          <Landing>
            <h1 className="text-3xl sm:text-4xl font-semibold text-text text-center">
              {content.blog.title}
            </h1>
            <p className="mt-4 text-text-muted text-center">{content.blog.tagline}</p>
          </Landing>
        </Section>
      </div>

      <div className="bg-[#0f1217]">
        <Section className="py-20 max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-text">Writing in progress</h2>
            <p className="mt-4 text-text-muted leading-relaxed">
              Thoughts on development, design, and craft will appear here over time.
            </p>
            <div className="mx-auto mt-8 h-px w-32 bg-white/10" />
          </div>
        </Section>
      </div>
    </main>
  );
}
