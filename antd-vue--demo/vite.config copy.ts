import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import createExternal from 'vite-plugin-external'
import { resolve } from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
    createExternal({
      externals: {
        vue: 'Vue',
      },
    }),
  ],
  base: './',
  build: {
    rollupOptions: {
      input: {
        // article: resolve(__dirname, 'article.html'),
        index: resolve(__dirname, 'index.html'),
        // nested: resolve(__dirname, 'nested/index.html'),
      },
      external: ['vue'], // 告诉 Rollup 不要打包 Vue
      output: {
        format: 'umd',
        globals: {
          vue: 'Vue', // Vue 的全局变量名（与 CDN 引入的对应）
        },
      },
    },
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js', // 使用支持模板编译的版本
    },
  },
})
