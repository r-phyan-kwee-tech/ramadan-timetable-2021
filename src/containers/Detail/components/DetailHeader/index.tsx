import * as React from 'react'

import Grid from '@material-ui/core/Grid'

import { FontLocationContext } from '../../../../App'
import { Day } from '../../../../types'
import { Card, DateTitle, GridContainer, TimeDescription, TimeTitle } from './index.style'

const DetailHeader: React.FC<{ day: Day }> = ({ day }) => {
  const { convert } = React.useContext(FontLocationContext)
  return (
    <>
      <GridContainer container direction="row" justify="center" alignContent="center">
        <Grid item xs={6}>
          <Card>
            <TimeTitle> {convert(`${day.sehriTimeDescMmUni}`)} </TimeTitle>
            <TimeDescription> {day.sehriTime}</TimeDescription>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <TimeTitle> {convert(`${day.iftariTimeDescMmUni}`)}</TimeTitle>
            <TimeDescription> {day.iftariTime}</TimeDescription>
          </Card>
        </Grid>
      </GridContainer>
      <Card height={day.isKadir || day.isEid ? '7rem' : '5rem'}>
        <GridContainer container direction="row" justify="center" alignContent="center">
          <Grid item xs={4}>
            <DateTitle>
              {`${day.calendarDay.split('/')[2]} ${new Date(
                `${day.calendarDay.split('/')[0]}-${day.calendarDay.split('/')[1]}-${day.calendarDay.split('/')[2]}`,
              ).toLocaleString('default', { month: 'short' })}`}
            </DateTitle>
          </Grid>
          <Grid item xs={4}>
            <DateTitle>{`${new Date(
              `${day.calendarDay.split('/')[0]}-${day.calendarDay.split('/')[1]}-${day.calendarDay.split('/')[2]}`,
            ).toLocaleDateString('en-US', { weekday: 'short' })}`}</DateTitle>
          </Grid>
          <Grid item xs={4}>
            <DateTitle>{`${new Date(
              `${day.calendarDay.split('/')[0]}-${day.calendarDay.split('/')[1]}-${day.calendarDay.split('/')[2]}`,
            ).toLocaleString('default', { year: 'numeric' })}`}</DateTitle>
          </Grid>
        </GridContainer>
        {day.isKadir && <TimeDescription>{convert(`ယနေ့သည် ကဒရ်ညမြတ်ဖြစ်ပါသည်`)}</TimeDescription>}
        {day.isEid && <TimeDescription>{convert(`ပျော်ရွှင်စရာ Eid နေ့ ဖြစ်ပါစေ။`)}</TimeDescription>}
      </Card>
      <GridContainer container direction="row" justify="center" alignContent="center">
        <Grid item xs={12}>
          <Card height="7.5rem">
            <TimeTitle align="left">{convert(`ဝါချည်ချိန်ဖတ်ရန်ဒိုအာ`)} </TimeTitle>
            <TimeDescription>{convert(`နဝိုင် သူအန်အစူးမာကဒန် မင်ရှိုင်ရ် ရမ်ဇာန် `)}</TimeDescription>
          </Card>
        </Grid>
      </GridContainer>
      <GridContainer container direction="row" justify="center" alignContent="center">
        <Grid item xs={12}>
          <Card height="7.5rem">
            <TimeTitle align="left">{convert(`ဝါဖြေချိန်ဖတ်ရန်ဒိုအာ`)} </TimeTitle>
            <TimeDescription>
              {convert(`အလ္လာဟွန်းမာ လကာစွမ်းသို ဝဘေကာ အာ့မန်းသို့ ဝအလာရဇ်တေကာ အဖတရ်သို`)}{' '}
            </TimeDescription>
          </Card>
        </Grid>
      </GridContainer>
    </>
  )
}
export default DetailHeader
