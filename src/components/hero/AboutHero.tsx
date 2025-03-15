import { CompanyName } from '../Logo'
import CallToAction from '../CallToAction'
import AboutServiceOverview from '../about/AboutServiceOverview'

export default function AboutHero() {
    return (
        <section className="relative bg-gradient-to-b from-white-bright to-white overflow-hidden">
            <div className="max-w-custom mx-auto px-6 pb-12 md:pb-18">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-black-muted leading-tight">
                            About <CompanyName styles="text-5xl" />
                        </h1>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            <CompanyName styles="" /> is the leading home care
                            company in Bergen County. We have been providing
                            highly skilled and compassionate caregivers to
                            facilities and private clients for over ten years.
                        </p>
                    </div>

                    <ul className="space-y-2 text-gray-700 h-full flex flex-col justify-end gap-[0.7rem]">
                        <li className="flex items-center gap-2">
                            <span className="text-primary">✓</span>
                            Unbroken string of 5-Star Google reviews
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-primary">✓</span>
                            80% caregiver retention rate (industry average: 13%)
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-primary">✓</span>
                            State licensed and CHAP certified
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col lg:flex-row gap-6 mt-12 items-end">
                    <AboutServiceOverview />
                    <div className="mx-auto">
                        <CallToAction
                            buttonLabel="Schedule a Consultation"
                            round
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
