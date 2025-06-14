'use client'

import CallToAction from '@/components/CallToAction'
import FaqSection from '@/components/faqs/FaqSection'
import { CompanyName } from '@/components/Logo'
import { STAFFING_FAQS } from '@/utils/faqs'
import AnimatedSection from '@/components/animated-section'
import MedicalStaffingSeoHead from '@/lib/seo/medicalStaffing'

export default function StaffingSolutionsPage() {
    return (
        <>
            <MedicalStaffingSeoHead />
            <main>
                <div className="">
                    {/* HERO SECTION */}
                    <AnimatedSection
                        animation="zoom"
                        className="bg-white-bright pb-8"
                    >
                        <div className="container mx-auto px-4 max-w-6xl">
                            <h1>
                                Medical Staffing Solutions for Healthcare
                                Facilities in New Jersey
                            </h1>
                            <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
                                We provide experienced, credentialed healthcare
                                professionals — including CNAs, home health
                                aides, and nurses — to hospitals, rehab centers,
                                and assisted living facilities across New
                                Jersey. Our reliable staffing ensures you can
                                continue delivering high-quality patient care
                                without disruption.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* INTRO & OVERVIEW SECTION */}
                    <section className="bg-white ontainer mx-auto px-4 py-12 max-w-6xl">
                        <AnimatedSection
                            animation="zoom"
                            className="grid md:grid-cols-2 gap-8 items-center"
                        >
                            <div>
                                <h2 className="text-2xl font-bold mb-3">
                                    Overview
                                </h2>
                                <p className="leading-relaxed mb-4">
                                    <CompanyName /> offers comprehensive medical
                                    staffing solutions designed to connect
                                    healthcare facilities with skilled and
                                    experienced professionals, ensuring optimal
                                    patient care and operational efficiency.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Whether you need temporary staffing for peak
                                    periods or long-term placements to fill
                                    critical roles, we use a rigorous screening
                                    and selection process to provide you with
                                    candidates who have the necessary skills,
                                    qualifications, and experience.
                                </p>
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    src="/assets/nurse heart.jpg"
                                    alt=""
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </AnimatedSection>
                    </section>

                    {/* STAFFING SOLUTIONS & SERVICES SECTION */}
                    <section className="bg-white-bright py-12">
                        <AnimatedSection
                            animation="zoom"
                            className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
                        >
                            <h2 className="text-2xl font-bold text-center mb-8">
                                Staffing Solutions &amp; Services
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="p-6 shadow-xl rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Comprehensive Coverage
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        We offer nurses (RNs, LPNs, LVNs, CNAs),
                                        therapists (PT, OT, SLP), allied
                                        professionals, as well as administrative
                                        personnel (records, billing, coding,
                                        transcription). From short-term fill-ins
                                        to permanent placements, our network
                                        ensures a perfect match for your
                                        facility’s needs.
                                    </p>
                                </div>
                                <div className="p-6 shadow-xl rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Quality &amp; Reliability
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Our high standards for recruitment and
                                        rigorous screening processes guarantee
                                        that you receive professionals who excel
                                        in patient care, possess strong clinical
                                        skills, and adapt quickly to various
                                        healthcare environments.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </section>

                    {/* INDUSTRIES & FACILITIES SERVED */}
                    <section className="py-12 bg-gray-100">
                        <AnimatedSection
                            animation="zoom"
                            className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
                        >
                            <h2 className="text-2xl font-bold mb-6 text-center">
                                Industries &amp; Facilities Served
                            </h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-white-bright p-4 rounded-lg shadow-xl text-center">
                                    <p>Medical Practices</p>
                                </div>
                                <div className="bg-white-bright p-4 rounded-lg shadow-xl text-center">
                                    <p>Clinics</p>
                                </div>
                                <div className="bg-white-bright p-4 rounded-lg shadow-xl text-center">
                                    <p>Assisted Living Facilities</p>
                                </div>
                                <div className="bg-white-bright p-4 rounded-lg shadow-xl text-center">
                                    <p>Skilled Nursing Facilities</p>
                                </div>
                                <div className="bg-white-bright p-4 rounded-lg shadow-xl text-center">
                                    <p>Rehabilitation Centers</p>
                                </div>
                                <div className="bg-white-bright p-4 rounded-lg shadow-xl text-center">
                                    <p>Hospitals</p>
                                </div>
                                <div className="bg-white-bright p-4 rounded-lg shadow-xl text-center">
                                    <p>Schools</p>
                                </div>
                                <div className="bg-white-bright p-4 rounded-lg shadow-xl text-center">
                                    <p>Correctional Institutions</p>
                                </div>
                                {/* You can add or remove as needed */}
                            </div>
                        </AnimatedSection>
                    </section>

                    <section className="bg-white py-12">
                        <AnimatedSection
                            animation="zoom"
                            className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
                        >
                            <h2 className="text-2xl font-bold mb-6 text-center">
                                Benefits of Working with{' '}
                                <CompanyName className="text-2xl" />
                            </h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="flex flex-col items-start bg-white-bright p-4 rounded-xl shadow-xl">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Flexible Staffing Model
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Adjust staffing levels quickly to handle
                                        peak demands, maintain continuity of
                                        care, and comply with mandated staffing
                                        requirements.
                                    </p>
                                </div>
                                <div className="flex flex-col items-start bg-white-bright p-4 rounded-xl shadow-xl">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Quality Professionals
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Our rigorous screening ensures top-tier
                                        candidates who help reduce staff burnout
                                        and minimize overtime.
                                    </p>
                                </div>
                                <div className="flex flex-col items-start bg-white-bright p-4 rounded-xl shadow-xl">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Cost Savings
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Lower overhead expenses, maintain high
                                        retention, and address staffing needs
                                        without the burden of lengthy hiring
                                        processes.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </section>

                    {/* FAQ SECTION */}
                    <section className="bg-white-bright py-10">
                        <AnimatedSection animation="zoom">
                            <FaqSection
                                faqs={STAFFING_FAQS}
                                header="Medical Staffing FAQs"
                            />
                        </AnimatedSection>
                    </section>

                    {/* COMPANY BACKGROUND & CONTACT */}
                    <section className="py-12 bg-white">
                        <AnimatedSection
                            animation="zoom"
                            className="max-w-4xl mx-auto px-4 text-center"
                        >
                            <h2 className="text-2xl font-bold mb-4">
                                <CompanyName className="text-2xl" />: Your
                                Trusted Medical Staffing Partner
                            </h2>
                            <p className="text-gray-700 mb-8 leading-relaxed">
                                Since 1966, we’ve been committed to delivering
                                top-tier talent and clinical excellence. Partner
                                with us, and you’ll get the right staff for your
                                needs—on time, every time.
                            </p>
                            <CallToAction
                                buttonLabel="Join the Team"
                                variant="pillPrimary"
                                type="general"
                                value=""
                            />
                        </AnimatedSection>
                    </section>
                </div>
            </main>
        </>
    )
}
