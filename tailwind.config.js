/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pearl: "#F7F6F0",        // Main background
        ivory: "#F7F6F0",
        porcelain: "#FFFEFA",    // Primary card
        card: "#FFFEFA",
        pistachio: "#EEF0E6",    // Secondary background
        sage: "#84957D",         // Sage green
        lightSage: "#DFE6D7",    // Light sage
        forest: "#35483B",       // Forest green
        botanical: "#35483B",
        champagne: "#C9A875",    // Warm champagne
        gold: "#C9A875",
        borderSage: "#E3E7DA",   // Borders
        textPrimary: "#303C32",  // Main text
        textSecondary: "#85897E",// Secondary text
        textMuted: "#85897E",
      },
      fontFamily: {
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        display: ["'Playfair Display'", "Georgia", "serif"],
      },
      backdropBlur: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "40px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 9s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
