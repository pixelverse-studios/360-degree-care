'use client'

import { ReactNode } from 'react'
import CallToAction from '../CallToAction'

import { ImageProps } from '@/lib/types'

interface ServiceHeroProps {
    header: string
    description: string | ReactNode
    cta: string | ReactNode
    img: ImageProps
}

export default function ServiceHero({
    header,
    description,
    cta,
    img
}: ServiceHeroProps) {
    return (
        <section className="page-section grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col gap-6 items-start">
                <h1>{header}</h1>
                <article className="mb-12">{description}</article>
                <CallToAction
                    buttonLabel={cta}
                    value=""
                    variant="pillPrimary"
                    type="services"
                />
            </div>
            <img className="rounded-xl shadow-xl" src={img.src} alt={img.alt} />
        </section>
    )
}
