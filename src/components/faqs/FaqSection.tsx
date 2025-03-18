import { ReactNode } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

interface FaqItemProps {
    question: string
    answer: ReactNode
}

interface FaqSectionProps {
    header: string
    faqs: FaqItemProps[]
    headerClass?: string
}

export default function FaqSection({
    header,
    faqs,
    headerClass
}: FaqSectionProps) {
    return (
        <section className="py-4">
            <h2
                className={cn(
                    'text-center text-3xl text-primary mb-4 font-semibold',
                    headerClass
                )}
            >
                {header}
            </h2>
            <Accordion
                type="multiple"
                className="w-full max-w-4xl mx-auto space-y-2"
            >
                {faqs.map(faq => (
                    <AccordionItem
                        value={faq.question}
                        key={faq.question}
                        className="border border-gray-200 rounded-lg bg-white-bright shadow-xl"
                    >
                        <AccordionTrigger className="px-4 py-3 pb-1 text-xl font-semibold text-gray-800 hover:text-black transition-all duration-300 hover:no-underline">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-3 text-gray-600 text-lg">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}
