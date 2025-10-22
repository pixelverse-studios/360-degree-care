import { getImgSrc } from '@/lib/images'
import ServiceList from '@/components/services/ServiceList'
import CountyHeroSection from '@/components/county/CountyHeroSection'
import CountyIntroSection from '@/components/county/CountyIntroSection'
import RegionalSection from '@/components/county/RegionalSection'
import ServiceAreaGrid from '@/components/county/ServiceAreaGrid'
import CountyCTASection from '@/components/county/CountyCTASection'
import CountyBenefitsSection from '@/components/county/CountyBenefitsSection'
import { essexCountyPersonalCareContent } from '@/lib/content/essex-county-personal-care'

export const metadata = essexCountyPersonalCareContent.metadata

export default function PersonalCareEssexCountyPage() {
    const content = essexCountyPersonalCareContent
    const heroImageSrc = content.hero.imageSrc
        ? getImgSrc(content.hero.imageSrc) || '/images/personal-care-hero.jpg'
        : undefined

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(content.schemaData)
                }}
            />

            <main className="bg-white">
                <CountyHeroSection
                    title={content.hero.title}
                    subtitle={content.hero.subtitle || ''}
                    description={content.hero.description}
                    ctaButtonLabel={content.hero.ctaButtonLabel}
                    ctaValue={content.hero.ctaValue}
                    imageSrc={heroImageSrc}
                    imageAlt={content.hero.imageAlt}
                />

                <CountyIntroSection
                    title={content.intro.title}
                    content={content.intro.content}
                />

                <section id="service-areas" className="py-16 px-4 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-12 text-center font-merriweather">
                            {content.serviceAreas.title}
                        </h2>

                        {content.regionalSections.map((region, index) => (
                            <RegionalSection
                                key={index}
                                title={region.title}
                                content={region.content}
                            />
                        ))}
                    </div>
                </section>

                <ServiceAreaGrid
                    title={content.serviceAreas.title}
                    subtitle={content.serviceAreas.subtitle}
                    regions={content.serviceAreas.regions}
                />

                <ServiceList {...content.services} />

                {content.servicesBenefits && (
                    <CountyBenefitsSection
                        title="Benefits of Personal Care Support"
                        benefits={content.servicesBenefits}
                    />
                )}

                <CountyCTASection
                    title={content.cta.title}
                    description={content.cta.description}
                    ctaButtonLabel={
                        content.cta.ctaButtonLabel ?? content.cta.buttonLabel
                    }
                    ctaValue={content.cta.ctaValue ?? content.cta.value}
                />
            </main>
        </>
    )
}
