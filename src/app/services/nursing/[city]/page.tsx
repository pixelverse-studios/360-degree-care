import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generateLocationSEO, getAllCitySlugs } from '@/lib/locationSeo'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceDescription from '@/components/services/ServiceDescription'
import ServiceList from '@/components/services/ServiceList'
import ServiceBenefits from '@/components/services/ServiceBenefits'
import ServiceFaqs from '@/components/services/ServiceFaqs'
import ServiceCta from '@/components/services/ServiceCta'
import { NURSING_SERVICES_FAQS } from '@/utils/faqs'

interface Props {
    params: {
        city: string
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city } = params
    const seoData = generateLocationSEO('nursing', city)

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
        `In-Home Nursing Services in ${location.name}, NJ | 360 Degree Care`
    const pageDescription =
        seoHeadData?.metaDescription ||
        `Professional in-home nursing services in ${location.name}. Licensed nurses providing skilled clinical care, wound care, medication management, and health assessments at home.`
    const pageKeywords =
        seoHeadData?.keywords ||
        `in-home nursing, skilled nursing, wound care, medication management, home nursing, ${location.name}, New Jersey`
    const canonicalUrl =
        seoHeadData?.canonicalUrl || `/services/nursing-services/${city}`

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
                        'https://www.360degreecare.net/assets/nursing-services-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: `In-Home Nursing Services in ${location.name}`
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: seoHeadData?.twitterTitle || pageTitle,
            description: seoHeadData?.twitterDescription || pageDescription,
            images: [
                seoHeadData?.twitterImage ||
                    'https://www.360degreecare.net/assets/nursing-services-image.jpg'
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
                name: seoHeadData?.schema?.name || 'In-Home Nursing Services',
                serviceType:
                    seoHeadData?.schema?.serviceType || 'Nursing Services',
                provider: {
                    '@type': 'HomeHealthCareService',
                    name: '360 Degree Care',
                    url: 'https://www.360degreecare.net/',
                    logo: 'https://www.360degreecare.net/assets/logo.png',
                    description:
                        "For over 10 years, we've been providing professional in-home nursing services to families across New Jersey.",
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
                    `360 Degree Care provides professional in-home nursing services in ${location.name} including licensed nurses for wound care, assessments, injections, and medication management.`,
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

export default function NursineCityPage({ params }: Props) {
    const { city } = params

    const seoData = generateLocationSEO('nursing', city)

    if (!seoData) {
        notFound()
    }

    const { h1, location, serviceSpecificData } = seoData

    const heroData = {
        header: serviceSpecificData?.hero?.header || h1,
        description:
            serviceSpecificData?.hero?.description ||
            `Skilled clinical care — at home and on your terms.`,
        cta: serviceSpecificData?.hero?.cta || 'Contact Us Today',
        img: serviceSpecificData?.hero?.img || {
            src: '',
            alt: 'in-home nursing services example'
        }
    }

    const descriptionData = {
        header:
            serviceSpecificData?.description?.header ||
            `What is In-Home Nursing in ${location.name}?`,
        description:
            serviceSpecificData?.description?.description ||
            `Licensed nurses in ${location.name} provide wound care, assessments, injections, and medication management — all coordinated with your doctor and available 24/7.`
    }

    const listItemsData = {
        header: serviceSpecificData?.listItems?.header || "What's Included",
        items: serviceSpecificData?.listItems?.items || [
            {
                title: 'Physical exams and vitals',
                description:
                    'Comprehensive health assessments and vital sign monitoring',
                Icon: 'FaStethoscope'
            },
            {
                title: 'Care plan coordination',
                description:
                    'Working with your physician to implement treatment plans',
                Icon: 'FaStethoscope'
            },
            {
                title: 'Medication administration',
                description:
                    'Professional administration of injections and complex medications',
                Icon: 'FaStethoscope'
            },
            {
                title: 'Advanced wound care',
                description:
                    'Specialized treatment for complex wounds and dressings',
                Icon: 'FaStethoscope'
            },
            {
                title: 'Health education for families',
                description:
                    'Teaching family members about care procedures and health management',
                Icon: 'FaStethoscope'
            }
        ]
    }

    const benefitsData = {
        header:
            serviceSpecificData?.benefits?.header ||
            'Benefits of In-Home Nursing',
        items: serviceSpecificData?.benefits?.items || [
            {
                title: 'Highly Qualified Nurses',
                description:
                    'Licensed RNs and LPNs with specialized training and experience',
                Icon: 'FaStethoscope'
            },
            {
                title: 'Collaborative Care',
                description:
                    'Close coordination with your physician and healthcare team',
                Icon: 'FaStethoscope'
            },
            {
                title: 'Round-the-Clock Availability',
                description: '24/7 nursing support when you need it most',
                Icon: 'FaStethoscope'
            },
            {
                title: 'Comprehensive Education',
                description:
                    'Teaching and support for family members to continue care',
                Icon: 'FaStethoscope'
            }
        ]
    }

    const ctaData = {
        header: serviceSpecificData?.cta?.header || 'Ready to Get Started?',
        description:
            serviceSpecificData?.cta?.description ||
            `Experience professional in-home nursing care in ${location.name}. Contact us today to learn how our licensed nurses can support your health needs at home.`,
        cta: serviceSpecificData?.cta?.cta || 'Contact Us Today',
        origin:
            (serviceSpecificData?.cta?.origin as
                | 'Personal Care'
                | 'Elder Care Consulting'
                | 'Staffing'
                | 'Home Health Aides'
                | 'Nursing Services'
                | 'Companion Care') || 'Nursing Services'
    }

    return (
        <main>
            <ServiceHero {...heroData} />
            <ServiceDescription {...descriptionData} />
            <ServiceList {...listItemsData} />
            <ServiceBenefits {...benefitsData} />
            <ServiceFaqs
                header="Questions About In-Home Nursing Services"
                faqs={NURSING_SERVICES_FAQS}
            />
            <ServiceCta {...ctaData} />
        </main>
    )
}
