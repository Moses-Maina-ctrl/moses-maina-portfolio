module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'nav-bar': '#C4C4C4',
        'mainHero': '#EBEBEB',
        'nav-grey': '#DFE9F3',
        'pastel-grey': '#ececec',
        'ash-black': '#222',
        'whitish': '#EAEAEA',
        'beigish': '#E6E6E1'
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
  plugins: [],
}

