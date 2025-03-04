'use client'

import HomeAidHero from '../../../public/media/HomeAidHero.jpg'

export default function HomeHealthCareHero() {
    return (
        <section className="bg-white-bright">
            <div className="max-w-custom mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 justify-between items-center px-6 py-12 h-full">
                <div className="flex flex-col gap-6">
                    <h2 className="text-3xl md:text-2xl sm:text-xl font-bold text-black-muted">
                        Our Home Aids Always Deliver Concierge Level Care
                    </h2>
                    <p className="text-lg">
                        Personalized home care tailored to support daily living,
                        enhance well-being, and provide compassionate
                        companionship-ensuring safety, comfort and dignity at
                        home. Whether needed for a few hours, or
                        round-the-clock, we will always be there for you.
                    </p>
                </div>
                <img
                    className="h-fit w-fit"
                    src={HomeAidHero.src}
                    alt="Home Healthcare Aid graphic"
                />
            </div>
        </section>
    )
}
