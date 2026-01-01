import type { Metadata } from 'next'
import HomeHero from '@/components/hero/HomeHero'
import InfoCards from '@/components/InfoCards'
import dynamic from 'next/dynamic'
import HomeAboutSection from '@/components/about/HomeAboutSection'
import SimpleCard from '@/components/card/SimpleCard'
import { cn } from '@/lib/utils'

import { HIGHLIGHT_CARDS, SERVICE_CARDS } from '@/utils/home'

export const metadata: Metadata = {
    title: 'In-Home Care & Home Health Services in New Jersey | 360 Degree Care',
    description:
        'In-home personal care, home health aides, nursing, companion care, and elder care consulting across New Jersey to help seniors live safely and independently at home.',
    openGraph: {
        title: 'In-Home Care & Home Health Services in New Jersey | 360 Degree Care',
        description:
            'In-home personal care, home health aides, nursing, companion care, and elder care consulting across New Jersey to help seniors live safely and independently at home.',
        type: 'website'
    }
}

const HomeTestimonials = dynamic(
    () => import('@/components/testimonials/HomeTestimonials'),
    { ssr: false }
)

export default function HomePage() {
    return (
        <>
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
            </main>
        </>
    )
}
