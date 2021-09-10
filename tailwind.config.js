module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
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
  corePlugins: {
    container: false,
  },
  plugins: [
    ({ addComponents, theme }) => {
      addComponents({
        '.container': {
          marginInline: 'auto',
          paddingInline: theme('spacing.4'),
          maxWidth: theme('screens.sm'),

          // Breakpoints
          '@screen sm': {
            maxWidth: theme('screens.sm'),
          },
          '@screen md': {
            maxWidth: theme('screens.md'),
          },
          '@screen lg': {
            maxWidth: theme('screens.lg'),
          },
          '@screen xl': {
            maxWidth: '1232px',
          },
        },
      });
    },
  ],
};
