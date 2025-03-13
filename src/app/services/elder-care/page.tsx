'use client'

import { Button } from '@/components/ui/button'
import CallToAction from '@/components/CallToAction'
import { CompanyName } from '@/components/Logo'

export default function ElderCareServicesPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <div className="bg-white-bright py-8">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h1>Elder Care Consulting</h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
                        Leverage our experience and expertise to evaluate your
                        parent or loved one's situation. We can help you explore
                        all options available to your family—from aging in place
                        to placement in an assisted living facility or a nursing
                        home. We can also help you steward the available options
                        and refer you to competent elder care attorneys and
                        accountants.
                    </p>
                </div>
            </div>

            {/* Making Informed Decisions Section */}
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                <h2 className="font-semibold text-center mb-12">
                    Making Informed Decisions for Your Loved One's Care
                </h2>
                <div className="bg-secondary rounded-lg shadow-lg p-8 mb-12">
                    <p className="text-lg text-white mb-6">
                        Navigating elder care options can be overwhelming. At{' '}
                        <CompanyName styles="text-lg text-primary-muted" />, we
                        provide expert consultation to help you make informed
                        decisions about your loved one's care journey.
                    </p>
                </div>
            </div>

            {/* Services Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="font-semibold mb-12 text-center">
                        Our Elder Care Consulting Services
                    </h2>
                    <p className="text-lg text-gray-700 mb-8 text-center">
                        Our experienced team will:
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-primary-muted rounded-full flex items-center justify-center mb-4">
                                <svg
                                    className="w-6 h-6 text-primary-dark"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                    ></path>
                                </svg>
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                Comprehensive Assessment
                            </h3>
                            <p className="text-gray-700">
                                Conduct a comprehensive assessment of your loved
                                one's needs, preferences, and current living
                                situation.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-primary-muted rounded-full flex items-center justify-center mb-4">
                                <svg
                                    className="w-6 h-6 text-primary-dark"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                Explore All Options
                            </h3>
                            <p className="text-gray-700">
                                Explore all available care options—from aging in
                                place to assisted living facilities or nursing
                                homes.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-primary-muted rounded-full flex items-center justify-center mb-4">
                                <svg
                                    className="w-6 h-6 text-primary-dark"
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

                            <h3 className="text-xl font-semibold mb-3">
                                Personalized Care Plan
                            </h3>
                            <p className="text-gray-700">
                                Create a personalized care plan that respects
                                your loved one's wishes and meets their unique
                                needs.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-primary-muted rounded-full flex items-center justify-center mb-4">
                                <svg
                                    className="w-6 h-6 text-primary-dark"
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
                                Professional Network
                            </h3>
                            <p className="text-gray-700">
                                Connect you with trusted elder care attorneys
                                and accountants for legal and financial
                                guidance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-secondary p-8">
                <div className="flex flex-col md:flex-row gap-8 mb-6">
                    <div className="flex-1 my-auto">
                        <h2 className="font-semibold mb-8 py-8 text-white">
                            Why Choose Our Elder Care Consulting Services
                        </h2>
                        <div className="bg-secondary rounded-lg my-auto">
                            <p className="text-lg text-white mb-6">
                                With over ten years of experience providing
                                exceptional home care in Bergen County, we
                                understand the complexities of elder care. Our
                                consultants bring:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="mr-2 text-white">✓</span>
                                    <span className="text-white">
                                        Deep knowledge of local care resources
                                        and facilities
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-white">✓</span>
                                    <span className="text-white">
                                        Expertise in assessing care needs and
                                        matching them with appropriate services
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-white">✓</span>
                                    <span className="text-white">
                                        A compassionate approach that
                                        prioritizes dignity and quality of life
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-white">✓</span>
                                    <span className="text-white">
                                        A commitment to finding solutions that
                                        work for the entire family
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img
                            src="/media/family-consulting.jpg"
                            alt="Caring consultant meeting with family"
                            className="rounded-lg shadow-lg w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
            {/* </div> */}

            {/* What to Expect Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="font-semibold mb-8 text-center">
                        What to Expect
                    </h2>
                    <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
                        Our consulting process begins with a thorough
                        conversation about your loved one's situation and your
                        family's concerns. We'll then:
                    </p>
                    <div className="flex flex-col space-y-6 mb-12">
                        <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-primary-muted rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                                <span className="font-bold text-primary-dark">
                                    1
                                </span>
                            </div>
                            <p className="text-gray-700">
                                Evaluate your loved one's physical, emotional,
                                and cognitive needs
                            </p>
                        </div>
                        <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-primary-muted rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                                <span className="font-bold text-primary-dark">
                                    2
                                </span>
                            </div>
                            <p className="text-gray-700">
                                Review your financial resources and insurance
                                coverage
                            </p>
                        </div>
                        <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-primary-muted rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                                <span className="font-bold text-primary-dark">
                                    3
                                </span>
                            </div>
                            <p className="text-gray-700">
                                Present appropriate care options with clear
                                explanations of benefits and considerations
                            </p>
                        </div>
                        <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-primary-muted rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                                <span className="font-bold text-primary-dark">
                                    4
                                </span>
                            </div>
                            <p className="text-gray-700">
                                Help you implement your chosen care plan,
                                including coordinating with other professionals
                            </p>
                        </div>
                        <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-primary-muted rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                                <span className="font-bold text-primary-dark">
                                    5
                                </span>
                            </div>
                            <p className="text-gray-700">
                                Provide ongoing support as your loved one's
                                needs change
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Concierge Section */}
            <div className="container mx-auto px-4 py-16 max-w-6xl">
                <div className="bg-secondary text-white rounded-lg p-8 text-center">
                    <h2 className="font-semibold mb-6 text-white">
                        Concierge-Level™ Care at Every Step
                    </h2>
                    <p className="text-lg mb-8 max-w-3xl mx-auto">
                        As with all our services, our Elder Care Consulting
                        reflects our <span className="prio">concierge</span>{' '}
                        approach to care. We're committed to addressing every
                        aspect of your loved one's well-being and supporting
                        your family through important care decisions.
                    </p>
                    <CallToAction buttonLabel="Contact Us Today" />
                </div>
            </div>
        </main>
    )
}
