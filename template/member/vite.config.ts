import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import react from '@vitejs/plugin-react'
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    react(),
    viteMockServe({
      mockPath: "./src/mock", // 解析，路径可根据实际变动
      localEnabled: true // 此处可以手动设置为true，也可以根据官方文档格式
    })
  
  ],
  resolve: {
    // alias: [
    //   // { find: "src", replacement: path.resolve(__dirname,'src') },
    //   {find:"@", replacement: path.resolve(__dirname,'src')},
    // ]
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
})
