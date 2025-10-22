'use client'

import Image from 'next/image'
import dynamic from 'next/dynamic'
import { CompanyName } from '@/components/Logo'
import AnimatedSection from '@/components/animated-section'
import { getImgSrc } from '@/lib/images'

const rollerCoaster = getImgSrc('roller_coaster')

const CallToAction = dynamic(() => import('@/components/CallToAction'), {
    ssr: false
})

interface CompanionCareViewProps {
    header: string
}

export default function CompanionCareView({ header }: CompanionCareViewProps) {
    return (
        <main>
            <div className="">
                <AnimatedSection
                    animation="zoom"
                    className="relative bg-white-bright text-black px-4 py-16"
                >
                    <div className="max-w-5xl mx-auto text-center">
                        <h1 className="text-4xl font-extrabold mb-4">
                            {header ? header : `Companion Care Services`}
                        </h1>
                        <p className="text-lg font-light max-w-xl mx-auto mb-6">
                            Warm, personal care that keeps individuals socially
                            engaged, safe, and comfortable at home.
                        </p>
                        <CallToAction
                            buttonLabel="Contact Us"
                            variant="pillPrimary"
                            type="services"
                            value="Companion Care"
                        />
                    </div>
                </AnimatedSection>

                {/* WHAT IS A COMPANION CAREGIVER? */}
                <AnimatedSection
                    animation="zoom"
                    className="max-w-5xl mx-auto px-4 py-12"
                >
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Text Column */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4">
                                What is a Companion Caregiver?
                            </h2>
                            <p className="mb-6 text-gray-700 leading-relaxed">
                                A companion caregiver is a compassionate,
                                reliable professional who spends dedicated time
                                with individuals, supporting them with daily
                                tasks and—most importantly—meaningful social
                                engagement. Whether it's sharing stories over a
                                cup of tea, playing a board game, or simply
                                being present to listen, a trusted companion can
                                help reduce loneliness and improve quality of
                                life.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                At <CompanyName />, our companions create a
                                warm, respectful environment that fosters both
                                emotional and physical well-being. From gently
                                reminding clients about medication to planning
                                fun activities, a companion caregiver truly
                                becomes a friend you can count on.
                            </p>
                        </div>

                        {rollerCoaster ? (
                            <Image
                                src={rollerCoaster}
                                alt="Care professional providing companion care in New Jersey"
                                className="rounded-xl shadow-xl w-full h-auto"
                                width={1200}
                                height={800}
                                sizes="(min-width: 1024px) 40vw, 90vw"
                            />
                        ) : null}
                    </div>
                </AnimatedSection>

                {/* BENEFITS SECTION */}
                <section className="bg-white-bright py-12">
                    <AnimatedSection
                        animation="zoom"
                        className="max-w-5xl mx-auto px-4"
                    >
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            How Companion Care Helps
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Benefit 1 */}
                            <div className="p-6 rounded-lg shadow-xl">
                                <h3 className="text-xl font-semibold mb-2">
                                    Social Connection
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Companions engage in conversation, share
                                    activities, and accompany clients on walks
                                    or local outings—fostering companionship and
                                    preventing isolation.
                                </p>
                            </div>
                            {/* Benefit 2 */}
                            <div className="p-6 rounded-lg shadow-xl">
                                <h3 className="text-xl font-semibold mb-2">
                                    Daily Assistance
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    From meal prep to light housekeeping,
                                    companions help with everyday tasks so
                                    individuals can maintain a comfortable,
                                    low-stress routine at home.
                                </p>
                            </div>
                            {/* Benefit 3 */}
                            <div className="p-6 rounded-lg shadow-xl">
                                <h3 className="text-xl font-semibold mb-2">
                                    Peace of Mind
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Family members can rest assured knowing
                                    their loved one has a trusted presence to
                                    monitor safety, assist with reminders, and
                                    offer caring support.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </section>
                {/* CTA SECTION */}
                <section className="py-12 bg-white">
                    <AnimatedSection
                        animation="zoom"
                        className="max-w-4xl mx-auto text-center px-4"
                    >
                        <h2 className="text-2xl font-bold mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-gray-700 mb-6">
                            Contact <CompanyName /> to learn more about our
                            Companion Care Services. We'll work with you to
                            design a care plan that fits your loved one's unique
                            needs, ensuring they remain safe, engaged, and happy
                            at home.
                        </p>
                        <CallToAction
                            buttonLabel="Contact Us"
                            variant="pillPrimary"
                            type="services"
                            value="Companion Care"
                        />
                    </AnimatedSection>
                </section>
            </div>
        </main>
    )
}
