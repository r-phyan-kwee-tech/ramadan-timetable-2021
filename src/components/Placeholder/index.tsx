import * as React from 'react'

import { CenterElement } from './index.style'

const PlaceHolderComponent: React.FC<{ left?: string }> = ({ children, left }) => {
  return <CenterElement left={left}>{children}</CenterElement>
}
export default PlaceHolderComponent
