import { CompanyName } from '@/components/Logo'

const bentoClass =
    'max-w-4xl mx-auto rounded-lg shadow-lg bg-white-bright p-4 flex-1'

export default function AboutDetails() {
    return (
        <section>
            <div className="flex flex-col gap-4 px-6 py-10 max-w-custom mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
                    <img
                        src="/assets/runners.jpg"
                        alt="small details to help"
                        className="w-fit h-full rounded-3xl object-cover"
                    />
                    <article className="my-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            The{' '}
                            <CompanyName className="text-3xl text-primary mb-[10px]" />{' '}
                            Difference
                        </h2>
                        <p className="text-lg max-w-2xl mb-6">
                            We believe homecare must go beyond sending someone
                            to do something and sending a bill. We have created{' '}
                            <span className="prio">Concierge Level™</span>{' '}
                            Homecare.
                        </p>
                        <p>
                            We are ready to take care of everything a client or
                            patient needs from the moment they open their eyes
                            in the morning to the memento they close them at
                            night…and often for many times they need extra help
                            in between. We cover all of the details, and many
                            more needs that pop up. We believe that we are here
                            to make our clients lives better.
                        </p>
                    </article>
                </div>
            </div>
            <div className="bg-white">
                <div className="max-w-custom mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
                    <div className="my-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-bright">
                            Same Dedicated Care, Now Independent
                        </h2>
                        <p className="my-auto text-black">
                            We formerly worked under the Interim Healthcare
                            banner but realized that the added bureaucracy and
                            overhead of a franchise system did not provide
                            enough added value to warrant its continuing. All of
                            our personnel and all of our services remain exactly
                            as before.
                        </p>
                    </div>
                    <img
                        src="/assets/freedom.jpg"
                        alt="freedome img"
                        className="rounded-xl shadow-xl object-cover"
                    />
                </div>
            </div>
            <div className="bg-white-bright">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 max-w-custom mx-auto">
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
                    <img
                        src="/media/done-stamp.png"
                        alt="DONE stamp"
                        className="w-64 h-64 object-contain m-auto"
                    />
                </div>
            </div>
            <div className="bg-secondary">
                <div className="max-w-custom mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
                    <img
                        src="/assets/staff.jpg"
                        alt="freedome img"
                        className="rounded-xl shadow-xl object-cover"
                    />
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
                </div>
            </div>
        </section>
    )
}
