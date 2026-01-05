import type { Metadata } from 'next'
import { FaArrowRight } from 'react-icons/fa6'
import { getImgSrc } from '../images'

export const elderCareConsultingMetadata: Metadata = {
    title: 'Elder Care Consulting in New Jersey | 360 Degree Care',
    description:
        'Professional elder care consulting in New Jersey, helping families navigate care options, plan next steps, and make informed decisions with confidence.',
    keywords:
        'elder care consulting, senior care planning, aging life care, care navigation, elder care services, New Jersey',
    openGraph: {
        type: 'website',
        url: 'https://www.360degreecare.net/services/elder-care',
        title: 'Elder Care Consulting in New Jersey | 360 Degree Care',
        description:
            'Professional elder care consulting in New Jersey, helping families navigate care options, plan next steps, and make informed decisions with confidence.',
        images: [
            {
                url: 'https://www.360degreecare.net/assets/elder-care-consulting-image.jpg'
            }
        ],
        locale: 'en_US',
        siteName: '360 Degree Care'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Elder Care Consulting in New Jersey | 360 Degree Care',
        description:
            'Professional elder care consulting in New Jersey, helping families navigate care options, plan next steps, and make informed decisions with confidence.',
        images: [
            'https://www.360degreecare.net/assets/elder-care-consulting-image.jpg'
        ]
    },
    robots: { index: true, follow: true },
    alternates: {
        canonical: 'https://www.360degreecare.net/services/elder-care'
    },
    other: {
        'geo.region': 'US-NJ',
        'geo.placename': 'Ridgewood'
    }
}

const StaticElderCareConsultingData = {
    hero: {
        cta: (
            <>
                Request a Free Consultation{' '}
                <FaArrowRight size={24} className="ml-4" />
            </>
        ),
        description:
            'Expert guidance to help families navigate elder care decisions with clarity and confidence.',
        introBody:
            "Elder care consulting from 360 Degree Care supports families as they navigate complex decisions for aging loved ones. Our consultants help assess care needs, explore options, coordinate services, and create a clear plan aligned with each family's goals.",
        header: 'Elder Care Consulting in New Jersey',
        img: {
            src: getImgSrc('elder-care-hero') ?? '',
            alt: 'elder care consulting services example'
        }
    },
    description: {
        header: 'What is Elder Care Consulting?',
        description:
            "Elder care consulting from 360 Degree Care supports families as they navigate complex decisions for aging loved ones. Our consultants help assess care needs, explore options, coordinate services, and create a clear plan aligned with each family's goals."
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

export default StaticElderCareConsultingData
