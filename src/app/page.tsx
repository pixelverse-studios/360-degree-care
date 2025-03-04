'use client'

import HomeHero from '@/components/hero/HomeHero'
import InfoCards from '@/components/InfoCards'
import HomeAboutSection from '@/components/about/HomeAboutSection'
import HomeTestimonials from '@/components/testimonials/HomeTestimonials'

import { HIGHLIGHT_CARDS, SERVICE_CARDS } from '@/utils/home'

export default function HomePage() {
    return (
        <main className="flex flex-col gap-4">
            <HomeHero />
            <InfoCards bgColor="bg-accent" cards={HIGHLIGHT_CARDS} />
            <HomeAboutSection />
            <InfoCards
                bgColor="bg-white"
                cards={SERVICE_CARDS}
                header="Our Concierge Level™ Services"
            />
            <HomeTestimonials />
        </main>
    )
}
