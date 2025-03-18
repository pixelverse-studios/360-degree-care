import FaqSection from '@/components/faqs/FaqSection'

import { HOME_FAQS, PERSONAL_CARE_FAQS, STAFFING_FAQS } from '@/utils/faqs'

export default function FAQPage() {
    return (
        <main className="">
            <section className="px-6 py-8 bg-white">
                <FaqSection
                    header="Home Healthcare Questions"
                    faqs={HOME_FAQS}
                />
            </section>
            <section className="px-6 py-8 bg-white-bright">
                <FaqSection
                    header="Personal Care Questions"
                    faqs={PERSONAL_CARE_FAQS}
                />
            </section>
            <section className="px-6 py-8 bg-white">
                <FaqSection
                    header="Nurse Staffing Questions"
                    faqs={STAFFING_FAQS}
                />
            </section>
        </main>
    )
}
