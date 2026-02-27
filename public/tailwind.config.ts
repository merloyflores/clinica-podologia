import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores personalizados para Ximena Alvarado
        brand: {
          green: "#25D366",   // Verde WhatsApp
          purple: "#7B2CBF",  // Morado del logo
          light: "#F8FAFC",   // Blanco/Grisáceo muy suave para fondos
          dark: "#1E293B",    // Gris oscuro profesional para textos
        },
      },
    },
  },
  plugins: [],
};
export default config;