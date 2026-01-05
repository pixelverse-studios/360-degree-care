import Image from 'next/image'
import dynamic from 'next/dynamic'

import { navLinks } from '@/utils/routes'
import { getImgSrc } from '@/lib/images'

const CallToAction = dynamic(() => import('../CallToAction'), {
    ssr: false
})
const CallToActionButton = dynamic(
    () => import('../CallToActionButton').then(mod => mod.CallToActionButton),
    { ssr: false }
)

export default function HomeHero() {
    const heroImageSrc = getImgSrc('home-hero')

    return (
        <section className="mt-2 max-w-custom mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 justify-between items-start p-6">
            {/* <AnimatedSection animation="zoom" className="relative"> */}
            <div className="flex flex-col gap-6">
                <div>
                    <h1 className="text-black">
                        In-Home Care & Home Health Services Across New Jersey
                    </h1>
                    <p className="text-lg md:text-xl font-medium text-gray-700 mt-2">
                        Personalized, concierge-level care that preserves
                        independence, dignity, and peace of mind.
                    </p>
                </div>
                <p className="text-lg">
                    360 Degree Care provides in-home personal care, home health
                    aides, nursing, companion care, and elder care consulting
                    throughout New Jersey. Our experienced caregivers help
                    seniors stay safe, supported, and independent at home.
                </p>
                <p className="text-base text-gray-600 max-w-2xl">
                    Trusted by New Jersey families for over a decade – formerly
                    known as Interim Healthcare of Ridgewood.
                </p>
                <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CallToAction
                        buttonLabel="Get In Touch"
                        type="general"
                        value=""
                        variant="pillPrimary"
                    />
                    <CallToActionButton
                        href={navLinks[0].route}
                        variant="pillBlue"
                    >
                        More About Us
                    </CallToActionButton>
                </div>
            </div>
            {heroImageSrc ? (
                <Image
                    className="rounded-2xl max-h-[20rem] w-full h-auto object-cover"
                    src={heroImageSrc}
                    alt="360 Degree Care caregiver supporting senior at home"
                    width={1200}
                    height={800}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority
                />
            ) : null}
        </section>
    )
}
