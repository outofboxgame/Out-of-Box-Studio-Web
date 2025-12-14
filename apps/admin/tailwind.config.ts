import type { Config } from 'tailwindcss';
import preset from '@out-of-box-studio/config/tailwind-preset';

export default {
  presets: [preset as unknown as Config],
  content: ['./src/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}']
} satisfies Config;
