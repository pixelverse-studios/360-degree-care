import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyElderCareCities } from '@/lib/content/cities/bergen-county/elder-care'

const content = bergenCountyElderCareCities['westwood']

export const metadata = content.metadata

export default function ElderCareWestwoodPage() {
    return <CityServicePage content={content} />
}
