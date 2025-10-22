import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyElderCareCities } from '@/lib/content/cities/essex-county/elder-care'

const content = essexCountyElderCareCities['east-orange']

export const metadata = content.metadata

export default function ElderCareEastOrangePage() {
    return <CityServicePage content={content} />
}
