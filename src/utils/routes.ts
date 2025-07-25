// src/utils/routes.ts

import { counties } from '@/lib/counties'

const wisdomVaultLinks = [
    {
        route: '/wisdom-vault',
        label: 'Videos',
        canVisit: true,
        subLinks: []
    },
    {
        route: '/blog',
        label: 'Blog',
        canVisit: true,
        // --- FIX 1: Added this flag to tell the breadcrumbs that /blog has dynamic children (e.g., /blog/[slug]) ---
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
        // --- FIX 2: Added this flag for consistency, to handle dynamic routes like /services/[county] ---
        hasDynamicChildren: true,
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
                route: '/services/companion-care',
                label: 'Companion Care',
                canVisit: true
            }
        ]
    },
    {
        route: '',
        label: 'Wisdom Vault',
        canVisit: false,
        subLinks: wisdomVaultLinks
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

const countyHubPages = counties.map(county => ({
    route: `/${county.slug}`,
    label: county.name,
    canVisit: true,
    hasDynamicChildren: true,
    subLinks: []
}))

export const availablePages = [
    ...navLinks,
    ...footerResources,
    ...additionalPages,
    ...countyHubPages
    // --- FIX 3: Removed the redundant '...wisdomVaultLinks' spread. ---
    // It's already included inside navLinks, and having it twice can cause unexpected behavior.
]
