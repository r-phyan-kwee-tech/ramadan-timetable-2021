import * as React from 'react'
import { useParams } from 'react-router'

import { CircularProgress } from '@material-ui/core'

import PlaceHolderComponent from '../../components/Placeholder'
import { GetSingleDay } from '../../data'
import DetailHeader from './components/DetailHeader'
import TabsView from './components/TabView'

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const { data, loading } = GetSingleDay(id)

  return (
    <>
      {loading && (
        <PlaceHolderComponent>
          <CircularProgress />
        </PlaceHolderComponent>
      )}
      {!loading && data && (
        <>
          <DetailHeader day={data} />
          <TabsView day={data} />
        </>
      )}
    </>
  )
}
export default Detail
