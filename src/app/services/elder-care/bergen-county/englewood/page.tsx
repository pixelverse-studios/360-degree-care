import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyElderCareCities } from '@/lib/content/cities/bergen-county/elder-care'

const content = bergenCountyElderCareCities['englewood']

export const metadata = content.metadata

export default function ElderCareEnglewoodPage() {
    return <CityServicePage content={content} />
}
