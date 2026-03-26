import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: process.env.GITHUB_ACTIONS === 'true' ? '/EryxAi-Home/' : '/',
  server: {
    port: 3000,
    host: true,
    proxy: {
      '/api-proxy': {
        target: 'https://api.example.com', // Substitua pela URL da sua API
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-proxy/, ''),
        secure: false,
      }
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  }
});
