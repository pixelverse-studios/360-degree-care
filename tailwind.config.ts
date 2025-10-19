import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

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
                blue: {
                    DEFAULT: 'var(--blue)',
                    muted: 'var(--blue-muted)',
                    bright: 'var(--blue-bright)',
                    dark: 'var(--blue-dark)'
                },
                green: {
                    DEFAULT: 'var(--green)',
                    muted: 'var(--green-muted)',
                    bright: 'var(--green-bright)',
                    dark: 'var(--green-dark)'
                },
                gray: {
                    light: '#f3f4f6',
                    dark: '#808080'
                },
                accent: {
                    DEFAULT: 'var(--accent)',
                    blue: 'var(--blue)',
                    green: 'var(--green)',
                    greenMuted: 'var(--green-muted)',
                    greenBright: 'var(--green-bright)',
                    greenDark: 'var(--green-dark)'
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
                        height: '0',
                        opacity: '0',
                        transform: 'translateY(-10px)'
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)',
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)',
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                    to: {
                        height: '0',
                        opacity: '0',
                        transform: 'translateY(-10px)'
                    }
                }
            },
            animation: {
                'fade-in': 'animate__animated animate__fadeIn',
                'back-in-left': 'animate__animated animate__backInLeft',
                'spin-slow': 'spin 3s linear infinite',
                'spin-fast': 'spin 500ms linear infinite',
                'spin-very-slow': 'spin 5s linear infinite',
                'accordion-down':
                    'accordion-down 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                'accordion-up':
                    'accordion-up 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
            },
            fontSize: {
                xs: '0.875rem', // 14px
                sm: '1rem', // 16px
                base: '1.125rem', // 18px baseline
                lg: '1.25rem', // 20px
                xl: '1.5rem', // 24px
                '2xl': '1.75rem', // 28px
                '3xl': '2rem', // 32px
                '4xl': '2.25rem', // 36px
                '5xl': '2.625rem', // 42px
                '6xl': '3rem' // 48px
            },
            fontFamily: {
                body: ['var(--font-rubik)'],
                headers: ['var(--font-merriweather)'],
                logo: ['var(--font-bodoni)']
            }
        }
    },
    plugins: [tailwindcssAnimate]
}
export default config
