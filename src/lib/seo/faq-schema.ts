import { FAQ } from '@/utils/faqs'

interface FAQSchemaQuestion {
    '@type': 'Question'
    name: string
    acceptedAnswer: {
        '@type': 'Answer'
        text: string
    }
}

interface FAQPageSchema {
    '@context': 'https://schema.org'
    '@type': 'FAQPage'
    mainEntity: FAQSchemaQuestion[]
}

/**
 * Converts an FAQ array to FAQPage structured data (JSON-LD schema).
 * Uses schemaAnswer when available (for JSX answers), otherwise uses answer directly.
 * Only works with string answers; JSX answers without schemaAnswer will be skipped.
 */
export function generateFAQSchema(faqs: FAQ[]): FAQPageSchema {
    const mainEntity: FAQSchemaQuestion[] = faqs
        .map(faq => {
            // Use schemaAnswer if provided (required for JSX), otherwise use answer if it's a string
            const answerText =
                faq.schemaAnswer ??
                (typeof faq.answer === 'string' ? faq.answer : null)

            if (!answerText) {
                console.warn(
                    `FAQ "${faq.question}" has JSX answer but no schemaAnswer - skipping from schema`
                )
                return null
            }

            return {
                '@type': 'Question' as const,
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer' as const,
                    text: answerText
                }
            }
        })
        .filter((q): q is FAQSchemaQuestion => q !== null)

    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity
    }
}

/**
 * Generates FAQ schema as part of a @graph array for pages with multiple schema types.
 * Returns just the mainEntity array for embedding in existing schema graphs.
 */
export function generateFAQSchemaForGraph(faqs: FAQ[]): {
    '@type': 'FAQPage'
    mainEntity: FAQSchemaQuestion[]
} {
    const schema = generateFAQSchema(faqs)
    return {
        '@type': 'FAQPage',
        mainEntity: schema.mainEntity
    }
}
