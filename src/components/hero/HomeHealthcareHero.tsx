'use client'

import AnimatedSection from '../animated-section'

interface ExpectationItem {
    img: string
    description: string
}

const ExpectationItem = ({ img, description }: ExpectationItem) => (
    <li className="">
        <img
            className="h-[12rem] w-auto mb-4 shadow-lg rounded-lg"
            src={img}
            alt={`${description} - image`}
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
                        {header ? header : `Home Healthcare`}
                    </h1>
                    <p className="text-lg">
                        <span className="font-bold text-primary">
                            Our Home Aids Always Deliver{' '}
                            <span className="prio">Concierge Level™ Care</span>
                            .
                        </span>
                        <br />
                        Personalized home care tailored to support daily living,
                        enhance well-being, and provide compassionate
                        companionship-ensuring safety, comfort and dignity at
                        home. Whether needed for a few hours, or
                        round-the-clock, we will always be there for you.
                    </p>
                </div>
                <img
                    className="h-fit w-fit mx-auto xl:mx-0 rounded-xl shadow-xl object-cover"
                    src="/assets/mother-daughter.jpg"
                    alt="Home Healthcare Aid graphic"
                />
            </AnimatedSection>
            <AnimatedSection
                animation="zoom"
                className="max-w-custom mx-auto py-8"
            >
                <h2 className="text-3xl text-center pb-8">What To Expect</h2>
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-8 max-w-4xl mx-auto px-6">
                    <ExpectationItem
                        img="/assets/nurse plan.jpg"
                        description="We will set up an initial assessment. Consider us your local elder care consultant."
                    />
                    <ExpectationItem
                        img="/assets/nurse assessment.jpg"
                        description="Our team of specialists will help create a care plan to determine the services needed."
                    />
                    <ExpectationItem
                        img="/assets/nurse care.jpg"
                        description=" Our specialized team of caregivers will come to your home to provide the agreed-upon care. We even offer respite care, when needed."
                    />
                </ul>
            </AnimatedSection>
        </section>
    )
}
