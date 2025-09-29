import Image from 'next/image'
import { FaCheckCircle, FaUserMd, FaHeart } from 'react-icons/fa'
import CallToAction from '../CallToAction'

export interface CountyHeroProps {
    title: string
    subtitle: string
    description: string
    certifications?: {
        icon: React.ComponentType<{ className?: string }>
        text: string
    }[]
    ctaButtonLabel?: string
    ctaValue?: string
    imageSrc?: string
    imageAlt?: string
}

export default function CountyHeroSection({
    title,
    subtitle,
    description,
    certifications = [
        { icon: FaCheckCircle, text: 'CHAP Certified' },
        { icon: FaUserMd, text: 'Licensed Caregivers' },
        { icon: FaHeart, text: '10+ Years Serving Bergen County' }
    ],
    ctaButtonLabel = 'Get Your Free Consultation',
    ctaValue = 'County Page',
    imageSrc,
    imageAlt = 'Compassionate care services'
}: CountyHeroProps) {
    return (
        <section className="relative bg-gradient-to-br from-blue-bright to-blue py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="text-white">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-merriweather">
                            {title}
                        </h1>
                        {subtitle && (
                            <h2 className="text-2xl mb-4 text-blue-100">
                                {subtitle}
                            </h2>
                        )}
                        <p className="text-xl mb-6 text-blue-50">
                            {description}
                        </p>
                        <div className="flex flex-wrap gap-4 mb-6">
                            {certifications.map((cert, index) => {
                                const Icon = cert.icon
                                return (
                                    <span
                                        key={index}
                                        className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full"
                                    >
                                        <Icon className="text-green" />
                                        <span>{cert.text}</span>
                                    </span>
                                )
                            })}
                        </div>
                        <CallToAction
                            buttonLabel={ctaButtonLabel}
                            value={ctaValue}
                            type="services"
                            variant="pillPrimary"
                            buttonClass="inline-block"
                        />
                    </div>
                    {imageSrc && (
                        <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
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
            </div>
        </section>
    )
}
