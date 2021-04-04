import * as React from 'react'

import { Grid } from '@material-ui/core'

import { FontLocationContext, NavBarContext } from '../../../App'
import { CenterElement, GridContainer } from '../index.style'

const Credits: React.FC = () => {
  const { setTitle, setNavMenuToggle } = React.useContext(NavBarContext)
  const { convert } = React.useContext(FontLocationContext)
  setTitle(convert('Credits'))
  setNavMenuToggle(true)
  return (
    <>
      <GridContainer container direction="row" justify="center" alignItems="center">
        <Grid item xs={4}>
          <CenterElement>
            <img src={`${process.env.PUBLIC_URL}/icon-128x128.png`} alt="app_logo" />
          </CenterElement>
        </Grid>
      </GridContainer>
      <GridContainer container direction="row" justify="center" alignItems="center">
        <Grid item xs={4}>
          <CenterElement>Version 1.1</CenterElement>
        </Grid>
      </GridContainer>
      <GridContainer container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <CenterElement>
            With the beginning of Ramadan, may your home be filled with the atmosphere of love and mirth. May your life
            be as wonderful as you are throughout the year. Ramadan Mubarak!
          </CenterElement>
        </Grid>
      </GridContainer>
      <GridContainer container direction="row" justify="center" alignItems="center">
        <Grid item xs={8}>
          <CenterElement>
            With Spcial Thanks To Yacoob Danka for his awesome calculation of timetable <br />
            <br />
            Aung TayZar Maung
            <br />
            Aung Myo Lwin <br />
            Win Htaik Aung Khin Thin Zar(Translation)
          </CenterElement>
        </Grid>
      </GridContainer>
      <GridContainer container direction="row" justify="center" alignItems="center">
        <Grid item xs={8}>
          <CenterElement>
            Made With Love
            <br />
            Developed By R Phyan Kwees
            <br />
            <br />
            <a target="_blank" rel="noreferrer" href="https://github.com/r-phyan-kwee-tech/ramdhan-android">
              Android Source
            </a>
            <br />
            <a target="_blank" rel="noreferrer" href="https://github.com/r-phyan-kwee-tech/ramadan-timetable-2021">
              PWA Source
            </a>
            <br />
            <a target="_blank" rel="noreferrer" href="https://github.com/r-phyan-kwee-tech/ramdhan-api">
              Api Source
            </a>
          </CenterElement>
        </Grid>
      </GridContainer>
    </>
  )
}
export default Credits
