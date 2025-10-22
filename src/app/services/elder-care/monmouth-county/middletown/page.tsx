import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyElderCareCities } from '@/lib/content/cities/monmouth-county/elder-care'

const content = monmouthCountyElderCareCities['middletown']

export const metadata = content.metadata

export default function ElderCareMiddletownPage() {
    return <CityServicePage content={content} />
}
