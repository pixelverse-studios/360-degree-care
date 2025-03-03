'use client'

export default function AboutHero() {
    return (
        <section className="bg-white-bright">
            <div className="max-w-custom mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 justify-between items-center px-6 py-12">
                <div className="flex flex-col gap-6">
                    <h1 className="text-5xl md:text-4xl sm:text-2xl font-bold text-black-muted">
                        About{' '}
                        <span className="text-primary">360 Degree Care</span>:
                        The Premier Home Care in Bergen County
                    </h1>
                    <p className="text-lg">
                        For over a decade, 360 Degree Care has been the trusted
                        choice for families seeking compassionate, high-quality
                        home care. With an industry-leading 80% caregiver
                        retention rate and CHAP certification, we go beyond
                        traditional care-offering Concierge-Level Homecare
                        tailored to every need. From personal care and
                        housekeeping to transportation and even pet care, we
                        handle it all, ensuring comfort, safety, and peace of
                        mind. Because home care should be more than just a
                        service-it should be total care, every step of the way.
                    </p>
                </div>
                <img
                    className="rounded-2xl h-fit w-fit shadow-lg"
                    src="https://placehold.co/1200x1200"
                    alt="placeholder"
                />
            </div>
        </section>
    )
}
