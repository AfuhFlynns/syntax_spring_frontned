/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,tsx,jsx,html,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: "#1A202C",
          text: "#EDF2F7",
          border: "#4A5568",
          white: "#FFFFFF",
          button: {
            "blue-light": "#007BFF",
            "blue-dark": "#0056D6",
          },
        },
        secondary: {
          bg: "#2D3748",
          hightlight: "#4FD1C5",
          button: {
            outline: "#4A5568",
            text: "#EDF2F7",
          },
        },
        cards: {
          bg: "#2D3748",
        },
        ShadowRoot: {
          shadow: "rgba(0, 0, 0, 0.6)",
        },
        accent: {
          success: "#38A169",
          warning: "#ED8936",
          error: "#E53E3E",
          info: "#4299E1",
        },
      },
      backgroundImage: {
        "primary-gradient": "var(--primary-gradient)",
        "button-gradient": "var(--button-gradient)",
      },
      fontSize: {
        h1: "36px",
        h2: "28px",
        h3: "22px",
        regular: "16px",
        captions: "12px",
      },
      borderRadius: {
        large: "16px",
        small: " 6px",
      },
    },
  },
  plugins: [],
};
