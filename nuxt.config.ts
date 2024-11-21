// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";

export default defineNuxtConfig({
  modules: ['@nuxt/icon', '@pinia/nuxt', '@coremyslo/nuxt-icon-font', "@nuxt/image"],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./', import.meta.url)), // Alias to project root
      },
    },
  },

  icon: {
    customCollections: [
      {
        prefix: "my-icons",
        dir: "./assets/icons"
      }
    ],
  },

  iconFont: {
    // Font name to be used in "font-family" and custom properties generated prefix "--icon-font-svgiconfilename"
    name: "icon-font",
    // folder with icons to watch
    sourceDirPath: "assets/icons",
    // target folder for generated fonts in "public" folder
    targetDirPath: "assets/icon-font",
    // font formats to generate, fallback to ["woff2"] in case browserslist is not used, example for manual configuration: ["svg", "ttf", "woff", "woff2", "eot"] in any order
    formats: ["svg", "ttf", "woff", "woff2", "eot"],
    // Generates font in memory as "woff" and injects it as base64 to reduce page jump effect, ignores "formats" option
    base64: true,
    // unicode symbol for first icon in iconfont (makes sense to change only if you're not going to use custom properties)
    unicode: "0xE900",
    // generated custom properties (variables) format. Other options are: "snake", "pascal", "camel", "header", "constant"
    case: "kebab"
  },

  pinia: {
    storesDirs: ['@/stores/**'],
  },

  css: ["@/assets/sass/main.scss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  routeRules: {
    '/': { redirect: '/signin' }
  }
});