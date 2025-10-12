const weeklyServicePages = [
    '/services/personal-care',
    '/services/companion-care',
    '/services/elder-care',
    '/services/home-health-aides',
    '/services/nursing',
    '/services/staffing'
]

const countyServicePages = [
    '/services/personal-care/bergen-county',
    '/services/companion-care/bergen-county',
    '/services/elder-care/bergen-county',
    '/services/home-health-aides/bergen-county',
    '/services/nursing/bergen-county',
    '/services/staffing/bergen-county',
    '/services/personal-care/monmouth-county',
    '/services/companion-care/monmouth-county',
    '/services/elder-care/monmouth-county',
    '/services/home-health-aides/monmouth-county',
    '/services/nursing/monmouth-county',
    '/services/staffing/monmouth-county',
    '/services/personal-care/passaic-county',
    '/services/companion-care/passaic-county',
    '/services/elder-care/passaic-county',
    '/services/home-health-aides/passaic-county',
    '/services/nursing/passaic-county',
    '/services/staffing/passaic-county',
    '/services/personal-care/ocean-county',
    '/services/companion-care/ocean-county',
    '/services/elder-care/ocean-county',
    '/services/home-health-aides/ocean-county',
    '/services/nursing/ocean-county',
    '/services/staffing/ocean-county'
]

const monthlyStaticPages = [
    { loc: '/about', priority: 0.8 },
    { loc: '/contact', priority: 0.9 },
    { loc: '/faq', priority: 0.6 },
    { loc: '/how-to-pay', priority: 0.7 },
    { loc: '/legal-disclaimer', priority: 0.3 },
    { loc: '/nondiscrimination', priority: 0.3 },
    { loc: '/privacy-policy', priority: 0.3 },
    { loc: '/not-found', priority: 0.1 }
]

/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://www.360degreecare.net',
    generateRobotsTxt: true,
    additionalPaths: async () => {
        const lastmod = new Date().toISOString()
        const paths = []

        weeklyServicePages.forEach(loc => {
            paths.push({
                loc,
                changefreq: 'weekly',
                priority: 0.8,
                lastmod
            })
        })

        countyServicePages.forEach(loc => {
            paths.push({
                loc,
                changefreq: 'weekly',
                priority: 0.9,
                lastmod
            })
        })

        monthlyStaticPages.forEach(page => {
            paths.push({
                loc: page.loc,
                changefreq: 'monthly',
                priority: page.priority,
                lastmod
            })
        })

        return paths
    },
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/'
            },
            {
                userAgent: '*',
                disallow: ['/api/', '/_next/']
            }
        ],
        additionalSitemaps: ['https://www.360degreecare.net/sitemap.xml']
    },
    exclude: ['/api/*', '/_next/*', '/404', '/500'],
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    generateIndexSitemap: false
}

module.exports = config
