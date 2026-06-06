import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // When deploying to GitHub Pages under a repository (username.github.io/REPO),
  // set `base` to `/<REPO>/`. This ensures asset paths are correct.
  base: '/ASU-UOH/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
  },
  server: {
    port: 3000,
    open: true,
  },
});
