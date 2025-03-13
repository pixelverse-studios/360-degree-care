'use client'

import HomeHealthCareHero from '@/components/hero/HomeHealthcareHero'
import HomeHealthAideServices from '@/components/services/HomeHealthAideServices' // This will be our new component
import CallToAction from '@/components/CallToAction'

export default function HomeHealthAidesPage() {
    return (
        <main>
            <HomeHealthCareHero />
            <HomeHealthAideServices />
            <section className="bg-white py-12">
                <div className="page-wrapper text-center flex flex-col gap-4 py-8">
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
                    />
                </div>
            </section>
        </main>
    )
}
