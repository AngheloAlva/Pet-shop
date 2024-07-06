import type { Config } from "tailwindcss"

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				"text-100": "#333333",
				"text-200": "#4F4F4F",
				"bg-100": "#FDFBF6",
				"bg-200": "#F4F4F4",
				"bg-300": "#E5E5E5",
				"blue-50": "#E5E5F1",
				"green-50": "#ECF8F2",
				"green-100": "#DAF1E6",
				"green-200": "#B1E2C9",
				"green-300": "#8BD5B0",
				"green-400": "#62C694",
				"green-500": "#41B27A",
				"green-600": "#348E61",
				"green-700": "#286C4A",
				"green-800": "#1A4730",
				"green-900": "#0E251A",
				"green-950": "#07130D",
				"blue-100": "#C7C7E0",
				"blue-200": "#8F8FC2",
				"blue-300": "#5A5AA5",
				"blue-400": "#3B3B6D",
				"blue-500": "#1D1D35",
				"blue-600": "#17172B",
				"blue-700": "#121221",
				"blue-800": "#0B0B14",
				"blue-900": "#05050A",
				"blue-950": "#040407",
				"cream-50": "#FCF8F3",
				"cream-100": "#F8F1E7",
				"cream-200": "#F2E3CF",
				"cream-300": "#EBD5B7",
				"cream-400": "#E5C69F",
				"cream-500": "#DEB887",
				"cream-600": "#CF974F",
				"cream-700": "#A8732E",
				"cream-800": "#704D1F",
				"cream-900": "#38260F",
				"cream-950": "#1C1308",
				"border": "hsl(var(--border))",
				"input": "hsl(var(--input))",
				"ring": "hsl(var(--ring))",
				"background": "hsl(var(--background))",
				"foreground": "hsl(var(--foreground))",
				"primary": {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				"secondary": {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				"destructive": {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				"muted": {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				"accent": {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				"popover": {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				"card": {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
