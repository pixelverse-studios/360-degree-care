import { ReactNode } from 'react'

export interface FAQ {
    question: string
    answer: ReactNode
    /** Plain text version of answer for JSON-LD schema (required when answer contains JSX) */
    schemaAnswer?: string
}

export const HOME_FAQS: FAQ[] = [
    {
        question: 'Who is providing care?',
        answer: 'Care is provided by trained and screened caregivers such as home health aides, companions and nurses, depending on the level of support needed. We match caregivers based on skills, experience and your loved one needs.'
    },
    {
        question: "What's your employee screening process?",
        answer: 'We follow a screening process that can include interviews, background checks and verification of licenses or certifications where required. We look for both professional qualifications and the right attitude for in home care.'
    },
    {
        question: "What if I don't know what kind of care I need?",
        answer: 'You do not have to have everything figured out before you call. We talk through your situation, ask questions about daily needs and safety, and then recommend options that make sense.'
    },
    {
        question: 'What does an evaluation look like?',
        answer: 'An evaluation usually includes a conversation about health history, current challenges, medications and daily routines. We may visit the home, assess safety and then propose a plan that matches the level of care needed.'
    },
    {
        question: 'How much does home care cost?',
        answer: 'Costs vary based on the type of service, hours per week and level of support. After we understand your needs, we explain pricing clearly before you make any decisions.'
    },
    {
        question: 'How do I pay for home care?',
        answer: 'Home care can be paid for through private pay, certain insurance plans, veterans programs or other funding sources where available. We review your situation and talk through payment options.'
    },
    {
        question: 'What conditions do you care for?',
        answer: 'We support clients with a range of needs, from general aging and mobility changes to chronic illnesses and recovery after surgery. We will discuss your specific condition and whether our services are a good fit.'
    }
]

export const PERSONAL_CARE_FAQS: FAQ[] = [
    {
        question: 'Who can benefit from personal care services?',
        answer: 'Personal care is a good fit for older adults, people with disabilities or anyone recovering from illness or surgery who needs help with daily routines. That can include bathing, dressing, grooming, getting around the home or preparing meals. The goal is to make day to day life safer and more comfortable while someone continues to live at home.'
    },
    {
        question: 'How much do personal care services cost?',
        answer: 'Costs depend on how many hours of support you need, how often visits happen and the level of help required. We start by talking through your situation, recommend a schedule and then provide clear pricing before any care begins.'
    },
    {
        question: 'How do I find personal care services near me?',
        answer: 'You can contact us directly and we will walk you through options. 360 Degree Care provides personal care services across New Jersey, including Bergen, Monmouth, Passaic and Ocean counties, and we can help you understand what support is available in your area.'
    },
    {
        question: "Do I need a doctor's referral?",
        answer: 'In many cases you do not need a doctor referral for personal care. Families often reach out to us first. If a referral is required for a specific program or funding source, we will let you know and help you understand the next steps.'
    },
    {
        question: 'What are the qualifications of personal care providers?',
        answer: 'Our personal care providers are trained caregivers who follow agency standards for safety, professionalism and respect. They are supported by our care team, receive ongoing guidance and are matched to clients based on needs, personality and schedule.'
    }
]

export const ELDER_CARE_CONSULTING_FAQS: FAQ[] = [
    {
        question: 'Who benefits from consulting?',
        answer: 'Elder care consulting is helpful for families who are unsure what type of support a loved one needs, feel overwhelmed by options or live far away and need a clear plan. It is also useful when health needs are changing and you want guidance before making big decisions.'
    },
    {
        question: 'Is this the same as care management?',
        answer: 'Consulting focuses on advice, planning and clear next steps. Care management usually includes ongoing coordination and oversight of services. We can help you decide whether a one time consult or ongoing support makes the most sense.'
    },
    {
        question: 'What happens in a consult?',
        answer: 'During a consult we learn about your loved one health, daily routine, safety concerns and goals. We review options, answer questions and provide recommendations so you leave with a clearer plan and action steps.'
    },
    {
        question: 'How long does it take?',
        answer: 'The length of a consult depends on the situation. Many families complete an initial consult in one session, and some choose follow up conversations as needs change. We will explain what to expect when you schedule.'
    }
]

export const STAFFING_SERVICES_FAQS: FAQ[] = [
    {
        question: 'What roles do you staff?',
        answer: 'We staff a range of healthcare roles including nurses, aides, therapists and support staff. Specific roles can be discussed based on your facility needs and the types of shifts you are trying to fill.'
    },
    {
        question: 'Do you handle emergencies?',
        answer: 'Yes. We can assist with urgent staffing needs when possible, especially for unexpected call outs, census changes or short term gaps in coverage.'
    },
    {
        question: 'Can I test staff before hiring?',
        answer: 'Many facilities treat initial placements as a way to evaluate fit. If a long term arrangement is being considered, we can discuss options for trying staff on a temporary basis before a longer commitment.'
    },
    {
        question: 'Who do you work with?',
        answer: 'We work with hospitals, rehab centers, long term care facilities, assisted living communities and other healthcare organizations that need reliable, credentialed staff.'
    }
]

export const STAFFING_FAQS: FAQ[] = [
    {
        question: "What's your employee screening process?",
        answer: 'For staffing, we screen candidates through interviews, background checks and license or certification verification where required. We look for both clinical competence and reliability.'
    },
    {
        question: 'Can I hire your staff for a single day?',
        answer: 'In many cases, we can help with short term or single day coverage if staff are available. We recommend contacting us as early as possible to discuss scheduling.'
    },
    {
        question: 'What kinds of roles can you provide staff for?',
        answer: 'We can staff a variety of healthcare roles such as nurses, aides and other support staff. The exact roles depend on your facility type and needs.'
    },
    {
        question: 'What kinds of organizations do you work with?',
        answer: 'We work with healthcare organizations such as hospitals, rehab centers, long term care facilities and other providers that need additional clinical or support staff.'
    }
]

