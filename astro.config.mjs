import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://clinicaodontologicarealisjc.vercel.app',
  integrations: [tailwind()],
  output: 'static',
});
