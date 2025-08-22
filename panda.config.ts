import { defineConfig, defineRecipe } from "@pandacss/dev"

// Définition de ta recette "pageBg"
const pageBgRecipe = defineRecipe({
  className: "page-bg",
  description: "Background gradient for all pages",
  base: {
    minH: "100vh",
    bgGradient: "to-br", // to bottom right
    gradientFrom: "#1e3a8a",
    gradientTo: "#3b82f6",
    color: "white"
  }
})

export const config = defineConfig({
  preflight: true,

  include: [
    "./app.vue",
    "./components/**/*.{js,jsx,ts,tsx,vue}",
    "./pages/**/*.{js,jsx,ts,tsx,vue}"
  ],

  exclude: [],

  theme: {
    extend: {
      recipes: {
        pageBg: pageBgRecipe
      }
    }
  },

  outdir: "styled-system"
})

export default config
