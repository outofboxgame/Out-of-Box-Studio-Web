import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b0e13',
        text: '#e8eaee',
        'text-muted': '#a9afbb',
        accent: '#93c5fd'
      },
      accent: {
        glow: 'rgba(147, 197, 253, 0.4)'
      }
    }
  }
} satisfies Config;

