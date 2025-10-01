// Hardcoded county data since we can't require TypeScript files directly
const counties = [
    { slug: 'bergen-county', cities: [] }, // Cities will be handled separately
    { slug: 'monmouth-county', cities: [] },
    { slug: 'ocean-county', cities: [] },
    { slug: 'passaic-county', cities: [] }
]

// Hardcoded city slugs for services
const getAllCitySlugs = () => {
    // Return all city slugs across all counties
    return [
        // Bergen County cities
        'hackensack', 'fort-lee', 'teaneck', 'bergenfield', 'garfield',
        'fair-lawn', 'paramus', 'ridgewood', 'englewood', 'lodi',
        'cliffside-park', 'palisades-park', 'elmwood-park', 'lyndhurst',
        'rutherford', 'west-new-york', 'dumont', 'new-milford', 'ridgefield-park',
        'hasbrouck-heights', 'maywood', 'ramsey', 'oakland', 'franklin-lakes',
        'waldwick', 'hillsdale', 'westwood', 'river-edge', 'midland-park',
        'glen-rock', 'north-arlington', 'fairview', 'edgewater', 'ridgefield',
        'little-ferry', 'wallington', 'wood-ridge', 'moonachie', 'carlstadt',
        'east-rutherford', 'bogota', 'cresskill', 'leonia', 'emerson',
        'oradell', 'norwood', 'harrington-park', 'haworth', 'demarest',
        'closter', 'alpine', 'tenafly', 'englewood-cliffs', 'ho-ho-kus',
        'saddle-river', 'upper-saddle-river', 'allendale', 'mahwah', 'wyckoff',
        'park-ridge', 'montvale', 'woodcliff-lake', 'saddle-brook', 'rochelle-park',
        'south-hackensack', 'washington-township', 'river-vale', 'old-tappan',
        'northvale', 'rockleigh', 'teterboro',
        // Add cities from other counties as needed
        'toms-river', 'brick', 'lakewood', 'jackson', 'howell',
        'freehold', 'marlboro', 'middletown', 'long-branch', 'asbury-park',
        'paterson', 'clifton', 'passaic', 'wayne'
    ]
}

/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://www.360degreecare.net',
    generateRobotsTxt: true,
    additionalPaths: async () => {
        // Get all cities from all counties
        const cities = getAllCitySlugs()

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

        // Add county pages (/{county-slug})
        counties.forEach(county => {
            paths.push({
                loc: `/${county.slug}`,
                changefreq: 'weekly',
                priority: 0.8,
                lastmod: new Date().toISOString()
            })
        })

        // Add city pages (/{county-slug}/{city-slug})
        // Note: We're simplifying this since we don't have the full city-county mapping
        // These pages would be handled by the dynamic routes in the app

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

        // Add county-level service hub pages (high priority SEO pages)
        const countyServicePages = [
            { loc: '/personal-care-bergen-county', priority: 0.9 },
            { loc: '/companion-care-bergen-county', priority: 0.9 },
            { loc: '/elder-care-bergen-county', priority: 0.9 },
            { loc: '/home-health-aides-bergen-county', priority: 0.9 },
            { loc: '/nursing-bergen-county', priority: 0.9 },
            { loc: '/staffing-bergen-county', priority: 0.9 }
        ]

        countyServicePages.forEach(page => {
            paths.push({
                loc: page.loc,
                changefreq: 'weekly',
                priority: page.priority,
                lastmod: new Date().toISOString()
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

module.exports = config