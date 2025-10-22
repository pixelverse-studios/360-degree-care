import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyElderCareCities } from '@/lib/content/cities/passaic-county/elder-care'

const content = passaicCountyElderCareCities['paterson']

export const metadata = content.metadata

export default function ElderCarePatersonPage() {
    return <CityServicePage content={content} />
}
