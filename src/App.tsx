import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import AppBar from './components/AppBar/'
import Detail from './containers/Detail'
import Home from './containers/Home'
import Setting from './containers/Setting'

function App() {
  return (
    <>
      <AppBar hasNavMenu={false} hasMenuButton={true} />
      <div className="wrapper">
        <Router>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`}>
              <Home />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/home`}>
              <Home />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/detail/:id`}>
              <Detail />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/setting`}>
              <Setting />
            </Route>

            <Route path="*">Not Found</Route>
          </Switch>
        </Router>
      </div>
    </>
  )
}

export default App
