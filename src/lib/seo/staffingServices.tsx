import type { Metadata } from 'next'
import { FaArrowRight } from 'react-icons/fa6'
import { getImgSrc } from '../images'

export const staffingServicesMetadata: Metadata = {
    title: 'Medical Staffing Solutions in New Jersey | 360 Degree Care',
    description:
        'Medical staffing solutions in New Jersey, providing credentialed nurses and healthcare professionals for hospitals, rehab centers, and care facilities.',
    keywords:
        'medical staffing, healthcare staffing, nursing staff, RN staffing, LPN staffing, CNA staffing, New Jersey',
    openGraph: {
        type: 'website',
        url: 'https://www.360degreecare.net/services/staffing',
        title: 'Medical Staffing Solutions in New Jersey | 360 Degree Care',
        description:
            'Medical staffing solutions in New Jersey, providing credentialed nurses and healthcare professionals for hospitals, rehab centers, and care facilities.',
        images: [
            {
                url: 'https://www.360degreecare.net/assets/staffing-services-image.jpg'
            }
        ],
        locale: 'en_US',
        siteName: '360 Degree Care'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Medical Staffing Solutions in New Jersey | 360 Degree Care',
        description:
            'Medical staffing solutions in New Jersey, providing credentialed nurses and healthcare professionals for hospitals, rehab centers, and care facilities.',
        images: [
            'https://www.360degreecare.net/assets/staffing-services-image.jpg'
        ]
    },
    robots: { index: true, follow: true },
    alternates: {
        canonical: 'https://www.360degreecare.net/services/staffing'
    },
    other: {
        'geo.region': 'US-NJ',
        'geo.placename': 'Ridgewood'
    }
}

const StaticStaffingServicesData = {
    hero: {
        cta: (
            <>
                Join the Team <FaArrowRight size={24} className="ml-4" />
            </>
        ),
        description:
            'Credentialed healthcare professionals to support facilities with short- and long-term staffing needs.',
        introBody:
            '360 Degree Care provides medical staffing solutions for healthcare facilities across New Jersey, including hospitals, rehabilitation centers, and long-term care environments. Our staffing services connect facilities with qualified, credentialed professionals to ensure consistent, reliable patient care.',
        header: 'Medical Staffing Solutions in New Jersey',
        img: {
            src: getImgSrc('staffing_hero') ?? '',
            alt: 'medical staffing services example'
        }
    },
    description: {
        header: 'What is Medical Staffing?',
        description:
            '360 Degree Care provides medical staffing solutions for healthcare facilities across New Jersey, including hospitals, rehabilitation centers, and long-term care environments. Our staffing services connect facilities with qualified, credentialed professionals to ensure consistent, reliable patient care.'
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

export default StaticStaffingServicesData
