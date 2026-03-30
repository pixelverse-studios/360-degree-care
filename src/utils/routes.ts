// src/utils/routes.ts

const resourceLinks = [
    {
        route: '/blog',
        label: 'Blog',
        canVisit: true,
        hasDynamicChildren: true,
        subLinks: []
    },
    {
        route: '/faq',
        label: 'FAQs',
        canVisit: true,
        subLinks: []
    }
]

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
        hasDynamicChildren: true,
        subLinks: [
            {
                route: '/services',
                label: 'All Services',
                canVisit: true
            },
            {
                route: '/services/personal-care',
                label: 'Personal Care',
                canVisit: true
            },
            {
                route: '/services/home-health-aides',
                label: 'Home Health Aides',
                canVisit: true
            },
            {
                route: '/services/companion-care',
                label: 'Companion Care',
                canVisit: true
            }
        ]
    },
    {
        route: '',
        label: 'Resources',
        canVisit: false,
        subLinks: resourceLinks
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

export const additionalPages = [
    {
        route: '/how-to-pay',
        label: 'How To Pay',
        canVisit: true,
        subLinks: []
    },
    {
        route: '/contact',
        label: 'Contact',
        canVisit: true,
        subLinks: []
    },
    {
        route: '/contact/services',
        label: 'Services',
        canVisit: true,
        subLinks: []
    },
    {
        route: '/contact/employment',
        label: 'Employment',
        canVisit: true,
        subLinks: []
    },
    {
        route: '/contact/general',
        label: 'General',
        canVisit: true,
        subLinks: []
    }
]

export const availablePages = [
    ...navLinks,
    ...footerResources,
    ...additionalPages
]
