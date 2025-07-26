export default defineNuxtConfig({
  srcDir: 'src/',
  components: true,
  compatibilityDate: '2025-07-26',
  devtools: { enabled: true },
  typescript: {
  shim: false,
  strict: true,
  },
  plugins: [],
  css: ["~/assets/css/main.css", "~/assets/css/elements.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt"
  ],

  app: {
    head: {
      title: 'Uday Portfolio',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Uday Yadav | Frontend Developer Portfolio' }
      ]
    }
  }
});
