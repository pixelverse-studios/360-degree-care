import oceanCountyData from './seo/countyData/ocean-county'
import monmouthCountyData from './seo/countyData/monmouth-county'
import bergenCountyData from './seo/countyData/bergen-county'
import passaicCountyData from './seo/countyData/passaic-county'
import { CountyData } from './types'

export const counties: CountyData[] = [
    bergenCountyData,
    monmouthCountyData,
    oceanCountyData,
    passaicCountyData
]
