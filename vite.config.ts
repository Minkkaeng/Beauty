import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      '@framework/ui': path.resolve(__dirname, './packages-lib/ui/src'),
      '@framework/utils': path.resolve(__dirname, './packages-lib/utils/src'),
      // Fix for broken relative import in Hero.tsx
      '../atoms/Button': path.resolve(__dirname, './packages-lib/ui/src/Button')
    }
  }
})
