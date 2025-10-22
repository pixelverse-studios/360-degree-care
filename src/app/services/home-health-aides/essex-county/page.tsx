import { getImgSrc } from '@/lib/images'
import ServiceList from '@/components/services/ServiceList'
import CountyHeroSection from '@/components/county/CountyHeroSection'
import CountyIntroSection from '@/components/county/CountyIntroSection'
import RegionalSection from '@/components/county/RegionalSection'
import ServiceAreaGrid from '@/components/county/ServiceAreaGrid'
import CountyCTASection from '@/components/county/CountyCTASection'
import CountyBenefitsSection from '@/components/county/CountyBenefitsSection'
import { essexCountyHomeHealthAidesContent } from '@/lib/content/essex-county-home-health-aides'

export const metadata = essexCountyHomeHealthAidesContent.metadata

export default function HomeHealthAidesEssexCountyPage() {
    const content = essexCountyHomeHealthAidesContent
    const heroImageSrc = content.hero.imageSrc
        ? getImgSrc(content.hero.imageSrc) ||
          '/images/home-health-aide-hero.jpg'
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
                            Home Health Aide Services by Region
                        </h2>
                        {content.regionalSections.map((section, index) => (
                            <RegionalSection
                                key={index}
                                title={section.title}
                                content={section.content}
                                iconColor="text-secondary"
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
                        title="Benefits of Certified Home Health Aides"
                        benefits={content.servicesBenefits}
                    />
                )}

                {content.whyChoose && (
                    <section className="py-16 px-4">
                        <div className="container mx-auto max-w-4xl">
                            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 text-center font-merriweather">
                                {content.whyChoose.title}
                            </h2>
                            <div className="prose max-w-none text-gray-700">
                                {content.whyChoose.content.map(
                                    (paragraph, index) => (
                                        <p
                                            key={index}
                                            className={
                                                index <
                                                content.whyChoose!.content
                                                    .length -
                                                    1
                                                    ? 'mb-4'
                                                    : ''
                                            }
                                        >
                                            {paragraph}
                                        </p>
                                    )
                                )}
                            </div>
                        </div>
                    </section>
                )}

                <CountyCTASection
                    title={content.cta.title}
                    description={content.cta.description}
                    ctaButtonLabel={content.cta.buttonLabel}
                    ctaValue={content.cta.value}
                />
            </main>
        </>
    )
}
