import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generateLocationSEO, getAllCitySlugs } from '@/lib/locationSeo'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceDescription from '@/components/services/ServiceDescription'
import ServiceList from '@/components/services/ServiceList'
import ServiceBenefits from '@/components/services/ServiceBenefits'
import ServiceFaqs from '@/components/services/ServiceFaqs'
import ServiceCta from '@/components/services/ServiceCta'
import { HOME_HEALTH_AIDES_FAQS } from '@/utils/faqs'

interface Props {
    params: {
        city: string
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city } = params
    const seoData = generateLocationSEO('home-health-aides', city)

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
        `Concierge-Level™ Home Health Aide Services in ${location.name}, NJ | 360 Degree Care`
    const pageDescription =
        seoHeadData?.metaDescription ||
        `Professional home health aide services in ${location.name}. Certified aides providing compassionate daily living support, hygiene assistance, and companionship with nurse supervision.`
    const pageKeywords =
        seoHeadData?.keywords ||
        `home health aide, certified home health aide, daily living support, hygiene assistance, companionship, ${location.name}, New Jersey`
    const canonicalUrl =
        seoHeadData?.canonicalUrl || `/services/home-health-aides/${city}`

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
                        'https://www.360degreecare.net/assets/home-health-aides-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: `Home Health Aide Services in ${location.name}`
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: seoHeadData?.twitterTitle || pageTitle,
            description: seoHeadData?.twitterDescription || pageDescription,
            images: [
                seoHeadData?.twitterImage ||
                    'https://www.360degreecare.net/assets/home-health-aides-image.jpg'
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
                name: seoHeadData?.schema?.name || 'Home Health Aide Services',
                serviceType:
                    seoHeadData?.schema?.serviceType || 'Home Health Aide',
                provider: {
                    '@type': 'HomeHealthCareService',
                    name: '360 Degree Care',
                    url: 'https://www.360degreecare.net/',
                    logo: 'https://www.360degreecare.net/assets/logo.png',
                    description:
                        "For over 10 years, we've been providing Concierge-Level™ home health aide services to families across New Jersey.",
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
                    `360 Degree Care provides Concierge-Level™ home health aide services in ${location.name} including certified aides for daily living support, hygiene assistance, and companionship.`,
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

export default function HomeAidesCityPage({ params }: Props) {
    const { city } = params

    const seoData = generateLocationSEO('home-health-aides', city)

    if (!seoData) {
        notFound()
    }

    const { h1, location, serviceSpecificData } = seoData

    const heroData = {
        header: serviceSpecificData?.hero?.header || h1,
        description:
            serviceSpecificData?.hero?.description ||
            `Certified aides supporting daily living with compassion and skill.`,
        cta: serviceSpecificData?.hero?.cta || 'Get In Touch',
        img: serviceSpecificData?.hero?.img || {
            src: '',
            alt: 'home health aide services example'
        }
    }

    const descriptionData = {
        header:
            serviceSpecificData?.description?.header ||
            `What is Home Health Aide Support in ${location.name}?`,
        description:
            serviceSpecificData?.description?.description ||
            `Aides in ${location.name} provide essential daily support including hygiene, mobility, meals, and companionship — all supervised by nurses and delivered with our signature Concierge-Level™ care.`
    }

    const listItemsData = {
        header: serviceSpecificData?.listItems?.header || "What's Included",
        items: serviceSpecificData?.listItems?.items || [
            {
                title: 'Fall prevention',
                description:
                    'Safety assessments and mobility assistance to prevent accidents',
                Icon: 'FaShield'
            },
            {
                title: 'Dressing assistance',
                description:
                    'Help with clothing selection and dressing routines',
                Icon: 'FaShirt'
            },
            {
                title: 'Blood pressure monitoring',
                description:
                    'Regular vital sign checks and health status monitoring',
                Icon: 'FaStethoscope'
            },
            {
                title: 'Light housekeeping',
                description: 'Maintaining a clean, safe living environment',
                Icon: 'FaBroom'
            },
            {
                title: 'Grooming and hygiene',
                description:
                    'Personal care assistance with dignity and respect',
                Icon: 'FaBath'
            },
            {
                title: 'Meal planning and cooking',
                description: 'Nutritious meal preparation and dietary support',
                Icon: 'FaUtensils'
            },
            {
                title: 'Medication reminders',
                description: 'Timely prompts for taking prescribed medications',
                Icon: 'FaCapsules'
            },
            {
                title: 'Companionship',
                description:
                    'Meaningful social interaction and emotional support',
                Icon: 'FaHeart'
            },
            {
                title: 'Appointment scheduling',
                description: 'Coordination of medical visits and activities',
                Icon: 'FaCalendarDays'
            },
            {
                title: 'Emotional support',
                description: 'Compassionate presence during daily challenges',
                Icon: 'FaHandHoldingHeart'
            }
        ]
    }

    const benefitsData = {
        header:
            serviceSpecificData?.benefits?.header ||
            'Benefits of Home Health Aides',
        items: serviceSpecificData?.benefits?.items || [
            {
                title: 'Experienced & Certified Staff',
                description:
                    'All aides are state-certified with extensive training and experience',
                Icon: 'FaUserCheck'
            },
            {
                title: 'Nurse-Supervised Care',
                description:
                    'Professional oversight ensures quality and continuity of care',
                Icon: 'FaUserDoctor'
            },
            {
                title: 'Personalized Plans',
                description:
                    'Customized care plans tailored to individual needs and preferences',
                Icon: 'FaHeart'
            },
            {
                title: 'Flexible Scheduling',
                description:
                    'From 2-hour shifts to 24/7 live-in support based on your needs',
                Icon: 'FaClock'
            }
        ]
    }

    const ctaData = {
        header: serviceSpecificData?.cta?.header || 'Need a Home Health Aide?',
        description:
            serviceSpecificData?.cta?.description ||
            `Experience the difference of Concierge-Level™ home health aide services in ${location.name}. Contact us today to learn how our certified aides can support your loved one.`,
        cta: serviceSpecificData?.cta?.cta || 'Get In Touch',
        origin:
            (serviceSpecificData?.cta?.origin as
                | 'Personal Care'
                | 'Elder Care Consulting'
                | 'Staffing'
                | 'Home Health Aides'
                | 'Nursing Services'
                | 'Companion Care') || 'Home Health Aides'
    }

    return (
        <main>
            <ServiceHero {...heroData} />
            <ServiceDescription {...descriptionData} />
            <ServiceList {...listItemsData} />
            <ServiceBenefits {...benefitsData} />
            <ServiceFaqs
                header="Questions About Home Health Aide Services"
                faqs={HOME_HEALTH_AIDES_FAQS}
            />
            <ServiceCta {...ctaData} />
        </main>
    )
}
