import Image from 'next/image'
import { FaCheckCircle, FaHeart, FaUserMd } from 'react-icons/fa'

import CallToAction from '@/components/CallToAction'

export interface CountyHeroSectionProps {
    title: string
    subtitle?: string
    description: string
    ctaButtonLabel?: string
    ctaValue?: string
    imageSrc?: string
    imageAlt?: string
    certifications?: Array<{
        icon: React.ComponentType<{ className?: string }>
        text: string
    }>
}

const DEFAULT_CERTIFICATIONS = [
    { icon: FaCheckCircle, text: 'CHAP Certified' },
    { icon: FaUserMd, text: 'Licensed Caregivers' },
    { icon: FaHeart, text: 'Concierge-Level™ Support' }
]

export default function CountyHeroSection({
    title,
    subtitle,
    description,
    ctaButtonLabel = 'Schedule Your Consultation',
    ctaValue = 'County Hero',
    imageSrc,
    imageAlt = 'County care services imagery',
    certifications = DEFAULT_CERTIFICATIONS
}: CountyHeroSectionProps) {
    return (
        <section className="relative bg-gradient-to-br from-blue-bright to-blue text-white py-16 px-4">
            <div className="container mx-auto max-w-6xl grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
                <div>
                    <h1 className="text-4xl lg:text-5xl font-bold font-merriweather mb-4">
                        {title}
                    </h1>
                    {subtitle && (
                        <h2 className="text-2xl text-blue-100 mb-4">
                            {subtitle}
                        </h2>
                    )}
                    <p className="text-lg lg:text-xl text-blue-50 mb-6">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                        {certifications.map(({ icon: Icon, text }, index) => (
                            <span
                                key={`${text}-${index}`}
                                className="flex items-center gap-2 bg-white/15 px-3 py-2 rounded-full"
                            >
                                <Icon className="text-green" />
                                <span>{text}</span>
                            </span>
                        ))}
                    </div>
                    <CallToAction
                        type="services"
                        value={ctaValue}
                        buttonLabel={ctaButtonLabel}
                        variant="pillPrimary"
                        buttonClass="inline-block"
                    />
                </div>
                {imageSrc && (
                    <div className="relative h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}
            </div>
        </section>
    )
}
