// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    outDir: 'docs', // this is the key change
  },
})
