module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
      },
    },
    extend: {
      fontSize: {
        '6xl': '3.5rem',
      },
      lineHeight: {
        tight: '1.15',
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
