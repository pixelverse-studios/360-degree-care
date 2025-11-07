import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyCompanionCareCities } from '@/lib/content/cities/essex-county/companion-care'

const content = essexCountyCompanionCareCities['irvington']

export const metadata = content.metadata

export default function CompanionCareIrvingtonPage() {
    return <CityServicePage content={content} />
}
