import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.js'],
  plugins: [daisyui],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter Variable',
          'Noto Sans SC Variable',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
};
