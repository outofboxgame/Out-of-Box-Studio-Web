'use client';
import { motion } from 'framer-motion';
import Section from '../../components/Section';

export default function AboutPage() {
  return (
    <main>
      <div className="bg-[#0d1015]">
        <Section className="py-20 max-w-7xl">
          <motion.h1
            className="text-3xl sm:text-4xl font-semibold text-text"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            About the Studio
          </motion.h1>
          <motion.p
            className="mt-4 text-text-muted"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          >
            Small teams. Thoughtful games. Long-term craft.
          </motion.p>
        </Section>
      </div>

      <div className="bg-[#0f1217]">
        <Section className="py-16 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="text-xl font-semibold text-text">Studio Philosophy</h2>
            <div className="mt-4 space-y-4 text-text-muted leading-relaxed">
              <p>
                We approach development with an indie mindset—scope honestly, respect time, and
                shape experiences that reward attention. The work stays small so the ideas can be
                big.
              </p>
              <p>
                Learning happens through building. Each prototype refines the feel, the rhythm, and
                the clarity of play. Repetition teaches; shipping teaches more.
              </p>
              <p>
                Craft over hype. Mood, pacing, and interaction matter. The goal is memorable
                moments, not noise—small games with meaning.
              </p>
            </div>
          </motion.div>
        </Section>
      </div>

      <div className="bg-[#101318]">
        <Section className="py-16 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-xl font-semibold text-text">How We Work</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                <h3 className="text-text font-semibold">Unity + C#</h3>
                <p className="mt-2 text-text-muted">Practical engine familiarity and hands-on craft.</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                <h3 className="text-text font-semibold">Iterative prototyping</h3>
                <p className="mt-2 text-text-muted">Find the feel by building, not by hypothesizing.</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                <h3 className="text-text font-semibold">Player-first design</h3>
                <p className="mt-2 text-text-muted">Clarity, respect, and moments worth remembering.</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                <h3 className="text-text font-semibold">Sustainable solo dev</h3>
                <p className="mt-2 text-text-muted">Long-term pace, steady habits, thoughtful scope.</p>
              </div>
            </div>
          </motion.div>
        </Section>
      </div>
    </main>
  );
}
