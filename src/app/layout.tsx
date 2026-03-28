import { Merriweather, Rubik } from 'next/font/google'

import dynamic from 'next/dynamic'

import { Header } from '@/components/nav/Header'
import Breadcrumbs from '@/components/nav/Breadcrumbs'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/sonner'
import { RouteStateProvider } from '@/lib/providers'
import { PHONE, EMAIL, ADDRESS } from '@/utils/constants'

const CANONICAL_ORIGIN = 'https://haven-home-health.netlify.app'
const SITE_TITLE =
    'In-Home Care & Home Health in New Jersey | Haven Home Health'
const SITE_DESCRIPTION =
    'In-home personal care, home health aides, nursing, companion care, and elder care consulting across New Jersey to help seniors live safely at home.'
const FAVICON_ICO = '/favicon-32x32.png'
const FAVICON_16 = '/favicon-16x16.png'
const FAVICON_32 = '/favicon-32x32.png'
const FAVICON_64 = '/favicon-64x64.png'
const APPLE_TOUCH_ICON = '/apple-touch-icon.png'
const SITE_LOGO = FAVICON_64

const AccessibilityMenu = dynamic(
    () =>
        import('@/components/accessibility/AccessibilityMenu').then(module => ({
            default: module.AccessibilityMenu
        })),
    { ssr: false, loading: () => null }
)

// import 'animate.css'
import '../styles/globals.css'

export const metadata = {
    metadataBase: new URL(CANONICAL_ORIGIN),
    icons: {
        icon: [
            { url: FAVICON_ICO, sizes: 'any' },
            { url: FAVICON_16, type: 'image/png', sizes: '16x16' },
            { url: FAVICON_32, type: 'image/png', sizes: '32x32' },
            { url: FAVICON_64, type: 'image/png', sizes: '64x64' }
        ],
        apple: [{ url: APPLE_TOUCH_ICON, sizes: '180x180' }],
        shortcut: [{ url: FAVICON_ICO }]
    },
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    openGraph: {
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        url: CANONICAL_ORIGIN,
        siteName: 'Haven Home Health',
        type: 'website',
        manifest: '/manifest.json'
    },
    twitter: {
        card: 'summary_large_image',
        title: SITE_TITLE,
        description: SITE_DESCRIPTION
    },
    alternates: {
        canonical: '/'
    }
}

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeHealthCareService',
    '@id': `${CANONICAL_ORIGIN}/#localbusiness`,
    name: 'Haven Home Health',
    url: CANONICAL_ORIGIN,
    image: SITE_LOGO,
    logo: SITE_LOGO,
    telephone: PHONE,
    email: EMAIL,
    priceRange: '$$',
    address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS.STREET,
        addressLocality: 'Ridgewood',
        addressRegion: 'NJ',
        postalCode: '07450',
        addressCountry: 'US'
    },
    areaServed: [
        { '@type': 'AdministrativeArea', name: 'Bergen County, New Jersey' }
    ],
    serviceType: [
        'Personal Care',
        'Companion Care',
        'Home Health Aides',
        'Skilled Nursing',
        'Elder Care Consulting',
        'Medical Staffing'
    ],
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            opens: '00:00',
            closes: '23:59'
        }
    ],
    contactPoint: [
        {
            '@type': 'ContactPoint',
            telephone: PHONE,
            contactType: 'customer service',
            areaServed: 'US',
            availableLanguage: ['English']
        }
    ]
}

const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    '@id': `${CANONICAL_ORIGIN}/#organization`,
    name: 'Haven Home Health',
    url: CANONICAL_ORIGIN,
    logo: SITE_LOGO,
    legalName: 'Haven Home Health',
    description:
        'Independent home care agency providing in-home support for seniors across New Jersey.',
    email: EMAIL,
    telephone: PHONE,
    address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS.STREET,
        addressLocality: 'Ridgewood',
        addressRegion: 'NJ',
        postalCode: '07450',
        addressCountry: 'US'
    },
    areaServed: [
        { '@type': 'AdministrativeArea', name: 'Bergen County, New Jersey' }
    ],
    contactPoint: [
        {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            telephone: PHONE,
            email: EMAIL,
            areaServed: 'US',
            availableLanguage: ['English']
        }
    ]
}

const rubik = Rubik({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-rubik',
    display: 'swap'
})

const merriweather = Merriweather({
    subsets: ['latin'],
    weight: ['300', '400', '700', '900'],
    variable: '--font-merriweather',
    display: 'swap'
})

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en-US">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(localBusinessSchema)
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationSchema)
                    }}
                />
                <link
                    rel="stylesheet"
                    media="screen"
                    href="https://fontlibrary.org//face/symbola"
                    type="text/css"
                />
            </head>
            <body
                className={`antialiased ${rubik.variable} ${merriweather.variable}`}
            >
                <RouteStateProvider>
                    <Header />
                    <Breadcrumbs />
                    {children}
                    <Footer />
                    <Toaster richColors position="bottom-left" />
                    <AccessibilityMenu />
                </RouteStateProvider>
            </body>
        </html>
    )
}
