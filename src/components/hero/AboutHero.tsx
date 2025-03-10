import { CompanyName } from '../Logo'
import CallToAction from '../CallToAction'

export default function AboutHero() {
    return (
        <section className="relative bg-gradient-to-b from-white-bright to-white overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full -z-10"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-tr-full -z-10"></div>

            <div className="max-w-custom mx-auto px-6 pb-16 md:pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-black-muted leading-tight">
                            About <CompanyName styles="text-5xl" />
                            <span className="block mt-2">
                                The Premier Home Care in New Jersey
                            </span>
                        </h1>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            <CompanyName styles="" /> is the leading home care
                            company in Bergen County. We have been providing
                            highly skilled and compassionate caregivers to
                            facilities and private clients for over ten years.
                        </p>

                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-center gap-2">
                                <span className="text-primary">✓</span>
                                Unbroken string of 5-Star Google reviews
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primary">✓</span>
                                80% caregiver retention rate (industry average:
                                13%)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primary">✓</span>
                                State licensed and CHAP certified
                            </li>
                        </ul>

                        <div className="pt-4">
                            <CallToAction buttonLabel="Schedule a Consultation" />
                        </div>
                    </div>

                    <div className="relative">
                        {/* Image frame effect */}
                        {/* <div className="absolute -z-10 inset-0 transform translate-x-4 translate-y-4 bg-primary/10 rounded-2xl"></div> */}
                        <img
                            className="w-full h-auto object-cover"
                            src="/media/AboutHero.png"
                            alt="Caregiver helping elderly client"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
