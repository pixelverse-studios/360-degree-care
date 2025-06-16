import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { navLinks } from '@/utils/routes'
import CallToAction from '../CallToAction'
import { getImgSrc } from '@/lib/images'

const couple = getImgSrc('happy_couple_1')

const [serviceLink] = navLinks

export default function HomeHero() {
    const router = useRouter()

    const onServicesClick = () => router.push(serviceLink.route)

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
                    <Button onClick={onServicesClick} variant="pillBlue">
                        More About Us
                    </Button>
                </div>
            </div>
            <img
                className="rounded-2xl max-h-[20rem] h-fit w-full object-cover"
                src={couple}
                alt=""
            />
        </section>
    )
}
