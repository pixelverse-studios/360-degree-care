'use client'

import { CircleCheck } from 'lucide-react'
import { CompanyName } from '@/components/Logo'
import FaqSection from '@/components/faqs/FaqSection'
import { PERSONAL_CARE_FAQS } from '@/utils/faqs'
import AnimatedSection from '@/components/animated-section'
import ContactMap from '@/components/contact/ContactMap'

export default function PersonalCareView({ header }: { header: string }) {
    return (
        <main>
            <AnimatedSection
                animation="zoom"
                className="container mx-auto px-4 max-w-custom py-10"
            >
                <h1 className="mb-6">
                    {header
                        ? header
                        : `Empowering Well-being: A Guide to Personal Care Services`}
                </h1>

                <p className="text-gray-700 mb-4">
                    Personal care services at <CompanyName className="" /> are
                    designed to help seniors and individuals with daily living
                    tasks while preserving dignity, independence, and comfort.
                    Whether you're exploring care for yourself or a loved one,
                    our team is here to provide non-medical home support that
                    meets your unique needs.
                </p>
                <h2 className="mt-6 mb-2">What is Personal Care?</h2>
                <p className="text-gray-700 mb-4">
                    Personal care includes non-medical assistance with essential
                    daily routines — such as bathing, dressing, and grooming —
                    so individuals can safely age in place and enjoy a higher
                    quality of life. It’s ideal for seniors, people with
                    disabilities, or anyone recovering from illness or surgery.
                </p>

                <h2 className="mt-6 mb-4">
                    Benefits of Our Personal Care Services
                </h2>
                <ul className="mb-4 flex flex-col gap-2">
                    <li className="bullet-item">
                        <CircleCheck className="text-primary" />
                        <p>
                            <strong>Greater Independence:</strong>
                            <br />
                            Stay comfortably at home while getting the help you
                            need.
                        </p>
                    </li>
                    <li className="bullet-item">
                        <CircleCheck className="text-primary" />
                        <p>
                            <strong>Peace of Mind for Families:</strong>
                            <br />
                            Relieves pressure on family caregivers with
                            professional support.
                        </p>
                    </li>
                    <li className="bullet-item">
                        <CircleCheck className="text-primary" />
                        <p>
                            <strong>Improved Daily Comfort:</strong>
                            <br />
                            Focus on the things you love while we handle the
                            essentials.
                        </p>
                    </li>
                    <li className="bullet-item">
                        <CircleCheck className="text-primary" />
                        <p>
                            <strong>Customized Care:</strong>
                            <br />
                            Every plan is built around your personal preferences
                            and health needs.
                        </p>
                    </li>
                    <li className="bullet-item">
                        <CircleCheck className="text-primary" />
                        <p>
                            <strong>Safety & Support:</strong>
                            <br />
                            Trained caregivers who monitor wellness and provide
                            reassurance.
                        </p>
                    </li>
                </ul>

                <h2 className="mt-6 mb-2">What We Assist With</h2>
                <ul className="mb-4 flex flex-col gap-2">
                    <li className="bullet-item">
                        <CircleCheck className="text-primary" />
                        <p>
                            <strong>Daily Living Activities (ADLs):</strong>
                            <br />
                            Bathing, dressing, grooming, toileting
                        </p>
                    </li>
                    <li className="bullet-item">
                        <CircleCheck className="text-primary" />
                        <p>
                            <strong>Meal Preparation:</strong>
                            <br />
                            Nutritious meals tailored to dietary needs
                        </p>
                    </li>
                    <li className="bullet-item">
                        <CircleCheck className="text-primary" />
                        <p>
                            <strong>Light Housekeeping:</strong>
                            <br />
                            Laundry, tidying, and cleanliness for safety
                        </p>
                    </li>
                    <li className="bullet-item">
                        <CircleCheck className="text-primary" />
                        <p>
                            <strong>Medication Reminders:</strong>
                            <br />
                            Ensuring medication schedules are followed
                        </p>
                    </li>
                    <li className="bullet-item">
                        <CircleCheck className="text-primary" />
                        <p>
                            <strong>Companionship:</strong>
                            <br />
                            Friendly conversation and emotional connection
                        </p>
                    </li>
                    <li className="bullet-item">
                        <CircleCheck className="text-primary" />
                        <p>
                            <strong>Errands & Appointments:</strong>
                            <br />
                            Transportation and assistance out in the community
                        </p>
                    </li>
                </ul>

                <AnimatedSection animation="zoom" className="mx-auto">
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
            <ContactMap />
        </main>
    )
}
