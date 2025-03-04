import type { Metadata } from 'next'
import { Rubik, Merriweather } from 'next/font/google'

import { Header } from '@/components/nav/Header'
import Breadcrumbs from '@/components/nav/Breadcrumbs'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/sonner'

import '../styles/globals.css'

const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' })
const merriweather = Merriweather({
    subsets: ['latin'],
    weight: ['300', '400', '700', '900'],
    variable: '--font-merriweather'
})

export const metadata: Metadata = {
    title: '360° Care',
    description: 'Created and maintained by PixelVerse Studios'
}

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
            </head>
            <body
                className={`antialiased ${rubik.className} ${merriweather.className}`}
            >
                <Header />
                <Breadcrumbs />
                {children}
                <Footer />
                <Toaster richColors position="bottom-left" />
            </body>
        </html>
    )
}
