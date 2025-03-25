'use client'
import { CircleCheck } from 'lucide-react'
import { CompanyName } from '@/components/Logo'
import FaqSection from '@/components/faqs/FaqSection'
import { PERSONAL_CARE_FAQS } from '@/utils/faqs'
import AnimatedSection from '@/components/animated-section'

export default function PersonalCarePage() {
    return (
        <main>
            <AnimatedSection
                animation="zoom"
                className="container mx-auto px-4 max-w-custom py-10"
            >
                <h1 className="mb-6">
                    Empowering Well-being: A Guide to Personal Care Services
                </h1>

                <p className="text-gray-700 mb-4">
                    Personal care services encompass a range of supportive
                    services designed to assist individuals with Daily Living
                    Activities (ADLs) and promote overall well-being. Whether
                    you're seeking solutions for yourself or a loved one,{' '}
                    <CompanyName className="" /> is here to guide you.
                </p>
                <h2 className="mt-6 mb-2">What is Personal Care?</h2>
                <p className="text-gray-700 mb-4">
                    Personal care, also known as personal care services, refers
                    to non-medical assistance that helps individuals maintain
                    independence and improve their quality of life at home,
                    including elderly personal care.
                </p>

                <h2 className="mt-6 mb-4">
                    Benefits of Personal Care Services
                </h2>
                <ul className="mb-4 flex flex-col gap-2">
                    <li className="flex gap-2 items-start">
                        <CircleCheck className="text-primary" />
                        <p>
                            <strong>Enhanced Independence:</strong>
                            <br />A personal care aide empowers individuals to
                            remain independent in their homes for longer.
                        </p>
                    </li>
                    <li className="flex gap-2 items-start">
                        <CircleCheck className="text-primary" />
                        <p>
                            <strong>Improved Quality of Life:</strong>
                            <br />
                            Assistance with daily tasks allows individuals to
                            focus on activities they enjoy.
                        </p>
                    </li>
                    <li className="flex gap-2 items-start">
                        <CircleCheck className="text-primary" />
                        <p>
                            <strong>Reduced Caregiver Burden:</strong>
                            <br />
                            Offers valuable respite for families caring for
                            loved ones.
                        </p>
                    </li>
                    <li className="flex gap-2 items-start">
                        <CircleCheck className="text-primary" />
                        <p>
                            <strong>Safety and Security:</strong>
                            <br />
                            Knowing a caregiver is present provides peace of
                            mind.
                        </p>
                    </li>
                    <li className="flex gap-2 items-start">
                        <CircleCheck className="text-primary" />
                        <p>
                            <strong>Personalized Support:</strong>
                            <br />
                            Care plans are tailored to individual needs and
                            preferences.
                        </p>
                    </li>
                </ul>

                <h2 className="mt-6 mb-2">
                    Common Services Offered in Personal Care
                </h2>
                <ul className="mb-4 flex flex-col gap-2">
                    <li className="flex gap-2 items-start">
                        <CircleCheck className="text-primary" />
                        <p>
                            <strong>
                                Assistance with Daily Living Activities (ADLs):
                            </strong>
                            <br />
                            Bathing, dressing, grooming, and more.
                        </p>
                    </li>
                    <li className="flex gap-2 items-start">
                        <CircleCheck className="text-primary" />
                        <p>
                            <strong>Meal Preparation:</strong>
                            <br />
                            Planning, shopping, and preparing nutritious meals.
                        </p>
                    </li>
                    <li className="flex gap-2 items-start">
                        <CircleCheck className="text-primary" />
                        <p>
                            <strong>Light Housekeeping:</strong>
                            <br />
                            Cleaning, laundry, and maintaining a safe
                            environment.
                        </p>
                    </li>
                    <li className="flex gap-2 items-start">
                        <CircleCheck className="text-primary" />
                        <p>
                            <strong>Medication Reminders:</strong>
                            <br />
                            Ensuring proper medication use.
                        </p>
                    </li>
                    <li className="flex gap-2 items-start">
                        <CircleCheck className="text-primary" />
                        <p>
                            <strong>
                                Companionship and Social Interaction:
                            </strong>
                            <br />
                            Providing engagement to combat loneliness.
                        </p>
                    </li>
                    <li className="flex gap-2 items-start">
                        <CircleCheck className="text-primary" />
                        <p>
                            <strong>Transportation and Errands:</strong>
                            <br />
                            Helping with appointments and community activities.
                        </p>
                    </li>
                </ul>

                <AnimatedSection animation="zoom">
                    <FaqSection
                        faqs={PERSONAL_CARE_FAQS}
                        header="Questions About Personal Care"
                        headerClass="text-left"
                        bodyClass="mx-0"
                    />
                </AnimatedSection>
                <h2 className="mt-6 mb-2">
                    Finding the Right Personal Care Solution
                </h2>
                <p className="text-gray-700 mb-4">
                    <CompanyName className="" /> understands that every
                    individual's needs are unique. We offer a comprehensive
                    range of personal care services to create a customized care
                    plan that promotes independence, dignity, and well-being.
                </p>
            </AnimatedSection>
        </main>
    )
}
