import * as React from 'react'

import { Grid, Switch } from '@material-ui/core'

import { FontLocationContext, NavBarContext } from '../../../App'
import { Card, CenterElement, GridContainer } from '../index.style'

const ChangeFont: React.FC = () => {
  const { setTitle, setNavMenuToggle } = React.useContext(NavBarContext)
  const { convert, isZawgyi, setIsZawgyi } = React.useContext(FontLocationContext)
  setTitle(convert('ဖောင့်ပြောင်းရန်'))
  setNavMenuToggle(true)
  return (
    <Card>
      <GridContainer container direction="row" justify="center" alignItems="center">
        <Grid item xs={4}>
          <CenterElement>ZawGyi</CenterElement>
        </Grid>
        <Grid item xs={4}>
          <CenterElement>
            <Switch
              onChange={() => setIsZawgyi()}
              checked={isZawgyi === 'false'}
              color="primary"
              name="checkedB"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </CenterElement>
        </Grid>
        <Grid item xs={4}>
          <CenterElement>Unicode</CenterElement>
        </Grid>
      </GridContainer>
    </Card>
  )
}
export default ChangeFont
