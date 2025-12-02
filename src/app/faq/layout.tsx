import { Metadata } from 'next'
import Script from 'next/script'
import { generateFAQSchema } from '@/lib/seo/faq-schema'
import {
    HOME_FAQS,
    PERSONAL_CARE_FAQS,
    STAFFING_FAQS,
    PAYMENT_FAQS
} from '@/utils/faqs'

export const metadata: Metadata = {
    title: 'Frequently Asked Questions | 360 Degree Care',
    description:
        'Find answers to common questions about home healthcare services, personal care, nurse staffing, and payment options in New Jersey.',
    alternates: {
        canonical: '/faq'
    },
    openGraph: {
        title: 'Frequently Asked Questions | 360 Degree Care',
        description:
            'Find answers to common questions about home healthcare services, personal care, nurse staffing, and payment options in New Jersey.',
        url: '/faq'
    }
}

// Combine all FAQs displayed on this page for the schema
const allFaqs = [
    ...HOME_FAQS,
    ...PERSONAL_CARE_FAQS,
    ...STAFFING_FAQS,
    ...PAYMENT_FAQS
]
const faqSchema = generateFAQSchema(allFaqs)

export default function FaqLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {children}
        </>
    )
}
