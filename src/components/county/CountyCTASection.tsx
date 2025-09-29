import { FaPhone } from 'react-icons/fa'
import CallToAction from '../CallToAction'

export interface CountyCTASectionProps {
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
    phoneNumber = '(800) 338-7786',
    bgGradient = 'bg-gradient-to-br from-primary to-orange'
}: CountyCTASectionProps) {
    return (
        <section className={`py-16 px-4 ${bgGradient}`}>
            <div className="container mx-auto max-w-4xl text-center text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-merriweather">
                    {title}
                </h2>
                {description.map((paragraph, index) => (
                    <p
                        key={index}
                        className={`${
                            index === 0 ? 'text-xl' : 'text-lg'
                        } mb-8 text-orange-50`}
                    >
                        {paragraph}
                    </p>
                ))}
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
                        className="flex items-center gap-2 bg-white/20 backdrop-blur px-6 py-3 rounded-full text-white hover:bg-white/30 transition-colors font-bold"
                    >
                        <FaPhone />
                        Call {phoneNumber}
                    </a>
                </div>
            </div>
        </section>
    )
}
