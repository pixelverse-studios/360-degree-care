'use client'

import { CompanyName } from '../Logo'

export default function AboutHero() {
    return (
        <section className="bg-white-bright">
            <div className="max-w-custom mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 justify-between items-center px-6 py-12">
                <div className="flex flex-col gap-6">
                    <h1 className="text-5xl md:text-4xl sm:text-2xl font-bold text-black-muted">
                        About <CompanyName styles="text-4xl" />: The Premier
                        Home Care in Bergen County
                    </h1>
                    <p className="text-lg">
                        <CompanyName styles="" /> is the leading home care
                        company in Bergen County. We have been providing highly
                        skilled and compassionate caregivers to facilities and
                        private clients for over ten years. We have received an
                        unbroken string of 5-Star reviews on google and have
                        been honored with many families hiring us back for care
                        multiple times. There is nothing so gratifying as a
                        repeat customer in our business. Critically we have an
                        unheard of 80% retention rate of our companions and
                        aides, btw the industry average is 13%. Of course we are
                        State licensed and importantly certified by
                        CHAP—Community Health Accreditation Program, the highest
                        level of quality assurance in the industry.
                    </p>
                </div>
                <img
                    className="rounded-2xl h-fit w-fit shadow-lg"
                    src="https://placehold.co/1200x1200"
                    alt="placeholder"
                />
            </div>
        </section>
    )
}
