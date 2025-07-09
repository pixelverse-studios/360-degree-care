import { ServiceSEOData } from '@/lib/types'
import { getImgSrc } from '../../images'

interface PersonalCareTemplateVars {
    cityName: string
    zipCode?: string
    specialFeature?: string
    medicalFacility?: string
    demographicNote?: string
}

export function generatePersonalCareData(
    vars: PersonalCareTemplateVars
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
        title: `Professional Personal Care Services in ${cityName}, NJ | 360 Degree Care`,
        metaDescription: `Compassionate personal care services from CHAP-certified caregivers in ${cityName}. 24/7 assistance with hygiene, mobility, and daily living activities to help seniors maintain dignity and independence at home.`,
        h1: `Professional Personal Care Services in ${cityName}`,
        description: `Personal care services at 360 Degree Care in ${cityName} are designed to help seniors and individuals with daily living tasks while preserving dignity, independence, and comfort${specialFeature ? `. ${specialFeature}` : ''}.`,
        keywords: `personal care services, senior care, home health aide, hygiene assistance, mobility support, ${cityName}, New Jersey`,

        // Schema description with optional medical facility mention
        schemaDescription: `360 Degree Care provides professional personal care services in ${cityName} including assistance with daily activities, hygiene, and mobility support. Our certified caregivers help seniors maintain dignity and independence in their own homes${medicalFacility ? ` with convenient access to ${medicalFacility}` : ''}.`,

        // Description section with demographic note if provided
        descriptionSection: `Personal care in ${cityName} includes non-medical assistance with essential daily routines — such as bathing, dressing, and grooming — so individuals can safely age in place and enjoy a higher quality of life${demographicNote ? `. ${demographicNote}` : ''}.`,

        // CTA description
        ctaDescription: `Let us help your loved one age with dignity and support. Contact us today to learn more about our personal care services in ${cityName}.`
    }

    return {
        customH1: templates.h1,
        customTitle: templates.title,
        customMetaDescription: templates.metaDescription,
        localKeywords: [
            `personal care ${cityName} NJ`,
            `${cityName} caregivers`,
            `home care ${cityName}`,
            `senior care ${cityName}`
        ],
        SeoHead: {
            title: templates.title,
            metaDescription: templates.metaDescription,
            keywords: templates.keywords,
            ogTitle: `Personal Care Services in ${cityName}, NJ`,
            ogDescription: templates.metaDescription,
            canonicalUrl: `/services/personal-care/${cityName.toLowerCase().replace(/\s+/g, '-')}`,
            schema: {
                name: `Personal Care Services in ${cityName}`,
                serviceType: 'Personal Care',
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
            cta: 'Request a free consultation',
            img: {
                src: getImgSrc('personal-care-hero') ?? '',
                alt: `Personal care services in ${cityName}`
            }
        },
        description: {
            header: `What is Personal Care in ${cityName}?`,
            description: templates.descriptionSection
        },
        cta: {
            header: 'Ready to Get Started?',
            description: templates.ctaDescription,
            cta: 'Get In Touch',
            origin: 'Personal Care'
        },
        listItems: {
            header: "What's Included",
            items: [
                {
                    title: 'Bathing, dressing, and grooming',
                    description:
                        'Assistance with personal hygiene and daily dressing routines',
                    Icon: 'FaBath'
                },
                {
                    title: 'Light housekeeping and laundry',
                    description: 'Maintaining a clean, safe living environment',
                    Icon: 'FaBroom'
                },
                {
                    title: 'Transportation to appointments',
                    description:
                        'Safe rides to medical visits and community activities',
                    Icon: 'FaCar'
                },
                {
                    title: 'Assistance with mobility and transfers',
                    description: 'Help with safe movement around the home',
                    Icon: 'FaWheelchair'
                },
                {
                    title: 'Meal preparation and feeding assistance',
                    description:
                        'Nutritious meal planning and help with eating when needed',
                    Icon: 'FaUtensils'
                },
                {
                    title: 'Medication reminders',
                    description:
                        'Timely prompts for taking prescribed medications',
                    Icon: 'FaCapsules'
                },
                {
                    title: 'Companionship and conversation',
                    description:
                        'Meaningful social interaction and emotional support',
                    Icon: 'FaHeart'
                },
                {
                    title: 'Incontinence care',
                    description: 'Dignified assistance with toileting needs',
                    Icon: 'FaToilet'
                }
            ]
        },
        benefits: {
            header: 'Benefits of Personal Care',
            items: [
                {
                    title: 'Promotes Independence',
                    description:
                        'Help seniors remain in their homes longer with dignity and comfort',
                    Icon: 'FaHouseUser'
                },
                {
                    title: 'Reduces Caregiver Stress',
                    description:
                        'Offers relief for family members and prevents caregiver burnout',
                    Icon: 'FaHeart'
                },
                {
                    title: 'Improves Emotional Well-being',
                    description:
                        'Consistent companionship and support reduces feelings of isolation',
                    Icon: 'FaFaceSmile'
                },
                {
                    title: 'Customizable Plans',
                    description:
                        "Every client's needs and preferences are unique and fully accommodated",
                    Icon: 'FaNotesMedical'
                }
            ]
        }
    }
}

// City-specific configurations
export const personalCareCityConfigs: Record<string, PersonalCareTemplateVars> =
    {
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
                'Serving the suburban community with family-focused care',
            demographicNote:
                'Ideal for families in this charming Bergen County village'
        },
        teaneck: {
            cityName: 'Teaneck',
            zipCode: '07666',
            specialFeature:
                'Culturally sensitive care for our diverse community',
            demographicNote:
                'Designed for the multicultural families of Teaneck'
        },
        paramus: {
            cityName: 'Paramus',
            zipCode: '07652',
            specialFeature: 'Convenient care in the heart of Bergen County',
            demographicNote:
                'Serving busy families near major shopping and business centers'
        }
    }
