import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyPersonalCareCities } from '@/lib/content/cities/bergen-county/personal-care'

const content = bergenCountyPersonalCareCities['hackensack']

export const metadata = content.metadata

export default function PersonalCareHackensackPage() {
    return <CityServicePage content={content} />
}
