module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    display: ['Epilogue', 'system-ui', 'sans-serif'],
    body: ['Epilogue', 'system-ui', 'sans-serif'],
    extend: {
      colors: {
        brand: {
          red: 'var(--red-violet)',
        },
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          xl: '0rem',
        },
      },
    },
  },
  plugins: [],
}