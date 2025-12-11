import dynamic from 'next/dynamic'
import { FaPhone } from 'react-icons/fa'

const CallToAction = dynamic(() => import('@/components/CallToAction'), {
    ssr: false
})

interface CountyCTASectionProps {
    title: string
    description: string[]
    ctaButtonLabel?: string
    ctaValue?: string
    phoneNumber?: string
    bgGradient?: string
}

export default function CountyCTASection({
    title,
    description,
    ctaButtonLabel = 'Schedule Your Free Consultation',
    ctaValue = 'County CTA',
    phoneNumber = '(201) 299-4243',
    bgGradient = 'bg-gradient-to-br from-primary to-orange'
}: CountyCTASectionProps) {
    return (
        <section className={`py-16 px-4 text-white ${bgGradient}`}>
            <div className="container mx-auto max-w-4xl text-center space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold font-merriweather">
                    {title}
                </h2>
                <div className="space-y-4 text-lg">
                    {description.map((paragraph, index) => (
                        <p key={index} className="text-orange-50">
                            {paragraph}
                        </p>
                    ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <CallToAction
                        buttonLabel={ctaButtonLabel}
                        value={ctaValue}
                        type="services"
                        variant="glossy"
                        buttonClass="bg-white text-primary hover:bg-orange-50"
                    />
                    <a
                        href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                        className="flex items-center gap-2 bg-white/20 backdrop-blur px-6 py-3 rounded-full font-bold hover:bg-white/30 transition-colors"
                    >
                        <FaPhone />
                        Call {phoneNumber}
                    </a>
                </div>
            </div>
        </section>
    )
}
