import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyCompanionCareCities } from '@/lib/content/cities/passaic-county/companion-care'

const content = passaicCountyCompanionCareCities['totowa']

export const metadata = content.metadata

export default function CompanionCareTotowaPage() {
    return <CityServicePage content={content} />
}
