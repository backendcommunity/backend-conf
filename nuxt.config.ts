// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  ssr: true,
  app: {
    head: {
      title: "BackendConf - Conference for Backend Engineers and Developers",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "BackendConf is the premier event for backend engineers and developers. Join us to learn, network, and grow your backend skills.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["~/assets/css/main.scss"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/motion/nuxt",
    "nuxt-icon",
    "@nuxt/content",
    "@nuxtjs/google-fonts",
  ],
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "dark",
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 700],
      "Fira Code": [400],
    },
    display: "swap",
  },
  tailwindcss: {
    exposeConfig: true,
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: "github-light",
        dark: "github-dark",
      },
      preload: [
        "json",
        "js",
        "ts",
        "html",
        "css",
        "vue",
        "diff",
        "shell",
        "markdown",
        "yaml",
        "bash",
        "ini",
        "python",
        "java",
        "go",
      ],
    },
  },
  // nitro: {
  //   preset: "node-server",
  //   experimental: {
  //     wasm: false,
  //   },
  // },
  experimental: {
    payloadExtraction: false,
  },
});
