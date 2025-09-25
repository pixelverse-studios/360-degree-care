import { NextRequest, NextResponse } from 'next/server'

const UTM_PARAMS = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content'
] as const

export function middleware(request: NextRequest) {
    const { pathname, searchParams } = request.nextUrl

    const response = NextResponse.next()

    const utmData: Record<string, string> = {}
    let hasUtmParams = false

    UTM_PARAMS.forEach(param => {
        const value = searchParams.get(param)
        if (value) {
            utmData[param] = value.toLowerCase()
            hasUtmParams = true
        }
    })

    if (hasUtmParams) {
        const campaignData = {
            ...utmData,
            landing_page: pathname,
            timestamp: new Date().toISOString(),
            session_id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
        }

        response.cookies.set('campaign_data', JSON.stringify(campaignData), {
            httpOnly: false,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 30
        })
    }

    return response
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico|api/).*)']
}
