import * as React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

const Setting: React.FC = () => {
  const { path } = useRouteMatch()
  return (
    <>
      <Switch>
        <Route exact path={`${path}/change-font`}>
          Change Font
        </Route>
        <Route exact path={`${path}/license`}>
          Licenses
        </Route>
        <Route exact path={`${path}/credits`}>
          Credits
        </Route>
        <Route exact path={`${path}/change-locations`}>
          Locations
        </Route>
        <Route path="*">Not Found</Route>
      </Switch>
    </>
  )
}
export default Setting
