import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyElderCareCities } from '@/lib/content/cities/bergen-county/elder-care'

const content = bergenCountyElderCareCities['fort-lee']

export const metadata = content.metadata

export default function ElderCareConsultingFortLeePage() {
    return <CityServicePage content={content} />
}
