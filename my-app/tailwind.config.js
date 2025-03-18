/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#030014", // Usa un nombre válido en lugar de un código hexadecimal como clave
        accent: "#AB8BFF",
      },
    },
  },
  plugins: [],
};
