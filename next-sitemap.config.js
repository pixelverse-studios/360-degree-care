/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.360degreecare.net',
    generateRobotsTxt: true,
    additionalPaths: async () => {
        // Import your actual cities and services from locationSeo.ts
        const cities = [
            'allendale',
            'alpine',
            'bergenfield',
            'bogota',
            'carlstadt',
            'cliffside-park',
            'closter',
            'cresskill',
            'demarest',
            'dumont',
            'east-rutherford',
            'edgewater',
            'emerson',
            'englewood',
            'englewood-cliffs',
            'fair-lawn',
            'fairview',
            'fort-lee',
            'franklin-lakes',
            'garfield',
            'glen-rock',
            'hackensack',
            'harrington-park',
            'hasbrouck-heights',
            'haworth',
            'hillsdale',
            'ho-ho-kus',
            'leonia',
            'little-ferry',
            'lodi',
            'lyndhurst',
            'mahwah',
            'maywood',
            'midland-park',
            'montvale',
            'moonachie',
            'new-milford',
            'north-arlington',
            'northvale',
            'norwood',
            'oakland',
            'old-tappan',
            'oradell',
            'palisades-park',
            'paramus',
            'park-ridge',
            'ramsey',
            'ridgefield',
            'ridgefield-park',
            'ridgewood',
            'river-edge',
            'river-vale',
            'rochelle-park',
            'rockleigh',
            'rutherford',
            'saddle-brook',
            'saddle-river',
            'south-hackensack',
            'teaneck',
            'tenafly',
            'teterboro',
            'upper-saddle-river',
            'waldwick',
            'wallington',
            'washington-township',
            'westwood',
            'wood-ridge',
            'wyckoff'
        ]

        const paths = []

        // Services from your locationSeo.ts
        const services = [
            'personal-care',
            'companion-care',
            'elder-care',
            'home-health-aides',
            'nursing',
            'staffing'
        ]

        // Add main service pages
        services.forEach(service => {
            paths.push({
                loc: `/services/${service}`,
                changefreq: 'weekly',
                priority: 0.8,
                lastmod: new Date().toISOString()
            })
        })

        // Add city-specific service pages
        services.forEach(service => {
            cities.forEach(city => {
                paths.push({
                    loc: `/services/${service}/${city}`,
                    changefreq: 'monthly',
                    priority: 0.7,
                    lastmod: new Date().toISOString()
                })
            })
        })

        // Add other static pages
        const staticPages = [
            { loc: '/about', priority: 0.8 },
            { loc: '/contact', priority: 0.9 },
            { loc: '/faq', priority: 0.6 },
            { loc: '/how-to-pay', priority: 0.7 },
            { loc: '/legal-disclaimer', priority: 0.3 },
            { loc: '/nondiscrimination', priority: 0.3 },
            { loc: '/privacy-policy', priority: 0.3 },
            { loc: '/not-found', priority: 0.1 }
        ]

        staticPages.forEach(page => {
            paths.push({
                loc: page.loc,
                changefreq: 'monthly',
                priority: page.priority,
                lastmod: new Date().toISOString()
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
