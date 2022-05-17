module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '350px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing: {
        91: '27rem',
        92: '32rem',
        96: '40rem',
        98: '56rem',
        99: '65rem',
      },
    },
    colors: {
      gray: '#EAEAEA',
      'gray-2': '#626262',
      white: '#FFFFFF',
      black: '#232323',
      error: '#F15524',
      link: '#3366BB',
      green: '#208298',
      'green-d': '#175a69',
    },
    fontFamily: {
      anonymous: ['Anonymous Pro'],
    },
    animation: {
      bounce: 'bounce 1s 5 ',
      pulse: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      'spin-slow': 'spin 3s linear infinite',
    },
  },
  plugins: [],
};
