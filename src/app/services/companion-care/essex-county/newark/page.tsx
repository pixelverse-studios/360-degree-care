import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyCompanionCareCities } from '@/lib/content/cities/essex-county/companion-care'

const content = essexCountyCompanionCareCities['newark']

export const metadata = content.metadata

export default function CompanionCareNewarkPage() {
    return <CityServicePage content={content} />
}
