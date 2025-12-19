const BASE_URL = 'https://www.360degreecare.net'

interface BreadcrumbItem {
    route: string
    label: string
}

interface ListItemSchema {
    '@type': 'ListItem'
    position: number
    name: string
    item: string
}

interface BreadcrumbListSchema {
    '@context': 'https://schema.org'
    '@type': 'BreadcrumbList'
    itemListElement: ListItemSchema[]
}

/**
 * Generates BreadcrumbList JSON-LD schema from breadcrumb items.
 * Always includes Home as the first item.
 */
export function generateBreadcrumbSchema(
    breadcrumbs: BreadcrumbItem[]
): BreadcrumbListSchema {
    const itemListElement: ListItemSchema[] = [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: BASE_URL
        }
    ]

    breadcrumbs.forEach((crumb, index) => {
        itemListElement.push({
            '@type': 'ListItem',
            position: index + 2,
            name: crumb.label,
            item: `${BASE_URL}${crumb.route}`
        })
    })

    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement
    }
}

/**
 * Generates BreadcrumbList schema for use in a @graph array.
 */
export function generateBreadcrumbSchemaForGraph(
    breadcrumbs: BreadcrumbItem[]
): Omit<BreadcrumbListSchema, '@context'> {
    const schema = generateBreadcrumbSchema(breadcrumbs)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { '@context': _context, ...rest } = schema
    return rest
}
