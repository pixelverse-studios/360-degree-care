import { Metadata } from 'next'
import { notFound } from 'next/navigation'
// Updated import: replaced 'cities' with 'getAllCitySlugs'
import { generateLocationSEO, getAllCitySlugs } from '@/lib/locationSeo'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceDescription from '@/components/services/ServiceDescription'
import ServiceList from '@/components/services/ServiceList'
import ServiceBenefits from '@/components/services/ServiceBenefits'
import ServiceFaqs from '@/components/services/ServiceFaqs'
import ServiceCta from '@/components/services/ServiceCta'
import { PERSONAL_CARE_FAQS } from '@/utils/faqs'

interface Props {
    params: {
        city: string
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city } = params
    const seoData = generateLocationSEO('personal-care', city)

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
        `Professional Personal Care Services in ${location.name}, NJ | 360 Degree Care`
    const pageDescription =
        seoHeadData?.metaDescription ||
        `Compassionate personal care services from CHAP-certified caregivers in ${location.name}. 24/7 assistance with hygiene, mobility, and daily living activities to help seniors maintain dignity and independence at home.`
    const pageKeywords =
        seoHeadData?.keywords ||
        `personal care services, senior care, home health aide, hygiene assistance, mobility support, ${location.name}, New Jersey`
    const canonicalUrl =
        seoHeadData?.canonicalUrl || `/services/personal-care/${city}`

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
                        'https://www.360degreecare.net/assets/personal-care-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: `Personal Care Services in ${location.name}`
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: seoHeadData?.twitterTitle || pageTitle,
            description: seoHeadData?.twitterDescription || pageDescription,
            images: [
                seoHeadData?.twitterImage ||
                    'https://www.360degreecare.net/assets/personal-care-image.jpg'
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
                name: seoHeadData?.schema?.name || 'Personal Care Services',
                serviceType:
                    seoHeadData?.schema?.serviceType || 'Personal Care',
                provider: {
                    '@type': 'HomeHealthCareService',
                    name: '360 Degree Care',
                    url: 'https://www.360degreecare.net/',
                    logo: 'https://www.360degreecare.net/assets/logo.png',
                    description:
                        "For over 10 years, we've been providing compassionate and reliable care solutions to families across New Jersey.",
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
                    `360 Degree Care provides professional personal care services in ${location.name} including assistance with daily activities, hygiene, and mobility support. Our certified caregivers help seniors maintain dignity and independence in their own homes.`,
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

// Updated to use the new helper function for all cities
export async function generateStaticParams() {
    const citySlugs = getAllCitySlugs()
    return citySlugs.map(city => ({
        city
    }))
}

export default function PersonalCareCityPage({ params }: Props) {
    const { city } = params

    const seoData = generateLocationSEO('personal-care', city)

    if (!seoData) {
        notFound()
    }

    const { h1, location, serviceSpecificData } = seoData

    // Create fallback data compatible with server components
    const heroData = {
        header: serviceSpecificData?.hero?.header || h1,
        description:
            serviceSpecificData?.hero?.description ||
            `Personal care services at 360 Degree Care are designed to help seniors and individuals with daily living tasks while preserving dignity, independence, and comfort.`,
        cta: serviceSpecificData?.hero?.cta || 'Request a free consultation',
        img: serviceSpecificData?.hero?.img || {
            src: '',
            alt: 'personal care services example'
        }
    }

    const descriptionData = {
        header:
            serviceSpecificData?.description?.header ||
            'What is Personal Care?',
        description:
            serviceSpecificData?.description?.description ||
            "Personal care includes non-medical assistance with essential daily routines — such as bathing, dressing, and grooming — so individuals can safely age in place and enjoy a higher quality of life. It's ideal for seniors, people with disabilities, or anyone recovering from illness or surgery."
    }

    const listItemsData = {
        header: serviceSpecificData?.listItems?.header || "What's Included",
        items: serviceSpecificData?.listItems?.items?.map(item => ({
            ...item,
            Icon: item.Icon || (() => null)
        })) || [
            {
                title: 'Bathing, dressing, and grooming',
                description:
                    'Assistance with personal hygiene and daily dressing routines',
                Icon: () => null
            },
            {
                title: 'Light housekeeping and laundry',
                description: 'Maintaining a clean, safe living environment',
                Icon: () => null
            },
            {
                title: 'Transportation to appointments',
                description:
                    'Safe rides to medical visits and community activities',
                Icon: () => null
            },
            {
                title: 'Assistance with mobility and transfers',
                description: 'Help with safe movement around the home',
                Icon: () => null
            },
            {
                title: 'Meal preparation and feeding assistance',
                description:
                    'Nutritious meal planning and help with eating when needed',
                Icon: () => null
            },
            {
                title: 'Medication reminders',
                description: 'Timely prompts for taking prescribed medications',
                Icon: () => null
            },
            {
                title: 'Companionship and conversation',
                description:
                    'Meaningful social interaction and emotional support',
                Icon: () => null
            },
            {
                title: 'Incontinence care',
                description: 'Dignified assistance with toileting needs',
                Icon: () => null
            }
        ]
    }

    const benefitsData = {
        header:
            serviceSpecificData?.benefits?.header ||
            'Benefits of Personal Care',
        items: serviceSpecificData?.benefits?.items?.map(item => ({
            ...item,
            Icon: item.Icon || (() => null)
        })) || [
            {
                title: 'Promotes Independence',
                description:
                    'Help seniors remain in their homes longer with dignity and comfort',
                Icon: () => null
            },
            {
                title: 'Reduces Caregiver Stress',
                description:
                    'Offers relief for family members and prevents caregiver burnout',
                Icon: () => null
            },
            {
                title: 'Improves Emotional Well-being',
                description:
                    'Consistent companionship and support reduces feelings of isolation',
                Icon: () => null
            },
            {
                title: 'Customizable Plans',
                description:
                    "Every client's needs and preferences are unique and fully accommodated",
                Icon: () => null
            }
        ]
    }

    const ctaData = {
        header: serviceSpecificData?.cta?.header || 'Ready to Get Started?',
        description:
            serviceSpecificData?.cta?.description ||
            `Let us help your loved one age with dignity and support. Contact us today to learn more about our personal care services in ${location.name}.`,
        cta: serviceSpecificData?.cta?.cta || 'Get In Touch',
        origin:
            (serviceSpecificData?.cta?.origin as
                | 'Personal Care'
                | 'Elder Care Consulting'
                | 'Staffing'
                | 'Home Health Aides'
                | 'Nursing Services'
                | 'Companion Care') || 'Personal Care'
    }

    return (
        <main>
            <ServiceHero {...heroData} />
            <ServiceDescription {...descriptionData} />
            <ServiceList {...listItemsData} />
            <ServiceBenefits {...benefitsData} />
            <ServiceFaqs
                header="Questions About Personal Care"
                faqs={PERSONAL_CARE_FAQS}
            />
            <ServiceCta {...ctaData} />
        </main>
    )
}
