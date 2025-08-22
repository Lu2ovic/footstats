// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils'
  ],

  alias: {
    'styled-system': './styled-system', // pas besoin de createResolver
  },

  css: [
    '@/assets/css/global.css', // ton CSS global avec @layer reset, base, tokens...
  ],

  postcss: {
    plugins: {
      '@pandacss/dev/postcss': {},
    },
  }
 
})