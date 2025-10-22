import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyCompanionCareCities } from '@/lib/content/cities/essex-county/companion-care'

const content = essexCountyCompanionCareCities['east-orange']

export const metadata = content.metadata

export default function CompanionCareEastOrangePage() {
    return <CityServicePage content={content} />
}
