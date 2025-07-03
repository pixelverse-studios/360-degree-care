import { ServiceSEOData } from '@/lib/counties'
import { getImgSrc } from '../../images'
import {
    FaComments,
    FaCapsules,
    FaBroom,
    FaPersonWalking,
    FaHandHoldingHeart,
    FaFaceSmile,
    FaBrain,
    FaShieldHeart,
    FaRoute
} from 'react-icons/fa6'

interface CompanionCareTemplateVars {
    cityName: string
    zipCode?: string
    specialFeature?: string
    medicalFacility?: string
    demographicNote?: string
}

export function generateCompanionCareData(
    vars: CompanionCareTemplateVars
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
        title: `Companion Care Services in ${cityName}, NJ | 360 Degree Care`,
        metaDescription: `Professional companion care services in ${cityName}. Compassionate social support, emotional connection, and daily life assistance. Reduce loneliness and support mental health with trusted companionship.`,
        h1: `Companion Care Services in ${cityName}`,
        description: `Social support and emotional connection for daily life${specialFeature ? `. ${specialFeature}` : ''}.`,
        keywords: `companion care, companionship services, social support, emotional connection, senior companionship, ${cityName}, New Jersey`,

        // Schema description with optional medical facility mention
        schemaDescription: `360 Degree Care provides professional companion care services in ${cityName} including compassionate social support, emotional connection, and daily life assistance. Our companions provide meaningful interaction and trusted friendship${medicalFacility ? ` with convenient access to ${medicalFacility}` : ''}.`,

        // Description section with demographic note if provided
        descriptionSection: `A companion caregiver in ${cityName} is a compassionate, reliable professional who spends quality time with individuals, supporting them with daily tasks and—most importantly—meaningful social interaction. Whether it's sharing stories over tea, going for a walk, or playing a game, a trusted companion brings joy and emotional connection. 360°Care's Companion Care emphasizes trust, comfort, and presence. A companion becomes a friend you can count on${demographicNote ? `. ${demographicNote}` : ''}.`,

        // CTA description
        ctaDescription: `Bring joy and companionship to your loved one's daily life in ${cityName}. Contact us today to learn how our companion care services can make a difference.`
    }

    return {
        customH1: templates.h1,
        customTitle: templates.title,
        customMetaDescription: templates.metaDescription,
        localKeywords: [
            `companion care ${cityName} NJ`,
            `${cityName} companionship services`,
            `social support ${cityName}`,
            `senior companionship ${cityName}`
        ],
        SeoHead: {
            title: templates.title,
            metaDescription: templates.metaDescription,
            keywords: templates.keywords,
            ogTitle: `Companion Care Services in ${cityName}, NJ`,
            ogDescription: templates.metaDescription,
            canonicalUrl: `/services/companion-care/${cityName.toLowerCase().replace(/\s+/g, '-')}`,
            schema: {
                name: `Companion Care Services in ${cityName}`,
                serviceType: 'Companion Care',
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
            cta: 'Contact Us',
            img: {
                src: getImgSrc('companion-care-hero') ?? '',
                alt: `Companion care services in ${cityName}`
            }
        },
        description: {
            header: `What is Companion Care in ${cityName}?`,
            description: templates.descriptionSection
        },
        cta: {
            header: 'Ready to Get Started?',
            description: templates.ctaDescription,
            cta: 'Contact Us',
            origin: 'Companion Care'
        },
        listItems: {
            header: "What's Included",
            items: [
                {
                    title: 'Conversation and hobbies',
                    description:
                        'Engaging discussions, shared interests, and meaningful activities',
                    Icon: 'FaComments'
                },
                {
                    title: 'Medication reminders',
                    description:
                        'Gentle prompts for taking prescribed medications',
                    Icon: 'FaCapsules'
                },
                {
                    title: 'Light tidying',
                    description:
                        'Assistance with maintaining a comfortable living space',
                    Icon: 'FaBroom'
                },
                {
                    title: 'Accompaniment to outings',
                    description:
                        'Safe companionship for walks, shopping, and social activities',
                    Icon: 'FaPersonWalking'
                },
                {
                    title: 'Emotional presence and monitoring',
                    description:
                        'Compassionate support and awareness of emotional well-being',
                    Icon: 'FaHandHoldingHeart'
                }
            ]
        },
        benefits: {
            header: 'Benefits of Companion Care',
            items: [
                {
                    title: 'Reduces Loneliness',
                    description:
                        'Regular social interaction helps combat isolation and depression',
                    Icon: 'FaFaceSmile'
                },
                {
                    title: 'Supports Mental Health',
                    description:
                        'Meaningful conversations and activities promote cognitive wellness',
                    Icon: 'FaBrain'
                },
                {
                    title: 'Builds Routine & Safety',
                    description:
                        'Consistent presence creates structure and peace of mind for families',
                    Icon: 'FaShieldHeart'
                },
                {
                    title: 'Flexible Companionship',
                    description:
                        'Services adapted to individual interests, needs, and schedules',
                    Icon: 'FaRoute'
                }
            ]
        }
    }
}

// City-specific configurations
export const companionCareCityConfigs: Record<
    string,
    CompanionCareTemplateVars
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
            'Serving the suburban community with friendly companionship',
        demographicNote:
            'Ideal for families in this charming Bergen County village'
    },
    teaneck: {
        cityName: 'Teaneck',
        zipCode: '07666',
        specialFeature:
            'Culturally sensitive companionship for our diverse community',
        demographicNote: 'Designed for the multicultural families of Teaneck'
    },
    paramus: {
        cityName: 'Paramus',
        zipCode: '07652',
        specialFeature:
            'Convenient companionship in the heart of Bergen County',
        demographicNote:
            'Serving busy families near major shopping and business centers'
    }
}
