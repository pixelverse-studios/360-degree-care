import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyElderCareCities } from '@/lib/content/cities/monmouth-county/elder-care'

const content = monmouthCountyElderCareCities['howell']

export const metadata = content.metadata

export default function ElderCareHowellPage() {
    return <CityServicePage content={content} />
}
