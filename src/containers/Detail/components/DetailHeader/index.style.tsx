import MaterialCard from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'

export const GridContainer = styled(Grid)`
  flex-grow: 1;
`
export const Card = styled(MaterialCard)<{ height?: string }>`
  margin: 1rem;
  height: ${({ height }) => height || '5.5rem'};
`
export const TimeDescription = styled.p<{ align?: string }>`
  text-align: ${({ align }) => align || 'center'};
  padding: 0 1rem;
  font-size: 16px;
`
export const TimeTitle = styled.strong<{ align?: string }>`
  text-align: ${({ align }) => align || 'center'};
  font-size: 16px;
  padding: 0 1rem;
  display: block;
  margin: 16px 0;
`
export const DateTitle = styled.strong<{ align?: string }>`
  text-align: ${({ align }) => align || 'center'};
  font-size: 20px;
  padding: 0 1rem;
  display: block;
  margin: 16px 0;
`

export const DateDescription = styled.p<{ align?: string }>`
  text-align: ${({ align }) => align || 'center'};
  padding: 0 1rem;
  font-size: 16px;
`
