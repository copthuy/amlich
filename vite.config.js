import { defineConfig } from 'vite';

export default defineConfig({
  // Use relative paths so the build works from any base (root or a sub-path like /amlich/).
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    sourcemap: false,
  },
});
