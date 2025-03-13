// import { motion } from 'framer-motion' // Note: You would need to install framer-motion
import { Star, Users, Calendar } from 'lucide-react'

const iconClass = 'text-primary h-6 w-6'

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
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-gray-600 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 relative z-10">
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
                            <img
                                src="/icons/CHAPLogo.svg"
                                alt="CHAP Badge"
                                className="h-[8rem] w-[8rem] md:h-[6rem] md:w-[6rem] mx-auto mb-2"
                            />
                            <p className="text-gray-700 text-sm font-medium">
                                Community Health Accreditation Program
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
