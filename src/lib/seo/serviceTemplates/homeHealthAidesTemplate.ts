import { ServiceSEOData } from '@/lib/types'
import { getImgSrc } from '../../images'

interface HomeHealthAidesTemplateVars {
    cityName: string
    zipCode?: string
    specialFeature?: string
    medicalFacility?: string
    demographicNote?: string
}

export function generateHomeHealthAidesData(
    vars: HomeHealthAidesTemplateVars
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
        title: `Concierge-Level™ Home Health Aide Services in ${cityName}, NJ | 360 Degree Care`,
        metaDescription: `Professional home health aide services in ${cityName}. Certified aides providing compassionate daily living support, hygiene assistance, and companionship with nurse supervision and Concierge-Level™ care.`,
        h1: `Concierge-Level™ Home Health Aide Services in ${cityName}`,
        description: `Certified aides supporting daily living with compassion and skill${specialFeature ? `. ${specialFeature}` : ''}.`,
        keywords: `home health aide, certified home health aide, daily living support, hygiene assistance, companionship, ${cityName}, New Jersey`,

        // Schema description with optional medical facility mention
        schemaDescription: `360 Degree Care provides Concierge-Level™ home health aide services in ${cityName} including certified aides for daily living support, hygiene assistance, and companionship. All services are supervised by nurses and delivered with compassionate, skilled care${medicalFacility ? ` with convenient access to ${medicalFacility}` : ''}.`,

        // Description section with demographic note if provided
        descriptionSection: `Aides in ${cityName} provide essential daily support including hygiene, mobility, meals, and companionship — all supervised by nurses and delivered with our signature Concierge-Level™ care${demographicNote ? `. ${demographicNote}` : ''}.`,

        // CTA description
        ctaDescription: `Experience the difference of Concierge-Level™ home health aide services in ${cityName}. Contact us today to learn how our certified aides can support your loved one.`
    }

    return {
        customH1: templates.h1,
        customTitle: templates.title,
        customMetaDescription: templates.metaDescription,
        localKeywords: [
            `home health aide ${cityName} NJ`,
            `${cityName} certified home health aide`,
            `daily living support ${cityName}`,
            `home health aide services ${cityName}`
        ],
        SeoHead: {
            title: templates.title,
            metaDescription: templates.metaDescription,
            keywords: templates.keywords,
            ogTitle: `Home Health Aide Services in ${cityName}, NJ`,
            ogDescription: templates.metaDescription,
            canonicalUrl: `/services/home-health-aides/${cityName.toLowerCase().replace(/\s+/g, '-')}`,
            schema: {
                name: `Home Health Aide Services in ${cityName}`,
                serviceType: 'Home Health Aide',
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
            cta: 'Get In Touch',
            img: {
                src: getImgSrc('home-health-aides-hero') ?? '',
                alt: `Home health aide services in ${cityName}`
            }
        },
        description: {
            header: `What is Home Health Aide Support in ${cityName}?`,
            description: templates.descriptionSection
        },
        cta: {
            header: 'Need a Home Health Aide?',
            description: templates.ctaDescription,
            cta: 'Get In Touch',
            origin: 'Home Health Aide'
        },
        listItems: {
            header: "What's Included",
            items: [
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
                    description:
                        'Nutritious meal preparation and dietary support',
                    Icon: 'FaUtensils'
                },
                {
                    title: 'Medication reminders',
                    description:
                        'Timely prompts for taking prescribed medications',
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
                    description:
                        'Coordination of medical visits and activities',
                    Icon: 'FaCalendarDays'
                },
                {
                    title: 'Emotional support',
                    description:
                        'Compassionate presence during daily challenges',
                    Icon: 'FaHandHoldingHeart'
                }
            ]
        },
        benefits: {
            header: 'Benefits of Home Health Aides',
            items: [
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
    }
}

// City-specific configurations
export const homeHealthAidesCityConfigs: Record<
    string,
    HomeHealthAidesTemplateVars
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
            'Serving the suburban community with family-focused aide services',
        demographicNote:
            'Ideal for families in this charming Bergen County village'
    },
    teaneck: {
        cityName: 'Teaneck',
        zipCode: '07666',
        specialFeature:
            'Culturally sensitive aide services for our diverse community',
        demographicNote: 'Designed for the multicultural families of Teaneck'
    },
    paramus: {
        cityName: 'Paramus',
        zipCode: '07652',
        specialFeature:
            'Convenient aide services in the heart of Bergen County',
        demographicNote:
            'Serving busy families near major shopping and business centers'
    }
}
