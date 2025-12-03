/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        InconsolataBold : ["Inconsolata-Bold", "sans-serif"],
        InconsolataExtraBold : ["Inconsolata-ExtraBold", "sans-serif"],
        InconsolataMedium : ["Inconsolata-Medium", "sans-serif"],
        InconsolataRegular : ["Inconsolata-Regular", "sans-serif"]
      },
      colors: {
        neutralC: {
          0: "hsl(0, 0%, 100%)",
          300: "hsl(252, 6%, 83%)",
          500: "hsl(245, 15%, 58%)",
          700: "hsl(245, 19%, 35%)",
          900: "hsl(248, 70%, 10%)"
        },
        orangeC: {
          500: "hsl(7, 88%, 67%)",
          700: "hsl(7, 71%, 60%)"
        }
      },
      backgroundImage: {
          'hero-bg': 'url(/assets/images/background-desktop.png)',
          'hero-circle' : 'url(/assets/images/pattern-circle.svg)'
      }
    },
  },
  plugins: [],
}

