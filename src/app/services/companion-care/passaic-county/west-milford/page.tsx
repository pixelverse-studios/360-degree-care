import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyCompanionCareCities } from '@/lib/content/cities/passaic-county/companion-care'

const content = passaicCountyCompanionCareCities['west-milford']

export const metadata = content.metadata

export default function CompanionCareWestMilfordPage() {
    return <CityServicePage content={content} />
}
