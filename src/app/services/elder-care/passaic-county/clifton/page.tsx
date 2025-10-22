import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyElderCareCities } from '@/lib/content/cities/passaic-county/elder-care'

const content = passaicCountyElderCareCities['clifton']

export const metadata = content.metadata

export default function ElderCareCliftonPage() {
    return <CityServicePage content={content} />
}
