import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyCompanionCareCities } from '@/lib/content/cities/bergen-county/companion-care'

const content = bergenCountyCompanionCareCities['fort-lee']

export const metadata = content.metadata

export default function CompanionCareFortLeePage() {
    return <CityServicePage content={content} />
}
