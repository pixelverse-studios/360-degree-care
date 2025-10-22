import Script from 'next/script'
import { Suspense } from 'react'
import { Merriweather, Rubik } from 'next/font/google'

import { Header } from '@/components/nav/Header'
import Breadcrumbs from '@/components/nav/Breadcrumbs'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/sonner'
import { RouteStateProvider } from '@/lib/providers'
import { getImgSrc } from '@/lib/images'
import dynamic from 'next/dynamic'
import { FACEBOOK, INSTA, PHONE, EMAIL } from '@/utils/constants'

const CampaignTracker = dynamic(
    () =>
        import('@/components/CampaignTracker').then(module => ({
            default: module.CampaignTracker
        })),
    { ssr: false, loading: () => null }
)

const BounceTracker = dynamic(
    () =>
        import('@/components/BounceTracker').then(module => ({
            default: module.BounceTracker
        })),
    { ssr: false, loading: () => null }
)

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
    metadataBase: new URL('https://360degreecare.net'),
    icons: {
        icon: [
            {
                url: getImgSrc('Favicon_16x16'),
                type: 'image/png',
                sizes: '16x16'
            },
            {
                url: getImgSrc('Favicon_32x32'),
                type: 'image/png',
                sizes: '32x32'
            },
            {
                url: getImgSrc('Favicon_64x64'),
                type: 'image/png',
                sizes: '64x64'
            }
        ],
        apple: [{ url: getImgSrc('Favicon_16x16'), sizes: '180x180' }]
    },
    title: 'Concierge Home Care Services in NJ | 360 Degree Care',
    description:
        '360 Degree Care delivers concierge home care, nursing, companion, and staffing support across New Jersey, empowering families with compassionate caregivers.',
    openGraph: {
        images: [
            {
                url: '/path-to-your-new-image.png' // TODO: UPDATE
            }
        ],
        title: 'Concierge Home Care Services in NJ | 360 Degree Care',
        description:
            '360 Degree Care delivers concierge home care, nursing, companion, and staffing support across New Jersey, empowering families with compassionate caregivers.',
        url: 'https://360degreecare.net',
        siteName: '360 Degree Care',
        type: 'website',
        manifest: '/manifest.json'
    },
    alternates: {
        canonical: '/'
    }
}

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeHealthCareService',
    '@id': 'https://360degreecare.net/#localbusiness',
    name: '360 Degree Care',
    url: 'https://360degreecare.net',
    image: 'https://360degreecare.net/assets/logo.png',
    logo: 'https://360degreecare.net/assets/logo.png',
    telephone: PHONE,
    email: EMAIL,
    priceRange: '$$',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '27 Chestnut Street, Floor 1',
        addressLocality: 'Ridgewood',
        addressRegion: 'NJ',
        postalCode: '07450',
        addressCountry: 'US'
    },
    areaServed: {
        '@type': 'State',
        name: 'New Jersey'
    },
    sameAs: [FACEBOOK, INSTA],
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
    '@type': 'Organization',
    '@id': 'https://360degreecare.net/#organization',
    name: '360 Degree Care',
    url: 'https://360degreecare.net',
    logo: 'https://360degreecare.net/assets/logo.png',
    legalName: '360 Degree Care',
    email: EMAIL,
    telephone: PHONE,
    sameAs: [FACEBOOK, INSTA],
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
    const isProduction = process.env.NODE_ENV === 'production'

    return (
        <html lang="en-US">
            <head>
                <Script
                    id="local-business-schema"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(localBusinessSchema)
                    }}
                />
                <Script
                    id="organization-schema"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationSchema)
                    }}
                />
                {isProduction && (
                    <Script
                        id="facebook-pixel"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '668364266032178');fbq('track', 'PageView');`
                        }}
                    />
                )}
                <link
                    rel="stylesheet"
                    media="screen"
                    href="https://fontlibrary.org//face/symbola"
                    type="text/css"
                />
                {isProduction && (
                    <Script
                        id="sitebehaviour-init"
                        strategy="lazyOnload"
                        dangerouslySetInnerHTML={{
                            __html: `
                                    (function() {
                                        var sbSiteSecret = 'dd171ee6-2143-4a6d-b96a-1023e3c53f39';
                                        window.sitebehaviourTrackingSecret = sbSiteSecret;
                                        var scriptElement = document.createElement('script');
                                        scriptElement.async = true;
                                        scriptElement.id = 'site-behaviour-script-v2';
                                        scriptElement.src = 'https://sitebehaviour-cdn.fra1.cdn.digitaloceanspaces.com/index.min.js?sitebehaviour-secret=' + sbSiteSecret;
                                        document.head.appendChild(scriptElement); 
                                    })();
                                `
                        }}
                    />
                )}
            </head>
            <body
                className={`antialiased ${rubik.variable} ${merriweather.variable}`}
            >
                {isProduction && (
                    <noscript>
                        <img
                            height="1"
                            width="1"
                            style={{ display: 'none' }}
                            src="https://www.facebook.com/tr?id=668364266032178&ev=PageView&noscript=1"
                            alt=""
                        />
                    </noscript>
                )}
                <RouteStateProvider>
                    <Suspense fallback={null}>
                        <CampaignTracker />
                        <BounceTracker />
                    </Suspense>
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
