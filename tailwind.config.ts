import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'0': '#fff',
  				'100': '#dce4ff',
  				'200': '#bac8ff',
  				'300': '#98abff',
  				'400': '#9f84fd',
  				'500': '#546fff',
  				'600': '#3d53db',
  				'700': '#2a3bb7',
  				'800': '#1a2793',
  				'900': '#10197a',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			success: {
  				'100': '#F5FCD2',
  				'200': '#E8FAA6',
  				'300': '#D3F178',
  				'400': '#BCE455',
  				'500': '#9CD323',
  				'600': '#7FB519',
  				'700': '#659711',
  				'800': '#4C7A0B',
  				'900': '#3B6506'
  			},
  			error: {
  				'100': '#FFE7D3',
  				'200': '#FFC8A6',
  				'300': '#FFA37A',
  				'400': '#FF7F59',
  				'500': '#FF4423',
  				'600': '#DB2719',
  				'700': '#B71112',
  				'800': '#930B16',
  				'900': '#7A0619'
  			},
  			warning: {
  				'100': '#FFF8D7',
  				'200': '#FFEFB0',
  				'300': '#FFE488',
  				'400': '#FFD96B',
  				'500': '#FFC73A',
  				'600': '#DBA32A',
  				'700': '#B7821D',
  				'800': '#936312',
  				'900': '#7A4D0B'
  			},
  			information: {
  				'100': '#DCF3FF',
  				'200': '#BAE5FF',
  				'300': '#98D3FF',
  				'400': '#7EC2FF',
  				'500': '#54A6FF',
  				'600': '#3D81DB',
  				'700': '#2A60B7',
  				'800': '#1A4393',
  				'900': '#102E7A'
  			},
  			secondary: {
  				'100': '#DFE1F3',
  				'200': '#C2C6E8',
  				'300': '#8E92BC',
  				'400': '#54577A',
  				'500': '#141522',
  				'600': '#0E0F1D',
  				'700': '#0A0A18',
  				'800': '#060713',
  				'900': '#040815',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
