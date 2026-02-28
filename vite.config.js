import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Set `base` to your repository name when deploying to GitHub Pages
  // e.g. base: '/REPO_NAME/', replace below placeholder
  base: '/<REPO_NAME>/',
  plugins: [react()],
  server: {
    historyApiFallback: false
  }
})
