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
                route: '/services/home-health-care',
                label: 'Home Health Care',
                canVisit: true
            },
            {
                route: '/services/personal-care',
                label: 'Personal Care',
                canVisit: true
            },
            {
                route: '/services/staffing',
                label: 'Staffing',
                canVisit: true
            }
        ]
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
