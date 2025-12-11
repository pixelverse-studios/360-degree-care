import { ServiceListProps } from '@/lib/types'
import { FAQ } from '@/utils/faqs'
import { generateFAQSchemaForGraph } from '@/lib/seo/faq-schema'
import {
    BUSINESS_INFO,
    generateCityLocalBusinessSchema
} from '@/lib/seo/local-business-schema'

export type DescriptiveItem = ServiceListProps['items'][number] & {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    buildDescription: (cityName: string) => string
}

const COUNTY_NAME = 'Bergen County'

// Full provider schema for Service
const providerSchema = {
    '@type': 'HomeHealthCareService',
    '@id': `${BUSINESS_INFO.url}/#organization`,
    name: BUSINESS_INFO.name,
    url: BUSINESS_INFO.url,
    logo: BUSINESS_INFO.logo,
    telephone: BUSINESS_INFO.telephone,
    address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_INFO.address.streetAddress,
        addressLocality: BUSINESS_INFO.address.addressLocality,
        addressRegion: BUSINESS_INFO.address.addressRegion,
        postalCode: BUSINESS_INFO.address.postalCode,
        addressCountry: BUSINESS_INFO.address.addressCountry
    },
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: BUSINESS_INFO.telephoneE164,
        contactType: 'customer service',
        availableLanguage: 'en',
        areaServed: 'US'
    }
}

export function buildSchema(
    serviceName: string,
    cityName: string,
    faqs?: FAQ[],
    options?: {
        serviceSlug: string
        description: string
        cityFaqs?: FAQ[]
    }
) {
    const citySlug = cityName.toLowerCase().replace(/\s+/g, '-')
    const countySlug = COUNTY_NAME.toLowerCase().replace(/\s+/g, '-')
    const serviceUrl = options?.serviceSlug
        ? `${BUSINESS_INFO.url}/services/${options.serviceSlug}/${countySlug}/${citySlug}`
        : `${BUSINESS_INFO.url}/services`

    const serviceSchema = {
        '@type': 'Service',
        '@id': `${serviceUrl}/#service`,
        name: `${serviceName} in ${cityName}, New Jersey`,
        serviceType: serviceName,
        description: options?.description,
        url: serviceUrl,
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
        },
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: serviceUrl,
            servicePhone: BUSINESS_INFO.telephoneE164,
            availableLanguage: 'en'
        }
    }

    const graphItems: object[] = [serviceSchema]

    // Add LocalBusiness schema if options provided
    if (options?.serviceSlug && options?.description) {
        const localBusinessSchema = generateCityLocalBusinessSchema({
            serviceName,
            serviceType: serviceName,
            cityName,
            countyName: COUNTY_NAME,
            serviceSlug: options.serviceSlug,
            description: options.description
        })
        graphItems.push(localBusinessSchema)
    }

    // Add FAQ schema if FAQs provided (city FAQs first, then service FAQs)
    const allFaqs = [...(options?.cityFaqs || []), ...(faqs || [])]
    if (allFaqs.length > 0) {
        graphItems.push(generateFAQSchemaForGraph(allFaqs))
    }

    return {
        '@context': 'https://schema.org',
        '@graph': graphItems
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
