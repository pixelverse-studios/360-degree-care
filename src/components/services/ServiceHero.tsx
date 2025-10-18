'use client'

import Image from 'next/image'
import { ReactNode } from 'react'
import CallToAction from '../CallToAction'

import { SlideInSection } from '../animations'
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
            <SlideInSection className="flex flex-col gap-6 items-start">
                <h1>{header}</h1>
                <article className="mb-12">{description}</article>
                <CallToAction
                    buttonLabel={cta}
                    value=""
                    variant="pillPrimary"
                    type="services"
                    buttonClass="flex gap-2"
                />
            </SlideInSection>
            <SlideInSection direction="right">
                <Image
                    className="rounded-xl shadow-xl w-full h-auto"
                    src={img.src}
                    alt={img.alt}
                    width={1200}
                    height={800}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    style={{ width: '100%', height: 'auto' }}
                />
            </SlideInSection>
        </section>
    )
}
