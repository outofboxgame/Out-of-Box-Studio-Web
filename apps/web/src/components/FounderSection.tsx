'use client';
import { motion } from 'framer-motion';
import Section from './Section';

const ease = [0.25, 0.1, 0.25, 1] as const;

const timeline = [
  { title: 'Started learning game development' },
  { title: 'First prototype' },
  { title: 'First released game' },
  { title: 'Current goals' }
] as const;

export default function FounderSection() {
  return (
    <div id="founder" className="bg-[#12151b]">
      <Section className="py-20">
        <div className="h-px w-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 mb-8" />
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-text">Founder</h2>
          <p className="mt-3 text-text-muted">The person behind Out Of Box Studio</p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease }}
            className="rounded-lg border border-white/10 bg-black/20 p-6"
          >
            <div className="relative aspect-square w-full max-w-xs mx-auto rounded-full overflow-hidden border border-white/10">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(99,102,241,0.28) 0%, rgba(147,197,253,0.22) 45%, rgba(6,182,212,0.24) 100%)'
                }}
              />
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    'radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.12), transparent 40%), radial-gradient(ellipse at 70% 60%, rgba(255,255,255,0.08), transparent 35%)'
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease }}
            className="rounded-lg border border-white/10 bg-black/20 p-6"
          >
            <div className="space-y-4">
              <p className="text-text-muted">
                Solo indie developer focused on small, thoughtful experiences. Unity and C# roots,
                patient iteration, and a preference for tangible craft over hype. The path is simple:
                learn by building, finish what you start, and let the work speak calmly.
              </p>
              <ul className="space-y-2">
                <li className="text-text">Unity & C# background; hands-on engine familiarity.</li>
                <li className="text-text">Learning by building; momentum over perfection.</li>
                <li className="text-text">Craft over hype; mood and clarity first.</li>
                <li className="text-text">Long-term indie mindset; small games with big ideas.</li>
              </ul>
            </div>

            <div className="mt-8 relative">
              <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/15 to-white/5" />
              <ul className="space-y-4 pl-8">
                {timeline.map((t, i) => (
                  <motion.li
                    key={t.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7, ease, delay: i * 0.06 }}
                    className="relative"
                  >
                    <span className="absolute -left-8 top-1.5 h-3 w-3 rotate-45 rounded-sm bg-gradient-to-tr from-accent/60 to-white/20" />
                    <span className="text-text">{t.title}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
