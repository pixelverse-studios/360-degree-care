import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyElderCareCities } from '@/lib/content/cities/bergen-county/elder-care'

const content = bergenCountyElderCareCities['ridgewood']

export const metadata = content.metadata

export default function ElderCareConsultingRidgewoodPage() {
    return <CityServicePage content={content} />
}
