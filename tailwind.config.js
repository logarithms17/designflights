module.exports = {
  content: [
    "./index.html",                  // Scans the HTML file for Tailwind classes
    "./src/**/*.{js,ts,jsx,tsx}",     // Scans all JavaScript and TypeScript files in the src directory
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
