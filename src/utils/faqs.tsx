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
