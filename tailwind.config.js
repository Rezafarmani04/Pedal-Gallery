/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F0F5',
          100: '#CCE1EB',
          200: '#99C3D7',
          300: '#66A5C3',
          400: '#3387AF',
          500: '#00699B',
          600: '#005483',
          700: '#003F6A',
          800: '#002A52',
          900: '#001539',
          950: '#000A1F',
        },
        accent: {
          50: '#F5F7FA',
          100: '#E6E9F0',
          200: '#C8D0E0',
          300: '#A9B7D0',
          400: '#8B9EC0',
          500: '#6C85B0',
          600: '#556A8C',
          700: '#3E4F68',
          800: '#283444',
          900: '#121920',
          950: '#090C10',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F0F2F5',
          200: '#E1E5EA',
          300: '#D1D7DF',
          400: '#A3AEBD',
          500: '#75859C',
          600: '#5C6B80',
          700: '#435164',
          800: '#2A3748',
          900: '#111D2C',
          950: '#080E16',
        },
        success: {
          500: '#22C55E',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
      },
    },
  },
  plugins: [],
};
