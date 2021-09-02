module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
      },
    },
    extend: {
      spacing: {
        13: '3.25rem',
      },
      fontSize: {
        '4xl': ['2.5rem', '3.25rem'],
        '6xl': ['3.25rem', '4.25rem'],
      },
      width: {
        100: '24rem',
        '4xl': '50rem',
      },
      height: {
        120: '32.75rem',
      },
      minWidth: (theme) => theme('width'),
      maxWidth: (theme) => theme('width'),
      fontFamily: {
        karla: 'karla',
        baske: 'baske',
      },
      colors: {
        background: '#FAF7ED',
        secondary: '#D99079',
        gray: {
          default: '#191919',
        },
        peach: '#D99079',
      },
      animation: {
        wiggle: 'wiggle 1s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  mode: 'jit',
};
