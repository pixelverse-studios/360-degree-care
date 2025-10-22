import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyCompanionCareCities } from '@/lib/content/cities/passaic-county/companion-care'

const content = passaicCountyCompanionCareCities['clifton']

export const metadata = content.metadata

export default function CompanionCareCliftonPage() {
    return <CityServicePage content={content} />
}
