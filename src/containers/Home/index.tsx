import * as React from 'react'

import { GetCountries, GetStates, GetTimeTableDays } from '../../data'

const Home: React.FC = () => {
  const countryResponse = GetCountries()

  GetStates(countryResponse.data.length > 0 ? countryResponse.data[0].objectId : '')

  GetTimeTableDays('f4241be849a94006ab9f9002a895b206')

  return <> Home </>
}
export default Home
