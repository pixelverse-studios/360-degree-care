'use client'

import HomeAidHero from '../../../public/media/HomeAidHero.jpg'
import AssessmentImg from '../../../public/media/nurse-patient-homehealthcare.webp'
import ChecklistImg from '../../../public/media/nurse-checklist-homehealthcare.webp'
import HelpImg from '../../../public/media/nurse-patient-help-homehealthcare.webp'

export default function HomeHealthCareHero() {
    return (
        <section className="bg-white-bright min-h-fullView">
            <div className="max-w-custom mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6 justify-between px-6 py-12">
                <div className="flex flex-col gap-6 pt-2 xl:pt-12">
                    <h1 className="font-bold text-4xl md:text-3xl sm:text-xl">
                        Home Healthcare
                    </h1>
                    <p className="text-lg">
                        <span className="font-bold text-primary">
                            Our Home Aids Always Deliver Concierge Level™ Care.
                        </span>
                        <br />
                        Personalized home care tailored to support daily living,
                        enhance well-being, and provide compassionate
                        companionship-ensuring safety, comfort and dignity at
                        home. Whether needed for a few hours, or
                        round-the-clock, we will always be there for you.
                    </p>
                </div>
                <img
                    className="h-fit w-fit mx-auto xl:mx-0"
                    src={HomeAidHero.src}
                    alt="Home Healthcare Aid graphic"
                />
            </div>
            <div className="max-w-custom mx-auto py-8">
                <h2 className="text-black-muted font-bold text-xl text-center pb-8">
                    What To Expect
                </h2>
                <ul className="flex flex-wrap justify-center align-top gap-6">
                    <li className="flex-1">
                        <img
                            className="w-auto h-[13rem] rounded-lg shadow-lg mx-auto"
                            src={AssessmentImg.src}
                            alt="nurse and patient assessment portrayal"
                        />
                        <p className="pt-4 text-sm mx-auto w-[65%]">
                            We will set up an initial, complimentary assessment.
                            Consider us your local elder care consultant.
                        </p>
                    </li>
                    <li className="flex-1">
                        <img
                            className="w-auto h-[13rem] rounded-lg shadow-lg mx-auto"
                            src={ChecklistImg.src}
                            alt="Nurse checklist image"
                        />
                        <p className="pt-4 text-sm mx-auto w-[65%]">
                            Our team of specialists will help create a care plan
                            to determine the services needed.
                        </p>
                    </li>
                    <li className="flex-1">
                        <img
                            className="w-auto h-[13rem] rounded-lg shadow-lg mx-auto"
                            src={HelpImg.src}
                            alt="Nurse assisting elder patient"
                        />
                        <p className="pt-4 text-sm mx-auto w-[65%]">
                            Our specialized team of caregivers will come to your
                            home to provide the agreed-upon care. We even offer
                            respite care, when needed.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}
