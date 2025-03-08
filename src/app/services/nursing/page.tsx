'use client'

import CallToAction from '@/components/CallToAction'

export default function NursingServicesPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <div className="bg-white-bright">
                <div className="container mx-auto px-4 max-w-6xl py-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Nursing Services
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
                        Our skilled nursing team provides comprehensive,
                        compassionate care tailored to your unique needs. From
                        physical assessments to wound care and medication
                        management, our licensed professionals ensure the
                        highest standard of healthcare in the comfort of your
                        home.
                    </p>
                </div>
            </div>

            {/* Professional Care Section */}
            <div className="container mx-auto px-4 py-12 max-w-6xl bg-white-bright">
                <h2 className="text-3xl font-semibold mb-8">
                    Professional Nursing Care in Your Home
                </h2>
                <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                    <p className="text-lg text-gray-700 mb-6">
                        At 360 Degree Care, we understand that skilled nursing
                        care is often essential for recovery, managing chronic
                        conditions, or ensuring proper health maintenance. Our
                        team of licensed nurses provides expert care with the
                        same compassion and attention to detail that has made us
                        the leading home care company in Bergen County for over
                        ten years.
                    </p>
                </div>
            </div>

            {/* Services Section */}
            <div className="py-16" style={{ backgroundColor: '#FFF1EC' }}>
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2
                        className="text-3xl font-semibold mb-12 text-center"
                        style={{ color: '#E33D1F' }}
                    >
                        Our Comprehensive Nursing Services
                    </h2>

                    {/* Physical Assessments */}
                    <div className="mb-16">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="md:flex">
                                <div
                                    className="md:w-1/3"
                                    style={{
                                        backgroundColor: '#FE4E29'
                                    }}
                                >
                                    <div className="h-full flex items-center justify-center p-8">
                                        <svg
                                            className="w-24 h-24"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                            ></path>
                                        </svg>
                                    </div>
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
                                        <li className="flex items-start">
                                            <span
                                                className="mr-2"
                                                style={{
                                                    color: '#FE4E29'
                                                }}
                                            >
                                                ✓
                                            </span>
                                            <span className="text-gray-700">
                                                Complete health assessments
                                                including vital signs, physical
                                                examinations, and medical
                                                history reviews
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span
                                                className="mr-2"
                                                style={{
                                                    color: '#FE4E29'
                                                }}
                                            >
                                                ✓
                                            </span>
                                            <span className="text-gray-700">
                                                Customized care plans developed
                                                in collaboration with your
                                                healthcare providers
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span
                                                className="mr-2"
                                                style={{
                                                    color: '#FE4E29'
                                                }}
                                            >
                                                ✓
                                            </span>
                                            <span className="text-gray-700">
                                                Documentation for both private
                                                clients and long-term insurance
                                                policies
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span
                                                className="mr-2"
                                                style={{
                                                    color: '#FE4E29'
                                                }}
                                            >
                                                ✓
                                            </span>
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
                    </div>

                    {/* Wound Care */}
                    <div className="mb-16">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="md:flex flex-row-reverse">
                                <div
                                    className="md:w-1/3"
                                    style={{
                                        backgroundColor: '#FE4E29'
                                    }}
                                >
                                    <div className="h-full flex items-center justify-center p-8">
                                        <svg
                                            className="w-24 h-24 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="md:w-2/3 p-8">
                                    <h3
                                        className="text-2xl font-semibold mb-4"
                                        style={{ color: '#E33D1F' }}
                                    >
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
                                        <li className="flex items-start">
                                            <span
                                                className="mr-2"
                                                style={{
                                                    color: '#FE4E29'
                                                }}
                                            >
                                                ✓
                                            </span>
                                            <span className="text-gray-700">
                                                Expert wound assessment,
                                                cleaning, and dressing changes
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span
                                                className="mr-2"
                                                style={{
                                                    color: '#FE4E29'
                                                }}
                                            >
                                                ✓
                                            </span>
                                            <span className="text-gray-700">
                                                Implementation of evidence-based
                                                wound care protocols
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span
                                                className="mr-2"
                                                style={{
                                                    color: '#FE4E29'
                                                }}
                                            >
                                                ✓
                                            </span>
                                            <span className="text-gray-700">
                                                Monitoring for signs of
                                                infection or complications
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span
                                                className="mr-2"
                                                style={{
                                                    color: '#FE4E29'
                                                }}
                                            >
                                                ✓
                                            </span>
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
                    </div>

                    {/* Medication Management */}
                    <div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="md:flex">
                                <div
                                    className="md:w-1/3"
                                    style={{
                                        backgroundColor: '#FE4E29'
                                    }}
                                >
                                    <div className="h-full flex items-center justify-center p-8">
                                        <svg
                                            className="w-24 h-24 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="md:w-2/3 p-8">
                                    <h3
                                        className="text-2xl font-semibold mb-4"
                                        style={{ color: '#E33D1F' }}
                                    >
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
                                        <li className="flex items-start">
                                            <span
                                                className="mr-2"
                                                style={{
                                                    color: '#FE4E29'
                                                }}
                                            >
                                                ✓
                                            </span>
                                            <span className="text-gray-700">
                                                Medication review and
                                                reconciliation to prevent
                                                harmful interactions
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span
                                                className="mr-2"
                                                style={{
                                                    color: '#FE4E29'
                                                }}
                                            >
                                                ✓
                                            </span>
                                            <span className="text-gray-700">
                                                Setup of medication organizers
                                                and administration schedules
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span
                                                className="mr-2"
                                                style={{
                                                    color: '#FE4E29'
                                                }}
                                            >
                                                ✓
                                            </span>
                                            <span className="text-gray-700">
                                                Monitoring for medication
                                                effectiveness and side effects
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span
                                                className="mr-2"
                                                style={{
                                                    color: '#FE4E29'
                                                }}
                                            >
                                                ✓
                                            </span>
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
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="container mx-auto px-4 py-16 max-w-6xl">
                <h2
                    className="text-3xl font-semibold mb-12 text-center"
                    style={{ color: '#E33D1F' }}
                >
                    Why Choose Our Nursing Services
                </h2>
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div
                        className="rounded-lg p-6 text-center"
                        style={{ backgroundColor: '#FFF1EC' }}
                    >
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
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                ></path>
                            </svg>
                        </div>
                        <h3
                            className="text-xl font-semibold mb-3"
                            style={{ color: '#E33D1F' }}
                        >
                            Highly Qualified Nurses
                        </h3>
                        <p className="text-gray-700">
                            Our nursing team consists of licensed professionals
                            with extensive experience in home healthcare and
                            specialized training in geriatric care.
                        </p>
                    </div>
                    <div
                        className="rounded-lg p-6 text-center"
                        style={{ backgroundColor: '#FFF1EC' }}
                    >
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
                        <h3
                            className="text-xl font-semibold mb-3"
                            style={{ color: '#E33D1F' }}
                        >
                            Collaborative Approach
                        </h3>
                        <p className="text-gray-700">
                            We work closely with your physicians, therapists,
                            and other healthcare providers to ensure coordinated
                            care that meets all your health needs.
                        </p>
                    </div>
                    <div
                        className="rounded-lg p-6 text-center"
                        style={{ backgroundColor: '#FFF1EC' }}
                    >
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
                        <h3
                            className="text-xl font-semibold mb-3"
                            style={{ color: '#E33D1F' }}
                        >
                            24/7 Availability
                        </h3>
                        <p className="text-gray-700">
                            Our nursing services are available around the clock,
                            ensuring you have access to care whenever you need
                            it, including evenings, weekends, and holidays.
                        </p>
                    </div>
                </div>
            </div>

            {/* Testimonial Section */}
            <div className="py-16" style={{ backgroundColor: '#FFF1EC' }}>
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2
                        className="text-3xl font-semibold mb-12 text-center"
                        style={{ color: '#E33D1F' }}
                    >
                        What Our Clients Say
                    </h2>
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <div className="flex items-center mb-4">
                            <div
                                className="w-12 h-12 rounded-full mr-4 flex items-center justify-center"
                                style={{ backgroundColor: '#FECFBF' }}
                            >
                                <span
                                    style={{ color: '#FA3F1A' }}
                                    className="font-semibold"
                                >
                                    JM
                                </span>
                            </div>
                            <div>
                                <h4 className="font-semibold">Janet M.</h4>
                                <p className="text-gray-600">Bergen County</p>
                            </div>
                        </div>
                        <p className="text-gray-700 italic">
                            "The nursing care my father received after his
                            surgery was exceptional. The nurse was not only
                            skilled at wound care but also took the time to
                            explain everything to us and answer all our
                            questions. Having this level of care at home made a
                            tremendous difference in his recovery."
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="flex items-center mb-4">
                            <div
                                className="w-12 h-12 rounded-full mr-4 flex items-center justify-center"
                                style={{ backgroundColor: '#FECFBF' }}
                            >
                                <span
                                    style={{ color: '#FA3F1A' }}
                                    className="font-semibold"
                                >
                                    RS
                                </span>
                            </div>
                            <div>
                                <h4 className="font-semibold">Robert S.</h4>
                                <p className="text-gray-600">Ridgewood</p>
                            </div>
                        </div>
                        <p className="text-gray-700 italic">
                            "Managing my mother's medications had become
                            overwhelming for our family. The medication
                            management services from 360 Degree Care have been a
                            lifesaver. Their nurses organized everything and set
                            up a system that works perfectly for my mother's
                            needs."
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="container mx-auto px-4 py-16 max-w-6xl">
                <div className="text-black rounded-lg p-8 text-center shadow-lg">
                    <h2 className="text-3xl font-semibold mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg mb-8 max-w-3xl mx-auto">
                        Our concierge-level nursing services are designed to
                        provide you with exceptional care in the comfort of your
                        home. Contact us today to schedule a consultation and
                        learn more about how our nursing team can support your
                        healthcare needs.
                    </p>
                    <CallToAction buttonLabel="Contact us today" />
                </div>
            </div>
        </main>
    )
}
