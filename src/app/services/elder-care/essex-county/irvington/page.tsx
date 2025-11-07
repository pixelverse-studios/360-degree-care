import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyElderCareCities } from '@/lib/content/cities/essex-county/elder-care'

const content = essexCountyElderCareCities['irvington']

export const metadata = content.metadata

export default function ElderCareIrvingtonPage() {
    return <CityServicePage content={content} />
}
