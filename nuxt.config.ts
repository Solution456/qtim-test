// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/normalize.scss', '@/assets/global.scss'],
  modules: ["@nuxt/image", "@nuxt/eslint"],

  eslint: {
    config: {
      standalone: false
    }
  }

})