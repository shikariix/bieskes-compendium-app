import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "development" ? "/" : "/bieskes-compendium-app/", //neccessary for github pages but breaks dev
  files: ['**/*.{ts,tsx}'],
  plugins: [react()],
}))
