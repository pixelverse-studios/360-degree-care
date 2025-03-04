'use client'

import HomeHealthCareHero from '@/components/hero/HomeHealthcareHero'
import HomeHealthCareServices from '@/components/services/HomeHealthCareServices'
import CallToAction from '@/components/CallToAction'

export default function ServicesPage() {
    return (
        <main>
            <HomeHealthCareHero />
            <HomeHealthCareServices />
            <section className="bg-white page-wrapper text-center flex flex-col gap-4 py-8">
                <h3>Looking for a Home Aide?</h3>
                <p>
                    Contact us today to learn more about our home health aide
                    services and how we can help you or your loved ones
                </p>
                <CallToAction
                    buttonLabel="Get In Touch"
                    buttonClass="w-full md:w-fit md:mx-auto"
                />
            </section>
        </main>
    )
}
