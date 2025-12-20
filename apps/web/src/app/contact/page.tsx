import Section from '../../components/Section';
import type { Metadata } from 'next';
import SocialCards from '../../components/contact/SocialCards';
import Landing from '../../components/Landing';
import { readContent } from '../../lib/content';

export const metadata: Metadata = {
  title: 'Contact — Out Of Box Studio'
};

export default function ContactPage() {
  const content = readContent();
  return (
    <main>
      <div className="bg-[#0d1015]">
        <Section className="py-20 max-w-7xl">
          <Landing>
            <h1 className="text-3xl sm:text-4xl font-semibold text-text text-center">
              {content.contact.title}
            </h1>
            <p className="mt-4 text-text-muted text-center">{content.contact.tagline}</p>
          </Landing>
        </Section>
      </div>

      <div className="bg-[#0f1217]">
        <Section className="py-16 max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-text-muted">
              For publishing, partnerships, and general conversations, use the contact methods below.
            </p>
          </div>
          <SocialCards className="mt-10" />
        </Section>
      </div>
      <div className="bg-[#101318]">
        <Section className="py-16 max-w-7xl">
          <div className="rounded-lg border border-white/10 bg-black/20 p-6 mx-auto max-w-3xl">
            <h2 className="text-text font-semibold">Expectations</h2>
            <p className="mt-3 text-text-muted">
              {content.contact.expectations}
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}
