import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyPersonalCareCities } from '@/lib/content/cities/essex-county/personal-care'

const content = essexCountyPersonalCareCities['west-orange']

export const metadata = content.metadata

export default function PersonalCareWestOrangePage() {
    return <CityServicePage content={content} />
}
