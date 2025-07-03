'use client'

import { ELDER_CARE_CONSULTING_FAQS } from '@/utils/faqs'

import StaticElderCareConsultingData from '@/lib/seo/elderCareConsulting'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceDescription from '@/components/services/ServiceDescription'
import ServiceList from '@/components/services/ServiceList'
import ServiceBenefits from '@/components/services/ServiceBenefits'
import ServiceFaqs from '@/components/services/ServiceFaqs'
import ServiceCta from '@/components/services/ServiceCta'

const { SeoHead, hero, description, listItems, benefits } =
    StaticElderCareConsultingData

export default function ElderCareServicesPage() {
    return (
        <>
            <SeoHead />
            <main>
                <ServiceHero {...hero} />
                <ServiceDescription {...description} />
                <ServiceList {...listItems} />
                <ServiceBenefits {...benefits} />
                <ServiceFaqs
                    header="Questions About Elder Care Consulting"
                    faqs={ELDER_CARE_CONSULTING_FAQS}
                />
                <ServiceCta
                    header="Ready to Get Started?"
                    description="Let us help you navigate your loved one's care decisions with confidence. Contact us today to learn more about our elder care consulting services."
                    cta="Get in Touch"
                    origin="Elder Care Consulting"
                />
            </main>
        </>
    )
}
