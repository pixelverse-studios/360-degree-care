import { existsSync, readdirSync } from 'node:fs'
import path from 'node:path'

const SITE_URL = 'https://www.360degreecare.net'
const APP_DIR = path.join(process.cwd(), 'src', 'app')
const SERVICES_DIR = path.join(APP_DIR, 'services')

// Keep sitemap in sync with redirect strategy so we don't advertise deprecated city URLs
const REDIRECTED_CITY_SLUGS = {
    'personal-care': {
        'bergen-county': new Set(['englewood', 'paramus', 'westwood'])
    }
}

const REDIRECTED_PATHS = Array.from(
    REDIRECTED_CITY_SLUGS['personal-care']['bergen-county']
).map(city => `/services/personal-care/bergen-county/${city}`)

const staticPages = [
    { loc: '/', priority: 1, changefreq: 'weekly' },
    { loc: '/about', priority: 0.8, changefreq: 'monthly' },
    { loc: '/services', priority: 0.8, changefreq: 'monthly' },
    { loc: '/contact', priority: 0.9, changefreq: 'monthly' },
    { loc: '/contact/services', priority: 0.8, changefreq: 'monthly' },
    { loc: '/contact/employment', priority: 0.8, changefreq: 'monthly' },
    { loc: '/contact/general', priority: 0.8, changefreq: 'monthly' },
    { loc: '/faq', priority: 0.6, changefreq: 'monthly' },
    { loc: '/how-to-pay', priority: 0.7, changefreq: 'monthly' },
    { loc: '/legal-disclaimer', priority: 0.3, changefreq: 'monthly' },
    { loc: '/nondiscrimination', priority: 0.3, changefreq: 'monthly' },
    { loc: '/privacy-policy', priority: 0.3, changefreq: 'monthly' },
    { loc: '/blog', priority: 0.6, changefreq: 'weekly' }
]

const serviceRoutes = buildServiceRouteTree()

function listDirectories(basePath) {
    return readdirSync(basePath, { withFileTypes: true })
        .filter(entry => entry.isDirectory() && !entry.name.startsWith('('))
        .map(entry => entry.name)
}

function hasPageFile(dirPath) {
    return existsSync(path.join(dirPath, 'page.tsx'))
}

function buildServiceRouteTree() {
    if (!existsSync(SERVICES_DIR)) {
        return []
    }

    return listDirectories(SERVICES_DIR)
        .filter(service => hasPageFile(path.join(SERVICES_DIR, service)))
        .map(service => {
            const serviceDir = path.join(SERVICES_DIR, service)
            const counties = listDirectories(serviceDir)
                .filter(county =>
                    hasPageFile(path.join(serviceDir, county))
                )
                .map(county => {
                    const countyDir = path.join(serviceDir, county)
                    const excludedCities =
                        REDIRECTED_CITY_SLUGS[service]?.[county]
                    const cities = listDirectories(countyDir)
                        .filter(city => hasPageFile(path.join(countyDir, city)))
                        .filter(city => !excludedCities?.has(city))
                    return { slug: county, cities }
                })

            return { slug: service, counties }
        })
}

function buildServiceEntries(
    routes,
    lastmod
) {
    const entries = []

    routes.forEach(service => {
        entries.push({
            loc: `/services/${service.slug}`,
            changefreq: 'weekly',
            priority: 0.8,
            lastmod
        })

        service.counties.forEach(county => {
            entries.push({
                loc: `/services/${service.slug}/${county.slug}`,
                changefreq: 'weekly',
                priority: 0.9,
                lastmod
            })

            county.cities.forEach(city => {
                entries.push({
                    loc: `/services/${service.slug}/${county.slug}/${city}`,
                    changefreq: 'weekly',
                    priority: 0.85,
                    lastmod
                })
            })
        })
    })

    return entries
}

const config = {
    siteUrl: SITE_URL,
    generateRobotsTxt: true,
    additionalPaths: async () => {
        const lastmod = new Date().toISOString()

        const entries = [
            ...buildServiceEntries(serviceRoutes, lastmod),
            ...staticPages.map(page => ({
                ...page,
                lastmod
            }))
        ]

        return entries
    },
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
            {
                userAgent: '*',
                disallow: [
                    '/api/',
                    '/_next/',
                    '/docs',
                    '/docs/*',
                    '/seo-review',
                    '/not-found'
                ]
            }
        ],
        additionalSitemaps: ['https://www.360degreecare.net/sitemap.xml']
    },
    exclude: [
        '/api/*',
        '/_next/*',
        '/404',
        '/500',
        ...REDIRECTED_PATHS
    ],
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    generateIndexSitemap: false
}

export default config
