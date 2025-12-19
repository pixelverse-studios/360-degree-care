import { existsSync, readdirSync } from 'node:fs'
import path from 'node:path'

const SERVICES_DIR = path.join(process.cwd(), 'src', 'app', 'services')

function listDirectories(basePath) {
    if (!existsSync(basePath)) {
        return []
    }

    return readdirSync(basePath, { withFileTypes: true })
        .filter(entry => entry.isDirectory() && !entry.name.startsWith('('))
        .map(entry => entry.name)
}

function hasPage(dirPath) {
    return existsSync(path.join(dirPath, 'page.tsx'))
}

function buildServiceCountyPairs() {
    const pairs = []

    listDirectories(SERVICES_DIR).forEach(service => {
        const serviceDir = path.join(SERVICES_DIR, service)
        if (!hasPage(serviceDir)) {
            return
        }

        listDirectories(serviceDir).forEach(county => {
            const countyDir = path.join(serviceDir, county)
            if (hasPage(countyDir)) {
                pairs.push([service, county])
            }
        })
    })

    return pairs
}

function buildServiceCountyCityTriples() {
    const triples = []

    listDirectories(SERVICES_DIR).forEach(service => {
        const serviceDir = path.join(SERVICES_DIR, service)
        if (!hasPage(serviceDir)) {
            return
        }

        listDirectories(serviceDir).forEach(county => {
            const countyDir = path.join(serviceDir, county)
            if (!hasPage(countyDir)) {
                return
            }

            listDirectories(countyDir).forEach(city => {
                const cityDir = path.join(countyDir, city)
                if (hasPage(cityDir)) {
                    triples.push([service, county, city])
                }
            })
        })
    })

    return triples
}

const redirectPairs = buildServiceCountyPairs()
const legacyServiceCityPairs = buildServiceCountyCityTriples()

// Zero-traffic city pages (per Nov 4 2025 GSC export) consolidate into Bergen hub
const personalCareBergenZeroTrafficCities = [
    'englewood',
    'paramus',
    'westwood'
]

// Legacy standalone URLs that had traffic (per Nov 29 2025 GSC export)
const legacyStandaloneRedirects = [
    // Standalone pages
    { source: '/home', destination: '/', permanent: true },
    { source: '/careers', destination: '/contact/employment', permanent: true },

    // Legacy county-only URLs
    { source: '/bergen-county', destination: '/services', permanent: true },
    { source: '/ocean-county', destination: '/services', permanent: true },
    { source: '/passaic-county', destination: '/services', permanent: true },

    // Legacy /{county}/{city} structure (per Dec 18 2025 GSC 404 export)
    { source: '/monmouth-county/ocean-township', destination: '/services', permanent: true },
    { source: '/ocean-county/ocean-gate-borough', destination: '/services', permanent: true },
    { source: '/passaic-county/little-falls', destination: '/services', permanent: true },
    { source: '/bergen-county/fairview', destination: '/services', permanent: true },

    // Legacy /services/{county} structure
    { source: '/services/bergen-county', destination: '/services', permanent: true },
    { source: '/services/passaic-county', destination: '/services', permanent: true },

    // Legacy /contact/{county} structure
    { source: '/contact/bergen-county', destination: '/contact', permanent: true },

    // Legacy staffing URLs missing county (per Dec 11 2025 GSC 404 export)
    { source: '/services/staffing/fort-lee', destination: '/services/staffing/bergen-county/fort-lee', permanent: true },
    { source: '/services/staffing/hackensack', destination: '/services/staffing/bergen-county/hackensack', permanent: true },
    { source: '/services/staffing/paramus', destination: '/services/staffing/bergen-county/paramus', permanent: true },
    { source: '/services/staffing/ridgewood', destination: '/services/staffing/bergen-county/ridgewood', permanent: true },
    { source: '/services/staffing/teaneck', destination: '/services/staffing/bergen-county/teaneck', permanent: true },
    { source: '/services/staffing/fair-lawn', destination: '/services/staffing/bergen-county/fair-lawn', permanent: true },
    { source: '/services/staffing/englewood', destination: '/services/staffing/bergen-county/englewood', permanent: true },
    { source: '/services/staffing/westwood', destination: '/services/staffing/bergen-county/westwood', permanent: true },
    { source: '/services/staffing/river-vale', destination: '/services/staffing/bergen-county/river-vale', permanent: true }
]

// Legacy service-city URLs missing county segment (per Dec 18 2025 GSC 404 export)
// Cities WITH existing pages → redirect to city page
const legacyCityWithPageRedirects = [
    // Passaic County cities with pages
    { source: '/services/staffing/passaic', destination: '/services/staffing/passaic-county/passaic', permanent: true },
    { source: '/services/staffing/clifton', destination: '/services/staffing/passaic-county/clifton', permanent: true },
    { source: '/services/staffing/wayne', destination: '/services/staffing/passaic-county/wayne', permanent: true },
    { source: '/services/nursing/west-milford', destination: '/services/nursing/passaic-county/west-milford', permanent: true },
    { source: '/services/companion-care/clifton', destination: '/services/companion-care/passaic-county/clifton', permanent: true },
    { source: '/services/elder-care/clifton', destination: '/services/elder-care/passaic-county/clifton', permanent: true }
]

