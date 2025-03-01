import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { navLinks } from '@/utils/routes'

const [serviceLink] = navLinks

export default function HomeHero() {
    const router = useRouter()

    const onServicesClick = () => router.push(serviceLink.route)

    return (
        <section className="max-w-custom mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 justify-between items-center p-6">
            <div className="flex flex-col gap-6">
                <h1 className="text-5xl font-bold text-black-muted">
                    The Finest Nurses and Home Aids in Bergen County
                </h1>
                <p className="text-lg">
                    Providing concierge level home care with compassion that
                    allows seniors to maintain their independence and dignity at
                    home.
                </p>
                <div className="my-5 flex gap-4">
                    <Button size="lg" variant="cta">
                        We're Ready to Help
                    </Button>
                    <Button
                        className="rounded-3xl"
                        size="lg"
                        onClick={onServicesClick}
                    >
                        More About Us
                    </Button>
                </div>
            </div>
            <img
                className="rounded-2xl h-fit w-fit"
                src="https://placehold.co/1200x1200"
                alt="placeholder"
            />
        </section>
    )
}
