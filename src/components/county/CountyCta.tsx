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
                <article className="max-w-2xl bg-blue text-white h-fit p-8 rounded-xl mx-auto text-center space-y-4 flex flex-col items-center">
                    <h3 className="text-white">{header}</h3>
                    <p className="text-balance">{subHeader}</p>
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
