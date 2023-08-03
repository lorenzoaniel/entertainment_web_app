/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				blue: {
					dark: "#10141E",
					greyish: "#5A698F",
					semidark: "#161D2F",
				},
				red: {
					default: "#FC4747",
				},
				white: {
					pure: "#FFFFFF",
				},
			},
			fontFamily: {
				outfit: "var(--font-outfit)",
			},
			fontSize: {
				"heading-l": [
					"3.2rem",
					{ letterSpacing: "-0.05rem", lineHeight: "auto", fontWeight: 300, fontFamily: "outfit" },
				],
				"heading-m": ["2.4rem", { letterSpacing: "0rem", lineHeight: "auto", fontWeight: 300 }],
				"heading-s": ["2.4rem", { letterSpacing: "0rem", lineHeight: "auto", fontWeight: 500 }],
				"heading-xs": ["1.8rem", { letterSpacing: "0rem", lineHeight: "auto", fontWeight: 500 }],
				"body-m": ["1.5rem", { letterSpacing: "0rem", lineHeight: "auto", fontWeight: 300 }],
				"body-s": ["1.3rem", { letterSpacing: "0rem", lineHeight: "auto", fontWeight: 300 }],
			},
			screens: {
				lg: "1440px",
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				".hide-scrollbar": {
					/* For Chrome, Safari, and Opera */
					"::-webkit-scrollbar": {
						display: "none",
					},
					/* For IE and Edge */
					"-ms-overflow-style": "none",
					/* For Firefox */
					scrollbarWidth: "none",
				},
			};
			addUtilities(newUtilities);
		},
	],
};
