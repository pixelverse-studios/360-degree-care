import React, { ReactNode } from 'react'

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
        answer: '360 Degree Care professionals are carefully interviewed, screened, and background checked according to state laws prior to employment. In addition to providing training and supervision, we ensure a thoughtful match between our professionals and clients.'
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
                <span className="text-primary font-semibold">
                    360 Degree Care
                </span>{' '}
                has decades of experience caring for individuals with a variety
                of conditions and needs across home healthcare and hospice. Find
                our specific care coverages on our service pages.
            </>
        )
    }
]

export const HOSPICE_FAQS: FAQ[] = [
    {
        question: 'What is hospice care?',
        answer: (
            <>
                Hospice is a type and philosophy of care that focuses on the{' '}
                <a href="/palliative-care" className="faqEmbed">
                    palliative care
                </a>{' '}
                of a chronically ill, terminally ill, or seriously ill patient's
                pain and symptoms while attending to their emotional and
                spiritual needs. It is an integrated program of medical and
                psychosocial care, ensuring that the final stages of life are
                lived with the greatest degree of comfort and dignity.
            </>
        )
    },
    {
        question: 'Who pays for hospice care?',
        answer: (
            <>
                Both public and private insurance most often pay for part or all
                of hospice care, though plans vary. Read{' '}
                <a href="/how-to-pay" className="faqEmbed">
                    our How to Pay guide
                </a>{' '}
                for more information about coverage and payment options.
            </>
        )
    }
]
