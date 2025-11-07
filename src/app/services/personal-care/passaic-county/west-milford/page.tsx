import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyPersonalCareCities } from '@/lib/content/cities/passaic-county/personal-care'

const content = passaicCountyPersonalCareCities['west-milford']

export const metadata = content.metadata

export default function PersonalCareWestMilfordPage() {
    return <CityServicePage content={content} />
}
