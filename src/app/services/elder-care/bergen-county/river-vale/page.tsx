import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyElderCareCities } from '@/lib/content/cities/bergen-county/elder-care'

const content = bergenCountyElderCareCities['river-vale']

export const metadata = content.metadata

export default function ElderCareConsultingRiverValePage() {
    return <CityServicePage content={content} />
}
