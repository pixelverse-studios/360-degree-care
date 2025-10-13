import { getImgSrc } from '@/lib/images'
import ServiceList from '@/components/services/ServiceList'
import ServiceBenefits from '@/components/services/ServiceBenefits'
import CountyHeroSection from '@/components/county/CountyHeroSection'
import CountyIntroSection from '@/components/county/CountyIntroSection'
import RegionalSection from '@/components/county/RegionalSection'
import ServiceAreaGrid from '@/components/county/ServiceAreaGrid'
import CountyCTASection from '@/components/county/CountyCTASection'
import { bergenCountyHomeHealthAidesContent } from '@/lib/content/bergen-county-home-health-aides'

// Export metadata directly from content
export const metadata = bergenCountyHomeHealthAidesContent.metadata

export default function HomeHealthAidesBergenCountyPage() {
    const content = bergenCountyHomeHealthAidesContent
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
                {/* Hero Section */}
                <CountyHeroSection
                    title={content.hero.title}
                    subtitle={content.hero.subtitle || ''}
                    description={content.hero.description}
                    ctaButtonLabel={content.hero.ctaButtonLabel}
                    ctaValue={content.hero.ctaValue}
                    imageSrc={heroImageSrc}
                    imageAlt={content.hero.imageAlt}
                />

                {/* Introduction Section */}
                <CountyIntroSection
                    title={content.intro.title}
                    content={content.intro.content}
                />

                {/* Regional Sections */}
                <section id="service-areas" className="py-16 px-4 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-12 text-center font-merriweather">
                            Our Home Health Aide Service Areas in Bergen County
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

                {/* Complete Service Area Grid */}
                <ServiceAreaGrid
                    title={content.serviceAreas.title}
                    subtitle={content.serviceAreas.subtitle}
                    regions={content.serviceAreas.regions}
                />

                {/* Services Section */}
                <ServiceList {...content.services} />

                {/* Benefits Section */}
                <ServiceBenefits {...content.benefits} />

                {/* CTA Section */}
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
