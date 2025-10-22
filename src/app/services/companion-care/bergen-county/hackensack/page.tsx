import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyCompanionCareCities } from '@/lib/content/cities/bergen-county/companion-care'

const content = bergenCountyCompanionCareCities['hackensack']

export const metadata = content.metadata

export default function CompanionCareHackensackPage() {
    return <CityServicePage content={content} />
}
