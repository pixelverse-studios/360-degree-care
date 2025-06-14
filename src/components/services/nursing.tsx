'use client'

import { CircleCheck, ListChecks, PillBottle, Bandage } from 'lucide-react'
import CallToAction from '@/components/CallToAction'
import { CompanyName } from '@/components/Logo'
import AnimatedSection from '@/components/animated-section'

export default function NursingView({ header }: { header: string }) {
    return (
        <main className="bg-white breadcrumbSpacing">
            {/* Hero Section */}
            <div className="bg-white-bright">
                <AnimatedSection
                    animation="zoom"
                    className="container mx-auto px-4 max-w-6xl pb-10"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        {header ? header : `Nursing Services`}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
                        Our skilled nursing team provides comprehensive,
                        compassionate care tailored to your unique needs. From
                        physical assessments to wound care and medication
                        management, our licensed professionals ensure the
                        highest standard of healthcare in the comfort of your
                        home.
                    </p>
                </AnimatedSection>
            </div>

            {/* Professional Care Section */}
            <section className="bg-white-bright">
                <AnimatedSection
                    animation="zoom"
                    className="container mx-auto px-4 py-8 max-w-custom"
                >
                    <h2 className="text-3xl font-semibold mb-8">
                        Professional Nursing Care in Your Home
                    </h2>
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                        <p className="text-lg text-gray-700 mb-6">
                            At <CompanyName />, we understand that skilled
                            nursing care is often essential for recovery,
                            managing chronic conditions, or ensuring proper
                            health maintenance. Our team of licensed nurses
                            provides expert care with the same compassion and
                            attention to detail that has made us the leading
                            home care company in New Jersey for over ten years.
                        </p>
                    </div>
                </AnimatedSection>
            </section>

            {/* Services Section */}
            <section className="bg-white">
                <div className="container mx-auto px-4 py-12 max-w-6xl">
                    <AnimatedSection animation="zoom">
                        <h2 className="text-3xl font-semibold mb-12 text-center">
                            Our Comprehensive Nursing Services
                        </h2>
                    </AnimatedSection>

                    {/* Physical Assessments */}
                    <AnimatedSection animation="zoom" className="mb-16">
                        <div className="bg-white-bright rounded-lg shadow-lg overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/3 bg-primary flex">
                                    <ListChecks className="w-24 h-24 text-white m-auto" />
                                </div>
                                <div className="md:w-2/3 p-8">
                                    <h3 className="text-2xl font-semibold mb-4">
                                        Physical Assessments and Plan of Care
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Our skilled nurses conduct thorough
                                        physical assessments to evaluate your
                                        current health status, identify
                                        potential concerns, and develop a
                                        comprehensive plan of care tailored to
                                        your specific needs.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="bullet-item items-center">
                                            <CircleCheck className="text-primary h-6 w-6" />
                                            <span className="text-gray-700">
                                                Complete health assessments
                                                including vital signs, physical
                                                examinations, and medical
                                                history reviews
                                            </span>
                                        </li>
                                        <li className="bullet-item items-center">
                                            <CircleCheck className="text-primary h-6 w-6" />
                                            <span className="text-gray-700">
                                                Customized care plans developed
                                                in collaboration with your
                                                healthcare providers
                                            </span>
                                        </li>
                                        <li className="bullet-item items-center">
                                            <CircleCheck className="text-primary h-6 w-6" />
                                            <span className="text-gray-700">
                                                Documentation for both private
                                                clients and long-term insurance
                                                policies
                                            </span>
                                        </li>
                                        <li className="bullet-item items-center">
                                            <CircleCheck className="text-primary h-6 w-6" />
                                            <span className="text-gray-700">
                                                Regular reassessments to ensure
                                                care plans remain effective as
                                                needs change
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Wound Care */}
                    <AnimatedSection animation="zoom" className="mb-16">
                        <div className="bg-white-bright rounded-lg shadow-lg overflow-hidden">
                            <div className="md:flex flex-row-reverse">
                                <div className="md:w-1/3 bg-primary flex">
                                    <Bandage className="w-24 h-24 text-white m-auto" />
                                </div>
                                <div className="md:w-2/3 p-8">
                                    <h3 className="text-2xl font-semibold mb-4">
                                        Wound Care
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Our nurses are specially trained in
                                        advanced wound care techniques to
                                        promote healing and prevent
                                        complications. We provide professional
                                        treatment for various wound types,
                                        including surgical wounds, pressure
                                        injuries, diabetic ulcers, and more.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="bullet-item items-center">
                                            <CircleCheck className="text-primary h-6 w-6" />
                                            <span className="text-gray-700">
                                                Expert wound assessment,
                                                cleaning, and dressing changes
                                            </span>
                                        </li>
                                        <li className="bullet-item items-center">
                                            <CircleCheck className="text-primary h-6 w-6" />
                                            <span className="text-gray-700">
                                                Implementation of evidence-based
                                                wound care protocols
                                            </span>
                                        </li>
                                        <li className="bullet-item items-center">
                                            <CircleCheck className="text-primary h-6 w-6" />
                                            <span className="text-gray-700">
                                                Monitoring for signs of
                                                infection or complications
                                            </span>
                                        </li>
                                        <li className="bullet-item items-center">
                                            <CircleCheck className="text-primary h-6 w-6" />
                                            <span className="text-gray-700">
                                                Education for patients and
                                                caregivers on wound care
                                                techniques
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Medication Management */}
                    <AnimatedSection animation="zoom">
                        <div className="bg-white-bright rounded-lg shadow-lg overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/3 bg-primary flex">
                                    <PillBottle className="w-24 h-24 text-white m-auto" />
                                </div>
                                <div className="md:w-2/3 p-8">
                                    <h3 className="text-2xl font-semibold mb-4">
                                        Medication Management
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Managing multiple medications can be
                                        complex and overwhelming. Our nurses
                                        provide comprehensive medication
                                        management services to ensure you're
                                        taking the right medications at the
                                        right times, reducing the risk of
                                        adverse reactions.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="bullet-item items-center">
                                            <CircleCheck className="text-primary h-6 w-6" />
                                            <span className="text-gray-700">
                                                Medication review and
                                                reconciliation to prevent
                                                harmful interactions
                                            </span>
                                        </li>
                                        <li className="bullet-item items-center">
                                            <CircleCheck className="text-primary h-6 w-6" />
                                            <span className="text-gray-700">
                                                Setup of medication organizers
                                                and administration schedules
                                            </span>
                                        </li>
                                        <li className="bullet-item items-center">
                                            <CircleCheck className="text-primary h-6 w-6" />
                                            <span className="text-gray-700">
                                                Monitoring for medication
                                                effectiveness and side effects
                                            </span>
                                        </li>
                                        <li className="bullet-item items-center">
                                            <CircleCheck className="text-primary h-6 w-6" />
                                            <span className="text-gray-700">
                                                Coordination with doctors and
                                                pharmacies for prescription
                                                refills
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-white-bright">
                <AnimatedSection
                    animation="zoom"
                    className="container mx-auto px-4 py-10 max-w-custom"
                >
                    <h2 className="text-3xl font-semibold mb-12 text-center text-primary">
                        Why Choose Our Nursing Services
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="rounded-lg p-6 text-center bg-white shadow-xl">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-primary-muted">
                                <svg
                                    className="w-8 h-8"
                                    style={{ color: '#FA3F1A' }}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-primary">
                                Highly Qualified Nurses
                            </h3>
                            <p className="text-gray-700">
                                Our nursing team consists of licensed
                                professionals with extensive experience in home
                                healthcare and specialized training in geriatric
                                care.
                            </p>
                        </div>
                        <div className="rounded-lg p-6 text-center bg-white shadow-xl">
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                style={{ backgroundColor: '#FECFBF' }}
                            >
                                <svg
                                    className="w-8 h-8"
                                    style={{ color: '#FA3F1A' }}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">
                                Collaborative Approach
                            </h3>
                            <p className="text-gray-700">
                                We work closely with your physicians,
                                therapists, and other healthcare providers to
                                ensure coordinated care that meets all your
                                health needs.
                            </p>
                        </div>
                        <div className="rounded-lg p-6 text-center bg-white shadow-xl">
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                style={{ backgroundColor: '#FECFBF' }}
                            >
                                <svg
                                    className="w-8 h-8"
                                    style={{ color: '#FA3F1A' }}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">
                                24/7 Availability
                            </h3>
                            <p className="text-gray-700">
                                Our nursing services are available around the
                                clock, ensuring you have access to care whenever
                                you need it, including evenings, weekends, and
                                holidays.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            </section>

            {/* CTA Section */}
            <div className="container mx-auto px-4 py-16 max-w-custom">
                <AnimatedSection
                    animation="zoom"
                    className="text-black rounded-lg p-8 text-center shadow-xl bg-white-bright"
                >
                    <h2 className="text-3xl font-semibold mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg mb-8 max-w-3xl mx-auto">
                        Our <span className="prio">Concierge Level™</span>{' '}
                        nursing services are designed to provide you with
                        exceptional care in the comfort of your home. Contact us
                        today to schedule a consultation and learn more about
                        how our nursing team can support your healthcare needs.
                    </p>
                    <CallToAction
                        buttonLabel="Contact us today"
                        variant="pillPrimary"
                        type="services"
                        value="Nursing Services"
                    />
                </AnimatedSection>
            </div>
        </main>
    )
}
