// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['maz-ui'],
  },
  css: ['ress', 'maz-ui/css/main.css', '~/styles/index.scss'],
  dir: {
    public: '../public',
  },
  modules: ['@kevinmarrec/nuxt-pwa'],
  runtimeConfig: {
    public: {
      NODE_ENV: process.env.NODE_ENV,
      MSW: process.env.MSW ?? 'true',
      HASURA_SECRET: process.env.HASURA_SECRET,
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
