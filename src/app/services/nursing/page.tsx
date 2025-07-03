'use client'

import { NURSING_SERVICES_FAQS } from '@/utils/faqs'

import StaticNursingServicesData from '@/lib/seo/nursingServices'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceDescription from '@/components/services/ServiceDescription'
import ServiceList from '@/components/services/ServiceList'
import ServiceBenefits from '@/components/services/ServiceBenefits'
import ServiceFaqs from '@/components/services/ServiceFaqs'
import ServiceCta from '@/components/services/ServiceCta'

const { SeoHead, hero, description, listItems, benefits } =
    StaticNursingServicesData

export default function NursingServicesPage() {
    return (
        <>
            <SeoHead />
            <main>
                <ServiceHero {...hero} />
                <ServiceDescription {...description} />
                <ServiceList {...listItems} />
                <ServiceBenefits {...benefits} />
                <ServiceFaqs
                    header="Questions About In-Home Nursing Services"
                    faqs={NURSING_SERVICES_FAQS}
                />
                <ServiceCta
                    header="Ready to Get Started?"
                    description="Experience professional in-home nursing care. Contact us today to learn how our licensed nurses can support your health needs at home."
                    cta="Contact Us Today"
                    origin="Nursing Services"
                />
            </main>
        </>
    )
}
