import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyElderCareCities } from '@/lib/content/cities/passaic-county/elder-care'

const content = passaicCountyElderCareCities['wayne']

export const metadata = content.metadata

export default function ElderCareWaynePage() {
    return <CityServicePage content={content} />
}
