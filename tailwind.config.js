/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Master visual identity palette - Final Clean Ivory & White direction
        'soft-white': '#FAFAF7',
        'ivory-white': '#F8F7F3',
        'warm-offwhite': '#F5F4EF',
        'clean-white': '#FFFFFF',

        // Compatibility aliases for existing classes
        'warm-beige': '#F8F7F3',
        'soft-ivory': '#FAFAF7',
        'sand-beige': '#F5F4EF',

        // Dark colors
        charcoal: '#171715',
        'deep-black': '#10100F',
        'dark-warm-grey': '#242320',

        // Supporting accent colors
        'muted-gold': '#C7A66A',
        gold: '#C7A66A',
        'neutral-grey': '#85847E',
        'warm-taupe': '#85847E',
        'dark-brown': '#171715',
        'soft-grey': '#C9C9C1',

        // Semantic aliases
        background: '#FAFAF7',
        surface: '#F8F7F3',
        'surface-sand': '#F5F4EF',
        'surface-beige': '#F8F7F3',
        'surface-dark': '#171715',
        'on-dark': '#F8F7F3',
        'on-dark-muted': '#C9C9C1',
        'on-light': '#171715',
        'on-light-muted': '#85847E',
        primary: '#C7A66A',
        secondary: '#25D366',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Manrope"', '"DM Sans"', 'sans-serif'],
      },
      spacing: {
        xs: '2px',
        sm: '8px',
        md: '12px',
        lg: '32px',
        xl: '64px',
        section: '112px',
      },
      borderRadius: {
        full: '9999px',
      },
      boxShadow: {
        whatsapp: '0px 10px 30px 0px rgba(37, 211, 102, 0.4)',
        soft: '0 10px 30px -10px rgba(23, 23, 21, 0.06)',
        card: '0 14px 34px -10px rgba(23, 23, 21, 0.10)',
        elevated: '0 20px 40px -12px rgba(23, 23, 21, 0.12)',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        150: '150ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
      },
    },
  },
  plugins: [],
}
