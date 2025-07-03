import { ReactNode } from 'react'
import { CompanyName } from '@/components/Logo'
import { Illnesses } from '@/components/IllnessCoverage'

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
        question: 'What does an evaluation look like?',
        answer: (
            <>
                After you reach out to <CompanyName />, we’ll give you a time
                and date to expect a visit from one of our care professionals.
                The first time that one of our care professionals comes to your
                home, you should expect a visit of more than an hour. We’ll chat
                with you, complete a physical, learn about your day-to-day
                challenges and needs and evaluate your home.
            </>
        )
    },
    {
        question: 'How much does home care cost?',
        answer: (
            <>
                Every person is different, especially when it comes to health
                and what type of home care is needed. The exact cost of care
                needs to be based on listening to you or your loved one, your
                family and your doctor, and observing your individual situation.
                We recommend an initial in-home care evaluation for each client.
                The local <CompanyName /> office does these evaluations at no
                charge. Based on the in-home assessment, a service plan is then
                developed to best meet the needs of the individual. It can
                include minimal assistance up to around-the-clock assistance.
                Charges are based on quality care and individual needs. Please
                give our <CompanyName /> local office a call to schedule an
                in-home evaluation or request more information.
            </>
        )
    },
    {
        question: 'How do I pay for home care?',
        answer: (
            <>
                Just as everyone’s needs for care are different, we know
                financial situations are deeply personal. That’s why we accept{' '}
                <a
                    href="/how-to-pay"
                    className="text-primary font-semibold hover:underline"
                >
                    multiple ways to pay
                </a>{' '}
                so that you have more choices in financing home healthcare.
            </>
        )
    },
    {
        question: 'What conditions do you care for?',
        answer: (
            <>
                <CompanyName /> has decades of experience caring for individuals
                with a variety of conditions and needs across home healthcare
                and hospice. Find our specific care coverages on our service
                pages.
                <br />
                <Illnesses />
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
        answer: 'Our caregivers undergo screening, background checks, drug screenings, and training.'
    }
]

export const ELDER_CARE_CONSULTING_FAQS: FAQ[] = [
    {
        question: 'Who benefits from consulting?',
        answer: 'Families unsure of next steps, especially at a distance.'
    },
    {
        question: 'Is this the same as care management?',
        answer: 'No — this focuses on guidance, not ongoing coordination.'
    },
    {
        question: 'What happens in a consult?',
        answer: 'We review needs and map options.'
    },
    {
        question: 'How long does it take?',
        answer: 'Usually 1–2 sessions yield a clear care roadmap.'
    }
]

export const STAFFING_SERVICES_FAQS: FAQ[] = [
    {
        question: 'What roles do you staff?',
        answer: 'Nurses, aides, therapists, and administrative staff.'
    },
    {
        question: 'Do you handle emergencies?',
        answer: 'Yes, short-term and last-minute coverage available.'
    },
    {
        question: 'Can I test staff before hiring?',
        answer: 'We offer temp-to-perm flexibility.'
    },
    {
        question: 'Who do you work with?',
        answer: 'Facilities across NJ — hospitals, SNFs, and more.'
    }
]

export const STAFFING_FAQS: FAQ[] = [
    {
        question: "What's your employee screening process?",
        answer: 'We conduct thorough background checks, license verifications, regular drug screening, and skill assessments for every candidate.'
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

export const HOME_HEALTH_AIDES_FAQS: FAQ[] = [
    {
        question: 'What hours do you offer?',
        answer: 'From 2-hour shifts to 24/7 live-in support.'
    },
    {
        question: 'What training do your aides have?',
        answer: 'All are state-certified and supervised by RNs.'
    },
    {
        question: 'Can we customize services?',
        answer: 'Absolutely — all plans are tailored.'
    },
    {
        question: 'What is Concierge-Level™?',
        answer: "It's our elevated standard for comfort and personalization."
    }
]

export const NURSING_SERVICES_FAQS: FAQ[] = [
    {
        question: 'What conditions do you support?',
        answer: 'Post-surgical, chronic illness, and aging in place needs.'
    },
    {
        question: 'Do you coordinate with doctors?',
        answer: "Yes — our nurses update and follow your provider's plan."
    },
    {
        question: 'Is this covered by insurance?',
        answer: "Often — we'll help you check."
    },
    {
        question: 'What equipment do you bring?',
        answer: 'Varies by case — includes wound kits, PPE, monitoring tools.'
    }
]

export const COMPANION_CARE_FAQS: FAQ[] = [
    {
        question: 'Is this medical care?',
        answer: 'No — this is non-medical companionship and daily support.'
    },
    {
        question: 'Can we request the same caregiver each visit?',
        answer: 'We do our best to maintain continuity.'
    },
    {
        question: 'How often can we schedule?',
        answer: 'From once a week to daily — fully flexible.'
    },
    {
        question: "What's the difference between this and personal care?",
        answer: 'Companion care is more social, not physical support-focused.'
    }
]

export const PAYMENT_FAQS: FAQ[] = [
    {
        question:
            'How is Private Client Service billed and what payment methods are accepted?',
        answer: 'Private Client Service is billed at the end of each week of service and payment is accepted by either an ACH transfer or a credit card charge. For clients with Long Term care insurance coverage we will submit all necessary documents to your carrier and you will be reimbursed directly.'
    },
    {
        question: 'Does Medicare cover Private Client Homecare?',
        answer: 'Private Client Homecare is not typically covered by Medicare, although many people are covered for a very limited amount of time upon discharge from a hospital. Your hospital social worker should coordinate that as they make your discharge plan.'
    },
    {
        question: 'Can Medicaid be used for Private Client Homecare?',
        answer: 'For clients on Medicaid we can work with you to get a "Single Patient Exception" which approves us as your provider.'
    },
    {
        question: 'How does payment work for clients with Veterans Benefits?',
        answer: 'For clients who have approved coverage through their Veterans Benefits we will submit all the appropriate paperwork to the VA.'
    },
    {
        question: 'What payment options are available for home care services?',
        answer: 'There are three main payment options: Medicare & Other Public Third-Party Payers, Managed Care & Private Insurance, and Self-Pay.'
    },
    {
        question:
            'What additional services can physicians order when Medicare conditions are met?',
        answer: 'When the Medicare conditions are met, physicians may also order home health aide services or medical social worker services.'
    },
    {
        question: 'Is there funding available for veterans?',
        answer: "Yes, if you or your loved one served in the military, you may qualify for home care funding as part of Veteran's Services."
    },
    {
        question: 'What is the Self-Pay option?',
        answer: 'Self-Pay involves paying for home care out of pocket from your savings or that of your loved one, depending on the services provided, insurance, and financial capabilities.'
    },
    {
        question: 'How can someone determine if Self-Pay is right for them?',
        answer: 'To discuss if a self-pay option works for you, you should contact your local franchise.'
    },
    {
        question: 'What types of private payment options are accepted?',
        answer: 'A number of private insurance plans and managed care plans are accepted across all franchises to help cover the cost of in-home care.'
    }
]