export const HOME_HEALTH_AIDES_FAQS: FAQ[] = [
    {
        question: 'What hours do you offer?',
        answer: 'We offer flexible scheduling that can range from a few hours per day to extended shifts and live in support. We work with you to build a schedule that fits your loved one needs and your family routines.'
    },
    {
        question: 'What training do your aides have?',
        answer: 'Our home health aides are state certified and receive training in personal care, safety, communication and daily support. Their work is overseen by nurses to help maintain quality and continuity of care.'
    },
    {
        question: 'Can we customize services?',
        answer: 'Yes. Every care plan is customized. We start with an assessment, talk through your goals and daily routines, and then create a plan that can be adjusted as needs change.'
    },
    {
        question: 'What is Concierge-Level?',
        answer: 'Concierge Level care means highly personalized attention, responsive communication and a higher standard of service. We focus on both day to day tasks and the overall experience, so families feel supported, informed and cared for.'
    }
]

export const NURSING_SERVICES_FAQS: FAQ[] = [
    {
        question: 'What conditions do you support?',
        answer: 'Our nurses support a range of conditions, including recovery after surgery, chronic illnesses, complex wounds and ongoing medical needs that require skilled oversight. We will talk through your specific diagnosis and goals before care begins.'
    },
    {
        question: 'Do you coordinate with doctors?',
        answer: 'Yes. We coordinate with your physician and healthcare team so that the plan of care at home follows medical orders. We keep communication open so changes in condition or treatment are shared promptly.'
    },
    {
        question: 'Is this covered by insurance?',
        answer: 'Coverage depends on your insurance, the type of nursing service and the reason care is needed. We can review your situation, explain what may be covered and outline any private pay options.'
    },
    {
        question: 'What equipment do you bring?',
        answer: 'Nurses bring the supplies they need for the services they provide, such as dressings, basic wound care materials or injection supplies when appropriate. For larger equipment, like walkers or hospital beds, we can help coordinate with your doctor or supplier.'
    }
]

export const COMPANION_CARE_FAQS: FAQ[] = [
    {
        question: 'Is this medical care?',
        answer: 'Companion care is non medical support. It focuses on social connection, supervision and light help with daily activities rather than clinical or hands on personal care tasks.'
    },
    {
        question: 'Can we request the same caregiver each visit?',
        answer: 'Whenever possible, we aim to provide consistent caregivers so your loved one can build a relationship with someone they know and trust. We will talk through your schedule and work to maintain continuity.'
    },
    {
        question: 'How often can we schedule?',
        answer: 'Companion care can be scheduled for a few hours at a time or on a more regular weekly routine. We will work with you to decide how often visits should happen based on your goals and your loved one needs.'
    },
    {
        question: "What's the difference between this and personal care?",
        answer: 'Companion care focuses on conversation, engagement, supervision and social support. Personal care adds hands on help with bathing, dressing, grooming and other daily living tasks. Some clients receive companion care only, while others benefit from both.'
    }
]

export const PAYMENT_FAQS: FAQ[] = [
    {
        question:
            'How is Private Client Service billed and what payment methods are accepted?',
        answer: 'Private client services are typically billed based on the hours or type of care provided. We explain billing schedules in advance and accept common payment methods such as check or electronic payment, and can review options when you call.'
    },
    {
        question: 'Does Medicare cover Private Client Homecare?',
        answer: 'Medicare may cover certain skilled services for eligible clients under specific conditions, but many private client home care services are not fully covered. We can review your situation and help you understand what may or may not be covered.'
    },
    {
        question: 'Can Medicaid be used for Private Client Homecare?',
        answer: 'In some cases, Medicaid programs may help with home care costs, depending on eligibility and program rules. We can point you in the right direction for more information and help you understand whether this applies to you.'
    },
    {
        question: 'How does payment work for clients with Veterans Benefits?',
        answer: 'Some veterans and surviving spouses may qualify for programs that help cover home care. We can discuss what documentation may be needed and how benefits and private pay can work together.'
    },
    {
        question: 'What payment options are available for home care services?',
        answer: 'Payment options can include private pay, certain insurance plans, Medicaid programs where applicable and veterans benefits when eligible. We review options with you during the intake process.'
    },
    {
        question:
            'What additional services can physicians order when Medicare conditions are met?',
        answer: 'When Medicare conditions are met, physicians may be able to order skilled services such as nursing visits or therapies. We can coordinate with your doctor to understand what is appropriate.'
    },
    {
        question: 'Is there funding available for veterans?',
        answer: 'Some veterans and their families may qualify for programs that help offset the cost of care. We can provide general guidance and encourage you to explore veterans benefit resources.'
    },
    {
        question: 'What is the Self-Pay option?',
        answer: 'Self pay means the client or family pays directly for services instead of using insurance or public programs. This can offer more flexibility in the type and amount of care chosen.'
    },
    {
        question: 'How can someone determine if Self-Pay is right for them?',
        answer: 'Self pay may be right when you want more control over services, need support beyond what is covered or prefer to start care quickly. We can review your needs and help you weigh your options.'
    },
    {
        question: 'What types of private payment options are accepted?',
        answer: 'We accept common private payment methods, such as check and many electronic payment options. Specific details can be explained when services are set up.'
    }
]
