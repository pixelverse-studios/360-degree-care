'use client'
import { CompanyName } from '@/components/Logo'
import AnimatedSection from '@/components/animated-section'

export default function NondiscriminationPage() {
    return (
        <main>
            <AnimatedSection
                animation="zoom"
                className="max-w-custom mx-auto px-6 py-12 bg-white-bright mb-6"
            >
                <h1 className="font-bold text-center mb-6">
                    Nondiscrimination and Accessibility Notice
                </h1>

                <h2 className="font-semibold mb-4">
                    Discrimination is Against the Law
                </h2>
                <p className="text-gray-700 mb-4">
                    <CompanyName /> complies with applicable Federal civil
                    rights laws and does not discriminate on the basis of race,
                    color, national origin, age, disability, or sex (consistent
                    with the scope of sex discrimination described at 45 CFR §
                    92.101(a)(2)).
                </p>

                <h2 className="font-semibold mt-6 mb-2">
                    <CompanyName className="text-2xl" /> Provides:
                </h2>
                <ul className="list-disc list-inside mb-4">
                    <li>
                        Reasonable modifications and free appropriate auxiliary
                        aids and services to people with disabilities,
                        including:
                    </li>
                    <ul className="list-disc list-inside ml-6">
                        <li>Qualified sign language interpreters</li>
                        <li>
                            Written information in other formats (large print,
                            audio, accessible electronic formats, etc.)
                        </li>
                    </ul>
                    <li>
                        Free language services to individuals whose primary
                        language is not English, including:
                    </li>
                    <ul className="list-disc list-inside ml-6">
                        <li>Qualified interpreters</li>
                        <li>Information written in other languages</li>
                    </ul>
                </ul>

                <p className="text-gray-700 mb-4">
                    If you need reasonable modification, appropriate auxiliary
                    aids and services, or language assistance services, contact
                    the Administrator of your local <CompanyName /> home care
                    agency (e.g., Home Health, Hospice, Personal Care).
                </p>

                <h2 className="font-semibold mt-6 mb-2">Filing a Grievance</h2>
                <p className="text-gray-700 mb-4">
                    If you believe that your local <CompanyName /> agency has
                    failed to provide these services or discriminated in another
                    way on the basis of race, color, national origin, age,
                    disability, or sex (including sex characteristics, intersex
                    traits, pregnancy-related conditions, sexual orientation,
                    gender identity, and sex stereotypes), you can file a
                    grievance with the Administrator of your local{' '}
                    <CompanyName /> home care agency, in person, by mail, fax,
                    or email. The Administrator is available to help you.
                </p>

                <p className="text-gray-700 mb-4">
                    You can also file a civil rights complaint with the U.S.
                    Department of Health and Human Services, Office for Civil
                    Rights, electronically through the{' '}
                    <a
                        href="https://ocrportal.hhs.gov/ocr/portal/lobby.jsf"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                    >
                        Office for Civil Rights Complaint Portal
                    </a>
                    , or by mail or phone at:
                    <br />
                    <br />
                    200 Independence Avenue SW.,
                    <br /> Room 509F, HHH Building, Washington, DC 20201
                    <br />
                    <br />
                    1–800–368–1019 (toll-free)
                    <br />
                    800–537–7697 (TDD)
                </p>
            </AnimatedSection>
        </main>
    )
}
