import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyPersonalCareCities } from '@/lib/content/cities/passaic-county/personal-care'

const content = passaicCountyPersonalCareCities['totowa']

export const metadata = content.metadata

export default function PersonalCareTotowaPage() {
    return <CityServicePage content={content} />
}
