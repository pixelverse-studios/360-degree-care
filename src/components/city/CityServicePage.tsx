import ServiceHero from '@/components/services/ServiceHero'
import ServiceDescription from '@/components/services/ServiceDescription'
import ServiceList from '@/components/services/ServiceList'
import ServiceBenefits from '@/components/services/ServiceBenefits'
import LocalResourcesSection from '@/components/city/LocalResourcesSection'
import ServiceFaqs from '@/components/services/ServiceFaqs'
import ServiceCta from '@/components/services/ServiceCta'
import { getImgSrc } from '@/lib/images'
import { CityServicePageContent } from '@/lib/content/city-service-types'

interface CityServicePageProps {
    content: CityServicePageContent
}

const IMAGE_FALLBACK = 'https://www.360degreecare.net/logo.png'

export function CityServicePage({ content }: CityServicePageProps) {
    const resolvedImage =
        (content.hero.imageKey &&
            (getImgSrc(content.hero.imageKey) || content.hero.imageFallback)) ||
        content.hero.imageFallback ||
        IMAGE_FALLBACK

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(content.schemaData)
                }}
            />

            <main className="bg-white">
                <ServiceHero
                    header={content.hero.header}
                    description={content.hero.description}
                    cta={content.hero.cta}
                    img={{ src: resolvedImage, alt: content.hero.imageAlt }}
                />
                <ServiceDescription {...content.overview} />
                <ServiceList {...content.services} />
                <ServiceBenefits {...content.benefits} />
                {content.localResources && (
                    <LocalResourcesSection
                        header={content.localResources.header}
                        items={content.localResources.items}
                    />
                )}
                <ServiceFaqs
                    header={content.faqs.header}
                    faqs={content.faqs.items}
                />
                <ServiceCta {...content.cta} />
            </main>
        </>
    )
}
