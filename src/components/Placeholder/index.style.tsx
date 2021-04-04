import styled from 'styled-components'

export const CenterElement = styled.div<{ left?: string }>`
  position: absolute;
  left: ${({ left }) => (left ? left : '50%')};
  top: 50%;
`
