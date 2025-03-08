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
            height: {
                fullView: 'calc(100dvh - 5rem)' // New height variable
            },
            backgroundImage: {
                'gradient-down':
                    'linear-gradient(to bottom, var(--tw-gradient-from), var(--tw-gradient-to))'
            },
            colors: {
                background: 'var(--white)',
                foreground: 'var(--foreground)',
                card: {
                    DEFAULT: 'var(--card)',
                    foreground: 'var(--card-foreground)'
                },
                popover: {
                    DEFAULT: 'var(--popover)',
                    foreground: 'var(--popover-foreground)'
                },
                primary: {
                    DEFAULT: 'var(--primary)',
                    muted: 'var(--primary-muted)',
                    bright: 'var(--primary-bright)',
                    dark: 'var(--primary-dark)',
                    foreground: 'var(--muted-white)'
                },
                secondary: {
                    DEFAULT: 'var(--secondary)',
                    foreground: 'var(--white)'
                },
                muted: {
                    DEFAULT: 'var(--muted-black)',
                    foreground: 'var(--muted-foreground)'
                },
                accent: {
                    DEFAULT: 'var(--accent)',
                    foreground: 'var(--accent-foreground)'
                },
                destructive: {
                    DEFAULT: 'var(--destructive)',
                    foreground: 'var(--destructive-foreground)'
                },
                border: 'var(--border)',
                input: 'var(--input)',
                ring: 'var(--ring)',
                chart: {
                    '1': 'var(--chart-1)',
                    '2': 'var(--chart-2)',
                    '3': 'var(--chart-3)',
                    '4': 'var(--chart-4)',
                    '5': 'var(--chart-5)'
                },
                black: {
                    DEFAULT: 'var(--black)',
                    muted: 'var(--muted-black)'
                },
                white: {
                    DEFAULT: 'var(--white)',
                    muted: 'var(--muted-white)',
                    bright: 'var(--bright-white)'
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
