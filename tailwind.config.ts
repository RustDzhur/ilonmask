import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
      exsm: "270px",
			sm: "375px",
			md: "768px",
      mg: "1045px",
			lg: "1170px",
		},
		colors: {
			nav: "rgb(255, 255, 255)",
			navHover: "rgb(255, 255, 255, 0.5)",
      white: "#fff",
      black: "#000",
		},
		spacing: {
			px: "1px",
			0: "0",
			2: "2px",
			6: "6px",
			8: "8px",
			10: "10px",
			12: "12px",
			13: "13px",
			14: "14px",
			16: "16px",
			15: "15px",
			17: "17px",
			18: "18px",
			20: "20px",
			24: "24px",
			25: "25px",
			30: "30px",
			32: "32px",
			35: "35px",
			38: "38px",
			40: "40px",
			44: "44px",
			50: "50px",
			52: "52px",
			55: "55px",
			60: "60px",
			68: "68px",
			74: "74px",
			80: "80px",
			83: "83px",
			85: "85px",
			100: "100px",
			115: "115px",
			130: "130px",
			139: "139px",
			150: "150px",
			175: "175px",
			180: "180px",
			200: "200px",
			230: "230px",
			270: "270px",
			312: "312px",
		},
		opacity: {
			"0": "0",
			"20": "0.2",
			"40": "0.4",
			"60": "0.6",
			"80": "0.8",
			"100": "1",
		},
		fontFamily: {
			Museo: ["MuseoSansCyrl", "sans-serif"],
		},
		fontWeight: {
			normal: "100",
			medium: "300",
			bold: "700",
		},
    lineHeight: {
      '22': '1.375',
    },
		fontSize: {
			4: "4px",
			6: "6px",
			7: "7px",
			8: "8px",
			10: "10px",
			12: "12px",
			14: "14px",
			15: "15px",
			16: "16px",
			18: "18px",
			20: "20px",
			24: "24px",
			25: "25px",
			32: "32px",
			34: "34px",
			36: "36px",
			40: "40px",
			50: "50px",
			58: "58px",
      60: "60px"
		},
    backgroundColor: {
      'orangeGradient': 'linear-gradient(90deg, #ffffff, #ff9800)',
    },
		borderWidth: {
			switchCompany: "1px",
			authForms: "2px",
			authFormsUnFocus: "2px",
			cardPlan: "2px",
			testimonials: "2px",
		},
		borderColor: {
			switchCompany: "#E2F1F5",
			activeLink: "#313D45",
			authFormsFocus: "#5EA8F5",
			authFormsUnFocus: "#cccccc",
			authBtn: "#FF008A",
			authTabBtn: "#FF008A",
			cardPlan: "#768FE5",
			testimonials: "#FF008A",
		},
		boxShadow: {
			custom: "0px 1px 2px 0px rgba(0, 0, 0, 0.08)",
			circleShadow: "0px 4px 8px 0px rgba(49, 61, 69, 0.24)",
			authForms: "0px 2px 2px 0px rgba(0, 0, 0, 0.12)",
			authBtn: "0px 2px 2px 0px rgba(0, 0, 0, 0.12)",
			authTabBtn: "0px 2px 2px 0px rgba(0, 0, 0, 0.12)",
			heroImage: "0px 2px 8px 0px rgba(0, 0, 0, 0.32)",
			advantages: "0px 4px 8px 0px rgba(0, 0, 0, 0.25)",
			choosePlan: "0px 2px 2px 0px rgba(0, 0, 0, 0.16)",
		},
		backgroundImage: {
			"gradient-background":
				"linear-gradient(49deg, #ff008a 15.09%, #768fe5 59.33%, rgba(255, 0, 138, 0) 87.2%)",
			footerBackground:
				"linear-gradient(to right, #313D45 100px, #313D45 505px)",

        
		},
		borderRadius: {
			"4": "4px",
			"8": "8px",
			"10": "10px",
			"16": "16px",
			"24": "24px",
			"35": "35px",
			"50": "50px",
			"300": "300px",
			"800": "800px",
		},
		extend: {},
	},
	plugins: [
		function ({ addUtilities }: any) {
			const newUtilities = {
				".active-link": {
					textDecoration: "underline",
					"text-underline-offset": "10px",
				},
			};
			addUtilities(newUtilities);
		},
	],
};
export default config;
