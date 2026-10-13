import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Relative asset paths: works at a domain root, in a GitHub Pages sub-folder, or in a hosted preview.
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    // Built into docs/ so GitHub Pages can publish it straight from the main branch (Settings → Pages → main /docs).
    outDir: 'docs',
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: { motion: ['framer-motion'], react: ['react', 'react-dom'] },
      },
    },
  },
});
