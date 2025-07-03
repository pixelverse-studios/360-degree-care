import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generateLocationSEO, getAllCitySlugs } from '@/lib/locationSeo'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceDescription from '@/components/services/ServiceDescription'
import ServiceList from '@/components/services/ServiceList'
import ServiceBenefits from '@/components/services/ServiceBenefits'
import ServiceFaqs from '@/components/services/ServiceFaqs'
import ServiceCta from '@/components/services/ServiceCta'
import { COMPANION_CARE_FAQS } from '@/utils/faqs'

interface Props {
    params: {
        city: string
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city } = params
    const seoData = generateLocationSEO('companion-care', city)

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
        `Companion Care Services in ${location.name}, NJ | 360 Degree Care`
    const pageDescription =
        seoHeadData?.metaDescription ||
        `Professional companion care services in ${location.name}. Compassionate social support, emotional connection, and daily life assistance. Reduce loneliness and support mental health.`
    const pageKeywords =
        seoHeadData?.keywords ||
        `companion care, companionship services, social support, emotional connection, senior companionship, ${location.name}, New Jersey`
    const canonicalUrl =
        seoHeadData?.canonicalUrl || `/services/companion-care/${city}`

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
                        'https://www.360degreecare.net/assets/companion-care-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: `Companion Care Services in ${location.name}`
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: seoHeadData?.twitterTitle || pageTitle,
            description: seoHeadData?.twitterDescription || pageDescription,
            images: [
                seoHeadData?.twitterImage ||
                    'https://www.360degreecare.net/assets/companion-care-image.jpg'
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
                name: seoHeadData?.schema?.name || 'Companion Care Services',
                serviceType:
                    seoHeadData?.schema?.serviceType || 'Companion Care',
                provider: {
                    '@type': 'HomeHealthCareService',
                    name: '360 Degree Care',
                    url: 'https://www.360degreecare.net/',
                    logo: 'https://www.360degreecare.net/assets/logo.png',
                    description:
                        "For over 10 years, we've been providing compassionate companion care services to families across New Jersey.",
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
                        seoHeadData?.schema?.telephone || '(800) 338-7786',
                    award: 'CHAP Certified Organization',
                    hasCredential: 'Licensed by the State Attorney General'
                },
                areaServed: {
                    '@type': seoHeadData?.schema?.areaServed?.type || 'City',
                    name: seoHeadData?.schema?.areaServed?.name || location.name
                },
                description:
                    seoHeadData?.schema?.description ||
                    `360 Degree Care provides professional companion care services in ${location.name} including compassionate social support, emotional connection, and daily life assistance.`,
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
                },
                availableChannel: {
                    '@type': 'ServiceChannel',
                    name: '24/7 Customer Service',
                    availableLanguage: {
                        '@type': 'Language',
                        name: 'English'
                    }
                }
            })
        }
    }
}

export async function generateStaticParams() {
    const citySlugs = getAllCitySlugs()
    return citySlugs.map(city => ({
        city
    }))
}

export default function CompanionCareCityPage({ params }: Props) {
    const { city } = params

    const seoData = generateLocationSEO('companion-care', city)

    if (!seoData) {
        notFound()
    }

    const { h1, location, serviceSpecificData } = seoData

    const heroData = {
        header: serviceSpecificData?.hero?.header || h1,
        description:
            serviceSpecificData?.hero?.description ||
            `Social support and emotional connection for daily life.`,
        cta: serviceSpecificData?.hero?.cta || 'Contact Us',
        img: serviceSpecificData?.hero?.img || {
            src: '',
            alt: 'companion care services example'
        }
    }

    const descriptionData = {
        header:
            serviceSpecificData?.description?.header ||
            `What is Companion Care in ${location.name}?`,
        description:
            serviceSpecificData?.description?.description ||
            `A companion caregiver in ${location.name} is a compassionate, reliable professional who spends quality time with individuals, supporting them with daily tasks and—most importantly—meaningful social interaction. Whether it's sharing stories over tea, going for a walk, or playing a game, a trusted companion brings joy and emotional connection. 360°Care's Companion Care emphasizes trust, comfort, and presence. A companion becomes a friend you can count on.`
    }

    const listItemsData = {
        header: serviceSpecificData?.listItems?.header || "What's Included",
        items: serviceSpecificData?.listItems?.items || [
            {
                title: 'Conversation and hobbies',
                description:
                    'Engaging discussions, shared interests, and meaningful activities',
                Icon: 'FaComments'
            },
            {
                title: 'Medication reminders',
                description: 'Gentle prompts for taking prescribed medications',
                Icon: 'FaComments'
            },
            {
                title: 'Light tidying',
                description:
                    'Assistance with maintaining a comfortable living space',
                Icon: 'FaComments'
            },
            {
                title: 'Accompaniment to outings',
                description:
                    'Safe companionship for walks, shopping, and social activities',
                Icon: 'FaComments'
            },
            {
                title: 'Emotional presence and monitoring',
                description:
                    'Compassionate support and awareness of emotional well-being',
                Icon: 'FaComments'
            }
        ]
    }

    const benefitsData = {
        header:
            serviceSpecificData?.benefits?.header ||
            'Benefits of Companion Care',
        items: serviceSpecificData?.benefits?.items || [
            {
                title: 'Reduces Loneliness',
                description:
                    'Regular social interaction helps combat isolation and depression',
                Icon: 'FaComments'
            },
            {
                title: 'Supports Mental Health',
                description:
                    'Meaningful conversations and activities promote cognitive wellness',
                Icon: 'FaComments'
            },
            {
                title: 'Builds Routine & Safety',
                description:
                    'Consistent presence creates structure and peace of mind for families',
                Icon: 'FaComments'
            },
            {
                title: 'Flexible Companionship',
                description:
                    'Services adapted to individual interests, needs, and schedules',
                Icon: 'FaComments'
            }
        ]
    }

    const ctaData = {
        header: serviceSpecificData?.cta?.header || 'Ready to Get Started?',
        description:
            serviceSpecificData?.cta?.description ||
            `Bring joy and companionship to your loved one's daily life in ${location.name}. Contact us today to learn how our companion care services can make a difference.`,
        cta: serviceSpecificData?.cta?.cta || 'Contact Us',
        origin:
            (serviceSpecificData?.cta?.origin as
                | 'Personal Care'
                | 'Elder Care Consulting'
                | 'Staffing'
                | 'Home Health Aides'
                | 'Nursing Services'
                | 'Companion Care') || 'Companion Care'
    }

    return (
        <main>
            <ServiceHero {...heroData} />
            <ServiceDescription {...descriptionData} />
            <ServiceList {...listItemsData} />
            <ServiceBenefits {...benefitsData} />
            <ServiceFaqs
                header="Questions About Companion Care Services"
                faqs={COMPANION_CARE_FAQS}
            />
            <ServiceCta {...ctaData} />
        </main>
    )
}
