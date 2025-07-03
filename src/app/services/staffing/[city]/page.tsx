import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generateLocationSEO, getAllCitySlugs } from '@/lib/locationSeo'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceDescription from '@/components/services/ServiceDescription'
import ServiceList from '@/components/services/ServiceList'
import ServiceBenefits from '@/components/services/ServiceBenefits'
import ServiceFaqs from '@/components/services/ServiceFaqs'
import ServiceCta from '@/components/services/ServiceCta'
import { STAFFING_SERVICES_FAQS } from '@/utils/faqs'

interface Props {
    params: {
        city: string
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city } = params
    const seoData = generateLocationSEO('staffing', city)

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
        `Medical Staffing Solutions for Healthcare Facilities in ${location.name}, NJ | 360 Degree Care`
    const pageDescription =
        seoHeadData?.metaDescription ||
        `Professional medical staffing services in ${location.name}. Credentialed RNs, LPNs, CNAs, therapists, and support staff for hospitals, rehab centers, and healthcare facilities.`
    const pageKeywords =
        seoHeadData?.keywords ||
        `medical staffing, healthcare staffing, nursing staff, RN staffing, LPN staffing, CNA staffing, ${location.name}, New Jersey`
    const canonicalUrl =
        seoHeadData?.canonicalUrl || `/services/staffing-services/${city}`

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
                        'https://www.360degreecare.net/assets/staffing-services-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: `Medical Staffing Services in ${location.name}`
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: seoHeadData?.twitterTitle || pageTitle,
            description: seoHeadData?.twitterDescription || pageDescription,
            images: [
                seoHeadData?.twitterImage ||
                    'https://www.360degreecare.net/assets/staffing-services-image.jpg'
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
                name: seoHeadData?.schema?.name || 'Medical Staffing Services',
                serviceType:
                    seoHeadData?.schema?.serviceType || 'Medical Staffing',
                provider: {
                    '@type': 'Organization',
                    name: '360 Degree Care',
                    url: 'https://www.360degreecare.net/',
                    logo: 'https://www.360degreecare.net/assets/logo.png',
                    description:
                        "For over 10 years, we've been providing reliable staffing solutions to healthcare facilities across New Jersey.",
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
                    `360 Degree Care provides professional medical staffing solutions in ${location.name} including qualified RNs, LPNs, CNAs, therapists, and support staff for healthcare facilities.`,
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

export async function generateStaticParams() {
    const citySlugs = getAllCitySlugs()
    return citySlugs.map(city => ({
        city
    }))
}

export default function StaffingServicesCityPage({ params }: Props) {
    const { city } = params

    const seoData = generateLocationSEO('staffing', city)

    if (!seoData) {
        notFound()
    }

    const { h1, location, serviceSpecificData } = seoData

    const heroData = {
        header: serviceSpecificData?.hero?.header || h1,
        description:
            serviceSpecificData?.hero?.description ||
            `Credentialed professionals for hospitals, rehab centers, and more.`,
        cta: serviceSpecificData?.hero?.cta || 'Join the Team',
        img: serviceSpecificData?.hero?.img || {
            src: '',
            alt: 'medical staffing services example'
        }
    }

    console.log('serviceSpecificData: ', serviceSpecificData)

    const descriptionData = {
        header:
            serviceSpecificData?.description?.header ||
            'What is Medical Staffing?',
        description:
            serviceSpecificData?.description?.description ||
            `We match facilities in ${location.name} with qualified RNs, LPNs, CNAs, therapists, and support staff. Every placement is vetted and ready to provide excellent care — without staffing disruptions.`
    }

    const listItemsData = {
        header: serviceSpecificData?.listItems?.header || "What's Included",
        items: serviceSpecificData?.listItems?.items || [
            {
                title: 'RNs, LPNs, CNAs, PT/OT/SLP, medical admin staff',
                description:
                    'Comprehensive range of qualified healthcare professionals',
                Icon: 'FaUserCheck'
            },
            {
                title: 'Rigorous screening for skills and fit',
                description:
                    'Thorough vetting process to ensure quality placements',
                Icon: 'FaUserCheck'
            },
            {
                title: 'Flexible contracts: short- or long-term',
                description:
                    "Adaptable staffing solutions to meet your facility's needs",
                Icon: 'FaUserCheck'
            },
            {
                title: 'Industries Served: Hospitals, clinics, assisted living, schools, correctional, SNFs, rehab',
                description:
                    'Wide range of healthcare settings and specialties covered',
                Icon: 'FaUserCheck'
            }
        ]
    }

    const benefitsData = {
        header:
            serviceSpecificData?.benefits?.header ||
            'Benefits of Our Staffing Services',
        items: serviceSpecificData?.benefits?.items || [
            {
                title: 'Flexibility',
                description:
                    'Adaptable staffing solutions for temporary, permanent, and emergency coverage',
                Icon: 'FaUserCheck'
            },
            {
                title: 'Quality Professionals',
                description:
                    'All staff are credentialed, experienced, and committed to excellence',
                Icon: 'FaUserCheck'
            },
            {
                title: 'Cost-Efficient Coverage',
                description:
                    'Reduce recruitment costs and minimize staffing disruptions',
                Icon: 'FaUserCheck'
            },
            {
                title: 'Comprehensive Training',
                description:
                    'Ongoing education and skills development for all placed professionals',
                Icon: 'FaUserCheck'
            }
        ]
    }

    const ctaData = {
        header:
            serviceSpecificData?.cta?.header ||
            'Your Trusted Medical Staffing Partner',
        description:
            serviceSpecificData?.cta?.description ||
            `Partner with us for reliable medical staffing solutions in ${location.name}. Contact us today to learn how we can support your healthcare facility.`,
        cta: serviceSpecificData?.cta?.cta || 'Join the Team',
        origin:
            (serviceSpecificData?.cta?.origin as
                | 'Personal Care'
                | 'Elder Care Consulting'
                | 'Staffing'
                | 'Home Health Aides'
                | 'Nursing Services'
                | 'Companion Care') || 'Staffing'
    }

    return (
        <main>
            <ServiceHero {...heroData} />
            <ServiceDescription {...descriptionData} />
            <ServiceList {...listItemsData} />
            <ServiceBenefits {...benefitsData} />
            <ServiceFaqs
                header="Questions About Medical Staffing Services"
                faqs={STAFFING_SERVICES_FAQS}
            />
            <ServiceCta {...ctaData} />
        </main>
    )
}
