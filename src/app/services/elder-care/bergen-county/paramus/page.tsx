import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyElderCareCities } from '@/lib/content/cities/bergen-county/elder-care'

const content = bergenCountyElderCareCities['paramus']

export const metadata = content.metadata

export default function ElderCareParamusPage() {
    return <CityServicePage content={content} />
}
