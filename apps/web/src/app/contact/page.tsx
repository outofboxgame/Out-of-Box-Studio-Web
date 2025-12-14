import Section from '../../components/Section';
import type { Metadata } from 'next';
import SocialCards from '../../components/contact/SocialCards';

export const metadata: Metadata = {
  title: 'Contact — Out Of Box Studio'
};

export default function ContactPage() {
  return (
    <main>
      <div className="bg-[#0d1015]">
        <Section className="py-20 max-w-7xl">
          <h1 className="text-3xl sm:text-4xl font-semibold text-text text-center">Contact</h1>
          <p className="mt-4 text-text-muted text-center">Let’s build something thoughtful.</p>
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
              Small studio. Replies may take time. Messages are read with care.
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}
