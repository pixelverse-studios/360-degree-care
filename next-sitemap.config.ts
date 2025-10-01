import type { IConfig } from 'next-sitemap'
import { counties } from './src/lib/counties'
import { getAllCitySlugs } from './src/lib/locationSeo'

const config: IConfig = {
    siteUrl: 'https://www.360degreecare.net',
    generateRobotsTxt: true,
    additionalPaths: async () => {
        // Get all cities from all counties
        const cities = getAllCitySlugs()

        const paths: Array<{
            loc: string
            changefreq: 'weekly' | 'monthly'
            priority: number
            lastmod: string
        }> = []

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
                changefreq: 'weekly' as const,
                priority: 0.8,
                lastmod: new Date().toISOString()
            })
        })

        // Add city pages (/{county-slug}/{city-slug})
        counties.forEach(county => {
            county.cities.forEach(city => {
                paths.push({
                    loc: `/${county.slug}/${city.slug}`,
                    changefreq: 'weekly' as const,
                    priority: 0.7,
                    lastmod: new Date().toISOString()
                })
            })
        })

        // Add main service pages
        services.forEach(service => {
            paths.push({
                loc: `/services/${service}`,
                changefreq: 'weekly' as const,
                priority: 0.8,
                lastmod: new Date().toISOString()
            })
        })

        // Add city-specific service pages
        services.forEach(service => {
            cities.forEach(city => {
                paths.push({
                    loc: `/services/${service}/${city}`,
                    changefreq: 'monthly' as const,
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
                changefreq: 'weekly' as const,
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
                changefreq: 'monthly' as const,
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

export default config
