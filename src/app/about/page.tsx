'use client'

import AboutHero from '@/components/hero/AboutHero'
import AboutStatBanner from '@/components/about/AboutStatBanner'
import AboutTheTeam from '@/components/about/AboutTheTeam'
import AboutDetails from '@/components/about/AboutDetails'

import AboutSeoHead from '@/lib/seo/about'

export default function AboutPage() {
    return (
        <>
            <AboutSeoHead />
            <main>
                <AboutHero />
                <AboutDetails />
                <AboutStatBanner />
                <AboutTheTeam />
            </main>
        </>
    )
}