// Legacy service-city URLs for cities WITHOUT pages → redirect to county hub
const legacyCityNoPageRedirects = [
    // Passaic County cities without pages
    { source: '/services/nursing/ringwood', destination: '/services/nursing/passaic-county', permanent: true },
    { source: '/services/staffing/woodland-park', destination: '/services/staffing/passaic-county', permanent: true },
    { source: '/services/elder-care/little-falls', destination: '/services/elder-care/passaic-county', permanent: true },
    { source: '/services/companion-care/prospect-park', destination: '/services/companion-care/passaic-county', permanent: true },
    { source: '/services/personal-care/bloomingdale', destination: '/services/personal-care/passaic-county', permanent: true },
    { source: '/services/staffing/ringwood', destination: '/services/staffing/passaic-county', permanent: true },
    { source: '/services/staffing/haledon', destination: '/services/staffing/passaic-county', permanent: true },
    { source: '/services/elder-care/north-haledon', destination: '/services/elder-care/passaic-county', permanent: true },
    { source: '/services/nursing/hawthorne', destination: '/services/nursing/passaic-county', permanent: true },
    { source: '/services/home-health-aides/haledon', destination: '/services/home-health-aides/passaic-county', permanent: true },
    { source: '/services/home-health-aides/wanaque', destination: '/services/home-health-aides/passaic-county', permanent: true },
    { source: '/services/companion-care/pompton-lakes', destination: '/services/companion-care/passaic-county', permanent: true },
    { source: '/services/companion-care/little-falls', destination: '/services/companion-care/passaic-county', permanent: true },

    // Bergen County cities without pages
    { source: '/services/home-health-aides/oradell', destination: '/services/home-health-aides/bergen-county', permanent: true },
    { source: '/services/staffing/elmwood-park', destination: '/services/staffing/bergen-county', permanent: true },
    { source: '/services/companion-care/cliffside-park', destination: '/services/companion-care/bergen-county', permanent: true },

    // Monmouth County cities without pages
    { source: '/services/companion-care/union-beach-borough', destination: '/services/companion-care/monmouth-county', permanent: true },
    { source: '/services/companion-care/neptune', destination: '/services/companion-care/monmouth-county', permanent: true },

    // Ocean County cities without pages
    { source: '/services/companion-care/bay-head', destination: '/services/companion-care/ocean-county', permanent: true }
]

// Legacy service name redirects (staffing-services → staffing, elder-care-consulting → elder-care)
const legacyServiceNameRedirects = [
    // staffing-services → staffing (city pages exist)
    { source: '/services/staffing-services/totowa', destination: '/services/staffing/passaic-county/totowa', permanent: true },

    // staffing-services → staffing (no city pages)
    { source: '/services/staffing-services/hawthorne', destination: '/services/staffing/passaic-county', permanent: true },
    { source: '/services/staffing-services/bloomingdale', destination: '/services/staffing/passaic-county', permanent: true },
    { source: '/services/staffing-services/little-falls', destination: '/services/staffing/passaic-county', permanent: true },
    { source: '/services/staffing-services/ringwood', destination: '/services/staffing/passaic-county', permanent: true },

    // elder-care-consulting → elder-care
    { source: '/services/elder-care-consulting/wanaque', destination: '/services/elder-care/passaic-county', permanent: true }
]

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: '360degreecare.net',
                pathname: '/**'
            }
        ]
    },
    async redirects() {
        const serviceCountyRedirects = redirectPairs.map(([service, county]) => ({
            source: `/${service}-${county}`,
            destination: `/services/${service}/${county}`,
            permanent: true
        }))

        const legacyServiceCityRedirects = legacyServiceCityPairs.map(
            ([service, county, city]) => ({
                source: `/services/${service}/${city}`,
                destination: `/services/${service}/${county}/${city}`,
                permanent: true
            })
        )

        const personalCareBergenRedirects =
            personalCareBergenZeroTrafficCities.map(city => ({
                source: `/services/personal-care/bergen-county/${city}`,
                destination: '/services/personal-care/bergen-county',
                permanent: true
            }))

        return [
            ...serviceCountyRedirects,
            ...legacyServiceCityRedirects,
            ...personalCareBergenRedirects,
            ...legacyStandaloneRedirects,
            ...legacyCityWithPageRedirects,
            ...legacyCityNoPageRedirects,
            ...legacyServiceNameRedirects
        ]
    },
    async headers() {
        return [
            {
                source: '/_next/static/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable'
                    }
                ]
            },
            {
                source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable'
                    }
                ]
            },
            {
                source: '/:all*(woff|woff2|ttf|otf|eot)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable'
                    }
                ]
            },
            {
                source: '/_next/image',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=60, s-maxage=604800, stale-while-revalidate=86400'
                    }
                ]
            }
        ]
    }
}

export default nextConfig
