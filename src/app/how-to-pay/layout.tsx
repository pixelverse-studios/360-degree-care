import Script from 'next/script'
import { generateFAQSchema } from '@/lib/seo/faq-schema'
import { PAYMENT_FAQS } from '@/utils/faqs'

export default function HowToPayLayout({
    children
}: {
    children: React.ReactNode
}) {
    const faqSchema = generateFAQSchema(PAYMENT_FAQS)

    return (
        <>
            <Script
                id="how-to-pay-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {children}
        </>
    )
}
