import * as React from 'react'

import Grid from '@material-ui/core/Grid'

import { Day } from '../../../../types'
import { Card, DateTitle, GridContainer, TimeDescription, TimeTitle } from './index.style'

const DetailHeader: React.FC<{ day: Day }> = ({ day }) => {
  return (
    <>
      <GridContainer container direction="row" justify="center" alignContent="center">
        <Grid item xs={6}>
          <Card>
            <TimeTitle> {day.sehriTimeDescMmUni}</TimeTitle>
            <TimeDescription> {day.sehriTime}</TimeDescription>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <TimeTitle> {day.iftariTimeDescMmUni}</TimeTitle>
            <TimeDescription> {day.iftariTime}</TimeDescription>
          </Card>
        </Grid>
      </GridContainer>
      <Card height={day.isKadir ? '7rem' : '3rem'}>
        <GridContainer container direction="row" justify="center" alignContent="center">
          <Grid item xs={3}>
            <DateTitle>
              {`${day.calendarDay.split('/')[2]} ${new Date(
                `${day.calendarDay.split('/')[0]}-${day.calendarDay.split('/')[1]}-${day.calendarDay.split('/')[2]}`,
              ).toLocaleString('default', { month: 'short' })}`}
            </DateTitle>
          </Grid>
          <Grid item xs={3}>
            <DateTitle>{`${new Date(
              `${day.calendarDay.split('/')[0]}-${day.calendarDay.split('/')[1]}-${day.calendarDay.split('/')[2]}`,
            ).toLocaleDateString('en-US', { weekday: 'short' })}`}</DateTitle>
          </Grid>
          <Grid item xs={3}>
            <DateTitle>{`${new Date(
              `${day.calendarDay.split('/')[0]}-${day.calendarDay.split('/')[1]}-${day.calendarDay.split('/')[2]}`,
            ).toLocaleString('default', { year: 'numeric' })}`}</DateTitle>
          </Grid>
        </GridContainer>
        <TimeDescription>ယနေ့သည် ကဒရ်ညမြတ်ဖြစ်ပါသည်</TimeDescription>
      </Card>
      <GridContainer container direction="row" justify="center" alignContent="center">
        <Grid item xs={12}>
          <Card>
            <TimeTitle align="left"> ဝါချည်ချိန်ဖတ်ရန်ဒိုအာ </TimeTitle>
            <TimeDescription>နဝိုင် သူအန်အစူးမာကဒန် မင်ရှိုင်ရ် ရမ်ဇာန် </TimeDescription>
          </Card>
        </Grid>
      </GridContainer>
      <GridContainer container direction="row" justify="center" alignContent="center">
        <Grid item xs={12}>
          <Card>
            <TimeTitle align="left"> ဝါဖြေချိန်ဖတ်ရန်ဒိုအာ </TimeTitle>
            <TimeDescription>အလ္လာဟွန်းမာ ဗေစ့်မေကာ အမုသို ဝအားယာ </TimeDescription>
          </Card>
        </Grid>
      </GridContainer>
    </>
  )
}
export default DetailHeader
