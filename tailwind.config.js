/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0E1F33',
          50: '#EBF2FF',
          100: '#D1E0F6',
          200: '#A3C1E8',
          300: '#71A1D7',
          400: '#4682C5',
          500: '#2A639E',
          600: '#1E4978',
          700: '#133152',
          800: '#0E1F33',
          900: '#050E19'
        },
        secondary: {
          DEFAULT: '#13AECE',
          50: '#EBFAFE',
          100: '#D0F3FA',
          200: '#A1E7F5',
          300: '#71DBEF',
          400: '#42CEEA',
          500: '#13AECE',
          600: '#0E8AA6',
          700: '#0A677E',
          800: '#064357',
          900: '#03212F'
        },
        accent: {
          DEFAULT: '#F45D48',
          50: '#FFF1EF',
          100: '#FFDAD4',
          200: '#FFB5A9',
          300: '#FF907E',
          400: '#F96B53',
          500: '#F45D48',
          600: '#D43C28',
          700: '#A02C1E',
          800: '#6D1D14',
          900: '#3A0F0A'
        },
        success: {
          DEFAULT: '#10B981',
          100: '#ECFDF5',
          500: '#10B981',
          900: '#064E3B'
        },
        warning: {
          DEFAULT: '#F59E0B',
          100: '#FFFBEB',
          500: '#F59E0B',
          900: '#78350F'
        },
        error: {
          DEFAULT: '#EF4444',
          100: '#FEF2F2',
          500: '#EF4444',
          900: '#7F1D1D'
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#0A0F1A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace']
      },
      spacing: {
        '0': '0',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '32': '128px',
        '40': '160px',
        '48': '192px',
        '56': '224px',
        '64': '256px'
      },
      borderRadius: {
        'sm': '4px',
        DEFAULT: '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '32px'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        }
      }
    }
  },
  plugins: []
}