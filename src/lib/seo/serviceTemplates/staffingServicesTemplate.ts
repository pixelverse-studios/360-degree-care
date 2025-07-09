import { ServiceSEOData } from '@/lib/types'
import { getImgSrc } from '../../images'

interface StaffingServicesTemplateVars {
    cityName: string
    zipCode?: string
    specialFeature?: string
    medicalFacility?: string
    demographicNote?: string
}

export function generateStaffingServicesData(
    vars: StaffingServicesTemplateVars
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
        title: `Medical Staffing Solutions for Healthcare Facilities in ${cityName}, NJ | 360 Degree Care`,
        metaDescription: `Professional medical staffing services in ${cityName}. Credentialed RNs, LPNs, CNAs, therapists, and support staff for hospitals, rehab centers, and healthcare facilities. Quality coverage when you need it.`,
        h1: `Medical Staffing Solutions for Healthcare Facilities in ${cityName}`,
        description: `Credentialed professionals for hospitals, rehab centers, and more${specialFeature ? `. ${specialFeature}` : ''}.`,
        keywords: `medical staffing, healthcare staffing, nursing staff, RN staffing, LPN staffing, CNA staffing, ${cityName}, New Jersey`,

        // Schema description with optional medical facility mention
        schemaDescription: `360 Degree Care provides professional medical staffing solutions in ${cityName} including qualified RNs, LPNs, CNAs, therapists, and support staff for healthcare facilities. Every placement is vetted and ready to provide excellent care${medicalFacility ? ` with convenient access to ${medicalFacility}` : ''}.`,

        // Description section with demographic note if provided
        descriptionSection: `We match facilities in ${cityName} with qualified RNs, LPNs, CNAs, therapists, and support staff. Every placement is vetted and ready to provide excellent care — without staffing disruptions${demographicNote ? `. ${demographicNote}` : ''}.`,

        // CTA description
        ctaDescription: `Partner with us for reliable medical staffing solutions in ${cityName}. Contact us today to learn how we can support your healthcare facility.`
    }

    return {
        customH1: templates.h1,
        customTitle: templates.title,
        customMetaDescription: templates.metaDescription,
        localKeywords: [
            `medical staffing ${cityName} NJ`,
            `${cityName} healthcare staffing`,
            `nursing staff ${cityName}`,
            `RN staffing ${cityName}`
        ],
        SeoHead: {
            title: templates.title,
            metaDescription: templates.metaDescription,
            keywords: templates.keywords,
            ogTitle: `Medical Staffing Solutions in ${cityName}, NJ`,
            ogDescription: templates.metaDescription,
            canonicalUrl: `/services/staffing-services/${cityName.toLowerCase().replace(/\s+/g, '-')}`,
            schema: {
                name: `Medical Staffing Solutions in ${cityName}`,
                serviceType: 'Medical Staffing',
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
            cta: 'Join the Team',
            img: {
                src: getImgSrc('staffing_hero') ?? '',
                alt: `Medical staffing solutions in ${cityName}`
            }
        },
        description: {
            header: `What is Medical Staffing in ${cityName}?`,
            description: templates.descriptionSection
        },
        cta: {
            header: 'Your Trusted Medical Staffing Partner',
            description: templates.ctaDescription,
            cta: 'Join the Team',
            origin: 'Medical Staffing'
        },
        listItems: {
            header: "What's Included",
            items: [
                {
                    title: 'RNs, LPNs, CNAs, PT/OT/SLP, medical admin staff',
                    description:
                        'Comprehensive range of qualified healthcare professionals',
                    Icon: 'FaUserNurse'
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
                    Icon: 'FaHandshake'
                },
                {
                    title: 'Industries Served: Hospitals, clinics, assisted living, schools, correctional, SNFs, rehab',
                    description:
                        'Wide range of healthcare settings and specialties covered',
                    Icon: 'FaHospital'
                }
            ]
        },
        benefits: {
            header: 'Benefits of Our Staffing Services',
            items: [
                {
                    title: 'Flexibility',
                    description:
                        'Adaptable staffing solutions for temporary, permanent, and emergency coverage',
                    Icon: 'FaClock'
                },
                {
                    title: 'Quality Professionals',
                    description:
                        'All staff are credentialed, experienced, and committed to excellence',
                    Icon: 'FaAward'
                },
                {
                    title: 'Cost-Efficient Coverage',
                    description:
                        'Reduce recruitment costs and minimize staffing disruptions',
                    Icon: 'FaDollarSign'
                },
                {
                    title: 'Comprehensive Training',
                    description:
                        'Ongoing education and skills development for all placed professionals',
                    Icon: 'FaGraduationCap'
                }
            ]
        }
    }
}

// City-specific configurations
export const staffingServicesCityConfigs: Record<
    string,
    StaffingServicesTemplateVars
> = {
    hackensack: {
        cityName: 'Hackensack',
        zipCode: '07601',
        specialFeature: 'Located near Hackensack University Medical Center',
        medicalFacility: 'Hackensack University Medical Center',
        demographicNote:
            'Perfect for the diverse healthcare facilities in Bergen County seat'
    },
    ridgewood: {
        cityName: 'Ridgewood',
        zipCode: '07450',
        specialFeature:
            'Serving healthcare facilities in the suburban community',
        demographicNote:
            'Ideal for local healthcare providers in this Bergen County village'
    },
    teaneck: {
        cityName: 'Teaneck',
        zipCode: '07666',
        specialFeature:
            'Culturally diverse staffing for our multicultural community',
        demographicNote:
            "Designed for healthcare facilities serving Teaneck's diverse population"
    },
    paramus: {
        cityName: 'Paramus',
        zipCode: '07652',
        specialFeature: 'Convenient staffing in the heart of Bergen County',
        demographicNote:
            'Serving healthcare facilities near major business centers'
    }
}
