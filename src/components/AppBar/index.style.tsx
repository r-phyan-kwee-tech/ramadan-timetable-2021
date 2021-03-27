import { IconButton, Typography } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import styled from 'styled-components'

import { PRIMARY_COLOR } from '../../style'
export const NavTitleBar = styled(AppBar)`
  &&& {
    background-color: ${PRIMARY_COLOR};
    height: 56px;
    position: fixed;

    top: 0;
    @media screen and (min-width: 64em) {
      position: sticky;
    }
  }
`
export const NavToolBar = styled(Toolbar)`
  &&& {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`
export const NavTitle = styled(Typography)`
  flex-grow: 1;
  color: black;
`
export const NavButton = styled(IconButton)`
  &&& {
    float: left;
  }
`
export const MenuContainer = styled.div`
  flex: 0;
  justify-content: flex-end;
`
export const MenuButton = styled(IconButton)``
