'use client'

import CallToAction from '@/components/CallToAction'
import { CompanyName } from '@/components/Logo'
import AnimatedSection from '@/components/animated-section'
import CompanionCareSeoHead from '@/lib/seo/companionCare'
import CompanionCareView from '@/components/services/companionCare'

export default function CompanionsServicesPage() {
    return (
        <>
            <CompanionCareSeoHead />
            <CompanionCareView header="" />
        </>
    )
}
