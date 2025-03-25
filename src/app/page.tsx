'use client'

import HomeHero from '@/components/hero/HomeHero'
import InfoCards from '@/components/InfoCards'
import HomeAboutSection from '@/components/about/HomeAboutSection'
import HomeTestimonials from '@/components/testimonials/HomeTestimonials'

import { HIGHLIGHT_CARDS, SERVICE_CARDS } from '@/utils/home'

export default function HomePage() {
    return (
        <main className="mt-[5.8rem]">
            <HomeHero />
            <InfoCards styles="gradient-down" cards={HIGHLIGHT_CARDS} />
            <HomeAboutSection />
            <InfoCards
                styles="gradient-up"
                cards={SERVICE_CARDS}
                header="Our Concierge Level™ Services"
            />
            <HomeTestimonials />
        </main>
    )
}
