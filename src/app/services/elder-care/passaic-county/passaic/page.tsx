import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyElderCareCities } from '@/lib/content/cities/passaic-county/elder-care'

const content = passaicCountyElderCareCities['passaic']

export const metadata = content.metadata

export default function ElderCarePassaicPage() {
    return <CityServicePage content={content} />
}
