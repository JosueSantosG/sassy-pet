// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://josuesantosg.github.io',
  base: '/sassy-pet',
  vite: {
    plugins: [tailwindcss()]
  }
});