import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyPersonalCareCities } from '@/lib/content/cities/passaic-county/personal-care'

const content = passaicCountyPersonalCareCities['paterson']

export const metadata = content.metadata

export default function PersonalCarePatersonPage() {
    return <CityServicePage content={content} />
}
