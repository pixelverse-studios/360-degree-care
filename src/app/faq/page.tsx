import FaqSection from '@/components/faqs/FaqSection'

import { HOSPICE_FAQS, HOME_FAQS } from '@/utils/faqs'

export default function FAQPage() {
    return (
        <main>
            <FaqSection header="Home Healthcare Questions" faqs={HOME_FAQS} />
            <FaqSection header="Hospice Care Questions" faqs={HOSPICE_FAQS} />
        </main>
    )
}
