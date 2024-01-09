/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary-purple-400': '#7F56D9',
      'primary-purple-300': '#7E7EAA',
      'primary-purple-900': '#06241B',
      'primary-orange': '#FF6905',
      'text-primary-purple': 'var(--primary-purple-400)',
      'text-primary-purple-medium': 'var(--primary-purple-300)',
      'text-primary-black': 'var(--primary-purple-900)'
    }
  },
  plugins: [],
}