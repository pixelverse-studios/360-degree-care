import { ReactNode } from 'react'
import { CompanyName } from '@/components/Logo'

export interface FAQ {
    question: string
    answer: ReactNode
}

export const HOME_FAQS: FAQ[] = [
    {
        question: 'Who is providing care?',
        answer: 'There are paid healthcare professionals who are state-licensed and work per your doctor’s orders. These include nurses, physical therapists, and social workers. The second type includes aides, homemakers, and companions who help with daily activities so you or your loved one can stay at home independently for as long as possible.'
    },
    {
        question: 'What’s your employee screening process?',
        answer: (
            <>
                <CompanyName /> professionals are carefully interviewed,
                screened, and background checked according to state laws prior
                to employment. In addition to providing training and
                supervision, we ensure a thoughtful match between our
                professionals and clients.
            </>
        )
    },
    {
        question: 'What if I don’t know what kind of care I need?',
        answer: 'In addition to conducting our evaluation of your or your loved one’s health and home environment, our care professionals will contact existing physicians, therapists, and other healthcare professionals on your behalf to determine the plan of care needed.'
    },
    {
        question: 'What does an Interim HealthCare evaluation look like?',
        answer: 'After you reach out to your local Interim HealthCare office, we’ll give you a time and date to expect a visit from one of our care professionals. The first time that one of our care professionals comes to your home, you should expect a visit of more than an hour. We’ll chat with you, complete a physical, learn about your day-to-day challenges and needs and evaluate your home.'
    },
    {
        question: 'How much does home care cost?',
        answer: 'Every person is different, especially when it comes to health and what type of home care is needed. The exact cost of care needs to be based on listening to you or your loved one, your family and your doctor, and observing your individual situation. We recommend an initial in-home care evaluation for each client. The local Interim HealthCare office does these evaluations at no charge. Based on the in-home assessment, a service plan is then developed to best meet the needs of the individual. It can include minimal assistance up to around-the-clock assistance. Charges are based on quality care and individual needs. Please give our Interim HealthCare local office a call to schedule an in-home evaluation or request more information.  '
    },
    {
        question: 'How do I pay for home care?',
        answer: (
            <>
                Just as everyone’s needs for care are different, we know
                financial situations are deeply personal. That’s why we accept
                <a href="/how-to-pay">multiple ways to pay</a> so that you have
                more choices in financing home healthcare.
            </>
        )
    },
    {
        question: 'Do you take health insurance?',
        answer: 'Yes! We work with various public and private insurances, including Medicare.'
    },
    {
        question: 'What conditions do you care for?',
        answer: (
            <>
                <CompanyName /> has decades of experience caring for individuals
                with a variety of conditions and needs across home healthcare
                and hospice. Find our specific care coverages on our service
                pages.
            </>
        )
    }
]

export const PERSONAL_CARE_FAQS: FAQ[] = [
    {
        question: 'Who can benefit from personal care services?',
        answer: 'Individuals of all ages who need support with daily activities.'
    },
    {
        question: 'How much do personal care services cost?',
        answer: (
            <>
                Costs vary based on needs. <CompanyName /> offers free
                consultations.
            </>
        )
    },
    {
        question: 'How do I find personal care services near me?',
        answer: (
            <>
                Contact <CompanyName /> for local service connections.
            </>
        )
    },
    {
        question: "Do I need a doctor's referral?",
        answer: 'Typically not required, but consulting your doctor can help determine suitability.'
    },
    {
        question: 'What are the qualifications of personal care providers?',
        answer: 'Our caregivers undergo screening, background CircleChecks, and training.'
    }
]

export const STAFFING_FAQS: FAQ[] = [
    {
        question: "What's your employee screening process?",
        answer: 'We conduct thorough background checks, license verifications, and skill assessments for every candidate.'
    },
    {
        question: 'Can I hire your staff for a single day?',
        answer: "Absolutely. We tailor our service to your specific needs, whether it's one day, one week, or ongoing placements."
    },
    {
        question: 'What kinds of roles can you provide staff for?',
        answer: 'We can fill positions ranging from nurses and therapists to medical administrative staff, billing, and more.'
    },
    {
        question: 'What kinds of organizations do you work with?',
        answer: 'We work with a wide variety of facilities, including clinics, hospitals, schools, and rehabilitation centers.'
    }
]
