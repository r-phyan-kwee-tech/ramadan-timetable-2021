import * as React from 'react'
import { useHistory } from 'react-router'

import { CircularProgress, Grid, IconButton, Snackbar } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'

import PlaceHolderComponent from '../../components/Placeholder'
import { GetCountries, GetStates, GetTimeTableDays } from '../../data'
import { Day } from '../../types'
import { Card, GridContainer } from './index.style'
import { copyToClipboard } from '../../utils/misc'
import { NavBarContext } from '../../App'

const Home: React.FC = () => {
  const history = useHistory()
  const { setNavMenuToggle } = React.useContext(NavBarContext)
  setNavMenuToggle(false)

  const countryResponse = GetCountries()

  GetStates(countryResponse.data.length > 0 ? countryResponse.data[0].objectId : '')

  const { data, loading } = GetTimeTableDays('f4241be849a94006ab9f9002a895b206')
  const [snackState, setSnackState] = React.useState({
    open: false,
  })
  const { open } = snackState
  return (
    <>
      {loading && (
        <PlaceHolderComponent>
          <CircularProgress />
        </PlaceHolderComponent>
      )}

      {!loading &&
        data &&
        data.length !== 0 &&
        data.map((item: Day) => (
          <Card key={item.objectId}>
            <CardActionArea onClick={() => history.push(`detail/${item.objectId}`)}>
              <CardContent>
                <GridContainer container justify="center">
                  <Grid item xs={2}>
                    <Typography component="h1">{item.dayMm}</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="body2" color="textPrimary" component="p">
                      {`${item.calendarDay.split('/')[2]}
                      ${new Date(
                        `${item.calendarDay.split('/')[0]}-${item.calendarDay.split('/')[1]}-${
                          item.calendarDay.split('/')[2]
                        }`,
                      ).toLocaleString('default', { month: 'short' })}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {`${new Date(
                        `${item.calendarDay.split('/')[0]}-${item.calendarDay.split('/')[1]}-${
                          item.calendarDay.split('/')[2]
                        }`,
                      ).toLocaleDateString('en-US', { weekday: 'short' })}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="body2" color="textSecondary" component="strong">
                      {item.sehriTime}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="body2" color="textSecondary" component="strong">
                      {item.iftariTime}
                    </Typography>
                  </Grid>
                </GridContainer>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  copyToClipboard(`${window.location.origin}/detail/${item.objectId}`)
                  setSnackState({ open: true })
                }}
              >
                Share
              </Button>
            </CardActions>
          </Card>
        ))}
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        action={
          <>
            <IconButton aria-label="close" color="inherit" onClick={() => setSnackState({ open: false })}>
              <CloseIcon />
            </IconButton>
          </>
        }
        onClose={() => setSnackState({ open: false })}
        message="URL Copied"
      />
    </>
  )
}
export default Home
