import * as React from 'react'

import Box from '@material-ui/core/Box'
import CardContent from '@material-ui/core/CardContent'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'

import { FontLocationContext } from '../../../../App'
import { Day } from '../../../../types'
import { Card, GridContainer, TabContainer } from './index.style'

const TabPanel: React.FC<{ children: React.ReactNode; value: number; index: number }> = ({
  children,
  value,
  index,
  ...other
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const TabsView: React.FC<{ day: Day }> = ({ day }) => {
  const [value, setValue] = React.useState(0)
  const { convert } = React.useContext(FontLocationContext)
  const handleChange = (event: React.ChangeEvent<{}>, tabValue: any) => {
    setValue(tabValue)
  }

  return (
    <>
      <TabContainer>
        <GridContainer container direction="row" justify="center" alignItems="center">
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="En" />
            <Tab label={convert(`မြန်မာ`)} />
            <Tab label="Arabic" />
          </Tabs>
        </GridContainer>
        <TabPanel value={value} index={0}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Today Dua to pray
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {day.duaEn}
              </Typography>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {convert(`ယနေ့ဖတ်ရန်ဒိုအာ`)}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {convert(day.duaMmUni)}
              </Typography>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Today Dua to pray
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {day.duaAr}
              </Typography>
            </CardContent>
          </Card>
        </TabPanel>
      </TabContainer>
    </>
  )
}

export default TabsView
