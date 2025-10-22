import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyCompanionCareCities } from '@/lib/content/cities/passaic-county/companion-care'

const content = passaicCountyCompanionCareCities['paterson']

export const metadata = content.metadata

export default function CompanionCarePatersonPage() {
    return <CityServicePage content={content} />
}
