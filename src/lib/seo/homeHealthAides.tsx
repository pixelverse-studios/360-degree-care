import type { Metadata } from 'next'
import { FaArrowRight } from 'react-icons/fa6'
import { getImgSrc } from '../images'

export const homeHealthAidesMetadata: Metadata = {
    title: 'Home Health Aide Services in New Jersey | 360 Degree Care',
    description:
        'Certified home health aides in New Jersey providing hands-on support with daily living, personal care, mobility, and in-home assistance.',
    keywords:
        'home health aide, certified home health aide, daily living support, hygiene assistance, companionship, New Jersey',
    openGraph: {
        type: 'website',
        url: 'https://www.360degreecare.net/services/home-health-aides',
        title: 'Home Health Aide Services in New Jersey | 360 Degree Care',
        description:
            'Certified home health aides in New Jersey providing hands-on support with daily living, personal care, mobility, and in-home assistance.',
        images: [
            {
                url: 'https://www.360degreecare.net/assets/home-health-aides-image.jpg'
            }
        ],
        locale: 'en_US',
        siteName: '360 Degree Care'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Home Health Aide Services in New Jersey | 360 Degree Care',
        description:
            'Certified home health aides in New Jersey providing hands-on support with daily living, personal care, mobility, and in-home assistance.',
        images: [
            'https://www.360degreecare.net/assets/home-health-aides-image.jpg'
        ]
    },
    robots: { index: true, follow: true },
    alternates: {
        canonical: 'https://www.360degreecare.net/services/home-health-aides'
    },
    other: {
        'geo.region': 'US-NJ',
        'geo.placename': 'Ridgewood'
    }
}

const StaticHomeHealthAidesData = {
    hero: {
        cta: (
            <>
                Get In Touch <FaArrowRight size={24} className="ml-4" />
            </>
        ),
        description:
            'Certified aides providing reliable, compassionate in-home support for daily living.',
        introBody:
            'Home health aide services from 360 Degree Care support seniors and individuals who need assistance with daily activities while remaining safely at home. Our certified aides help with personal care, mobility support, routine tasks, and companionship, always with respect, professionalism, and attention to individual needs.',
        header: 'Home Health Aide Services in New Jersey',
        img: {
            src: getImgSrc('home-aides-hero') ?? '',
            alt: 'home health aide services example'
        }
    },
    description: {
        header: 'What is Home Health Aide Support?',
        description:
            'Home health aide services from 360 Degree Care support seniors and individuals who need assistance with daily activities while remaining safely at home. Our certified aides help with personal care, mobility support, routine tasks, and companionship, always with respect, professionalism, and attention to individual needs.'
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
                description: 'Nutritious meal preparation and dietary support',
                Icon: 'FaUtensils'
            },
            {
                title: 'Medication reminders',
                description: 'Timely prompts for taking prescribed medications',
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
                description: 'Coordination of medical visits and activities',
                Icon: 'FaCalendarDays'
            },
            {
                title: 'Emotional support',
                description: 'Compassionate presence during daily challenges',
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

export default StaticHomeHealthAidesData
