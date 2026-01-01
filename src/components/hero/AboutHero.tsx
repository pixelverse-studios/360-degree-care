import dynamic from 'next/dynamic'
import AboutServiceOverview from '../about/AboutServiceOverview'
import AnimatedSection from '../animated-section'

const CallToAction = dynamic(() => import('../CallToAction'), {
    ssr: false
})

export default function AboutHero() {
    return (
        <section className="relative bg-gradient-to-b from-white-bright to-white overflow-hidden">
            <div className="max-w-custom mx-auto px-6 pb-12 md:pb-18">
                <AnimatedSection
                    animation="zoom"
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center scroll-pt-0"
                >
                    <div className="flex flex-col gap-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-black-muted leading-tight mb-2">
                                About 360 Degree Care
                            </h1>
                            <p className="text-xl md:text-2xl font-medium text-gray-600">
                                A trusted New Jersey in-home care team built on
                                experience, compassion, and high standards.
                            </p>
                        </div>
                        <article className="text-lg text-gray-700 leading-relaxed">
                            360 Degree Care has been providing highly skilled
                            and compassionate caregivers to private clients and
                            care facilities across New Jersey for over ten
                            years. Our team supports families with reliable,
                            professional in-home care while maintaining a strong
                            focus on quality, continuity, and individualized
                            support.
                        </article>
                    </div>

                    <ul className="space-y-2 text-gray-700 h-full flex flex-col justify-end gap-[0.7rem]">
                        <li className="flex items-center gap-2">
                            <span className="text-primary">✓</span>
                            Unbroken string of 5-Star Google reviews
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-primary">✓</span>
                            80% caregiver retention rate (industry average: 13%)
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-primary">✓</span>
                            State licensed and CHAP certified
                        </li>
                    </ul>
                </AnimatedSection>
                <AnimatedSection
                    animation="zoom"
                    className="flex flex-col gap-6 mt-12 items-end"
                >
                    <AboutServiceOverview />
                    <div className="mx-auto">
                        <CallToAction
                            buttonLabel="Schedule a Consultation"
                            type="general"
                            value=""
                            variant="pillPrimary"
                        />
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}
