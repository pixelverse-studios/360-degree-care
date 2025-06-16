import { getImgSrc } from '@/lib/images'

interface MarkdownRendererProps {
    content: string
}

interface MarkdownElement {
    type: string
    content: any
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
    if (!content) {
        return <div className="text-gray-500 italic">No content available</div>
    }

    const parseMarkdown = (text: string): MarkdownElement[] => {
        const lines = text.trim().split('\n')
        const elements: MarkdownElement[] = []
        let currentElement = ''
        let elementType = 'p'
        let inList = false
        let listItems: string[] = []
        let skipNext = false

        lines.forEach((line, index) => {
            if (skipNext) {
                skipNext = false
                return
            }

            const trimmedLine = line.trim()

            // Headers
            if (trimmedLine.startsWith('###')) {
                if (inList) {
                    elements.push({ type: 'ul', content: listItems })
                    inList = false
                    listItems = []
                }
                if (currentElement) {
                    elements.push({
                        type: elementType,
                        content: currentElement
                    })
                    currentElement = ''
                }
                elements.push({
                    type: 'h3',
                    content: trimmedLine.replace('### ', '')
                })
            } else if (trimmedLine.startsWith('##')) {
                if (inList) {
                    elements.push({ type: 'ul', content: listItems })
                    inList = false
                    listItems = []
                }
                if (currentElement) {
                    elements.push({
                        type: elementType,
                        content: currentElement
                    })
                    currentElement = ''
                }
                elements.push({
                    type: 'h2',
                    content: trimmedLine.replace('## ', '')
                })
            } else if (trimmedLine.startsWith('#')) {
                if (inList) {
                    elements.push({ type: 'ul', content: listItems })
                    inList = false
                    listItems = []
                }
                if (currentElement) {
                    elements.push({
                        type: elementType,
                        content: currentElement
                    })
                    currentElement = ''
                }
                elements.push({
                    type: 'h1',
                    content: trimmedLine.replace('# ', '')
                })
            }
            // Images
            else if (trimmedLine.startsWith('![')) {
                if (inList) {
                    elements.push({ type: 'ul', content: listItems })
                    inList = false
                    listItems = []
                }
                if (currentElement) {
                    elements.push({
                        type: elementType,
                        content: currentElement
                    })
                    currentElement = ''
                }

                const imageMatch = trimmedLine.match(/!\[(.*?)\]\((.*?)\)/)
                if (imageMatch) {
                    const nextLine = lines[index + 1]?.trim()
                    const caption =
                        nextLine?.startsWith('*') && nextLine?.endsWith('*')
                            ? nextLine.slice(1, -1)
                            : null

                    elements.push({
                        type: 'image',
                        content: {
                            alt: imageMatch[1],
                            src: imageMatch[2],
                            caption: caption
                        }
                    })

                    if (caption) {
                        skipNext = true
                    }
                }
            }
            // Blockquotes
            else if (trimmedLine.startsWith('>')) {
                if (inList) {
                    elements.push({ type: 'ul', content: listItems })
                    inList = false
                    listItems = []
                }
                if (currentElement) {
                    elements.push({
                        type: elementType,
                        content: currentElement
                    })
                    currentElement = ''
                }
                elements.push({
                    type: 'blockquote',
                    content: trimmedLine.replace('> ', '')
                })
            }
            // List items
            else if (
                trimmedLine.startsWith('- ') ||
                trimmedLine.startsWith('* ')
            ) {
                if (!inList) {
                    if (currentElement) {
                        elements.push({
                            type: elementType,
                            content: currentElement
                        })
                        currentElement = ''
                    }
                    inList = true
                    listItems = []
                }
                listItems.push(trimmedLine.replace(/^[*-] /, ''))
            }
            // Horizontal rule
            else if (trimmedLine === '---') {
                if (inList) {
                    elements.push({ type: 'ul', content: listItems })
                    inList = false
                    listItems = []
                }
                if (currentElement) {
                    elements.push({
                        type: elementType,
                        content: currentElement
                    })
                    currentElement = ''
                }
                elements.push({ type: 'hr', content: '' })
            }
            // Regular paragraph
            else if (trimmedLine) {
                if (inList) {
                    elements.push({ type: 'ul', content: listItems })
                    inList = false
                    listItems = []
                }

                if (currentElement) {
                    currentElement += ' ' + trimmedLine
                } else {
                    currentElement = trimmedLine
                    elementType = 'p'
                }
            }
            // Empty line
            else {
                if (inList) {
                    elements.push({ type: 'ul', content: listItems })
                    inList = false
                    listItems = []
                }

                if (currentElement) {
                    elements.push({
                        type: elementType,
                        content: currentElement
                    })
                    currentElement = ''
                }
            }
        })

        // Handle remaining content
        if (inList) {
            elements.push({ type: 'ul', content: listItems })
        } else if (currentElement) {
            elements.push({ type: elementType, content: currentElement })
        }

        return elements
    }

