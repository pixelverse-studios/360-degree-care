'use client'

import { PERSONAL_CARE_FAQS } from '@/utils/faqs'
import StaticPersonalCareData from '@/lib/seo/personalCare'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceDescription from '@/components/services/ServiceDescription'
import ServiceList from '@/components/services/ServiceList'
import ServiceBenefits from '@/components/services/ServiceBenefits'
import ServiceFaqs from '@/components/services/ServiceFaqs'
import ServiceCta from '@/components/services/ServiceCta'

const { SeoHead, hero, description, listItems, benefits } =
    StaticPersonalCareData

export default function PersonalCareContent() {
    return (
        <>
            <SeoHead />
            <main>
                <ServiceHero {...hero} />
                <ServiceDescription {...description} />
                <ServiceList {...listItems} />
                <ServiceBenefits {...benefits} />
                <ServiceFaqs
                    header="Questions About Personal Care"
                    faqs={PERSONAL_CARE_FAQS}
                />
                <ServiceCta
                    header="Ready to Get Started?"
                    description="Let us help your loved one age with dignity and support. Contact us today to learn more about our personal care services."
                    cta="Get In Touch"
                    origin="Personal Care"
                />
            </main>
        </>
    )
}
