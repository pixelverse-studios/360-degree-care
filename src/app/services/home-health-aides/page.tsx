'use client'

import { HOME_HEALTH_AIDES_FAQS } from '@/utils/faqs'

import StaticHomeHealthAidesData from '@/lib/seo/homeHealthAides'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceDescription from '@/components/services/ServiceDescription'
import ServiceList from '@/components/services/ServiceList'
import ServiceBenefits from '@/components/services/ServiceBenefits'
import ServiceFaqs from '@/components/services/ServiceFaqs'
import ServiceCta from '@/components/services/ServiceCta'

const { SeoHead, hero, description, listItems, benefits } =
    StaticHomeHealthAidesData

export default function HomeHealthAidesPage() {
    return (
        <>
            <SeoHead />
            <main>
                <ServiceHero {...hero} />
                <ServiceDescription {...description} />
                <ServiceList {...listItems} />
                <ServiceBenefits {...benefits} />
                <ServiceFaqs
                    header="Questions About Home Health Aide Services"
                    faqs={HOME_HEALTH_AIDES_FAQS}
                />
                <ServiceCta
                    header="Need a Home Health Aide?"
                    description="Experience the difference of Concierge-Level™ home health aide services. Contact us today to learn how our certified aides can support your loved one."
                    cta="Get In Touch"
                    origin="Home Health Aides"
                />
            </main>
        </>
    )
}
