/** @type {import('next').NextConfig} */
const redirectMap = [
    ['personal-care', 'bergen-county'],
    ['personal-care', 'monmouth-county'],
    ['personal-care', 'ocean-county'],
    ['personal-care', 'passaic-county'],
    ['companion-care', 'bergen-county'],
    ['companion-care', 'monmouth-county'],
    ['companion-care', 'ocean-county'],
    ['companion-care', 'passaic-county'],
    ['elder-care', 'bergen-county'],
    ['elder-care', 'monmouth-county'],
    ['elder-care', 'ocean-county'],
    ['elder-care', 'passaic-county'],
    ['home-health-aides', 'bergen-county'],
    ['home-health-aides', 'monmouth-county'],
    ['home-health-aides', 'ocean-county'],
    ['home-health-aides', 'passaic-county'],
    ['nursing', 'bergen-county'],
    ['nursing', 'monmouth-county'],
    ['nursing', 'ocean-county'],
    ['nursing', 'passaic-county'],
    ['staffing', 'bergen-county'],
    ['staffing', 'monmouth-county'],
    ['staffing', 'ocean-county'],
    ['staffing', 'passaic-county']
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
        return redirectMap.map(([service, county]) => ({
            source: `/${service}-${county}`,
            destination: `/services/${service}/${county}`,
            permanent: true
        }))
    }
}

export default nextConfig
