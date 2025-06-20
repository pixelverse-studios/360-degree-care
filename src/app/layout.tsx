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
import { getImgSrc } from '@/lib/images'

// import 'animate.css'
import '../styles/globals.css'

export const metadata = {
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
    title: '360 Degree Care',
    description: 'Your description here',
    openGraph: {
        images: [
            {
                url: '/path-to-your-new-image.png' // TODO: UPDATE
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
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-permanent-marker'
})

const rubik = Rubik({
    subsets: ['latin'],
    variable: '--font-rubik',
    display: 'swap'
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
                    id="gtag-manager-init"
                    dangerouslySetInnerHTML={{
                        __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PGDVF5CR');
            `
                    }}
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
            </head>
            <body
                className={`antialiased ${rubik.variable} ${merriweather.variable} ${bodoni.variable} ${permanentMarker.variable}`}
            >
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-PGDVF5CR"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>
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
