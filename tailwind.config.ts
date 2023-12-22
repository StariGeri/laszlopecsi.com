import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'header': ['"Playfair Display"', 'serif'],
        'body': ['"EB Garamond"', 'serif'],
      },
      colors: {
        'primaryOrange': '#FF5C0A',
        'primaryGreen': '#588157',
        'primaryRed': '#E63946',
        'background': "#FCFCFC",
      },
    },
  },
  plugins: [],
}
export default config
