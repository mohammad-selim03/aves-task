/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class", // Enable class-based dark mode
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"], // Update paths if necessary
	theme: {
	  extend: {
		colors: {
		  background: "var(--bg-color)", // Dynamic background color
		  text: "var(--text-color)", // Dynamic text color
		},
	  },
	},
	plugins: [require("tailwindcss-animate")], // Keep plugins as needed
  };
  