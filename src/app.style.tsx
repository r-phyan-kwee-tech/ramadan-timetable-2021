import { List, Drawer } from '@material-ui/core'
import styled from 'styled-components'

export const BottomList = styled(List)``
export const BottomDrawer = styled(Drawer)`
  &&& {
    @media screen and (min-width: 64em) {
      div:nth-child(3) {
        width: 50%;
        left: 25%;
      }
      .bottom-list {
        width: auto;
      }
    }
  }
`
