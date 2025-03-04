import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            maxWidth: {
                custom: 'var(--max-width)'
            },
            colors: {
                background: 'hsl(var(--white))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--muted-white))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--white))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted-black))',
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
                black: {
                    DEFAULT: 'hsl(var(--black))',
                    muted: 'hsl(var(--muted-black))'
                },
                white: {
                    DEFAULT: 'hsl(var(--white))',
                    muted: 'hsl(var(--muted-white))',
                    bright: 'hsl(var(--bright-white))'
                }
            },
            borderRadius: {
                lg: 'var(--border-radius)',
                md: 'calc(var(--border-radius) - 2px)',
                sm: 'calc(var(--border-radius) - 4px)'
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0'
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)'
                    }
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)'
                    },
                    to: {
                        height: '0'
                    }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            },
            fontSize: {
                sm: '20px', // Tailwind's default "sm" is 14px, overriding it to 20px
                base: '22px', // Default "base" is 16px, adjusting accordingly
                lg: '24px',
                xl: '28px',
                '2xl': '32px',
                '3xl': '40px',
                '4xl': '48px',
                '5xl': '56px',
                '6xl': '64px'
            }
        }
    },
    plugins: [require('tailwindcss-animate')]
}
export default config
