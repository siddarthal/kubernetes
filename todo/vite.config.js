import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'http://18.117.197.13:8081/', 
  plugins: [react()],
})
