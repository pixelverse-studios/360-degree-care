'use client'

import AnimatedSection from '../animated-section'
import { getImgSrc } from '@/lib/images'

interface ExpectationItem {
    img: string
    description: string
}

const ExpectationItem = ({ img, description }: ExpectationItem) => (
    <li className="">
        <img
            className="h-[12rem] w-auto mb-4 shadow-lg rounded-lg"
            src={getImgSrc(img)}
            alt={`${description} - image`}
            loading="lazy"
        />
        <p className="text-sm w-[90%] mx-auto">{description}</p>
    </li>
)

export default function HomeHealthCareHero({ header }: { header: string }) {
    return (
        <section className="bg-white-bright min-h-fullView">
            <AnimatedSection
                animation="zoom"
                className="page-wrapper grid grid-cols-1 xl:grid-cols-2 gap-6 justify-between"
            >
                <div className="flex flex-col gap-6 pt-2">
                    <h1 className="font-bold text-4xl md:text-3xl sm:text-xl">
                        {header ? (
                            header
                        ) : (
                            <>
                                <span className="prio text-3xl">
                                    Concierge-Level™
                                </span>{' '}
                                Home Health Aide Services in New Jersey
                            </>
                        )}
                    </h1>
                    <p className="text-lg">
                        Our certified home health aides deliver compassionate,
                        personalized care that supports daily living, promotes
                        well-being, and provides meaningful companionship — all
                        within the comfort of your home.
                        <br />
                        <br />
                        Whether you need a few hours of help or 24/7 assistance,
                        360 Degree Care is here to ensure safety, comfort, and
                        dignity every step of the way. Every care plan is
                        tailored to your loved one’s specific needs, ensuring
                        they receive high-quality, Concierge-Level™ support you
                        can trust.
                    </p>
                </div>
                <img
                    className="h-fit w-fit mx-auto xl:mx-0 rounded-xl shadow-xl object-cover"
                    src={getImgSrc('mother-daughter')}
                    alt="Home Healthcare Aid graphic"
                    loading="lazy"
                />
            </AnimatedSection>
            <AnimatedSection
                animation="zoom"
                className="max-w-custom mx-auto py-8"
            >
                <h2 className="text-3xl text-center pb-8">What To Expect</h2>
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-8 max-w-4xl mx-auto px-6">
                    <ExpectationItem
                        img="nurse_plan"
                        description="We will set up an initial assessment. Consider us your local elder care consultant."
                    />
                    <ExpectationItem
                        img="nurse_assessment"
                        description="Our team of specialists will help create a care plan to determine the services needed."
                    />
                    <ExpectationItem
                        img="nurse_care"
                        description=" Our specialized team of caregivers will come to your home to provide the agreed-upon care. We even offer respite care, when needed."
                    />
                </ul>
            </AnimatedSection>
        </section>
    )
}
