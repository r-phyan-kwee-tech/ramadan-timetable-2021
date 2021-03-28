import * as React from 'react'
import { useApiReducer } from '../../api/api'
import { getCountry, getStates } from './data'

const Home: React.FC = () => {
  const countryResponse = useApiReducer(`http://localhost:5000/api?query=${getCountry(1, 1)}`)

  const stateResponse = useApiReducer(
    `http://localhost:5000/api?query=${getStates(200, 1, countryResponse.data?.data.countries.data[0].objectId)}`,
  )
  console.log(stateResponse.data)

  return <>Home </>
}
export default Home
