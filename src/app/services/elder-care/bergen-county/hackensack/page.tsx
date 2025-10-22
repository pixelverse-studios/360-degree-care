import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyElderCareCities } from '@/lib/content/cities/bergen-county/elder-care'

const content = bergenCountyElderCareCities['hackensack']

export const metadata = content.metadata

export default function ElderCareHackensackPage() {
    return <CityServicePage content={content} />
}
