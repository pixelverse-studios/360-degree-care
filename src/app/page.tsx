'use client'

import HomeHero from '@/components/hero/HomeHero'
import InfoCards from '@/components/InfoCards'
import HomeAboutSection from '@/components/about/HomeAboutSection'
import HomeTestimonials from '@/components/testimonials/HomeTestimonials'
import ContactForm from '@/components/contact/ContactForm'

import { HIGHLIGHT_CARDS, SERVICE_CARDS } from '@/utils/home'
// import JeffImg from '../../public/media/Jeff.jpg'
// import DylanImg from '../../public/media/Dylan.jpg'
// import FranImg from '../../public/media/Fran.jpg'
// import DinaImg from '../../public/media/Dina.jpg'

export default function HomePage() {
    return (
        <main className="flex flex-col gap-4">
            <HomeHero />
            <InfoCards bgColor="bg-secondary" cards={HIGHLIGHT_CARDS} />
            <HomeAboutSection />
            <InfoCards
                bgColor="bg-white"
                cards={SERVICE_CARDS}
                header="Our Concierge Level Services"
            />
            <HomeTestimonials />
        </main>
    )
}
