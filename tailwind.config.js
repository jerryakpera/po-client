/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // dark: '#040303',
        dark: '#0F0E0E',
        link: '#184e77',
        accent: '#ffb703',
        light: '#e5e5e5',
        primary: '#191919',
        grey: '#cad2c5',
        secondary: '#284b63',
        negative: '#bc4749',

        positive: '#2d6a4f',
      },
    },
  },
  plugins: [],
};
