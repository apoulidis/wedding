import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✏️  Set this to your GitHub repo name, e.g. '/wedding-website'
// Leave as '/' if using a custom domain or username.github.io repo
const BASE = process.env.VITE_BASE_PATH ?? '/'

export default defineConfig({
  plugins: [react()],
  base: BASE,
})
