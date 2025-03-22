import TestimonialCards from './TestimonialCards'

import AnimatedSection from '../animated-section'

const REVIEWS = [
    {
        name: 'Lubna Salehe',
        relation: 'Employee',
        description:
            "I am a care giver ..i work with this company. Excellent treatment and respect for the person's ability to work and they pay on time and keep in touch to make sure everything is going well. If u need a home care to ur parents or anyone from ur family no place better than a 360 Degree Care",
        createdAt: 'January 15 2025'
    },
    {
        name: 'Debbie Viar',
        relation: 'Daughter',
        description:
            '360 Degree Care staff worked hard to arrange for the exact care my father needed. As my father’s dementia evolved, his caregivers adapted accordingly. They were always patient, kind and attentive. The peace of mind they provided to our family cannot be measured.',
        createdAt: 'February 6 2022'
    },
    {
        name: 'Diane Lynch',
        relation: 'Wife',
        description:
            'I was very pleased with the care my husband recently received from 360 Degree Care. I called in the afternoon of a weekend day requesting someone to help care for my husband overnight while he was hospitalized. They were able to find a very kind and caring woman who was a companion to him until I arrived in the morning. I am very grateful for that.',
        createdAt: 'January 8 2024'
    }
]

export default function HomeTestimonials() {
    return (
        <section className="py-8 bg-secondary">
            <AnimatedSection
                animation="zoom"
                className="max-w-custom mx-auto p-6"
            >
                <div className="text-center text-white-muted mb-6">
                    <h2 className="font-bold text-2xl mb-3 text-white-muted">
                        What Families Are Saying
                    </h2>
                    <p>
                        Read what families have to say about our care services
                        and dedicated team members
                    </p>
                </div>
                <TestimonialCards testimonials={REVIEWS} />
            </AnimatedSection>
        </section>
    )
}
