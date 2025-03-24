import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        chakrapetch: ['var(--font-chakra-petch)'],
        actay: ['var(--font-actay)'],
        jersey10: ['var(--font-jersey-10)'],
        vt323: ['var(--font-vt323)'],
      },
      colors: {
        green: 'rgb(var(--color-green) / <alpha-value>)',
        blue: 'rgb(var(--color-blue) / <alpha-value>)',
        white: 'rgb(var(--color-white) / <alpha-value>)',
        pink: 'rgb(var(--color-pink) / <alpha-value>)',
      },
    },
    screens: {
      xsm: '0px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
  },
  plugins: [],
} satisfies Config;

export default config;
