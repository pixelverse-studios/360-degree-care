import { cn } from '@/lib/utils'

type Benefit = {
    title: string
    description: string
}

interface CountyBenefitsSectionProps {
    title: string
    benefits: Benefit[]
    className?: string
}

export default function CountyBenefitsSection({
    title,
    benefits,
    className
}: CountyBenefitsSectionProps) {
    if (!benefits.length) {
        return null
    }

    return (
        <section className={cn('py-16 px-4 bg-gray-50', className)}>
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 text-center font-merriweather">
                    {title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {benefits.map(benefit => (
                        <div
                            key={benefit.title}
                            className="bg-white rounded-lg p-6 shadow-md"
                        >
                            <h3 className="text-xl font-bold text-primary mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-700">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
