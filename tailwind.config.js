/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Raleway'],
    },
    extend: {
      colors: {
        'bg': '#181F2B',
        'lightbg': '#202A3C',
        'linear1': '#63E1D9',
        'linear2': '#34A0CD',
        'neon': '#62E0D9',
        'bg-footer': '#0B1524',
        'hover': '#8ADAE3',
      },
      backgroundImage: {
        'bgcurve': "url('./assets/bgimg.png')",
        'bgcurve-desktop': "url('./assets/bgimg-desktop.png')",
      }
    },
  },
  plugins: [],
}
