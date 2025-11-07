import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyElderCareCities } from '@/lib/content/cities/essex-county/elder-care'

const content = essexCountyElderCareCities['west-orange']

export const metadata = content.metadata

export default function ElderCareWestOrangePage() {
    return <CityServicePage content={content} />
}
