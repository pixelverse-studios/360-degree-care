'use client'

import { Heart, Shield, Clock, Users, Star, Home } from 'lucide-react'
import AnimatedSection from '../animated-section'

const stats = [
    {
        value: '10+',
        label: 'Years Serving NJ Families',
        icon: Clock,
        accent: 'bg-primary/10 text-primary'
    },
    {
        value: '500+',
        label: 'Families Supported',
        icon: Users,
        accent: 'bg-blue/10 text-blue'
    },
    {
        value: '4.9',
        label: 'Average Client Rating',
        icon: Star,
        accent: 'bg-green/10 text-green'
    },
    {
        value: '24/7',
        label: 'Care Availability',
        icon: Home,
        accent: 'bg-primary/10 text-primary'
    }
]

export default function HomeAboutSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-light via-white to-gray-light">
            <div className="absolute inset-0 opacity-[0.03]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                        backgroundSize: '32px 32px'
                    }}
                />
            </div>

            <AnimatedSection
                animation="zoom"
                className="relative max-w-custom mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 items-stretch"
            >
                <div className="relative flex items-center justify-center p-8 lg:p-12">
                    <div className="absolute top-8 left-8 w-48 h-48 rounded-full bg-primary/5 blur-2xl" />
                    <div className="absolute bottom-12 right-12 w-64 h-64 rounded-full bg-blue/5 blur-3xl" />

                    <div className="relative grid grid-cols-2 gap-4 w-full max-w-md">
                        {stats.map((stat, i) => {
                            const Icon = stat.icon
                            return (
                                <div
                                    key={stat.label}
                                    className={`group relative rounded-2xl bg-white p-6 shadow-sm border border-gray-100
                                        hover:shadow-lg hover:-translate-y-1 transition-all duration-300
                                        ${i === 1 ? 'translate-y-4' : ''}
                                        ${i === 3 ? 'translate-y-4' : ''}`}
                                >
                                    <div
                                        className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${stat.accent} mb-3
                                            group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <p className="text-3xl font-bold text-gray-900 font-headers tracking-tight">
                                        {stat.value}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1 leading-snug">
                                        {stat.label}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="flex flex-col justify-center gap-6 p-8 lg:p-12 lg:pl-0">
                    <div className="flex items-center gap-2 text-primary">
                        <div className="h-px w-8 bg-primary" />
                        <span className="text-sm font-semibold uppercase tracking-widest">
                            About Us
                        </span>
                    </div>

                    <h2 className="text-primary font-bold text-3xl lg:text-4xl font-headers leading-tight">
                        Trusted Home Care
                        <br />
                        <span className="text-blue">Across New Jersey</span>
                    </h2>

                    <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>
                            For over a decade, Haven Home Health has proudly
                            served families across New Jersey with
                            compassionate, dependable home care services. We
                            provide comprehensive{' '}
                            <a
                                href="/services/personal-care/bergen-county"
                                className="text-primary font-medium hover:underline underline-offset-2"
                            >
                                Bergen County personal care
                            </a>{' '}
                            services, including senior home care, companion
                            care, and other personalized solutions.
                        </p>
                        <p>
                            We uphold the highest standards of safety,
                            professionalism, and dignity — delivering attentive,
                            individualized care your loved ones can trust.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-2">
                        {[
                            {
                                icon: Shield,
                                text: 'Licensed & Certified'
                            },
                            {
                                icon: Heart,
                                text: 'Personalized Plans'
                            },
                            {
                                icon: Star,
                                text: 'Quality Assured'
                            }
                        ].map(item => {
                            const Icon = item.icon
                            return (
                                <span
                                    key={item.text}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-sm font-medium text-gray-700 border border-primary/10"
                                >
                                    <Icon className="w-4 h-4 text-primary" />
                                    {item.text}
                                </span>
                            )
                        })}
                    </div>
                </div>
            </AnimatedSection>
        </section>
    )
}
