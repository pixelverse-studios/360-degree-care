'use client'

import HomeHero from '@/components/hero/HomeHero'
import InfoCards from '@/components/InfoCards'
import HomeAboutSection from '@/components/about/HomeAboutSection'
import ContactForm from '@/components/contact/ContactForm'

import { HIGHLIGHT_CARDS, SERVICE_CARDS } from '@/utils/home'

export default function HomePage() {
    return (
        <main className="flex flex-col gap-4 py-4">
            <HomeHero />
            <InfoCards bgColor="bg-secondary" cards={HIGHLIGHT_CARDS} />
            <HomeAboutSection />
            <InfoCards
                bgColor="bg-white"
                cards={SERVICE_CARDS}
                header="Our Concierge Level Services"
            />
            <section className="py-8">
                <ContactForm />
            </section>
        </main>
    )
}
