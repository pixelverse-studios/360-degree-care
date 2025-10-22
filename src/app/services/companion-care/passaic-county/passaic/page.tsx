import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyCompanionCareCities } from '@/lib/content/cities/passaic-county/companion-care'

const content = passaicCountyCompanionCareCities['passaic']

export const metadata = content.metadata

export default function CompanionCarePassaicPage() {
    return <CityServicePage content={content} />
}
