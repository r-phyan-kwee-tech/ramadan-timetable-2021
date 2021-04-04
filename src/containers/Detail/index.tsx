import * as React from 'react'
import { useParams } from 'react-router'

import { CircularProgress } from '@material-ui/core'

import { FontLocationContext, NavBarContext } from '../../App'
import PlaceHolderComponent from '../../components/Placeholder'
import { GetSingleDay } from '../../data'
import DetailHeader from './components/DetailHeader'
import TabsView from './components/TabView'

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const { setNavMenuToggle, setTitle } = React.useContext(NavBarContext)
  const { convert } = React.useContext(FontLocationContext)

  const { data, loading } = GetSingleDay(id)
  setNavMenuToggle(true)
  setTitle(convert(`${data?.calendarDay || ''}  အချိန်ဇယား`))
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
