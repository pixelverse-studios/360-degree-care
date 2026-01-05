'use client'

import { COMPANION_CARE_FAQS } from '@/utils/faqs'
import StaticCompanionCareData from '@/lib/seo/companionCare'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceDescription from '@/components/services/ServiceDescription'
import ServiceList from '@/components/services/ServiceList'
import ServiceBenefits from '@/components/services/ServiceBenefits'
import ServiceFaqs from '@/components/services/ServiceFaqs'
import ServiceCta from '@/components/services/ServiceCta'

const { hero, description, listItems, benefits } = StaticCompanionCareData

export default function CompanionCareContent() {
    return (
        <main>
            <ServiceHero {...hero} />
            <ServiceDescription {...description} />
            <ServiceList {...listItems} />
            <ServiceBenefits {...benefits} />
            <ServiceFaqs
                header="Questions About Companion Care Services"
                faqs={COMPANION_CARE_FAQS}
            />
            <ServiceCta
                header="Ready to Get Started?"
                description="Bring joy and companionship to your loved one's daily life. Contact us today to learn how our companion care services can make a difference."
                cta="Contact Us"
                origin="Companion Care"
            />
        </main>
    )
}
