import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyElderCareCities } from '@/lib/content/cities/monmouth-county/elder-care'

const content = monmouthCountyElderCareCities['freehold']

export const metadata = content.metadata

export default function ElderCareFreeholdPage() {
    return <CityServicePage content={content} />
}
