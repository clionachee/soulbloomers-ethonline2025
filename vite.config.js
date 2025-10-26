import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/soulbloomers-ethonline2025/',
  build: {
    outDir: 'dist'
  }
})