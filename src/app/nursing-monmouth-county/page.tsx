import { getImgSrc } from '@/lib/images'
import CountyHeroSection from '@/components/county/CountyHeroSection'
import CountyIntroSection from '@/components/county/CountyIntroSection'
import RegionalSection from '@/components/county/RegionalSection'
import ServiceAreaGrid from '@/components/county/ServiceAreaGrid'
import CountyCTASection from '@/components/county/CountyCTASection'
import { monmouthCountyNursingContent } from '@/lib/content/monmouth-county-nursing'

export const metadata = monmouthCountyNursingContent.metadata

export default function NursingMonmouthCountyPage() {
    const content = monmouthCountyNursingContent
    const heroImageSrc = content.hero.imageSrc
        ? getImgSrc(content.hero.imageSrc) ||
          '/images/nursing-services-hero.jpg'
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
                            Private Duty Nursing by Region
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

                {content.servicesBenefits && (
                    <section className="py-16 px-4 bg-gray-50">
                        <div className="container mx-auto max-w-4xl">
                            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 text-center font-merriweather">
                                Benefits of Private Duty Nursing
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
