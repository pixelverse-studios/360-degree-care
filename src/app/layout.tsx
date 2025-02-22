import type { Metadata } from 'next'
// import localFont from "next/font/local";
import { Header } from '@/components/nav/Header'
import '../styles/globals.css'

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
            <body className={`antialiased`}>
                <Header />
                {children}
            </body>
        </html>
    )
}
