'use client'

import FaqSection from '@/components/faqs/FaqSection'
import { PAYMENT_FAQS } from '@/utils/faqs'
import AnimatedSection from '@/components/animated-section'

export default function HowToPay() {
    return (
        <main>
            <AnimatedSection
                animation="zoom"
                className="max-w-custom px-6 py-8"
            >
                <div className="mb-12 text-center max-w-2xl mx-auto">
                    <h1>How to Pay For Home Healthcare</h1>
                    <p className="mx-auto mb-4">
                        Just as everyone’s needs for care are different, we know
                        financial situations are deeply personal. That’s why we
                        accept multiple ways to pay for home health care costs,
                        so you have more choices in financing your care.
                    </p>
                    <p className="mx-auto mb-10">
                        There are always unique situations and case varies, but
                        we provide concierge Private Client service and have
                        experience with Long Term Care insurance as well as
                        Workers Compensation situations
                    </p>
                </div>
                <FaqSection
                    header="In Home Care Payment Options"
                    faqs={PAYMENT_FAQS}
                />
            </AnimatedSection>
        </main>
    )
}
