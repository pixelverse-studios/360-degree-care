import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyElderCareCities } from '@/lib/content/cities/passaic-county/elder-care'

const content = passaicCountyElderCareCities['west-milford']

export const metadata = content.metadata

export default function ElderCareWestMilfordPage() {
    return <CityServicePage content={content} />
}
