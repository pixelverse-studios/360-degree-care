import { CampaignData, UTMParams } from '@/lib/analytics'

export const UTM_SOURCES = {
    FACEBOOK: 'facebook',
    INSTAGRAM: 'instagram',
    GOOGLE: 'google',
    EMAIL: 'email',
    LINKEDIN: 'linkedin',
    TWITTER: 'twitter',
    TIKTOK: 'tiktok'
} as const

export const UTM_MEDIUMS = {
    SOCIAL_CPC: 'social-cpc',
    SOCIAL: 'social',
    CPC: 'cpc',
    SEARCH_CPC: 'search-cpc',
    DISPLAY_CPC: 'display-cpc',
    EMAIL: 'email',
    REFERRAL: 'referral',
    ORGANIC: 'organic'
} as const

export type UTMSource = (typeof UTM_SOURCES)[keyof typeof UTM_SOURCES]
export type UTMMedium = (typeof UTM_MEDIUMS)[keyof typeof UTM_MEDIUMS]

export function generateCampaignURL(
    baseURL: string,
    params: UTMParams
): string {
    const url = new URL(baseURL)

    Object.entries(params).forEach(([key, value]) => {
        if (value) {
            url.searchParams.set(key, value)
        }
    })

    return url.toString()
}

export function generateFacebookAdURL(
    baseURL: string,
    campaignName: string,
    adSetName?: string,
    adName?: string
): string {
    const params: UTMParams = {
        utm_source: UTM_SOURCES.FACEBOOK,
        utm_medium: UTM_MEDIUMS.SOCIAL_CPC,
        utm_campaign: campaignName.toLowerCase().replace(/\s+/g, '-'),
        utm_content: adSetName
            ? `${adSetName}_${adName || ''}`.toLowerCase().replace(/\s+/g, '-')
            : undefined
    }

    return generateCampaignURL(baseURL, params)
}

export function generateInstagramAdURL(
    baseURL: string,
    campaignName: string,
    adSetName?: string,
    adName?: string
): string {
    const params: UTMParams = {
        utm_source: UTM_SOURCES.INSTAGRAM,
        utm_medium: UTM_MEDIUMS.SOCIAL_CPC,
        utm_campaign: campaignName.toLowerCase().replace(/\s+/g, '-'),
        utm_content: adSetName
            ? `${adSetName}_${adName || ''}`.toLowerCase().replace(/\s+/g, '-')
            : undefined
    }

    return generateCampaignURL(baseURL, params)
}

export function generateGoogleAdURL(
    baseURL: string,
    campaignName: string,
    adGroupName?: string,
    keyword?: string,
    isDisplay: boolean = false
): string {
    const params: UTMParams = {
        utm_source: UTM_SOURCES.GOOGLE,
        utm_medium: isDisplay
            ? UTM_MEDIUMS.DISPLAY_CPC
            : UTM_MEDIUMS.SEARCH_CPC,
        utm_campaign: campaignName.toLowerCase().replace(/\s+/g, '-'),
        utm_content: adGroupName?.toLowerCase().replace(/\s+/g, '-'),
        utm_term: keyword?.toLowerCase().replace(/\s+/g, '-')
    }

    return generateCampaignURL(baseURL, params)
}

export function parseCampaignSource(source?: string): string {
    if (!source) return 'Direct'

    const sourceMap: Record<string, string> = {
        [UTM_SOURCES.FACEBOOK]: 'Facebook Ads',
        [UTM_SOURCES.INSTAGRAM]: 'Instagram Ads',
        [UTM_SOURCES.GOOGLE]: 'Google Ads',
        [UTM_SOURCES.EMAIL]: 'Email Marketing',
        [UTM_SOURCES.LINKEDIN]: 'LinkedIn',
        [UTM_SOURCES.TWITTER]: 'X (Twitter)',
        [UTM_SOURCES.TIKTOK]: 'TikTok'
    }

    return sourceMap[source.toLowerCase()] || source
}

export function getSourceIcon(source?: string): string {
    if (!source) return '🔗'

    const iconMap: Record<string, string> = {
        [UTM_SOURCES.FACEBOOK]: '📘',
        [UTM_SOURCES.INSTAGRAM]: '📸',
        [UTM_SOURCES.GOOGLE]: '🔍',
        [UTM_SOURCES.EMAIL]: '📧',
        [UTM_SOURCES.LINKEDIN]: '💼',
        [UTM_SOURCES.TWITTER]: '🐦',
        [UTM_SOURCES.TIKTOK]: '🎵'
    }

    return iconMap[source.toLowerCase()] || '🔗'
}

export function formatCampaignName(campaign?: string): string {
    if (!campaign) return 'Unknown Campaign'

    return campaign
        .split(/[-_]/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

export function isValidUTMSource(source?: string): boolean {
    if (!source) return false
    return Object.values(UTM_SOURCES).includes(source as UTMSource)
}

export function isValidUTMMedium(medium?: string): boolean {
    if (!medium) return false
    return Object.values(UTM_MEDIUMS).includes(medium as UTMMedium)
}

export function getCampaignMetrics(campaignData: CampaignData) {
    return {
        source: parseCampaignSource(campaignData.utm_source),
        medium: campaignData.utm_medium || 'Unknown',
        campaign: formatCampaignName(campaignData.utm_campaign),
        landingPage: campaignData.landing_page || '/',
        timestamp: campaignData.timestamp
            ? new Date(campaignData.timestamp).toLocaleString()
            : 'Unknown',
        isValid:
            isValidUTMSource(campaignData.utm_source) &&
            isValidUTMMedium(campaignData.utm_medium)
    }
}

export function generateURLExamples(
    baseURL: string = 'https://www.360degreecare.net'
) {
    return {
        facebook: generateFacebookAdURL(
            baseURL,
            'Summer Home Care 2025',
            'seniors',
            'video_ad_1'
        ),
        instagram: generateInstagramAdURL(
            baseURL,
            'Elder Care Campaign',
            'testimonials',
            'carousel_2'
        ),
        googleSearch: generateGoogleAdURL(
            baseURL,
            'Home Healthcare NJ',
            'bergen_county',
            'home health aide',
            false
        ),
        googleDisplay: generateGoogleAdURL(
            baseURL,
            'Remarketing 2025',
            'past_visitors',
            undefined,
            true
        )
    }
}
