module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        'bg-black': '#0A0A0A',
        'dark-gray': '#121212',
        'card-bg': '#1A1A1A',
        'accent-cyan': '#00D9FF',
        'accent-blue': '#0EA5E9'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter']
      }
    }
  },
  plugins: []
}
