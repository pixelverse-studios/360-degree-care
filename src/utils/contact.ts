import * as z from 'zod'

export const ContactMap = new Map()

const baseSchema = {
    fullname: z.string().min(2, 'Full Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z
        .string()
        .length(10, 'Phone number must be exactly 10 digits')
        .regex(/^\d+$/, 'Phone number must contain only numeric values'),
    description: z.string().optional()
}

const baseForm = {
    fullname: '',
    email: '',
    phone: '',
    description: ''
}

const serviceFormSchema = z.object({
    ...baseSchema,
    services: z
        .string()
        .min(1, { message: 'Please select at least one option.' })
})

const initialServiceForm = {
    ...baseForm,
    services: ''
}

ContactMap.set('services', {
    description:
        'We are here to help answer any of your questions. Let us know what service(s) you are interested in.',
    initialValues: initialServiceForm,
    schema: serviceFormSchema,
    selectOptions: [
        'Personal Care',
        'Elder Care Consulting',
        'Staffing',
        'Home Health Aides',
        'Nursing Services',
        'Companion Care'
    ],
    fieldLabel: 'Services',
    placeholder: 'Select interested service',
    type: 'services'
})

const employmentFormSchema = z.object({
    ...baseSchema,
    employment: z
        .string()
        .min(1, { message: 'Please select at least one option.' })
})

const initialEmploymentForm = {
    ...baseForm,
    employment: ''
}

ContactMap.set('employment', {
    description:
        'Our team is always growing. Reach out to get the process started about joining us!',
    initialValues: initialEmploymentForm,
    schema: employmentFormSchema,
    selectOptions: [
        'Sales Rep',
        'Registered Nurse',
        'Certified Nurse Assistant',
        'Home Health Aide',
        'Companion'
    ],
    fieldLabel: 'Employment',
    placeholder: 'Select interested position',
    type: 'employment'
})

ContactMap.set('general', {
    description:
        "We're here to answer your questions and discuss how we can help you and your loved ones.",
    initialValues: baseForm,
    schema: baseSchema,
    selectOptions: [],
    type: 'general'
})
