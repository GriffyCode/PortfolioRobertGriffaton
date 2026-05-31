import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    // Force le hot reload sur Windows si le système de fichiers est capricieux
    watch: {
      usePolling: true,
      interval: 100,
    },
    // S'assure que le HMR utilise le bon port
    hmr: {
      overlay: true,
    }
  }
})
