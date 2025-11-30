// Centralized business information for consistent NAP across all schemas
export const BUSINESS_INFO = {
    name: '360 Degree Care',
    url: 'https://www.360degreecare.net',
    telephone: '(201) 299-4243',
    telephoneE164: '+1-201-299-4243',
    email: 'info@360degreecare.net',
    logo: 'https://res.cloudinary.com/pixelverse-studios/image/upload/v1750117116/clients/360dc/360DC-2C-horz_io6tok.svg',
    address: {
        streetAddress: '27 Chestnut Street',
        addressLocality: 'Ridgewood',
        addressRegion: 'NJ',
        postalCode: '07450',
        addressCountry: 'US'
    },
    geo: {
        latitude: 40.9793,
        longitude: -74.1169
    },
    sameAs: [
        'https://www.facebook.com/profile.php?id=61574893462190',
        'https://www.instagram.com/360degreecarenj/'
    ]
}

// Generate LocalBusiness schema for a specific location/service area
export function generateLocalBusinessSchema(options: {
    serviceName: string
    serviceType: string
    areaServed: string | string[]
    serviceUrl: string
    description: string
}) {
    const areas = Array.isArray(options.areaServed)
        ? options.areaServed
        : [options.areaServed]

    return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${BUSINESS_INFO.url}/#localbusiness`,
        name: BUSINESS_INFO.name,
        image: BUSINESS_INFO.logo,
        url: BUSINESS_INFO.url,
        telephone: BUSINESS_INFO.telephone,
        email: BUSINESS_INFO.email,
        address: {
            '@type': 'PostalAddress',
            ...BUSINESS_INFO.address
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: BUSINESS_INFO.geo.latitude,
            longitude: BUSINESS_INFO.geo.longitude
        },
        areaServed: areas.map(area => ({
            '@type': 'City',
            name: area
        })),
        sameAs: BUSINESS_INFO.sameAs,
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            opens: '00:00',
            closes: '23:59'
        },
        priceRange: '$$',
        description: options.description,
        makesOffer: {
            '@type': 'Offer',
            itemOffered: {
                '@type': 'Service',
                name: options.serviceName,
                serviceType: options.serviceType,
                url: options.serviceUrl,
                provider: {
                    '@type': 'Organization',
                    name: BUSINESS_INFO.name
                }
            }
        }
    }
}

// Generate Service schema with correct business info
export function generateServiceSchema(options: {
    serviceName: string
    serviceType: string
    areaServed: string[]
    serviceUrl: string
    description: string
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: options.serviceName,
        serviceType: options.serviceType,
        provider: {
            '@type': 'HomeHealthCareService',
            name: BUSINESS_INFO.name,
            url: BUSINESS_INFO.url,
            logo: BUSINESS_INFO.logo,
            telephone: BUSINESS_INFO.telephone,
            address: {
                '@type': 'PostalAddress',
                ...BUSINESS_INFO.address
            },
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: BUSINESS_INFO.telephoneE164,
                contactType: 'customer service',
                availableLanguage: 'en',
                areaServed: 'US'
            }
        },
        areaServed: options.areaServed.map(area => ({
            '@type': 'City',
            name: area,
            containedInPlace: {
                '@type': 'State',
                name: 'New Jersey'
            }
        })),
        description: options.description,
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: options.serviceUrl,
            servicePhone: BUSINESS_INFO.telephoneE164,
            availableLanguage: 'en'
        }
    }
}

// Bergen County cities for area served
export const BERGEN_COUNTY_CITIES = [
    'Ridgewood',
    'Paramus',
    'Hackensack',
    'Teaneck',
    'Fort Lee',
    'Fair Lawn',
    'Englewood',
    'Westwood',
    'River Vale',
    'Bergenfield',
    'Cliffside Park',
    'Glen Rock'
]
