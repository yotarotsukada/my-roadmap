// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['maz-ui'],
  },
  css: ['ress', 'maz-ui/css/main.css', '@/styles/index.scss'],
  dir: {
    public: '../public',
  },
  imports: {
    dirs: ['composables/**'],
  },
  modules: ['@kevinmarrec/nuxt-pwa'],
  runtimeConfig: {
    public: {
      MSW: process.env.MSW,
    },
  },
  srcDir: './src',
  ssr: false,

  pwa: {
    workbox: {
      // enabled: true, // 開発環境でPWAを有効にするにはコメントアウトを外す
    },
    manifest: {
      theme_color: 'black',
      start_url: 'projects',
    },
    meta: {
      appleStatusBarStyle: true,
    },
  },
});