    const formatText = (text: string): string => {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/_(.*?)_/g, '<em>$1</em>')
            .replace(
                /\[(.*?)\]\((.*?)\)/g,
                '<a href="$2" class="text-primary hover:text-green underline font-medium transition-colors">$1</a>'
            )
    }

    const elements = parseMarkdown(content)

    return (
        <div className="prose prose-lg max-w-none">
            {elements.map((element, index) => {
                switch (element.type) {
                    case 'h1':
                        return (
                            <h1
                                key={index}
                                className="text-4xl font-bold text-gray-900 mb-8 mt-12 border-b-2 border-orange-200 pb-4"
                            >
                                {element.content}
                            </h1>
                        )
                    case 'h2':
                        return (
                            <h2
                                key={index}
                                className="text-3xl font-bold text-primary mb-6 mt-12"
                            >
                                {element.content}
                            </h2>
                        )
                    case 'h3':
                        return (
                            <h3
                                key={index}
                                className="text-2xl font-semibold text-gray-900 mb-4 mt-10"
                            >
                                {element.content}
                            </h3>
                        )
                    case 'p':
                        return (
                            <p
                                key={index}
                                className="text-gray-700 leading-relaxed mb-6 text-lg"
                                dangerouslySetInnerHTML={{
                                    __html: formatText(element.content)
                                }}
                            />
                        )
                    case 'image':
                        return (
                            <figure key={index} className="my-12">
                                <img
                                    src={getImgSrc(element.content.src)}
                                    alt={element.content.alt}
                                    className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                                    loading="lazy"
                                />
                                {element.content.caption && (
                                    <figcaption className="text-center text-gray-600 text-sm mt-4 italic font-medium">
                                        {element.content.caption}
                                    </figcaption>
                                )}
                            </figure>
                        )
                    case 'blockquote': {
                        // Handle quotes with attribution (e.g., > "Quote" - **Author**, *Title*)
                        const quoteWithAttributionMatch = element.content.match(
                            /^"(.*?)" - \*\*(.*?)\*\*(?:, \*(.*?)\*)?$/
                        )

                        if (quoteWithAttributionMatch) {
                            return (
                                <blockquote
                                    key={index}
                                    className="border-l-4 border-orange-500 pl-8 py-6 my-10 bg-orange-50 rounded-r-xl shadow-sm"
                                >
                                    <p className="text-xl italic text-gray-700 mb-4 font-medium leading-relaxed">
                                        "{quoteWithAttributionMatch[1]}"
                                    </p>
                                    <footer className="text-gray-600">
                                        <strong className="text-gray-900">
                                            {quoteWithAttributionMatch[2]}
                                        </strong>
                                        {quoteWithAttributionMatch[3] && (
                                            <span className="text-gray-500">
                                                , {quoteWithAttributionMatch[3]}
                                            </span>
                                        )}
                                    </footer>
                                </blockquote>
                            )
                        }

                        // Handle simple blockquotes
                        else {
                            return (
                                <blockquote
                                    key={index}
                                    className="border-l-4 border-blue-500 pl-8 py-6 my-10 bg-blue-50 rounded-r-xl shadow-sm"
                                >
                                    <p
                                        className="text-lg text-gray-700 font-medium leading-relaxed"
                                        dangerouslySetInnerHTML={{
                                            __html: formatText(element.content)
                                        }}
                                    />
                                </blockquote>
                            )
                        }
                    }
                    case 'ul':
                        return (
                            <ul key={index} className="space-y-4 mb-8 ml-6">
                                {element.content.map(
                                    (item: string, itemIndex: number) => (
                                        <li
                                            key={itemIndex}
                                            className="text-gray-700 text-lg flex items-start"
                                        >
                                            <span className="text-orange-500 mr-3 mt-1 text-xl font-bold">
                                                •
                                            </span>
                                            <span
                                                className="flex-1"
                                                dangerouslySetInnerHTML={{
                                                    __html: formatText(item)
                                                }}
                                            />
                                        </li>
                                    )
                                )}
                            </ul>
                        )
                    case 'hr':
                        return (
                            <hr
                                key={index}
                                className="my-12 border-t-2 border-gray-200"
                            />
                        )
                    default:
                        return null
                }
            })}
        </div>
    )
}
