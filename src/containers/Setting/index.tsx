import * as React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import ChangeFont from './ChangeFont'
import ChangeLocation from './ChangeLocation'
import Credits from './Credits'

const Setting: React.FC = () => {
  const { path } = useRouteMatch()
  return (
    <>
      <Switch>
        <Route exact path={`${path}/change-font`}>
          <ChangeFont />
        </Route>

        <Route exact path={`${path}/credits`}>
          <Credits />
        </Route>
        <Route exact path={`${path}/change-locations`}>
          <ChangeLocation />
        </Route>
        <Route path="*">Not Found</Route>
      </Switch>
    </>
  )
}
export default Setting
