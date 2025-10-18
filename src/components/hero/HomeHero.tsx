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

const [serviceLink] = navLinks

export default function HomeHero() {
    const heroImageSrc = getImgSrc('home-hero')

    return (
        <section className="mt-2 max-w-custom mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 justify-between items-start p-6">
            {/* <AnimatedSection animation="zoom" className="relative"> */}
            <div className="flex flex-col gap-6">
                <div>
                    <h1 className="text-black">
                        Concierge-Level Home Care in New Jersey
                    </h1>
                    <h2 className="text-black">
                        Personalized In-Home Care That Preserves Independence
                        and Dignity
                    </h2>
                </div>
                <p className="text-lg">
                    Experience exceptional,{' '}
                    <span className="prio">Concierge Level™</span> home health
                    care that helps seniors stay safe, supported, and
                    independent in the comfort of their own homes. Our care is
                    delivered by{' '}
                    <span className="font-semibold">
                        The Finest Nurses and Home Aides in New Jersey
                    </span>
                    .
                </p>
                <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CallToAction
                        buttonLabel="Get In Touch"
                        type="general"
                        value=""
                        variant="pillPrimary"
                    />
                    <CallToActionButton
                        href={serviceLink.route}
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
                    style={{ width: '100%', height: 'auto' }}
                />
            ) : null}
        </section>
    )
}
