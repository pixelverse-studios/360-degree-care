'use client'

import { STAFFING_SERVICES_FAQS } from '@/utils/faqs'

import StaticStaffingServicesData from '@/lib/seo/staffingServices'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceDescription from '@/components/services/ServiceDescription'
import ServiceList from '@/components/services/ServiceList'
import ServiceBenefits from '@/components/services/ServiceBenefits'
import ServiceFaqs from '@/components/services/ServiceFaqs'
import ServiceCta from '@/components/services/ServiceCta'

const { SeoHead, hero, description, listItems, benefits } =
    StaticStaffingServicesData

export default function StaffingSolutionsPage() {
    return (
        <>
            <SeoHead />
            <main>
                <ServiceHero {...hero} />
                <ServiceDescription {...description} />
                <ServiceList {...listItems} />
                <ServiceBenefits {...benefits} />
                <ServiceFaqs
                    header="Questions About Medical Staffing Services"
                    faqs={STAFFING_SERVICES_FAQS}
                />
                <ServiceCta
                    header="Your Trusted Medical Staffing Partner"
                    description="Partner with us for reliable medical staffing solutions. Contact us today to learn how we can support your healthcare facility."
                    cta="Join the Team"
                    origin="Staffing"
                />
            </main>
        </>
    )
}
