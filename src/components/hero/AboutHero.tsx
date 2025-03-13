import { CornerRightUp } from 'lucide-react'
import { CompanyName } from '../Logo'
import CallToAction from '../CallToAction'

export default function AboutHero() {
    return (
        <section className="relative bg-gradient-to-b from-white-bright to-white overflow-hidden">
            {/* <div className="floating"> */}
            {/* </div> */}
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
                <div className="flex gap-6 mt-12 items-end">
                    <img
                        src="/media/AboutGraph.png"
                        alt=""
                        className="h-full w-[70%] object-contain"
                    />
                    {/* <CornerRightUp /> */}
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={225}
                        height={225}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`lucide lucide-rotate-cw text-secondary`}
                    >
                        <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                        <path d="M21 3v5h-5" />
                    </svg> */}
                    <CallToAction buttonLabel="Schedule a Consultation" round />
                </div>
            </div>
        </section>
    )
}
