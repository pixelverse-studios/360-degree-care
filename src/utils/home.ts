import {
    FaClock,
    FaUserNurse,
    FaHouseChimneyMedical,
    FaHandHoldingHeart,
    FaHouseChimneyUser,
    FaKitMedical
} from 'react-icons/fa6'
import { IconType } from 'react-icons'

interface CardProps {
    icon: IconType
    title: string
    description: string
    bgColor: string
}

export const HIGHLIGHT_CARDS: CardProps[] = [
    {
        icon: FaClock,
        title: '24/7 Care Available',
        description:
            'Round-the-clock support and assistance whenever you need it, providing peace of mind.',
        bgColor: 'bg-white'
    },
    {
        icon: FaUserNurse,
        title: 'Certified Caregivers',
        description:
            'Our team consists of highly trained and certified healthcare professionals.',
        bgColor: 'bg-white'
    },
    {
        icon: FaHouseChimneyMedical,
        title: 'Personalized Care',
        description:
            'Customized care plans tailored to meet your loved ones’ needs and preferences.',
        bgColor: 'bg-white'
    }
]

export const SERVICE_CARDS: CardProps[] = [
    {
        icon: FaHandHoldingHeart,
        title: 'Home Health Care',
        description:
            '360 Degree Care provides professional home health care services including skilled nursing, therapy, and personal care. Tailored to support your recovery, enhance overall well0being, and maintain indepenence, all while receiving comfort and care you deserve in your own home.',
        bgColor: 'bg-[#fff]'
    },
    {
        icon: FaHouseChimneyUser,
        title: 'Live-In Care',
        description:
            '360 Degree Care provides exceptional live-in home care. Offering personalized, round-the-clock support to ensure your loved ones receive the comfort, safety, and companionship they deserve, all in the comfort of their own home.',
        bgColor: 'bg-[#fff]'
    },
    {
        icon: FaKitMedical,
        title: 'Medical Staffing',
        description:
            "Looking for dependable and skilled medical professionals to meet your staffing needs? 360 Degree Care specializes in connecting healthcare facilities with experienced, qualified staff, ensuring exceptional patient care and reliable support. Our commitment to excellence means you'll always have the right professionals in place when you need them most.",
        bgColor: 'bg-[#fff]'
    }
]
