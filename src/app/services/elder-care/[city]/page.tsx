import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generateLocationSEO, getAllCitySlugs } from '@/lib/locationSeo'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceDescription from '@/components/services/ServiceDescription'
import ServiceList from '@/components/services/ServiceList'
import ServiceBenefits from '@/components/services/ServiceBenefits'
import ServiceFaqs from '@/components/services/ServiceFaqs'
import ServiceCta from '@/components/services/ServiceCta'
import { ELDER_CARE_CONSULTING_FAQS } from '@/utils/faqs'

interface Props {
    params: {
        city: string
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city } = params
    const seoData = generateLocationSEO('elder-care', city)

    if (!seoData) {
        return {
            title: 'Service Not Found',
            description: 'The requested service page could not be found.'
        }
    }

    const { location, serviceSpecificData } = seoData
    const seoHeadData = serviceSpecificData?.SeoHead

    const pageTitle =
        seoHeadData?.title ||
        `Elder Care Consulting Services in ${location.name}, NJ | 360 Degree Care`
    const pageDescription =
        seoHeadData?.metaDescription ||
        `Expert elder care consulting in ${location.name}. Professional guidance to help families navigate senior care decisions with confidence. Comprehensive assessments and personalized care planning.`
    const pageKeywords =
        seoHeadData?.keywords ||
        `elder care consulting, senior care planning, care coordination, family guidance, ${location.name}, New Jersey`
    const canonicalUrl =
        seoHeadData?.canonicalUrl || `/services/elder-care-consulting/${city}`

    return {
        title: pageTitle,
        description: pageDescription,
        keywords: pageKeywords,
        openGraph: {
            title: seoHeadData?.ogTitle || pageTitle,
            description: seoHeadData?.ogDescription || pageDescription,
            type: 'website',
            locale: 'en_US',
            siteName: '360 Degree Care',
            images: [
                {
                    url:
                        seoHeadData?.ogImage ||
                        'https://www.360degreecare.net/assets/elder-care-consulting-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: `Elder Care Consulting Services in ${location.name}`
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: seoHeadData?.twitterTitle || pageTitle,
            description: seoHeadData?.twitterDescription || pageDescription,
            images: [
                seoHeadData?.twitterImage ||
                    'https://www.360degreecare.net/assets/elder-care-consulting-image.jpg'
            ]
        },
        alternates: {
            canonical: canonicalUrl
        },
        robots: {
            index: true,
            follow: true
        },
        other: {
            'geo.region': 'US-NJ',
            'geo.placename': location.name,
            'geo.postal-code': location.zipCodes.join(', '),
            'ld+json': JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Service',
                name:
                    seoHeadData?.schema?.name ||
                    'Elder Care Consulting Services',
                serviceType:
                    seoHeadData?.schema?.serviceType || 'Elder Care Consulting',
                provider: {
                    '@type': 'Organization',
                    name: '360 Degree Care',
                    url: 'https://www.360degreecare.net/',
                    logo: 'https://www.360degreecare.net/assets/logo.png',
                    description:
                        "For over 10 years, we've been providing expert guidance and care solutions to families across New Jersey.",
                    address: {
                        '@type': 'PostalAddress',
                        streetAddress:
                            seoHeadData?.schema?.address?.streetAddress ||
                            '27 Chestnut Street, Floor 1',
                        addressLocality:
                            seoHeadData?.schema?.address?.addressLocality ||
                            location.name,
                        addressRegion:
                            seoHeadData?.schema?.address?.addressRegion || 'NJ',
                        postalCode:
                            seoHeadData?.schema?.address?.postalCode ||
                            location.zipCodes[0] ||
                            '07450',
                        addressCountry:
                            seoHeadData?.schema?.address?.addressCountry || 'US'
                    },
                    telephone:
                        seoHeadData?.schema?.telephone || '(800) 338-7786'
                },
                areaServed: {
                    '@type': seoHeadData?.schema?.areaServed?.type || 'City',
                    name: seoHeadData?.schema?.areaServed?.name || location.name
                },
                description:
                    seoHeadData?.schema?.description ||
                    `360 Degree Care provides professional elder care consulting services in ${location.name} including comprehensive assessments, personalized care planning, and expert guidance for families navigating senior care decisions.`,
                offers: {
                    '@type': 'Offer',
                    availability: 'https://schema.org/InStock',
                    availabilityEnds: '2026-12-31T23:59',
                    availableAtOrFrom: {
                        '@type': 'Place',
                        address: {
                            '@type': 'PostalAddress',
                            addressLocality: location.name,
                            addressRegion: 'NJ'
                        }
                    }
                }
            })
        }
    }
}

