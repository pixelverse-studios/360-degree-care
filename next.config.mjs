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
    { source: '/bergen-county', destination: '/services', permanent: true }
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
            ...legacyStandaloneRedirects
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
