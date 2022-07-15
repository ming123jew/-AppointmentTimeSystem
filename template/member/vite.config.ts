import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(),react()],
  resolve: {
    alias: [
      // { find: "src", replacement: path.resolve(__dirname,'src') },
      {find:"@", replacement: path.resolve(__dirname,'src')}
    ]
  },
})
