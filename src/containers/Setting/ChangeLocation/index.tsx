import * as React from 'react'

import { Checkbox, CircularProgress, Grid } from '@material-ui/core'

import { FontLocationContext, NavBarContext } from '../../../App'
import { ErrorText } from '../../../app.style'
import PlaceHolderComponent from '../../../components/Placeholder'
import { GetStates } from '../../../data'
import { State } from '../../../types'
import { Card, GridContainer, LeftElement, RightElement } from '../index.style'

const ChangeLocation: React.FC = () => {
  const { setTitle, setNavMenuToggle } = React.useContext(NavBarContext)
  const { convert, setSelectedState, selectedState } = React.useContext(FontLocationContext)
  const { data, error, loading } = GetStates('a523a4ce44f649b2a2332ff636e9242f')

  setTitle(convert('တိုင်းနှင့်ပြည်နယ်ရွေးရန်'))
  setNavMenuToggle(true)

  return (
    <>
      {loading && (
        <PlaceHolderComponent>
          <CircularProgress />
        </PlaceHolderComponent>
      )}
      {!loading && error && (
        <PlaceHolderComponent left="40%">
          <ErrorText>တိုင်းနှင့်ပြည်နယ်စာရင်းရယူစဥ် အမှားတခုဖြစ်သွားပါသည်။ Refresh ပြန်လုပ်ပေးပါ</ErrorText>
        </PlaceHolderComponent>
      )}
      {!loading &&
        data.map((item: State) => (
          <Card key={item.objectId}>
            <GridContainer container direction="row" justify="flex-end" alignItems="center" spacing={2}>
              <Grid item xs={8}>
                <LeftElement>{convert(item.nameMmUni)}</LeftElement>
              </Grid>

              <Grid item xs={2}>
                <RightElement>
                  <Checkbox
                    onChange={() => setSelectedState(item.objectId)}
                    checked={item.objectId === selectedState}
                    name="checkedB"
                    color="primary"
                  />
                </RightElement>
              </Grid>
            </GridContainer>
          </Card>
        ))}
    </>
  )
}
export default ChangeLocation
