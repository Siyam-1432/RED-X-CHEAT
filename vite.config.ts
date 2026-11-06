
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '127.0.0.1',
    port: 5173,
    allowedHosts: [
      'nice-candles-clean.loca.lt',
      'chan-hudson-amsterdam-mit.trycloudflare.com',
      'male-bikini-sapphire-processes.trycloudflare.com',
      'polyester-suitable-opportunities-crowd.trycloudflare.com',
    ],
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});

