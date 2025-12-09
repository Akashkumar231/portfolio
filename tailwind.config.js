/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern dark palette
        'void': '#0a0a0f',
        'void-light': '#12121a',
        'void-lighter': '#1a1a24',
        
        // Accent colors
        'neon-purple': '#8b5cf6',
        'neon-blue': '#6366f1',
        'neon-cyan': '#22d3ee',
        'neon-pink': '#d946ef',
        'neon-green': '#10b981',
        
        // Text colors
        'ghost': '#71717a',
        'silver': '#a1a1aa',
        'pearl': '#e4e4e7',
      },
      fontFamily: {
        'display': ['Outfit', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.3)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
