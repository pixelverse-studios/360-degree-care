'use client'

import CallToAction from '../CallToAction'

interface CountyCtaProps {
    header: string
    subHeader: string
    buttonText: string
}

export default function CountyCta({
    header,
    subHeader,
    buttonText
}: CountyCtaProps) {
    return (
        <section>
            <div className="section">
                <article className="max-w-2xl bg-secondary text-white h-fit p-8 rounded-xl mx-auto text-center space-y-4">
                    <h3 className="text-white">{header}</h3>
                    <p>{subHeader}</p>
                    <CallToAction
                        buttonLabel={buttonText}
                        value=""
                        type="general"
                    />
                </article>
            </div>
        </section>
    )
}
