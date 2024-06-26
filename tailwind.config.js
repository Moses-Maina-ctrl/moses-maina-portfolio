const { default: daisyui } = require("daisyui");

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'nav-bar': '#C2C2C2',
        'mainHero': '#EBEBEB',
        'nav-grey': '#DFE9F3',
        'pastel-grey': '#ececec',
        'ash-black': '#222',
        'whitish': '#EAEAEA',
        'beigish': '#E6E6E1',
        'red-icon': '#fe5f57',
        'green-icon': '#2bca42',
        'ash-grey': '#D9D9DD'
      },
      backgroundImage: {
        'texturedPaper': "url('./assets/textured-paper.png')",
      },
    },
    fontFamily: {
      honk: ['Honk', 'system-ui'],
      IBM: ['IBM Plex Mono', 'monospace']
    },

  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#FFF",
        "secondary": "#ececec",
        "accent": "#D9D9DD",
        "base-100": "#fff",

      }
    },
      "black"
    ],

  },
}

