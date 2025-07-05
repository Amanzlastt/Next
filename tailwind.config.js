// tailwind.config.mjs
import colors from 'tailwindcss/colors'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#3236a8',
        muted: '#4236a8',
      },
    },
  },
  plugins: [],
}
