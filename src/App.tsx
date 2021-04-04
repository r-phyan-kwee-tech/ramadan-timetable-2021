import React from 'react'
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'

import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import FontDownloadIcon from '@material-ui/icons/FontDownload'
import InboxIcon from '@material-ui/icons/Inbox'
import PeopleIcon from '@material-ui/icons/People'
import Rabbit from 'rabbit-node'

import './App.css'
import { BottomDrawer, BottomList } from './app.style'
import AppBar from './components/AppBar/'
import Detail from './containers/Detail'
import Home from './containers/Home'
import Setting from './containers/Setting'

export const NavBarContext = React.createContext({
  hasNavMenuButton: false,
  title: '',
  setNavMenuToggle: (val: boolean) => {},
  setTitle: (val: string) => {},
})
export const FontLocationContext = React.createContext({
  isZawgyi: localStorage.getItem('IS_ZAWGYI') || 'false',
  setIsZawgyi: () => {
    localStorage.setItem('IS_ZAWGYI', 'false')
  },
  convert: (val: string): string => {
    return ''
  },
  selectedState: localStorage.getItem('STATE') || 'f4241be849a94006ab9f9002a895b206',
  setSelectedState: (state: string) => {
    localStorage.setItem('STATE', state)
  },
})
const DrawerMenu: React.FC<{ bottomDrawOpen: boolean; setBottomDrawerOpen: (flag: boolean) => void }> = ({
  bottomDrawOpen,
  setBottomDrawerOpen,
}) => {
  const history = useHistory()
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
  const [title, setTitle] = React.useState('title')
  const [bottomDrawOpen, setBottomDrawerOpen] = React.useState(false)
  const [isZawgyi, setIsZawgyi] = React.useState(localStorage.getItem('IS_ZAWGYI') || 'false')
  const [selectedState, setSelectedState] = React.useState(
    localStorage.getItem('STATE') || 'f4241be849a94006ab9f9002a895b206',
  )
  return (
    <NavBarContext.Provider
      value={{
        title: title,
        setTitle: setTitle,
        hasNavMenuButton: hasNavMenuButton,
        setNavMenuToggle: setNavMenuToggle,
      }}
    >
      <FontLocationContext.Provider
        value={{
          isZawgyi: isZawgyi,
          setIsZawgyi: () => {
            localStorage.setItem('IS_ZAWGYI', isZawgyi === 'true' ? 'false' : 'true')
            setIsZawgyi(isZawgyi === 'true' ? 'false' : 'true')
          },
          selectedState: selectedState,
          setSelectedState: (state: string) => {
            localStorage.setItem('STATE', state)
            setSelectedState(state)
          },
          convert: (val: string) => (isZawgyi === 'true' ? Rabbit.uni2zg(val) : val),
        }}
      >
        <AppBar
          hasNavMenu={hasNavMenuButton}
          hasMenuButton={true}
          title={title}
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
      </FontLocationContext.Provider>
    </NavBarContext.Provider>
  )
}

export default App
