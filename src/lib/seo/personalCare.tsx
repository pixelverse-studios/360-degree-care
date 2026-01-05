import type { Metadata } from 'next'
import { FaArrowRight } from 'react-icons/fa6'
import { getImgSrc } from '../images'

export const personalCareMetadata: Metadata = {
    title: 'Personal Care Services in New Jersey | 360 Degree Care',
    description:
        'Professional personal care services in New Jersey, helping seniors with daily living tasks while preserving dignity, independence, and comfort at home.',
    keywords:
        'personal care services, senior care, home health aide, hygiene assistance, mobility support, New Jersey, Ridgewood NJ',
    openGraph: {
        type: 'website',
        url: 'https://www.360degreecare.net/services/personal-care',
        title: 'Personal Care Services in New Jersey | 360 Degree Care',
        description:
            'Professional personal care services in New Jersey, helping seniors with daily living tasks while preserving dignity, independence, and comfort at home.',
        images: [
            {
                url: 'https://www.360degreecare.net/assets/personal-care-image.jpg'
            }
        ],
        locale: 'en_US',
        siteName: '360 Degree Care'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Personal Care Services in New Jersey | 360 Degree Care',
        description:
            'Professional personal care services in New Jersey, helping seniors with daily living tasks while preserving dignity, independence, and comfort at home.',
        images: ['https://www.360degreecare.net/assets/personal-care-image.jpg']
    },
    robots: { index: true, follow: true },
    alternates: {
        canonical: 'https://www.360degreecare.net/services/personal-care'
    },
    other: {
        'geo.region': 'US-NJ',
        'geo.placename': 'Ridgewood'
    }
}

const StaticPersonalCareData = {
    hero: {
        cta: (
            <>
                Request a free consultation
                <FaArrowRight size={24} className="ml-4" />
            </>
        ),
        description:
            'Hands-on, in-home support that helps seniors live safely, comfortably, and with dignity.',
        introBody:
            'Personal care services from 360 Degree Care support seniors and individuals who need help with daily living activities while remaining in the comfort of their own homes. Our caregivers provide respectful, reliable assistance designed to promote independence and overall well-being.',
        header: 'Personal Care Services in New Jersey',
        img: {
            src: getImgSrc('personal-care-hero') ?? '',
            alt: 'personal care services example'
        }
    },
    description: {
        header: 'What is Personal Care?',
        description:
            'Personal care services from 360 Degree Care support seniors and individuals who need help with daily living activities while remaining in the comfort of their own homes. Our caregivers provide respectful, reliable assistance designed to promote independence and overall well-being.'
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
                description: 'Timely prompts for taking prescribed medications',
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

export default StaticPersonalCareData
