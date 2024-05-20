/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pBlack': '#000319',
        'wText': '#E4ECFF',
      },
      screens: {
        'sm2': '550px',
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 3s linear infinite",
        shimmer2: "shimmer2 2.5s linear infinite",
        bouncingLight: "bouncingLight 2.5s linear infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
            from: {
              "backgroundPosition": "0 0"
            },
            to: {
              "backgroundPosition": "-200% 0"
            }
        },
        shimmer2: {
            from: {
              "backgroundPosition": "-200% 0"
            },
            to: {
              "backgroundPosition": "0 0"
            }
        },
        bouncingLight: {
          '0%': {
            opacity: '100%'
          },
          '25%': {
            opacity: '60%'
          },
          '50%': {
            opacity: '30%'
          },
          '75%': {
            opacity: '60%'
          },
          '100%': {
            opacity: '100%'
          },
        }
      },
    },
  },
  plugins: [],
}

