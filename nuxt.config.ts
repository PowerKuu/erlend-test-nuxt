export default defineNuxtConfig({
  modules: ['nuxt-icon'],

  components: [
      {
          path: "@/components",
          global: true,
      },
  ],

  devtools: { enabled: process.env.NODE_ENV === "development" }
})
