import * as React from 'react'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import TuneIcon from '@material-ui/icons/Tune'

import { MenuButton, MenuContainer, NavButton, NavTitle, NavTitleBar, NavToolBar } from './index.style'

interface AppBarType {
  title?: string
  hasNavMenu: boolean
  hasMenuButton: boolean
  onNavIconClick?: () => void
  onMenuClick?: () => void
}
const AppBar: React.FC<AppBarType> = ({ title, hasMenuButton, hasNavMenu, onNavIconClick, onMenuClick }) => {
  return (
    <NavTitleBar position="static">
      <NavToolBar>
        {hasNavMenu && (
          <NavButton aria-label="Menu" onClick={() => onNavIconClick && onNavIconClick()}>
            <ArrowBackIcon />
          </NavButton>
        )}
        <NavTitle variant="h6">{title}asdf</NavTitle>
        {hasMenuButton && (
          <MenuContainer>
            <MenuButton aria-label="menu" onClick={() => onMenuClick && onMenuClick()}>
              <TuneIcon />
            </MenuButton>
          </MenuContainer>
        )}
      </NavToolBar>
    </NavTitleBar>
  )
}

export default AppBar
