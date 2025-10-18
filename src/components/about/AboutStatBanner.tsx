// import { motion } from 'framer-motion' // Note: You would need to install framer-motion
import Image from 'next/image'
import { Star, Users, Calendar } from 'lucide-react'
import AnimatedSection from '../animated-section'
import { getImgSrc } from '@/lib/images'

const iconClass = 'text-primary h-6 w-6'

const DOT_POSITIONS = [
    'top-[4%] left-[8%]',
    'top-[12%] left-[24%]',
    'top-[8%] left-[52%]',
    'top-[18%] left-[72%]',
    'top-[26%] left-[15%]',
    'top-[32%] left-[40%]',
    'top-[28%] left-[65%]',
    'top-[34%] left-[85%]',
    'top-[42%] left-[10%]',
    'top-[48%] left-[32%]',
    'top-[52%] left-[58%]',
    'top-[46%] left-[80%]',
    'top-[60%] left-[20%]',
    'top-[66%] left-[45%]',
    'top-[62%] left-[70%]',
    'top-[68%] left-[88%]',
    'top-[78%] left-[12%]',
    'top-[82%] left-[38%]',
    'top-[76%] left-[62%]',
    'top-[86%] left-[82%]',
    'top-[14%] left-[5%]',
    'top-[22%] left-[30%]',
    'top-[18%] left-[54%]',
    'top-[24%] left-[78%]',
    'top-[72%] left-[28%]'
]

export default function AboutStatBanner() {
    const stats = [
        {
            value: '80%',
            label: 'Caregiver Retention Rate',
            subtext: '(vs 13% industry avg)',
            icon: <Users className={iconClass} />
        },
        {
            value: '10+',
            label: 'Years of Service',
            icon: <Calendar className={iconClass} />
        },
        {
            value: '4.8',
            label: 'Google Rating',
            subtext: '(28 ratings)',
            icon: <Star className={iconClass} />
        }
    ]

    return (
        <section className="relative py-16 bg-gradient-to-r from-gray-900 to-primary">
            {/* Decorative dots */}
            <div className="absolute inset-0 opacity-10 z-0">
                {Array.from({ length: 50 }).map((_, i) => (
                    <div
                        key={i}
                        className={`absolute w-2 h-2 bg-gray-600 rounded-full ${
                            DOT_POSITIONS[i % DOT_POSITIONS.length]
                        }`}
                    />
                ))}
            </div>

            <AnimatedSection
                animation="zoom"
                className="max-w-6xl mx-auto px-6"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 relative z-10">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-xl p-6 text-center"
                        >
                            <div className="mb-4 text-3xl bg-primary-muted rounded-full h-fit w-fit p-2 mx-auto">
                                {stat.icon}
                            </div>
                            <h3 className="text-4xl font-bold text-primary-dark mb-2">
                                {stat.value}
                            </h3>
                            <p className="text-white/90 font-medium">
                                {stat.label}
                                {stat.subtext && (
                                    <span className="block text-sm mt-1 font-normal">
                                        {stat.subtext}
                                    </span>
                                )}
                            </p>
                        </div>
                    ))}

                    <div className="bg-white rounded-xl p-6 flex items-center justify-center shadow-lg">
                        <div className="text-center">
                            <a
                                href="https://chapinc.org/about/"
                                target="_blank"
                            >
                                {getImgSrc('CHAPLogo') ? (
                                    <Image
                                        src={getImgSrc('CHAPLogo') as string}
                                        alt="CHAP Badge"
                                        className="h-[8rem] w-[8rem] md:h-[6rem] md:w-[6rem] mx-auto mb-2"
                                        width={128}
                                        height={128}
                                        sizes="128px"
                                    />
                                ) : null}
                            </a>
                            <p className="text-gray-700 text-sm font-medium">
                                Community Health Accreditation Program
                            </p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    )
}
