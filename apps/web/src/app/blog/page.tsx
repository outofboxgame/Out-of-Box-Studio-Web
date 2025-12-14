'use client';
import { motion } from 'framer-motion';
import Section from '../../components/Section';

export default function BlogPage() {
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
            Blog
          </motion.h1>
          <motion.p
            className="mt-4 text-text-muted"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          >
            Notes from the studio
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
            <div className="rounded-lg border border-white/10 bg-black/20 p-6">
              <p className="text-text-muted">
                Writing is coming soon. Development notes, lessons learned, and behind-the-scenes
                thoughts.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                <h3 className="text-text font-semibold">Coming Soon</h3>
                <p className="mt-2 text-text-muted">Prototype diaries and pacing strategies.</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                <h3 className="text-text font-semibold">Coming Soon</h3>
                <p className="mt-2 text-text-muted">Design notes on mood, rhythm, and clarity.</p>
              </div>
            </div>
          </motion.div>
        </Section>
      </div>
    </main>
  );
}
