// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],

  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
    },
  },

  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 100,
      },
    },
    optimizeDeps: {
      include: ["tailwindcss"],
    },
  },

  modules: [
    "@nuxt/content",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "nuxt-studio",
  ],

  studio: {
    // Studio admin route (default: '/_studio')
    route: "/editor",

    // GitHub repository configuration (owner and repo are required)
    repository: {
      provider: "github", // only GitHub is currently supported
      owner: "lauroguedes", // your GitHub username or organization
      repo: "aboutial", // your repository name
      branch: "main", // the branch to commit to (default: main)
      rootDir: "", // optional: if your Nuxt app is in a subdirectory (default: '')
    },
  },
});
