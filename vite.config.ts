/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // ECC/ is a separate checkout living in this folder: keep it out of the watcher.
    watch: { ignored: ['**/ECC/**', '**/out/**'] },
  },
  test: { include: ['src/**/*.test.ts'] },
})
