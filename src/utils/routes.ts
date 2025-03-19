export const navLinks = [
    {
        route: '/about',
        label: 'About Us',
        subLinks: [],
        canVisit: true
    },
    {
        route: '',
        label: 'Services',
        canVisit: false,
        subLinks: [
            {
                route: '/services/personal-care',
                label: 'Personal Care',
                canVisit: true
            },
            {
                route: '/services/elder-care',
                label: 'Elder Care Consulting',
                canVisit: true
            },
            {
                route: '/services/staffing',
                label: 'Staffing',
                canVisit: true
            },
            {
                route: '/services/home-health-aides',
                label: 'Home Health Aides',
                canVisit: true
            },
            {
                route: '/services/nursing',
                label: 'Nursing Services',
                canVisit: true
            },
            {
                route: '/services/companions',
                label: 'Companions',
                canVisit: true
            }
        ]
    },
    {
        route: '/wisdom-vault',
        label: 'Wisdom Vault',
        canVisit: true,
        subLinks: []
    },
    {
        route: '/faq',
        label: 'FAQs',
        canVisit: true,
        subLinks: []
    }
]

export const footerResources = [
    {
        route: '/privacy-policy',
        label: 'Privacy Policy',
        canVisit: true,
        subLinks: []
    },
    {
        route: '/legal-disclaimer',
        label: 'Legal Disclaimer',
        canVisit: true,
        subLinks: []
    },
    {
        route: '/nondiscrimination',
        label: 'Nondiscrimination & Accessibility',
        canVisit: true,
        subLinks: []
    }
]

export const availablePages = [...navLinks, ...footerResources]
