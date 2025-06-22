import { FaqSectionProps } from '@/lib/types'
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ServiceFaqs({ header, faqs }: FaqSectionProps) {
    return (
        <section className="page-section">
            <h2 className="text-center mb-6">{header}</h2>
            <Accordion
                type="multiple"
                className={cn('w-full max-w-2xl mx-auto space-y-2')}
            >
                {faqs.map(faq => (
                    <AccordionItem
                        value={faq.question}
                        key={faq.question}
                        className="border border-gray-light rounded-xl shadow-xl bg-white-bright overflow-hidden"
                    >
                        <AccordionTrigger className="group p-4 text-lg transition-all duration-300 w-full text-left flex items-center justify-between">
                            <span className="pr-4">{faq.question}</span>
                            <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180 flex-shrink-0" />
                        </AccordionTrigger>
                        <AccordionContent className="overflow-hidden text-lg text-gray-700 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                            <div className="p-4 pt-2">{faq.answer}</div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}
