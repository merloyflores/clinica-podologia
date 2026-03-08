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
        brand: {
          purple: "#7B2CBF",  // El morado real del logo
          dark: "#0F172A",    // Un azul pizarra casi negro (más moderno que el azul puro)
          green: "#25D366",   // El verde oficial de WhatsApp
          slate: "#64748B",   // Gris profesional para textos secundarios
          cream: "#F8FAFC",   // Blanco azulado para fondos (limpio y médico)
        },
      },
    },
  },
  plugins: [],
};
export default config;