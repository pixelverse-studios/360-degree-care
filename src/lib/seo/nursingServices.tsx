import type { Metadata } from 'next'
import { FaArrowRight } from 'react-icons/fa6'
import { getImgSrc } from '../images'

export const nursingServicesMetadata: Metadata = {
    title: 'In-Home Nursing Services in New Jersey | 360 Degree Care',
    description:
        'In-home nursing services in New Jersey providing skilled clinical care, assessments, and medical support to help patients remain safely at home.',
    keywords:
        'in-home nursing, skilled nursing, wound care, medication management, home nursing, New Jersey',
    openGraph: {
        type: 'website',
        url: 'https://www.360degreecare.net/services/nursing',
        title: 'In-Home Nursing Services in New Jersey | 360 Degree Care',
        description:
            'In-home nursing services in New Jersey providing skilled clinical care, assessments, and medical support to help patients remain safely at home.',
        images: [
            {
                url: 'https://www.360degreecare.net/assets/nursing-services-image.jpg'
            }
        ],
        locale: 'en_US',
        siteName: '360 Degree Care'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'In-Home Nursing Services in New Jersey | 360 Degree Care',
        description:
            'In-home nursing services in New Jersey providing skilled clinical care, assessments, and medical support to help patients remain safely at home.',
        images: [
            'https://www.360degreecare.net/assets/nursing-services-image.jpg'
        ]
    },
    robots: { index: true, follow: true },
    alternates: {
        canonical: 'https://www.360degreecare.net/services/nursing'
    },
    other: {
        'geo.region': 'US-NJ',
        'geo.placename': 'Ridgewood'
    }
}

const StaticNursingServicesData = {
    hero: {
        cta: (
            <>
                Contact Us Today <FaArrowRight size={24} className="ml-4" />
            </>
        ),
        description:
            'Skilled clinical care delivered at home with professionalism, compassion, and continuity.',
        introBody:
            'In-home nursing services from 360 Degree Care provide professional medical support for individuals who require skilled clinical care in the comfort of their own homes. Our licensed nurses deliver personalized care plans, ongoing assessments, and hands-on medical support to promote safety, stability, and quality of life.',
        header: 'In-Home Nursing Services in New Jersey',
        img: {
            src: getImgSrc('nursing-hero') ?? '',
            alt: 'in-home nursing services example'
        }
    },
    description: {
        header: 'What is In-Home Nursing?',
        description:
            'In-home nursing services from 360 Degree Care provide professional medical support for individuals who require skilled clinical care in the comfort of their own homes. Our licensed nurses deliver personalized care plans, ongoing assessments, and hands-on medical support to promote safety, stability, and quality of life.'
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
                Icon: 'FaHandshake'
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

export default StaticNursingServicesData
