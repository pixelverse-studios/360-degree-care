import { getImgSrc } from '@/lib/images'
import CountyHeroSection from '@/components/county/CountyHeroSection'
import CountyIntroSection from '@/components/county/CountyIntroSection'
import RegionalSection from '@/components/county/RegionalSection'
import ServiceAreaGrid from '@/components/county/ServiceAreaGrid'
import BergenCountyCityLinks from '@/components/county/BergenCountyCityLinks'
import CountyCTASection from '@/components/county/CountyCTASection'
import { bergenCountyCompanionCareContent } from '@/lib/content/bergen-county-companion-care'
import { getCitySlugs } from '@/lib/content/city-slug-map'

// TODO: Add cross-links to other Bergen County service hub pages when created:
// - /services/personal-care/bergen-county (already created)
// - /services/elder-care/bergen-county
// - /services/nursing/bergen-county
// - /services/home-health-aides/bergen-county
// - /services/staffing/bergen-county

// Export metadata directly from content
export const metadata = bergenCountyCompanionCareContent.metadata

export default function CompanionCareBergenCountyPage() {
    const content = bergenCountyCompanionCareContent
    const citySlugs = getCitySlugs('companion-care', 'bergen-county')
    const serviceLinkBase = citySlugs.length
        ? '/services/companion-care/bergen-county'
        : undefined
    const heroImageSrc = content.hero.imageSrc
        ? getImgSrc(content.hero.imageSrc) || '/images/companion-care-hero.jpg'
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
                            Companion Care Services by Region
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

                {/* Service Areas Grid */}
                <ServiceAreaGrid
                    title={content.serviceAreas.title}
                    subtitle={content.serviceAreas.subtitle}
                    regions={content.serviceAreas.regions}
                    linkBase={serviceLinkBase}
                    citySlugs={citySlugs}
                />

                {/* City-Specific Service Pages */}
                <BergenCountyCityLinks
                    serviceSlug="companion-care"
                    serviceName="Companion Care"
                />

                {/* Services Section */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-4xl">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-center font-merriweather">
                            {content.services.title}
                        </h2>
                        <p className="text-lg text-gray-700 text-center mb-8">
                            {content.services.description}
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {content.services.servicesList.map(
                                (service, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2"
                                    >
                                        <span className="text-primary mt-1">
                                            •
                                        </span>
                                        <span className="text-gray-700">
                                            {service}
                                        </span>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </section>

                {/* Benefits Section */}
                {content.servicesBenefits && (
                    <section className="py-16 px-4 bg-gray-50">
                        <div className="container mx-auto max-w-4xl">
                            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 text-center font-merriweather">
                                Benefits of Companion Care
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {content.servicesBenefits.map(
                                    (benefit, index) => (
                                        <div
                                            key={index}
                                            className="bg-white rounded-lg p-6 shadow-md"
                                        >
                                            <h3 className="text-xl font-bold text-primary mb-3">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-gray-700">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {/* Why Choose Us Section */}
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

                {/* CTA Section */}
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
