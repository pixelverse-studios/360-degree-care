'use client'

import HomeHero from '@/components/hero/HomeHero'
import InfoCards from '@/components/InfoCards'
import HomeAboutSection from '@/components/about/HomeAboutSection'
import HomeTestimonials from '@/components/testimonials/HomeTestimonials'
import HomeSeoHead from '@/lib/seo/home'
import SimpleCard from '@/components/card/SimpleCard'
import ContactMap from '@/components/contact/ContactMap'
import { cn } from '@/lib/utils'

import { HIGHLIGHT_CARDS, SERVICE_CARDS } from '@/utils/home'

export default function HomePage() {
    return (
        <>
            <HomeSeoHead />
            <main className="">
                <HomeHero />
                <section className={`gradient-right py-8`}>
                    <ul
                        className={cn(
                            'max-w-custom mx-auto p-6 grid gap-8 grid-cols-1 xl:grid-cols-3'
                        )}
                    >
                        {HIGHLIGHT_CARDS.map(card => (
                            <SimpleCard key={card.title} {...card} />
                        ))}
                    </ul>
                </section>
                <HomeAboutSection />
                <InfoCards
                    styles=""
                    cards={SERVICE_CARDS}
                    header="Our Concierge Level™ Services"
                />
                <HomeTestimonials />
                <ContactMap />
            </main>
        </>
    )
}
