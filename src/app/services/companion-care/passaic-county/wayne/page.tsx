import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyCompanionCareCities } from '@/lib/content/cities/passaic-county/companion-care'

const content = passaicCountyCompanionCareCities['wayne']

export const metadata = content.metadata

export default function CompanionCareWaynePage() {
    return <CityServicePage content={content} />
}
