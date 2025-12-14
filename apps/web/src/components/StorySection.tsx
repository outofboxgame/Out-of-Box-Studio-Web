'use client';
import { motion } from 'framer-motion';
import Section from './Section';

type Item = {
  title: string;
  points: string[];
};

const items: Item[] = [
  {
    title: 'How It Started',
    points: ['Solo developer', 'Curiosity-driven beginnings']
  },
  {
    title: 'Why We Make Games',
    points: ['Creativity', 'Player-first mindset', 'Experimental ideas']
  },
  {
    title: 'Our Vision',
    points: ['Memorable experiences', 'Small games with big ideas']
  }
];

const ease = [0.25, 0.1, 0.25, 1];

export default function StorySection() {
  return (
    <div className="bg-[#101318]">
      <Section className="py-20">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            className="text-2xl sm:text-3xl font-semibold text-text mb-12"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease }}
          >
            About the Studio
          </motion.h2>

          <div className="relative">
            {/* Vertical timeline spine */}
            <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/15 to-white/5" />

            <ul className="space-y-10">
              {items.map((item, i) => (
                <motion.li
                  key={item.title}
                  className="relative pl-10"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.8, ease, delay: i * 0.08 }}
                >
                  {/* Subtle shape icon */}
                  <span className="absolute left-0 top-1.5 h-4 w-4 rotate-45 rounded-sm bg-gradient-to-tr from-accent/60 to-white/20 shadow-[0_0_10px_rgba(147,197,253,0.25)]" />
                  <div className="rounded-md bg-black/20 border border-white/5 p-4">
                    <h3 className="text-lg font-semibold text-text">{item.title}</h3>
                    <ul className="mt-3 space-y-1">
                      {item.points.map((p) => (
                        <li key={p} className="text-text-muted">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent/60 align-middle mr-2" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}

