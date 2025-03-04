'use client'

import { HeartPulse, Scissors } from 'lucide-react'

import { cn } from '@/lib/utils'
import { HomeAidServices } from '@/utils/services'
import BathIcon from '../../../public/icons/bathing.svg'
import MealPrepIcon from '../../../public/icons/Meal.svg'
import TransportIcon from '../../../public/icons/Transportation.svg'
import LaundyrIcon from '../../../public/icons/laundry.svg'
import RemindersIcon from '../../../public/icons/Medication.svg'
import CompanionIcon from '../../../public/icons/companionship.svg'

const wrapperClass = 'max-w-custom mx-auto py-4 px-6'
const subServiceClass =
    'grid grid-cols-[3rem_1fr] gap-2 justify-start items-center'

export default function HomeHealthCareServices() {
    return (
        <section className="bg-accent pt-6">
            <div className={wrapperClass}>
                <h3>Types of Home Aid We Offer</h3>
                <h2>In-Home Aid and Nursing</h2>
                <h4>
                    We offer in-home care and nursing for a range of conditions.
                </h4>
            </div>
            <div className={cn(wrapperClass, 'px-6')}>
                <div className="bg-white-muted p-6 rounded-3xl mx-auto">
                    <h3 className="mb-4">Our Nurse-Direct Home Aid</h3>
                    <p>
                        Choosing home care offers a more affordable,
                        comfortable, and personalized alternative to hospitals
                        or rehabilitation facilities. Our team of highly trained
                        and specialized home health aides, backed by decades of
                        clinical experience, delivers exceptional,
                        nurse-directed care—ensuring your loved one receives
                        world-class support in the familiar comfort of home.
                    </p>
                </div>
            </div>
            <div className={wrapperClass}>
                <div className="rounded-3xl mx-auto text-black">
                    <h3 className="text-black pb-4">
                        Specialized Home Aid offerings
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {HomeAidServices.map(service => (
                            <li className="font-semibold px-2">{service}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="bg-white">
                <div className={wrapperClass}>
                    <div className="max-w-4xl mx-auto">
                        <h4>Types of Home Aid We Provide</h4>
                        <h3>Personal Care and Support</h3>
                        <p className="mb-6">
                            Whether for just a few hours or 24/7 care, we create
                            a warm, supportive environment that feels like
                            family. Our nurse-directed home care and
                            personalized assistance help your loved one with
                            daily activities, ensuring comfort, independence,
                            and peace of mind.
                        </p>
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <li className={subServiceClass}>
                                <img
                                    className="mx-auto"
                                    src={BathIcon.src}
                                    alt="bath and hygiene care"
                                />
                                <p>Bathing, grooming & hygience care</p>
                            </li>
                            <li className={subServiceClass}>
                                <img
                                    className="mx-auto"
                                    src={LaundyrIcon.src}
                                    alt="laundry & light housekeeping"
                                />
                                <p>Laundry & Light Housekeeping</p>
                            </li>
                            <li className={subServiceClass}>
                                <img
                                    className="mx-auto"
                                    src={MealPrepIcon.src}
                                    alt="meal prep and cooking"
                                />
                                <p>Meal Preparation & Cooking</p>
                            </li>
                            <li className={subServiceClass}>
                                <img
                                    className="mx-auto"
                                    src={RemindersIcon.src}
                                    alt="medication reminders"
                                />
                                <p>Medication Reminders</p>
                            </li>
                            <li className={subServiceClass}>
                                <img
                                    className="mx-auto"
                                    src={TransportIcon.src}
                                    alt="transportation"
                                />
                                <p>Transportation</p>
                            </li>
                            <li className={subServiceClass}>
                                <img
                                    className="mx-auto"
                                    src={CompanionIcon.src}
                                    alt="companionship and comfort"
                                />
                                <p>Companionship & Comfort</p>
                            </li>
                            <li className={subServiceClass}>
                                <HeartPulse className="text-primary h-[2rem] w-auto mx-auto" />
                                <p>Blood Pressure Monitoring</p>
                            </li>
                            <li className={subServiceClass}>
                                <Scissors className="text-primary h-[2rem] w-auto mx-auto" />
                                <p>Hair Care & Manicures</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
