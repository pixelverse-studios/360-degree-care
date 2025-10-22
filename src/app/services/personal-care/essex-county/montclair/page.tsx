import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyPersonalCareCities } from '@/lib/content/cities/essex-county/personal-care'

const content = essexCountyPersonalCareCities['montclair']

export const metadata = content.metadata

export default function PersonalCareMontclairPage() {
    return <CityServicePage content={content} />
}
