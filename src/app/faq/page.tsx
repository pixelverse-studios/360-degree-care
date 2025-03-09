import FaqSection from '@/components/faqs/FaqSection'

import { HOSPICE_FAQS, HOME_FAQS } from '@/utils/faqs'

export default function FAQPage() {
    return (
        <main className="px-6 pb-10">
            <FaqSection header="Home Healthcare Questions" faqs={HOME_FAQS} />
        </main>
    )
}
