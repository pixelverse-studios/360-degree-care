import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
    title: 'Frequently Asked Questions | 360 Degree Care',
    description:
        'Find answers to common questions about home healthcare services, personal care, nurse staffing, and payment options in New Jersey.',
    alternates: {
        canonical: '/faq'
    },
    openGraph: {
        title: 'Frequently Asked Questions | 360 Degree Care',
        description:
            'Find answers to common questions about home healthcare services, personal care, nurse staffing, and payment options in New Jersey.',
        url: '/faq'
    }
}

// FAQ Schema with plain text answers for SEO
const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        // Home Healthcare Questions
        {
            '@type': 'Question',
            name: 'Who is providing care?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: "There are paid healthcare professionals who are state-licensed and work per your doctor's orders. These include nurses, physical therapists, and social workers. The second type includes aides, homemakers, and companions who help with daily activities so you or your loved one can stay at home independently for as long as possible."
            }
        },
        {
            '@type': 'Question',
            name: "What's your employee screening process?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: '360 Degree Care professionals are carefully interviewed, screened, and background checked according to state laws prior to employment. In addition to providing training and supervision, we ensure a thoughtful match between our professionals and clients.'
            }
        },
        {
            '@type': 'Question',
            name: "What if I don't know what kind of care I need?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "In addition to conducting our evaluation of your or your loved one's health and home environment, our care professionals will contact existing physicians, therapists, and other healthcare professionals on your behalf to determine the plan of care needed."
            }
        },
        {
            '@type': 'Question',
            name: 'What does an evaluation look like?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: "After you reach out to 360 Degree Care, we'll give you a time and date to expect a visit from one of our care professionals. The first time that one of our care professionals comes to your home, you should expect a visit of more than an hour. We'll chat with you, complete a physical, learn about your day-to-day challenges and needs and evaluate your home."
            }
        },
        {
            '@type': 'Question',
            name: 'How much does home care cost?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Every person is different, especially when it comes to health and what type of home care is needed. The exact cost of care needs to be based on listening to you or your loved one, your family and your doctor, and observing your individual situation. We recommend an initial in-home care evaluation for each client. The local 360 Degree Care office does these evaluations at no charge.'
            }
        },
        {
            '@type': 'Question',
            name: 'How do I pay for home care?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Just as everyone's needs for care are different, we know financial situations are deeply personal. That's why we accept multiple ways to pay so that you have more choices in financing home healthcare."
            }
        },
        // Personal Care Questions
        {
            '@type': 'Question',
            name: 'Who can benefit from personal care services?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Individuals of all ages who need support with daily activities.'
            }
        },
        {
            '@type': 'Question',
            name: "Do I need a doctor's referral for personal care?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Typically not required, but consulting your doctor can help determine suitability.'
            }
        },
        {
            '@type': 'Question',
            name: 'What are the qualifications of personal care providers?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Our caregivers undergo screening, background checks, drug screenings, and training.'
            }
        },
        // Staffing Questions
        {
            '@type': 'Question',
            name: 'Can I hire your staff for a single day?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Absolutely. We tailor our service to your specific needs, whether it's one day, one week, or ongoing placements."
            }
        },
        {
            '@type': 'Question',
            name: 'What kinds of roles can you provide staff for?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'We can fill positions ranging from nurses and therapists to medical administrative staff, billing, and more.'
            }
        },
        // Payment Questions
        {
            '@type': 'Question',
            name: 'Does Medicare cover Private Client Homecare?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Private Client Homecare is not typically covered by Medicare, although many people are covered for a very limited amount of time upon discharge from a hospital. Your hospital social worker should coordinate that as they make your discharge plan.'
            }
        },
        {
            '@type': 'Question',
            name: 'Is there funding available for veterans?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Yes, if you or your loved one served in the military, you may qualify for home care funding as part of Veteran's Services."
            }
        },
        {
            '@type': 'Question',
            name: 'What payment options are available for home care services?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'There are three main payment options: Medicare & Other Public Third-Party Payers, Managed Care & Private Insurance, and Self-Pay.'
            }
        }
    ]
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {children}
        </>
    )
}
