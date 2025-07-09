import { ServiceSEOData } from '@/lib/types'
import { getImgSrc } from '../../images'

interface NursingServicesTemplateVars {
    cityName: string
    zipCode?: string
    specialFeature?: string
    medicalFacility?: string
    demographicNote?: string
}

export function generateNursingServicesData(
    vars: NursingServicesTemplateVars
): ServiceSEOData {
    const {
        cityName,
        zipCode = '07450',
        specialFeature,
        medicalFacility,
        demographicNote
    } = vars

    // Base templates with variables
    const templates = {
        title: `In-Home Nursing Services in ${cityName}, NJ | 360 Degree Care`,
        metaDescription: `Professional in-home nursing services in ${cityName}. Licensed nurses providing skilled clinical care, wound care, medication management, and health assessments at home. 24/7 availability and physician coordination.`,
        h1: `In-Home Nursing Services in ${cityName}`,
        description: `Skilled clinical care — at home and on your terms${specialFeature ? `. ${specialFeature}` : ''}.`,
        keywords: `in-home nursing, skilled nursing, wound care, medication management, home nursing, ${cityName}, New Jersey`,

        // Schema description with optional medical facility mention
        schemaDescription: `360 Degree Care provides professional in-home nursing services in ${cityName} including licensed nurses for wound care, assessments, injections, and medication management. All care is coordinated with physicians and available 24/7${medicalFacility ? ` with convenient access to ${medicalFacility}` : ''}.`,

        // Description section with demographic note if provided
        descriptionSection: `Licensed nurses in ${cityName} provide wound care, assessments, injections, and medication management — all coordinated with your doctor and available 24/7${demographicNote ? `. ${demographicNote}` : ''}.`,

        // CTA description
        ctaDescription: `Experience professional in-home nursing care in ${cityName}. Contact us today to learn how our licensed nurses can support your health needs at home.`
    }

    return {
        customH1: templates.h1,
        customTitle: templates.title,
        customMetaDescription: templates.metaDescription,
        localKeywords: [
            `in-home nursing ${cityName} NJ`,
            `${cityName} skilled nursing`,
            `home nursing services ${cityName}`,
            `wound care ${cityName}`
        ],
        SeoHead: {
            title: templates.title,
            metaDescription: templates.metaDescription,
            keywords: templates.keywords,
            ogTitle: `In-Home Nursing Services in ${cityName}, NJ`,
            ogDescription: templates.metaDescription,
            canonicalUrl: `/services/nursing-services/${cityName.toLowerCase().replace(/\s+/g, '-')}`,
            schema: {
                name: `In-Home Nursing Services in ${cityName}`,
                serviceType: 'Nursing Services',
                description: templates.schemaDescription,
                areaServed: {
                    name: cityName,
                    type: 'City'
                },
                address: {
                    streetAddress: '27 Chestnut Street, Floor 1',
                    addressLocality: cityName,
                    addressRegion: 'NJ',
                    postalCode: zipCode,
                    addressCountry: 'US'
                }
            }
        },
        hero: {
            header: templates.h1,
            description: templates.description,
            cta: 'Contact Us Today',
            img: {
                src: getImgSrc('nursing-hero') ?? '',
                alt: `In-home nursing services in ${cityName}`
            }
        },
        description: {
            header: `What is In-Home Nursing in ${cityName}?`,
            description: templates.descriptionSection
        },
        cta: {
            header: 'Ready to Get Started?',
            description: templates.ctaDescription,
            cta: 'Contact Us Today',
            origin: 'Nursing Services'
        },
        listItems: {
            header: "What's Included",
            items: [
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
                    Icon: 'FaClipboardList'
                },
                {
                    title: 'Medication administration',
                    description:
                        'Professional administration of injections and complex medications',
                    Icon: 'FaSyringe'
                },
                {
                    title: 'Advanced wound care',
                    description:
                        'Specialized treatment for complex wounds and dressings',
                    Icon: 'FaBandage'
                },
                {
                    title: 'Health education for families',
                    description:
                        'Teaching family members about care procedures and health management',
                    Icon: 'FaGraduationCap'
                }
            ]
        },
        benefits: {
            header: 'Benefits of In-Home Nursing',
            items: [
                {
                    title: 'Highly Qualified Nurses',
                    description:
                        'Licensed RNs and LPNs with specialized training and experience',
                    Icon: 'FaUserDoctor'
                },
                {
                    title: 'Collaborative Care',
                    description:
                        'Close coordination with your physician and healthcare team',
                    Icon: 'FaHandshakeAngle'
                },
                {
                    title: 'Round-the-Clock Availability',
                    description: '24/7 nursing support when you need it most',
                    Icon: 'FaClock'
                },
                {
                    title: 'Comprehensive Education',
                    description:
                        'Teaching and support for family members to continue care',
                    Icon: 'FaGraduationCap'
                }
            ]
        }
    }
}

// City-specific configurations
export const nursingServicesCityConfigs: Record<
    string,
    NursingServicesTemplateVars
> = {
    hackensack: {
        cityName: 'Hackensack',
        zipCode: '07601',
        specialFeature: 'Located near Hackensack University Medical Center',
        medicalFacility: 'Hackensack University Medical Center',
        demographicNote:
            'Perfect for the diverse urban community and Bergen County seat residents'
    },
    ridgewood: {
        cityName: 'Ridgewood',
        zipCode: '07450',
        specialFeature:
            'Serving the suburban community with clinical nursing excellence',
        demographicNote:
            'Ideal for families in this charming Bergen County village'
    },
    teaneck: {
        cityName: 'Teaneck',
        zipCode: '07666',
        specialFeature:
            'Culturally sensitive nursing care for our diverse community',
        demographicNote: 'Designed for the multicultural families of Teaneck'
    },
    paramus: {
        cityName: 'Paramus',
        zipCode: '07652',
        specialFeature:
            'Convenient nursing services in the heart of Bergen County',
        demographicNote:
            'Serving busy families near major shopping and business centers'
    }
}