// Updated to use the new helper function for all cities
export async function generateStaticParams() {
    const citySlugs = getAllCitySlugs()
    return citySlugs.map(city => ({
        city
    }))
}

export default function ElderCareCityPage({ params }: Props) {
    const { city } = params

    const seoData = generateLocationSEO('elder-care', city)

    if (!seoData) {
        notFound()
    }

    const { h1, location, serviceSpecificData } = seoData

    const heroData = {
        header: serviceSpecificData?.hero?.header || h1,
        description:
            serviceSpecificData?.hero?.description ||
            `Expert guidance to help families navigate elder care decisions with confidence.`,
        cta: serviceSpecificData?.hero?.cta || 'Request a Free Consultation',
        img: serviceSpecificData?.hero?.img || {
            src: '',
            alt: 'elder care consulting services example'
        }
    }

    const descriptionData = {
        header:
            serviceSpecificData?.description?.header ||
            `What is Elder Care Consulting in ${location.name}?`,
        description:
            serviceSpecificData?.description?.description ||
            `Elder care consulting in ${location.name} provides non-medical advising, planning, and coordination support for families navigating senior care decisions. Our consultants assess your loved one's needs, explore local care options, and develop tailored solutions. Perfect for families overwhelmed by care planning or living far away.`
    }

    const listItemsData = {
        header: serviceSpecificData?.listItems?.header || "What's Included",
        items: serviceSpecificData?.listItems?.items || [
            {
                title: 'Comprehensive assessment',
                description:
                    "Thorough evaluation of your loved one's current needs and situation",
                Icon: 'FaUserDoctor'
            },
            {
                title: 'Personalized care plan',
                description:
                    'Customized roadmap based on individual needs and preferences',
                Icon: 'FaUserDoctor'
            },
            {
                title: 'Exploration of in-home and facility options',
                description:
                    'Review of all available care settings and service options',
                Icon: 'FaUserDoctor'
            },
            {
                title: 'Legal/financial professional referrals',
                description:
                    'Connections to trusted professionals for comprehensive support',
                Icon: 'FaUserDoctor'
            }
        ]
    }

    const benefitsData = {
        header:
            serviceSpecificData?.benefits?.header ||
            'Benefits of Elder Care Consulting',
        items: serviceSpecificData?.benefits?.items || [
            {
                title: 'Local Expertise',
                description:
                    'In-depth knowledge of care options and resources in your area',
                Icon: 'FaUserDoctor'
            },
            {
                title: 'Care Matching',
                description:
                    'Professional assessment to find the perfect care solution for your loved one',
                Icon: 'FaUserDoctor'
            },
            {
                title: 'Compassionate Guidance',
                description:
                    'Supportive, understanding approach during difficult decisions',
                Icon: 'FaUserDoctor'
            },
            {
                title: 'Supportive Planning',
                description:
                    'Clear roadmap and next steps to reduce overwhelm and uncertainty',
                Icon: 'FaUserDoctor'
            }
        ]
    }

    const ctaData = {
        header: serviceSpecificData?.cta?.header || 'Ready to Get Started?',
        description:
            serviceSpecificData?.cta?.description ||
            `Let us help you navigate your loved one's care decisions with confidence. Contact us today to learn more about our elder care consulting services in ${location.name}.`,
        cta: serviceSpecificData?.cta?.cta || 'Get in Touch',
        origin:
            (serviceSpecificData?.cta?.origin as
                | 'Personal Care'
                | 'Elder Care Consulting'
                | 'Staffing'
                | 'Home Health Aides'
                | 'Nursing Services'
                | 'Companion Care') || 'Elder Care Consulting'
    }

    return (
        <main>
            <ServiceHero {...heroData} />
            <ServiceDescription {...descriptionData} />
            <ServiceList {...listItemsData} />
            <ServiceBenefits {...benefitsData} />
            <ServiceFaqs
                header="Questions About Elder Care Consulting"
                faqs={ELDER_CARE_CONSULTING_FAQS}
            />
            <ServiceCta {...ctaData} />
        </main>
    )
}
