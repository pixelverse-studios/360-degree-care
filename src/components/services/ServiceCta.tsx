import CallToAction from '../CallToAction'
import { SlideInSection } from '../animations'

interface ServiceCtaProps {
    header: string
    description: string
    cta: string
    origin:
        | 'Personal Care'
        | 'Elder Care Consulting'
        | 'Staffing'
        | 'Home Health Aides'
        | 'Nursing Services'
        | 'Companion Care'
}

export default function ServiceCta({
    header,
    description,
    cta,
    origin
}: ServiceCtaProps) {
    return (
        <div className="bg-blue text-white">
            <SlideInSection className="page-section flex flex-col gap-6 items-center">
                <h2 className="text-white">{header}</h2>
                <p className="max-w-2xl mx-auto text-center leading-snug">
                    {description}
                </p>
                <CallToAction
                    buttonLabel={cta}
                    variant="pillPrimary"
                    value={origin}
                    type="services"
                />
            </SlideInSection>
        </div>
    )
}
