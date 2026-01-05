import type { Metadata } from 'next'
import { FaArrowRight } from 'react-icons/fa6'
import { getImgSrc } from '../images'

export const companionCareMetadata: Metadata = {
    title: 'Companion Care Services in New Jersey | 360 Degree Care',
    description:
        'Companion care services in New Jersey providing social support, engagement, and companionship to help seniors stay connected and supported at home.',
    keywords:
        'companion care, companionship services, social support, emotional connection, senior companionship, New Jersey',
    openGraph: {
        type: 'website',
        url: 'https://www.360degreecare.net/services/companion-care',
        title: 'Companion Care Services in New Jersey | 360 Degree Care',
        description:
            'Companion care services in New Jersey providing social support, engagement, and companionship to help seniors stay connected and supported at home.',
        images: [
            {
                url: 'https://www.360degreecare.net/assets/companion-care-image.jpg'
            }
        ],
        locale: 'en_US',
        siteName: '360 Degree Care'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Companion Care Services in New Jersey | 360 Degree Care',
        description:
            'Companion care services in New Jersey providing social support, engagement, and companionship to help seniors stay connected and supported at home.',
        images: [
            'https://www.360degreecare.net/assets/companion-care-image.jpg'
        ]
    },
    robots: { index: true, follow: true },
    alternates: {
        canonical: 'https://www.360degreecare.net/services/companion-care'
    },
    other: {
        'geo.region': 'US-NJ',
        'geo.placename': 'Ridgewood'
    }
}

const StaticCompanionCareData = {
    hero: {
        cta: (
            <>
                Contact Us <FaArrowRight size={24} className="ml-4" />
            </>
        ),
        description:
            'Social connection and everyday companionship to support emotional well-being and quality of life.',
        introBody:
            'Companion care services from 360 Degree Care provide meaningful social support for seniors who benefit from regular interaction and engagement at home. Our caregivers offer companionship, conversation, and assistance with daily routines to help reduce isolation and promote emotional well-being.',
        header: 'Companion Care Services in New Jersey',
        img: {
            src: getImgSrc('companion-care-hero') ?? '',
            alt: 'companion care services example'
        }
    },
    description: {
        header: 'What is Companion Care?',
        description:
            'Companion care services from 360 Degree Care provide meaningful social support for seniors who benefit from regular interaction and engagement at home. Our caregivers offer companionship, conversation, and assistance with daily routines to help reduce isolation and promote emotional well-being.'
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
                description: 'Gentle prompts for taking prescribed medications',
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

export default StaticCompanionCareData
