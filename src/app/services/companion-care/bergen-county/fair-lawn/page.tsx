import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyCompanionCareCities } from '@/lib/content/cities/bergen-county/companion-care'

const content = bergenCountyCompanionCareCities['fair-lawn']

export const metadata = content.metadata

export default function CompanionCareFairLawnPage() {
    return <CityServicePage content={content} />
}
