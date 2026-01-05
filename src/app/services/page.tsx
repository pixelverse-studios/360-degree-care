import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const SERVICES = [
    {
        title: 'Personal Care',
        description:
            'Hands-on support with bathing, grooming, mobility, and daily routines tailored to every client.',
        href: '/services/personal-care'
    },
    {
        title: 'Elder Care Consulting',
        description:
            'Care navigation experts help families plan, coordinate resources, and stay confident in every decision.',
        href: '/services/elder-care'
    },
    {
        title: 'Staffing',
        description:
            'Credentialed caregivers and clinicians ready for short- and long-term assignments across New Jersey.',
        href: '/services/staffing'
    },
    {
        title: 'Home Health Aides',
        description:
            'Certified HHAs deliver reliable in-home assistance, medication reminders, and companionship.',
        href: '/services/home-health-aides'
    },
    {
        title: 'Nursing Services',
        description:
            'Skilled nurses provide assessments, wound care, and chronic condition management from the comfort of home.',
        href: '/services/nursing'
    },
    {
        title: 'Companion Care',
        description:
            'Companions keep loved ones engaged with meaningful conversation, safety check-ins, and respite for families.',
        href: '/services/companion-care'
    }
] as const

export const metadata: Metadata = {
    title: 'Home Care & Health Offerings in New Jersey | 360 Degree Care',
    description:
        'Explore home care and home health offerings from 360 Degree Care, including personal care, home health aides, nursing, companion care, and staffing.'
}

export default function ServicesIndexPage() {
    return (
        <main>
            <section className="gradient-left text-white">
                <div className="max-w-custom mx-auto px-6 py-16 text-center space-y-4">
                    <h1 className="text-4xl font-semibold text-white">
                        Home Care & Home Health Services
                    </h1>
                    <p className="text-xl font-medium text-blue-50">
                        Personalized, concierge-level care tailored to your
                        loved one's needs.
                    </p>
                    <p className="mx-auto max-w-2xl text-blue-50">
                        Whether you need hourly assistance, ongoing personal
                        care, or skilled clinical support, 360 Degree Care
                        offers a full range of home care and home health
                        services across New Jersey. Our team works closely with
                        families to provide reliable, compassionate support at
                        home.
                    </p>
                </div>
            </section>

            <section className="bg-white py-16">
                <div className="max-w-custom mx-auto px-6">
                    <ul className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                        {SERVICES.map(service => (
                            <li key={service.title}>
                                <Link
                                    href={service.href}
                                    className="group flex h-full flex-col justify-between rounded-2xl border border-blue-100 bg-white-bright p-6 shadow-sm transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                                >
                                    <article className="space-y-4">
                                        <h2 className="text-2xl font-semibold text-blue-dark">
                                            {service.title}
                                        </h2>
                                        <p className="text-sm text-blue-700 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </article>

                                    <span className="mt-8 inline-flex items-center text-primary font-semibold">
                                        Explore service
                                        <ArrowRight
                                            className="ml-2 transition-transform group-hover:translate-x-1"
                                            size={18}
                                        />
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    )
}
