import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme:{
    extend: {
      colors: {
        'light-aluminium': '#F2F2F2',
        aluminium: '#BFBFBF',
        'dark-aluminium': '#3F3F3F',
        'darker-aluminium': '#2A2E35',
        gold: '#E5B91A',
      },
      screens: {
        portrait: { raw: '(orientation: portrait)' },
      },
      animation: {
        'card-hover': 'card-hover 300ms forwards',
        'card-unhover': 'card-unhover 300ms forwards',
        'z-hover': 'z-hover 300ms forwards',
        'z-unhover': 'z-unhover 300ms forwards',
        fadeIn: 'fadeIn 300ms forwards',
        fadeOut: 'fadeOut 300ms forwards',
        slideInLeft: 'slideInLeft 300ms forwards',
        slideInRight: 'slideInRight 300ms forwards',
      },
      keyframes: {
        'z-hover': {
          from: { zIndex: "10" },
          to: { zIndex: "10" },
        },

        'z-unhover': {
          from: { zIndex: "10" },
          to: { zIndex: "0" },
        },

        'card-hover': {
          from: { transform: 'scale(1)', zIndex: "0" },
          to: { transform: 'scale(1.2)', zIndex: "10" },
        },

        'card-unhover': {
          from: { transform: 'scale(1.2)', zIndex: "10" },
          to: { transform: 'scale(1)', zIndex: "0" },
        },

        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },

        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },

        slideInRight: {
          from: {
            transform: 'translateX(0px)',
          },

          to: {
            transform: 'translateX(-100%)',
          },
        },

        slideInLeft: {
          from: {
            transform: 'translateX(-100%)',
          },

          to: {
            transform: 'translateX(0px)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
