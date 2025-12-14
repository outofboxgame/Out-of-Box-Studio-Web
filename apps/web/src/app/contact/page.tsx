'use client';
import Section from '../../components/Section';
import Link from 'next/link';

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
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="mailto:contact@outofboxstudio.dev"
              className="group rounded-lg border border-white/10 bg-black/20 p-6 transition transform hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_10px_30px_rgba(147,197,253,0.08)]"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-accent/40 to-white/10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M3 6h18v12H3z" stroke="currentColor" strokeOpacity="0.8" />
                    <path d="M3 6l9 7 9-7" stroke="currentColor" strokeOpacity="0.8" />
                  </svg>
                </span>
                <h3 className="text-text font-semibold">Email</h3>
              </div>
              <p className="mt-3 text-text-muted">
                For publishing, partnerships, or thoughtful conversations.
              </p>
              <p className="mt-3 text-accent">contact@outofboxstudio.dev</p>
            </Link>

            <Link
              href="https://x.com/outofboxstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-white/10 bg-black/20 p-6 transition transform hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_10px_30px_rgba(147,197,253,0.08)]"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-accent/40 to-white/10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeOpacity="0.8" />
                  </svg>
                </span>
                <h3 className="text-text font-semibold">X</h3>
              </div>
              <p className="mt-3 text-text-muted">Development thoughts and quiet updates.</p>
              <p className="mt-3 text-accent">x.com/outofboxstudio</p>
            </Link>

            <Link
              href="https://outofboxstudio.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-white/10 bg-black/20 p-6 transition transform hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_10px_30px_rgba(147,197,253,0.08)]"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-accent/40 to-white/10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="5" y="5" width="14" height="14" rx="3" stroke="currentColor" strokeOpacity="0.8" />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeOpacity="0.8" />
                  </svg>
                </span>
                <h3 className="text-text font-semibold">itch.io</h3>
              </div>
              <p className="mt-3 text-text-muted">Playable experiments and releases.</p>
              <p className="mt-3 text-accent">outofboxstudio.itch.io</p>
            </Link>
          </div>
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
