import type { IConfig } from 'next-sitemap'

const serviceSlugs = [
    'personal-care',
    'companion-care',
    'elder-care',
    'home-health-aides',
    'nursing',
    'staffing'
]

const weeklyServicePages = serviceSlugs.map(
    slug => `/services/${slug}`
)

const countyServicePages = [
    'bergen-county',
    'monmouth-county',
    'passaic-county',
    'ocean-county'
].flatMap(county =>
    serviceSlugs.map(slug => `/services/${slug}/${county}`)
)

const bergenCountyCities = ['fort-lee', 'ridgewood', 'river-vale']

const bergenCityServicePages = serviceSlugs.flatMap(slug =>
    bergenCountyCities.map(city => `/services/${slug}/bergen-county/${city}`)
)

const monthlyStaticPages = [
    { loc: '/about', priority: 0.8 },
    { loc: '/services', priority: 0.8 },
    { loc: '/contact', priority: 0.9 },
    { loc: '/faq', priority: 0.6 },
    { loc: '/how-to-pay', priority: 0.7 },
    { loc: '/legal-disclaimer', priority: 0.3 },
    { loc: '/nondiscrimination', priority: 0.3 },
    { loc: '/privacy-policy', priority: 0.3 },
    { loc: '/not-found', priority: 0.1 }
]

const config: IConfig = {
    siteUrl: 'https://www.360degreecare.net',
    generateRobotsTxt: true,
    additionalPaths: async () => {
        const lastmod = new Date().toISOString()

        const entries: Array<{
            loc: string
            changefreq: 'weekly' | 'monthly'
            priority: number
            lastmod: string
        }> = []

        weeklyServicePages.forEach(loc => {
            entries.push({
                loc,
                changefreq: 'weekly',
                priority: 0.8,
                lastmod
            })
        })

        countyServicePages.forEach(loc => {
            entries.push({
                loc,
                changefreq: 'weekly',
                priority: 0.9,
                lastmod
            })
        })

        bergenCityServicePages.forEach(loc => {
            entries.push({
                loc,
                changefreq: 'weekly',
                priority: 0.85,
                lastmod
            })
        })

        monthlyStaticPages.forEach(page => {
            entries.push({
                loc: page.loc,
                changefreq: 'monthly',
                priority: page.priority,
                lastmod
            })
        })

        return entries
    },
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
            { userAgent: '*', disallow: ['/api/', '/_next/'] }
        ],
        additionalSitemaps: ['https://www.360degreecare.net/sitemap.xml']
    },
    exclude: ['/api/*', '/_next/*', '/404', '/500'],
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    generateIndexSitemap: false
}

export default config
