// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      title: 'Shelter',
      meta: [{
        name: "Shelter",
      }]
    }
  },
  devtools: { enabled: true },
  alias: {
    "@" :resolve(__dirname, '/'),
  },
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  modules: ['@pinia/nuxt', '@nuxt/content', 'nuxt-swiper'],
  ssr: true,
  swiper: {
      modules: ['navigation']
  },
})
