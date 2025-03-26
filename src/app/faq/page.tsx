'use client'
import FaqSection from '@/components/faqs/FaqSection'

import {
    HOME_FAQS,
    PERSONAL_CARE_FAQS,
    STAFFING_FAQS,
    PAYMENT_FAQS
} from '@/utils/faqs'
import AnimatedSection from '@/components/animated-section'

export default function FAQPage() {
    return (
        <main className="breadcrumbSpacing">
            <section className="px-6 py-8 bg-white-bright">
                <AnimatedSection animation="zoom">
                    <FaqSection
                        header="Home Healthcare Questions"
                        faqs={HOME_FAQS}
                    />
                </AnimatedSection>
            </section>
            <section className="px-6 py-8 bg-white">
                <AnimatedSection animation="zoom">
                    <FaqSection
                        header="Personal Care Questions"
                        faqs={PERSONAL_CARE_FAQS}
                    />
                </AnimatedSection>
            </section>
            <section className="px-6 py-8 bg-white-bright">
                <AnimatedSection animation="zoom">
                    <FaqSection
                        header="Nurse Staffing Questions"
                        faqs={STAFFING_FAQS}
                    />
                </AnimatedSection>
            </section>
            <section className="px-6 py-8 bg-white">
                <AnimatedSection animation="zoom">
                    <FaqSection
                        header="In Home Care Payment Options"
                        faqs={PAYMENT_FAQS}
                    />
                </AnimatedSection>
            </section>
        </main>
    )
}
