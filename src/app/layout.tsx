import Script from 'next/script'
import {
    Bodoni_Moda,
    Merriweather,
    Permanent_Marker,
    Rubik
} from 'next/font/google'

import { Header } from '@/components/nav/Header'
import Breadcrumbs from '@/components/nav/Breadcrumbs'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/sonner'
import { RouteStateProvider } from '@/lib/providers'

// import 'animate.css'
import '../styles/globals.css'

export const metadata = {
    icons: {
        icon: [
            { url: '/Favicon_16x16.png', type: 'image/png', sizes: '16x16' },
            { url: '/Favicon_32x32.png', type: 'image/png', sizes: '32x32' },
            { url: '/Favicon_64x64.png', type: 'image/png', sizes: '64x64' }
        ],
        apple: [{ url: '/Favicon_16x16.png', sizes: '180x180' }]
    },
    title: '360 Degree Care',
    description: 'Your description here',
    openGraph: {
        images: [
            {
                url: '/path-to-your-new-image.png' // Create a new image with your preferred background color
            }
        ],
        title: '360 Degree Care',
        description: "New Jersey's finest Home HealthCare provider",
        url: 'https://www.360degreecare.net',
        siteName: '360 Degree Care',
        type: 'website',
        manifest: '/manifest.json'
    }
}
export const permanentMarker = Permanent_Marker({
    weight: ['400'], // Permanent Marker only comes in 400 weight
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-permanent-marker' // Optional: for CSS variable usage
})

const rubik = Rubik({
    subsets: ['latin'],
    variable: '--font-rubik',
    display: 'swap' // Add this to ensure font loads quickly
})

const merriweather = Merriweather({
    subsets: ['latin'],
    weight: ['300', '400', '700', '900'],
    variable: '--font-merriweather',
    display: 'swap'
})

const bodoni = Bodoni_Moda({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-bodoni',
    weight: ['400', '500', '700']
})

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    media="screen"
                    href="https://fontlibrary.org//face/symbola"
                    type="text/css"
                />
                <Script
                    id="google-tag-manager"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'AW-1709047122');
                        `
                    }}
                />
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=AW-1709047122"
                    strategy="afterInteractive"
                />
                <Script
                    id="sitebehaviour-init"
                    strategy="afterInteractive"
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
                {/* Google Tag Manager */}
                <Script
                    strategy="afterInteractive"
                    src="https://www.googletagmanager.com/gtag/js?id=AW-17090471122"
                />
                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'AW-17090471122');
                        `
                    }}
                />
            </head>
            <body
                className={`antialiased ${rubik.variable} ${merriweather.variable} ${bodoni.variable} ${permanentMarker.variable}`}
            >
                <RouteStateProvider>
                    <Header />
                    <Breadcrumbs />
                    {children}
                    <Footer />
                    <Toaster richColors position="bottom-left" />
                </RouteStateProvider>
            </body>
        </html>
    )
}
