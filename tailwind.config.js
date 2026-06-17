/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        accent: '0 0 0 1px rgb(var(--accent-rgb) / 0.25), 0 18px 60px rgb(var(--accent-rgb) / 0.08)',
      },
    },
  },
  plugins: [],
};
