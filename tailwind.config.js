module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',   
      md: '768px',    
      lg: '1024px',   
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        // Primary Colors
        primary: {
          background: "var(--primary-background)",
          foreground: "var(--primary-foreground)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)"
        },
        // Secondary Colors
        secondary: {
          background: "var(--secondary-background)",
          foreground: "var(--secondary-foreground)",
          light: "var(--secondary-light)",
          muted: "var(--secondary-muted)"
        },
        // Accent Colors
        accent: {
          coral: "var(--accent-coral)",
          'coral-light': "var(--accent-coral-light)",
          overlay: "var(--accent-overlay)",
          gray: "var(--accent-gray)"
        },
        // Border Colors
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
          light: "var(--border-light)",
          muted: "var(--border-muted)"
        },
        // Text Colors
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          accent: "var(--text-accent)",
          muted: "var(--text-muted)",
          white: "var(--text-white)",
          'white-muted': "var(--text-white-muted)"
        },
        // Background Colors
        background: {
          main: "var(--bg-main)",
          card: "var(--bg-card)",
          dark: "var(--bg-dark)",
          overlay: "var(--bg-overlay)"
        },
        // Component Colors
        header: {
          background: "var(--header-bg)",
          border: "var(--header-border)"
        },
        footer: {
          background: "var(--footer-bg)"
        },
        button: {
          primary: "var(--button-primary-bg)",
          coral: "var(--button-coral-bg)"
        }
      },
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-sm)',
        'md': 'var(--font-size-md)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        'hero': 'var(--font-size-hero)'
      },
      fontWeight: {
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)',
        'semibold': 'var(--font-weight-semibold)',
        'bold': 'var(--font-weight-bold)'
      },
      lineHeight: {
        'xs': 'var(--line-height-xs)',
        'sm': 'var(--line-height-sm)',
        'md': 'var(--line-height-md)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)',
        'hero': 'var(--line-height-hero)'
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)'
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        'full': 'var(--radius-full)'
      },
      width: {
        'logo': 'var(--logo-width)'
      },
       keyframes: {
        arrowFly: {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(60px)', opacity: 0 },
        },
        bubbleFly: {
          '0%': { transform: 'translateX(0) scale(1)', opacity: 0.5 },
          '100%': { transform: 'translateX(60px) scale(0.5)', opacity: 0 },
        },
      },
      animation: {
        arrowFly: 'arrowFly 0.6s ease-out forwards',
        bubbleFly: 'bubbleFly 0.6s ease-out forwards',
      },
    }
  },
  plugins: []
};