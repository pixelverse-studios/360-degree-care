import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyElderCareCities } from '@/lib/content/cities/passaic-county/elder-care'

const content = passaicCountyElderCareCities['totowa']

export const metadata = content.metadata

export default function ElderCareTotowaPage() {
    return <CityServicePage content={content} />
}
