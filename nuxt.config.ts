export default defineNuxtConfig({
  compatibilityDate: '2024-07-30',
  future: { compatibilityVersion: 4 },

  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],

  hub: {},

  app: {
    head: {
      title: 'Frontend Engineer Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Frontend Engineer Portfolio - Building SaaS Products' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  css: [
    '@fontsource/fira-code/400.css',
    '@fontsource/fira-code/600.css',
    '@fontsource/jetbrains-mono/400.css',
    '@fontsource/jetbrains-mono/600.css',
    '~/assets/css/main.css'
  ],

  runtimeConfig: {
    public: {
      name: 'Jay Bharadia',
      email: 'jay.p.bharadia@gmail.com',
      github: 'https://github.com/jaybharadia',
      linkedin: 'https://linkedin.com/in/jaybharadia',
      twitter: 'https://twitter.com/jay_bharadia'
    }
  },

  eslint: {
    config: {
      stylistic: {
        quotes: 'single'
      }
    }
  },

  devtools: { enabled: true }
})