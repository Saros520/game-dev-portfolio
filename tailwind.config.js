/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af', // Blue-700
        secondary: '#3b82f6', // Blue-500
        accent: '#60a5fa', // Blue-400
        info: '#93c5fd', // Blue-300
        success: '#10b981', // Emerald-500
        warning: '#f59e0b', // Amber-500
        error: '#ef4444', // Red-500
        dark: '#000000', // Pure black
        'dark-lighter': '#0f172a', // Slate-900
        'dark-card': '#1e293b', // Slate-800
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'pulse-slow': 'pulse 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'name-flicker': 'nameFlicker 4s ease-in-out infinite',
        'clouds-move': 'cloudsMove 20s linear infinite',
        'eclipse-rays': 'eclipseRays 6s ease-in-out infinite',
        'eclipse-glow': 'eclipseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(30, 64, 175, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(30, 64, 175, 0.6)' },
        },
        nameFlicker: {
          '0%': { 
            opacity: '1',
            textShadow: '0 0 10px rgba(30, 64, 175, 0.5)',
          },
          '25%': { 
            opacity: '0.8',
            textShadow: '0 0 15px rgba(30, 64, 175, 0.7)',
          },
          '50%': { 
            opacity: '1',
            textShadow: '0 0 25px rgba(30, 64, 175, 0.9), 0 0 35px rgba(255, 255, 255, 0.3)',
          },
          '75%': { 
            opacity: '0.9',
            textShadow: '0 0 20px rgba(30, 64, 175, 0.8)',
          },
          '100%': { 
            opacity: '1',
            textShadow: '0 0 10px rgba(30, 64, 175, 0.5)',
          },
        },
        cloudsMove: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        eclipseRays: {
          '0%': { 
            opacity: '0.6',
            transform: 'scale(1) rotate(-15deg)',
          },
          '25%': { 
            opacity: '0.8',
            transform: 'scale(1.05) rotate(0deg)',
          },
          '50%': { 
            opacity: '0.9',
            transform: 'scale(1.1) rotate(15deg)',
          },
          '75%': { 
            opacity: '0.8',
            transform: 'scale(1.05) rotate(0deg)',
          },
          '100%': { 
            opacity: '0.6',
            transform: 'scale(1) rotate(-15deg)',
          },
        },
        eclipseGlow: {
          '0%': { 
            boxShadow: '0 0 60px rgba(255, 255, 255, 0.4), 0 0 120px rgba(255, 255, 255, 0.3), 0 0 180px rgba(255, 255, 255, 0.2)',
          },
          '25%': { 
            boxShadow: '0 0 80px rgba(255, 255, 255, 0.5), 0 0 150px rgba(255, 255, 255, 0.35), 0 0 220px rgba(255, 255, 255, 0.25)',
          },
          '50%': { 
            boxShadow: '0 0 100px rgba(255, 255, 255, 0.6), 0 0 180px rgba(255, 255, 255, 0.4), 0 0 260px rgba(255, 255, 255, 0.3)',
          },
          '75%': { 
            boxShadow: '0 0 90px rgba(255, 255, 255, 0.55), 0 0 160px rgba(255, 255, 255, 0.38), 0 0 240px rgba(255, 255, 255, 0.28)',
          },
          '100%': { 
            boxShadow: '0 0 60px rgba(255, 255, 255, 0.4), 0 0 120px rgba(255, 255, 255, 0.3), 0 0 180px rgba(255, 255, 255, 0.2)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};