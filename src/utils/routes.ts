export const navLinks = [
    {
        route: '/about',
        label: 'About Us',
        subLinks: []
    },
    {
        route: '',
        label: 'Services',
        subLinks: [
            { route: '/services/home-health-care', label: 'Home Health Care' },
            { route: '/services/personal-care', label: 'Personal Care' },
            {
                route: '/services/staffing',
                label: 'Staffing'
            }
        ]
    },
    {
        route: '/faq',
        label: 'FAQs',
        subLinks: []
    }
]

export const footerResources = [
    {
        route: '/privacy-policy',
        label: 'Privacy Policy'
    },
    {
        route: '/legal-disclaimer',
        label: 'Legal Disclaimer'
    },
    {
        route: '/nondiscrimination',
        label: 'Nondiscrimination & Accessibility'
    }
]
