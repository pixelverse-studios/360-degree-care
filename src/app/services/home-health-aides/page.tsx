'use client'

import HomeHealthCareHero from '@/components/hero/HomeHealthcareHero'
import HomeHealthAideServices from '@/components/services/HomeHealthAideServices' // This will be our new component
import CallToAction from '@/components/CallToAction'
import AnimatedSection from '@/components/animated-section'

export default function HomeHealthAidesPage() {
    return (
        <main className="breadcrumbSpacing">
            <HomeHealthCareHero />
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
                        buttonClass="w-full md:w-fit md:mx-auto"
                        round
                        type="services"
                        value="Home Health Aides"
                    />
                </AnimatedSection>
            </section>
        </main>
    )
}
