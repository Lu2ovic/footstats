import { defineConfig, defineRecipe } from "@pandacss/dev"

// Définition de ta recette "pageBg"
const pageBgRecipe = defineRecipe({
  className: "page-bg",
  description: "Background gradient for all pages",
  base: {
    minH: "100vh",
    bgGradient: "to-br", // to bottom right
    gradientFrom: "#045fff",
    gradientTo: "#000000",
    color: "white"

  }
})

const tableRecipe = defineRecipe({
  className: "table",
  description: "Styles génériques pour les tableaux",
  base: {
    width: "80%",
    borderCollapse: "collapse",
    borderRadius: "lg",
    shadow: "md",
    overflow: "hidden",
    minWidth: { base: '440px', md: '750px' }
  },
  variants: {
    variant: {
      default: {
        bg: "white",
        th: { bg: "blue.600", color: "white", px: "4", py: "2", textAlign: "left" },
        td: { px: "4", py: "2", borderBottom: "1px solid", borderColor: "gray.200" },
      },
      striped: {
        bg: "white",
        "& thead th": { 
          bg: "blue.600", 
          px: "4", 
          py: "2", 
          textAlign: "center"
        },
        "& tbody td": { 
          bg: "blue.500", 
          px: "4", 
          py: "2", 
          borderBottomWidth: "1px", 
          borderColor: "blue.400",
          textAlign: "center",
        },
        "& tbody tr:nth-last-child(-n + 2) td": { 
        bg: "red.400"
        },
        "& tbody tr:nth-child(-n + 4) td": { 
          bg: "blue.600"
          },
        "& tbody tr:first-child td": { 
          bg: "blue.700"
          },
          "& tbody tr:nth-child(5) td, & tbody tr:nth-child(6) td": { 
          bg: "orange.400"
          },
          "& tbody tr:nth-last-child(3) td": { 
          bg: "orange.400"
          },
          "& tbody tr:nth-child(7) td": { 
          bg: "green.400"
          }
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
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
        pageBg: pageBgRecipe,
        table: tableRecipe
      }
    }
  },

  globalCss: {
    h1: {
      fontSize: {base: 'xl', md: '3xl'},
      fontWeight: "bold",
      color: "white",
      textAlign: "center",
      my: "2",
    },
  },

  outdir: "styled-system"
})

export default config
