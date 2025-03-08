import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { navLinks } from '@/utils/routes'
import CallToAction from '../CallToAction'
import HomeHeroImg from '../../../public/media/HomeHero.png'

const [serviceLink] = navLinks

export default function HomeHero() {
    const router = useRouter()

    const onServicesClick = () => router.push(serviceLink.route)

    return (
        <section className="max-w-custom mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 justify-between items-center p-6">
            <div className="flex flex-col gap-6">
                <h1 className="text-5xl md:text-4xl sm:text-2xl font-bold text-black-muted">
                    The Finest Nurses and Home Aids in Bergen County
                </h1>
                <p className="text-lg">
                    Providing concierge Level™ home care with compassion that
                    allows seniors to maintain their independence and dignity at
                    home.
                </p>
                <div className="my-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <CallToAction buttonLabel="Get In Touch" />
                    <Button
                        className="rounded-3xl w-100% lg:max-w-[18rem] border-secondary border-2 border-solid bg-transparent hover:bg-secondary"
                        onClick={onServicesClick}
                    >
                        More About Us
                    </Button>
                </div>
            </div>
            <img
                className="rounded-2xl h-fit w-fit"
                src={HomeHeroImg.src}
                alt="placeholder"
            />
        </section>
    )
}
