import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This matches the existing project URL:
// https://nimishgupta4.github.io/Portfolio-/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-/',
})
