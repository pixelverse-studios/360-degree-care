import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyCompanionCareCities } from '@/lib/content/cities/essex-county/companion-care'

const content = essexCountyCompanionCareCities['west-orange']

export const metadata = content.metadata

export default function CompanionCareWestOrangePage() {
    return <CityServicePage content={content} />
}
