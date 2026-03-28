import Image from 'next/image'

import { CompanyName } from '@/components/Logo'
import AnimatedSection from '../animated-section'
import { getImgSrc } from '@/lib/images'

export default function AboutDetails() {
    return (
        <section>
            <div className="flex flex-col gap-4 px-6 py-10 max-w-custom mx-auto">
                <AnimatedSection
                    animation="zoom"
                    className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6"
                >
                    {getImgSrc('runners') ? (
                        <Image
                            src={getImgSrc('runners') as string}
                            alt="small details to help"
                            className="h-full w-full rounded-3xl object-cover"
                            width={800}
                            height={600}
                            sizes="(min-width: 1024px) 40vw, 90vw"
                        />
                    ) : null}
                    <article className="my-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            The{' '}
                            <CompanyName className="text-3xl text-primary mb-[10px]" />{' '}
                            Difference
                        </h2>
                        <p>
                            At Haven Home Health, we believe home care should go
                            far beyond task checklists and invoices. We have
                            built a service model around total support, trust,
                            and everyday ease.
                        </p>
                        <p>
                            From the moment our clients wake up to the moment
                            they go to sleep — and all the moments in between —
                            we're here to provide comfort, safety, and
                            solutions. We anticipate needs before they arise and
                            handle the details that others overlook.
                        </p>
                    </article>
                </AnimatedSection>
            </div>
            <div className="bg-white">
                <AnimatedSection
                    animation="zoom"
                    className="max-w-custom mx-auto p-10"
                >
                    <div className="my-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary text-center pb-8">
                            A Legacy of Trusted Care in New Jersey
                        </h2>
                        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                            <div className="flex-1 space-y-4">
                                <p className="text-black">
                                    Haven Home Health was founded with a clear
                                    mission: to deliver dependable, high-quality
                                    in-home care that treats every client like
                                    family. All of our personnel and all of our
                                    services reflect that commitment every day.
                                </p>
                                <p className="text-black">
                                    Over the years we have always had a unique
                                    perspective and position in this industry.
                                    We DO NOT see our clients as being
                                    defined by their limitations. Rather, we see
                                    our clients as having lived full lives which
                                    they still can and want to enjoy fully. We
                                    celebrate our clients and our caregivers do
                                    everything possible to help them get the
                                    most out of life.
                                </p>
                            </div>
                            <aside className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-3 h-fit self-start">
                                <p className="text-sm uppercase tracking-wide text-gray-500">
                                    Our Reputation
                                </p>
                                <p className="text-xl font-semibold text-gray-900">
                                    See what families are saying about Haven
                                    Home Health on Google.
                                </p>
                                <p className="text-gray-600 text-sm">
                                    Dedicated leadership, experienced care team,
                                    and consistently high service standards.
                                </p>
                            </aside>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
            <div className="bg-white-bright">
                <AnimatedSection
                    animation="zoom"
                    className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 max-w-custom mx-auto"
                >
                    <div className="p-8">
                        <h3 className="text-3xl font-semibold mb-6 text-primary-dark">
                            The Tiny Details that Really Matter
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="space-y-4">
                                {[
                                    'Cooking',
                                    'Light housekeeping',
                                    'Personal care and hygiene',
                                    'Transportation',
                                    'Daily exercise'
                                ].map(service => (
                                    <div
                                        key={service}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                                        </div>
                                        <span>{service}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-4">
                                {[
                                    'Fall Prevention',
                                    'Dog walking',
                                    'Party planning for family',
                                    'Organizing a Facetime with family',
                                    'Facilitating hair salon appointments'
                                ].map(service => (
                                    <div
                                        key={service}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                                        </div>
                                        <span>{service}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {getImgSrc('done-stamp') ? (
                        <Image
                            src={getImgSrc('done-stamp') as string}
                            alt="DONE stamp"
                            className="w-64 h-64 object-contain m-auto"
                            width={256}
                            height={256}
                            sizes="256px"
                        />
                    ) : null}
                </AnimatedSection>
            </div>
            <div className="bg-blue">
                <AnimatedSection
                    animation="zoom"
                    className="max-w-custom mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-10"
                >
                    {getImgSrc('staff') ? (
                        <Image
                            src={getImgSrc('staff') as string}
                            alt="Haven Home Health staff"
                            className="h-auto w-full rounded-xl shadow-xl object-cover"
                            width={1200}
                            height={800}
                            sizes="(min-width: 1024px) 50vw, 100vw"
                        />
                    ) : null}
                    <div className="my-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                            Elite Staffing for Healthcare Facilities
                        </h2>
                        <p className="my-auto text-white">
                            We also provide competent and reliable CNAs and
                            Aides to facilities that have staffing shortages.
                            Our experience caring for families that have the
                            highest expectations means the staffing we provide
                            to a rehab or subacute or in an assisted living
                            facility can be expected to be of the highest
                            quality.
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}
