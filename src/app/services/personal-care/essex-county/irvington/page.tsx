import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyPersonalCareCities } from '@/lib/content/cities/essex-county/personal-care'

const content = essexCountyPersonalCareCities['irvington']

export const metadata = content.metadata

export default function PersonalCareIrvingtonPage() {
    return <CityServicePage content={content} />
}
