import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // GitHub Pages serveert dit project op /kvbstudy/. Lokaal draaien we op /.
  const base = command === 'build' ? '/kvbstudy/' : '/';

  return {
    base,
    plugins: [
      react(),
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['icon.svg', 'favicon.svg'],
        manifest: {
          name: 'KVB Studie',
          short_name: 'KVB Studie',
          description: 'Oefen voor het Klimvaardigheidsbewijs (KVB 1, 2, 2+ en 3)',
          lang: 'nl',
          theme_color: '#b35f3c',
          background_color: '#f4eee1',
          display: 'standalone',
          orientation: 'portrait',
          start_url: base,
          scope: base,
          icons: [
            {
              src: 'icon.svg',
              sizes: 'any',
              type: 'image/svg+xml',
              purpose: 'any',
            },
            {
              src: 'icon-maskable.svg',
              sizes: 'any',
              type: 'image/svg+xml',
              purpose: 'maskable',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
        },
      }),
    ],
  };
});
