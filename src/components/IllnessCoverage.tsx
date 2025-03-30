import React from 'react'

const illnesses: string[] = [
    'Alzheimer’s Care',
    'Arthritis Care',
    'Blood Pressure Care',
    'Congestive Heart Failure Care',
    'COPD Care',
    'Coronary Artery Disease Care',
    'Dementia Care',
    'Depression Home Care',
    'Diabetes Care',
    'Elderly Home Health Care',
    'Huntington’s Disease Care',
    'Hypertension Care',
    'Joint Replacement Care',
    'Mental Health',
    'Multiple Sclerosis Care',
    'Palliative Care',
    'Paraplegia & Quadriplegia Care',
    "Parkinson's Disease",
    'Pediatric Care',
    'Respite Care',
    'Senior Care',
    'Transitional Care',
    'Traumatic Brain Injury Care',
    'Ventilator Care',
    'Veterans Care',
    'Wound Care'
]

export const Illnesses = () => (
    <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {illnesses.map((service, index) => (
            <div
                key={index}
                className="hover:underline hover:text-primary transition-colors duration-150"
            >
                {service}
            </div>
        ))}
    </div>
)

const IllnessCoverage: React.FC = () => {
    return (
        <section className="bg-blue-900 text-white py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">
                    Comprehensive Care Services
                </h2>
                <p className="text-lg">
                    We provide compassionate, professional care for a wide range
                    of conditions. Our team is trained to support patients with
                    the following health concerns and more:
                </p>
                <Illnesses />
            </div>
        </section>
    )
}

export default IllnessCoverage
