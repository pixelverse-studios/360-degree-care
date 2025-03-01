import { ReactNode } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'

interface FaqItemProps {
    question: string
    answer: ReactNode
}

interface FaqSectionProps {
    header: string
    faqs: FaqItemProps[]
}

export default function FaqSection({ header, faqs }: FaqSectionProps) {
    return (
        <section>
            <h2>{header}</h2>
            <Accordion type="multiple" className="w-full">
                {faqs.map(faq => (
                    <AccordionItem value={faq.question} key={faq.question}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}
