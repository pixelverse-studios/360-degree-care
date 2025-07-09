import { ServiceSEOData } from '@/lib/types'
import { getImgSrc } from '../../images'

interface ElderCareConsultingTemplateVars {
    cityName: string
    zipCode?: string
    specialFeature?: string
    medicalFacility?: string
    demographicNote?: string
}

export function generateElderCareConsultingData(
    vars: ElderCareConsultingTemplateVars
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
        title: `Elder Care Consulting Services in ${cityName}, NJ | 360 Degree Care`,
        metaDescription: `Expert elder care consulting in ${cityName}. Professional guidance to help families navigate senior care decisions with confidence. Comprehensive assessments and personalized care planning.`,
        h1: `Elder Care Consulting in ${cityName}`,
        description: `Expert guidance to help families navigate elder care decisions with confidence${specialFeature ? `. ${specialFeature}` : ''}.`,
        keywords: `elder care consulting, senior care planning, care coordination, family guidance, ${cityName}, New Jersey`,

        // Schema description with optional medical facility mention
        schemaDescription: `360 Degree Care provides professional elder care consulting services in ${cityName} including comprehensive assessments, personalized care planning, and expert guidance for families navigating senior care decisions${medicalFacility ? ` with convenient access to ${medicalFacility}` : ''}.`,

        // Description section with demographic note if provided
        descriptionSection: `Elder care consulting in ${cityName} provides non-medical advising, planning, and coordination support for families navigating senior care decisions. Our consultants assess your loved one's needs, explore local care options, and develop tailored solutions. Perfect for families overwhelmed by care planning or living far away${demographicNote ? `. ${demographicNote}` : ''}.`,

        // CTA description
        ctaDescription: `Let us help you navigate your loved one's care decisions with confidence. Contact us today to learn more about our elder care consulting services in ${cityName}.`
    }

    return {
        customH1: templates.h1,
        customTitle: templates.title,
        customMetaDescription: templates.metaDescription,
        localKeywords: [
            `elder care consulting ${cityName} NJ`,
            `${cityName} senior care planning`,
            `care coordination ${cityName}`,
            `elder care guidance ${cityName}`
        ],
        SeoHead: {
            title: templates.title,
            metaDescription: templates.metaDescription,
            keywords: templates.keywords,
            ogTitle: `Elder Care Consulting Services in ${cityName}, NJ`,
            ogDescription: templates.metaDescription,
            canonicalUrl: `/services/elder-care-consulting/${cityName.toLowerCase().replace(/\s+/g, '-')}`,
            schema: {
                name: `Elder Care Consulting Services in ${cityName}`,
                serviceType: 'Elder Care Consulting',
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
            cta: 'Request a Free Consultation',
            img: {
                src: getImgSrc('elder-care-hero') ?? '',
                alt: `Elder care consulting services in ${cityName}`
            }
        },
        description: {
            header: `What is Elder Care Consulting in ${cityName}?`,
            description: templates.descriptionSection
        },
        cta: {
            header: 'Ready to Get Started?',
            description: templates.ctaDescription,
            cta: 'Get in Touch',
            origin: 'Elder Care Consulting'
        },
        listItems: {
            header: "What's Included",
            items: [
                {
                    title: 'Comprehensive assessment',
                    description:
                        "Thorough evaluation of your loved one's current needs and situation",
                    Icon: 'FaClipboardCheck'
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
                    Icon: 'FaHouse'
                },
                {
                    title: 'Legal/financial professional referrals',
                    description:
                        'Connections to trusted professionals for comprehensive support',
                    Icon: 'FaUsers'
                }
            ]
        },
        benefits: {
            header: 'Benefits of Elder Care Consulting',
            items: [
                {
                    title: 'Local Expertise',
                    description:
                        'In-depth knowledge of care options and resources in your area',
                    Icon: 'FaMapLocationDot'
                },
                {
                    title: 'Care Matching',
                    description:
                        'Professional assessment to find the perfect care solution for your loved one',
                    Icon: 'FaHandshake'
                },
                {
                    title: 'Compassionate Guidance',
                    description:
                        'Supportive, understanding approach during difficult decisions',
                    Icon: 'FaHeart'
                },
                {
                    title: 'Supportive Planning',
                    description:
                        'Clear roadmap and next steps to reduce overwhelm and uncertainty',
                    Icon: 'FaRoute'
                }
            ]
        }
    }
}

// City-specific configurations
export const elderCareConsultingCityConfigs: Record<
    string,
    ElderCareConsultingTemplateVars
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
            'Serving the suburban community with family-focused guidance',
        demographicNote:
            'Ideal for families in this charming Bergen County village'
    },
    teaneck: {
        cityName: 'Teaneck',
        zipCode: '07666',
        specialFeature:
            'Culturally sensitive consulting for our diverse community',
        demographicNote: 'Designed for the multicultural families of Teaneck'
    },
    paramus: {
        cityName: 'Paramus',
        zipCode: '07652',
        specialFeature: 'Convenient consulting in the heart of Bergen County',
        demographicNote:
            'Serving busy families near major shopping and business centers'
    }
}
