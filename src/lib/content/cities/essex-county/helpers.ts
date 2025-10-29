import { ServiceListProps } from '@/lib/types'

export type DescriptiveItem = ServiceListProps['items'][number] & {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    buildDescription: (cityName: string) => string
}

export const providerSchema = {
    '@type': 'Organization',
    name: '360 Degree Care',
    url: 'https://www.360degreecare.net/',
    telephone: '(800) 338-7786'
}

export function buildSchema(serviceName: string, cityName: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `${serviceName} in ${cityName}, New Jersey`,
        serviceType: serviceName,
        provider: providerSchema,
        areaServed: {
            '@type': 'City',
            name: cityName,
            address: {
                '@type': 'PostalAddress',
                addressLocality: cityName,
                addressRegion: 'NJ',
                addressCountry: 'US'
            }
        }
    }
}

export function mapItems(
    city: string,
    header: string,
    items: DescriptiveItem[]
): ServiceListProps {
    return {
        header,
        items: items.map(({ buildDescription, ...rest }) => ({
            ...rest,
            description: buildDescription(city)
        }))
    }
}
