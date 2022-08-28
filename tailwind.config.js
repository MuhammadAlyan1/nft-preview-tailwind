/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'view-icon': "url('/src/assets/images/icon-view.svg')",
      },
    },
  },
  plugins: [],
};
