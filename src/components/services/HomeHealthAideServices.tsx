'use client'

import {
    HeartPulse,
    FolderInput,
    ShieldAlert,
    Scissors,
    Heart,
    Calendar
} from 'lucide-react'
import { cn } from '@/lib/utils'
import AnimatedSection from '../animated-section'
import { getImgSrc } from '@/lib/images'

const BathIcon = getImgSrc('bathing')
const MealPrepIcon = getImgSrc('Meal')
const TransportIcon = getImgSrc('Transportation')
const LaundyrIcon = getImgSrc('laundry')
const RemindersIcon = getImgSrc('Medication')
const CompanionIcon = getImgSrc('companionship')

const wrapperClass = 'max-w-custom mx-auto py-4 px-6'
const subServiceClass =
    'grid grid-cols-[3rem_1fr] gap-2 justify-start items-center'

const homeHealthAideServices = [
    {
        icon: <ShieldAlert className="text-primary h-[2rem] w-auto mx-auto" />,
        label: 'Fall prevention'
    },
    {
        icon: (
            <img
                className="mx-auto"
                src={BathIcon}
                alt="bath and hygiene care"
            />
        ),
        label: 'Personal hygiene, hair care and manicures'
    },
    {
        icon: <Scissors className="text-primary h-[2rem] w-auto mx-auto" />,
        label: 'Dressing'
    },
    {
        icon: (
            <img
                className="mx-auto"
                src={MealPrepIcon}
                alt="meal prep and cooking"
            />
        ),
        label: 'Meal planning and cooking'
    },
    {
        icon: <HeartPulse className="text-primary h-[2rem] w-auto mx-auto" />,
        label: 'Blood pressure monitoring'
    },
    {
        icon: <FolderInput className="text-primary h-[2rem] w-auto mx-auto" />,
        label: 'Daily diary of food intake and activities'
    },
    {
        icon: (
            <img
                className="mx-auto"
                src={LaundyrIcon}
                alt="laundry & light housekeeping"
            />
        ),
        label: 'Light Housekeeping'
    },
    {
        icon: (
            <img className="mx-auto" src={TransportIcon} alt="transportation" />
        ),
        label: 'Transportation'
    }
]

// Additional services that complement the client's list
const additionalServices = [
    {
        icon: (
            <img
                className="mx-auto"
                src={RemindersIcon}
                alt="medication reminders"
            />
        ),
        label: 'Medication Reminders'
    },
    {
        icon: (
            <img
                className="mx-auto"
                src={CompanionIcon}
                alt="companionship and comfort"
            />
        ),
        label: 'Companionship & Comfort'
    },
    {
        icon: <Calendar className="text-primary h-[2rem] w-auto mx-auto" />,
        label: 'Appointment Scheduling'
    },
    {
        icon: <Heart className="text-primary h-[2rem] w-auto mx-auto" />,
        label: 'Emotional Support'
    }
]

export default function HomeHealthAideServices() {
    return (
        <section className="bg-blue py-4">
            <AnimatedSection animation="zoom" className={cn(wrapperClass)}>
                <h3 className="text-white">Home Health Aides</h3>
                <h2 className="text-white">Compassionate In-Home Care</h2>
                <h4 className="text-white">
                    Our dedicated home health aides help maintain independence,
                    comfort, and quality of life.
                </h4>
            </AnimatedSection>
            <AnimatedSection
                animation="zoom"
                className={cn(wrapperClass, 'px-6, pb-6')}
            >
                <div className="bg-white p-6 rounded-3xl mx-auto">
                    <h3 className="mb-4">
                        Concierge Level™ Home Health Aides
                    </h3>
                    <p>
                        Our Home Health Aides deliver exceptional care that
                        feels like family. With our{' '}
                        <span className="prio">Concierge Level™</span>{' '}
                        approach, we go beyond basic assistance to create a
                        personalized care experience that enhances your loved
                        one's quality of life, comfort, and safety, all in the
                        familiar environment of home.
                    </p>
                </div>
            </AnimatedSection>

            <div className="bg-white">
                <AnimatedSection
                    animation="zoom"
                    className={cn(wrapperClass, 'py-8')}
                >
                    {/* <div className="max-w-4xl mx-auto"> */}
                    <div>
                        <h3>Comprehensive Home Care</h3>
                        <h2>Essential Home Health Aide Services</h2>
                        <p className="mb-6">
                            Our skilled home health aides provide personalized
                            assistance with daily activities and specialized
                            care, ensuring your loved one maintains independence
                            while receiving the support they need in the comfort
                            of their own home.
                        </p>

                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
                            {homeHealthAideServices.map((service, index) => (
                                <li key={index} className={subServiceClass}>
                                    {service.icon}
                                    <p>{service.label}</p>
                                </li>
                            ))}
                        </ul>

                        <h3>Additional Support Services</h3>
                        <p className="mb-6">
                            To ensure complete well-being, our aides also
                            provide these complementary services that enhance
                            daily living and promote a fulfilling lifestyle:
                        </p>

                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {additionalServices.map((service, index) => (
                                <li key={index} className={subServiceClass}>
                                    {service.icon}
                                    <p>{service.label}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </AnimatedSection>
            </div>

            <AnimatedSection
                animation="zoom"
                className={cn(wrapperClass, 'py-8')}
            >
                <div className="rounded-3xl mx-auto text-black my-6">
                    <h2 className="text-white pb-4">
                        Why Choose Our Home Health Aides?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white-muted p-5 rounded-xl">
                            <h3 className="text-primary mb-2">
                                Experienced & Trained
                            </h3>
                            <p>
                                Our aides undergo extensive training and have
                                years of experience providing compassionate,
                                reliable care.
                            </p>
                        </div>
                        <div className="bg-white-muted p-5 rounded-xl">
                            <h3 className="text-primary mb-2">
                                Nurse-Directed Care
                            </h3>
                            <p>
                                All care is supervised by our skilled nursing
                                team, ensuring the highest quality standards.
                            </p>
                        </div>
                        <div className="bg-white-muted p-5 rounded-xl">
                            <h3 className="text-primary mb-2">
                                Personalized Approach
                            </h3>
                            <p>
                                We create customized care plans that address
                                your loved one's unique needs and preferences.
                            </p>
                        </div>
                        <div className="bg-white-muted p-5 rounded-xl">
                            <h3 className="text-primary mb-2">
                                Flexible Scheduling
                            </h3>
                            <p>
                                From a few hours of care to 24/7 support, we
                                accommodate your schedule and care requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    )
}
