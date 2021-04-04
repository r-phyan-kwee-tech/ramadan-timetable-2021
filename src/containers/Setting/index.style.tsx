import { Grid } from '@material-ui/core'
import MaterialCard from '@material-ui/core/Card'
import styled from 'styled-components'

export const Card = styled(MaterialCard)<{ height?: string }>`
  margin: 1rem;
  height: ${({ height }) => height || '5.5rem'};
  line-height: 5rem;
`
export const GridContainer = styled(Grid)`
  flex-grow: 1;
`
export const CenterElement = styled.div`
  text-align: center;
`
export const LeftElement = styled.div`
  text-align: left;
`

export const RightElement = styled.div`
  text-align: right;
`
