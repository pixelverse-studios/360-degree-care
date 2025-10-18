'use client'

import dynamic from 'next/dynamic'
import AnimatedSection from '@/components/animated-section'
import HomeHealthCareHero from '@/components/hero/HomeHealthcareHero'
import HomeHealthAideServices from '@/components/services/HomeHealthAideServices'

const CallToAction = dynamic(() => import('@/components/CallToAction'), {
    ssr: false
})

interface headerProps {
    header: string
}

export default function HomeAidesView({ header }: headerProps) {
    return (
        <main>
            <HomeHealthCareHero header={header} />
            <HomeHealthAideServices />
            <section className="bg-white py-12">
                <AnimatedSection
                    animation="zoom"
                    className="page-wrapper text-center flex flex-col gap-4 py-8"
                >
                    <h2>Need a Home Health Aide?</h2>
                    <p className="max-w-2xl mx-auto mb-6">
                        Our dedicated team provides compassionate, professional
                        care that helps your loved one maintain independence and
                        dignity at home. Contact us today to learn how we can
                        help.
                    </p>
                    <CallToAction
                        buttonLabel="Get In Touch"
                        buttonClass="w-full md:w-fit mx-auto"
                        variant="pillPrimary"
                        type="services"
                        value="Home Health Aides"
                    />
                </AnimatedSection>
            </section>
        </main>
    )
}
