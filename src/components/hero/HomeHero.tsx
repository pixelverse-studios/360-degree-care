import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { navLinks } from '@/utils/routes'
import CallToAction from '../CallToAction'
import AnimatedSection from '../animated-section'

const [serviceLink] = navLinks

export default function HomeHero() {
    const router = useRouter()

    const onServicesClick = () => router.push(serviceLink.route)

    return (
        <section className="mt-2 max-w-custom mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 justify-between items-start p-6">
            {/* <AnimatedSection animation="zoom" className="relative"> */}
            <div className="flex flex-col gap-6">
                <div>
                    <h1 className="text-primary">
                        Concierge Level Home Health Care
                    </h1>
                    <h2 className="text-primary">
                        The Finest Nurses and Home Aides in New Jersey
                    </h2>
                </div>
                <p className="text-lg">
                    Providing <span className="prio">Concierge Level™</span>{' '}
                    home care with compassion that allows seniors to maintain
                    their independence and dignity at home.
                </p>
                <div className="my-5 grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 mx-auto">
                    <CallToAction
                        buttonLabel="Get In Touch"
                        round
                        type="general"
                        value=""
                    />
                    <Button
                        className="roundAltButton border-secondary border-2 border-solid"
                        onClick={onServicesClick}
                        variant="default"
                    >
                        More About Us
                    </Button>
                </div>
            </div>
            <img
                className="rounded-2xl max-h-[20rem] h-fit w-fit object-cover"
                src="/assets/happy couple 1.jpg"
                alt=""
            />
            {/* </AnimatedSection> */}
        </section>
    )
}
