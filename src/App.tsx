import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import React from 'react'
import FontDownloadIcon from '@material-ui/icons/FontDownload'
import PeopleIcon from '@material-ui/icons/People'
import InboxIcon from '@material-ui/icons/Inbox'
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import { BottomList, BottomDrawer } from './app.style'
import './App.css'
import AppBar from './components/AppBar/'
import Detail from './containers/Detail'
import Home from './containers/Home'
import Setting from './containers/Setting'

export const NavBarContext = React.createContext({
  hasNavMenuButton: false,
  setNavMenuToggle: (val: boolean) => {},
})

const DrawerMenu: React.FC<{ bottomDrawOpen: boolean; setBottomDrawerOpen: (flag: boolean) => void }> = ({
  bottomDrawOpen,
  setBottomDrawerOpen,
}) => {
  let history = useHistory()
  return (
    <BottomDrawer anchor="bottom" open={bottomDrawOpen} onClose={() => setBottomDrawerOpen(false)}>
      <BottomList className="bottom-list">
        {[
          {
            name: 'Change Locations',
            icon: <InboxIcon />,
            onClick: () => {
              setBottomDrawerOpen(false)
              history.push(`${process.env.PUBLIC_URL}/setting/change-locations`)
            },
          },
          {
            name: 'Font Settings',
            icon: <FontDownloadIcon />,
            onClick: () => {
              setBottomDrawerOpen(false)
              history.push(`${process.env.PUBLIC_URL}/setting/change-font`)
            },
          },
          {
            name: 'Credits',
            icon: <PeopleIcon />,
            onClick: () => {
              setBottomDrawerOpen(false)
              history.push(`${process.env.PUBLIC_URL}/setting/credits`)
            },
          },
        ].map((item: { name: string; icon: React.ReactNode; onClick: () => void }, index: number) => (
          <div key={item.name}>
            <ListItem button key={item.name} onClick={item.onClick}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </div>
        ))}
      </BottomList>
    </BottomDrawer>
  )
}

function App() {
  const [hasNavMenuButton, setNavMenuToggle] = React.useState(false)
  const [bottomDrawOpen, setBottomDrawerOpen] = React.useState(false)
  return (
    <NavBarContext.Provider value={{ hasNavMenuButton: hasNavMenuButton, setNavMenuToggle: setNavMenuToggle }}>
      <>
        <AppBar
          hasNavMenu={hasNavMenuButton}
          hasMenuButton={true}
          onMenuClick={() => setBottomDrawerOpen(!bottomDrawOpen)}
          onNavIconClick={() => window.location.replace(window.location.origin)}
        />
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
            <DrawerMenu bottomDrawOpen={bottomDrawOpen} setBottomDrawerOpen={setBottomDrawerOpen} />
          </Router>
        </div>
      </>
    </NavBarContext.Provider>
  )
}

export default App
