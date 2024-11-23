/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
			// Add custom colors or use Tailwind's defaults
			background: 'white', // light mode background
			'background-dark': 'black', // dark mode background
			text: 'black', // light mode text
			'text-dark': 'white', // dark mode text
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
