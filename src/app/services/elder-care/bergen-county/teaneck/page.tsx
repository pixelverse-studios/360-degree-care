import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyElderCareCities } from '@/lib/content/cities/bergen-county/elder-care'

const content = bergenCountyElderCareCities['teaneck']

export const metadata = content.metadata

export default function ElderCareTeaneckPage() {
    return <CityServicePage content={content} />
}
