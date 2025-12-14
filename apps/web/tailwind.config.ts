import type { Config } from 'tailwindcss';
import preset from '@out-of-box-studio/config/tailwind-preset';

export default {
  presets: [preset as unknown as Config],
  content: ['./src/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b0d12',
        text: {
          DEFAULT: '#e5e7eb',
          muted: '#9ca3af'
        },
        accent: {
          DEFAULT: '#60a5fa',
          glow: '#93c5fd'
        }
      }
    }
  }
} satisfies Config;
