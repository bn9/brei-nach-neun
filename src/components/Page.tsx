import * as React from 'react'
import styled from 'styled-components'
import { media } from '../styles'
import useEventListener from 'use-event-listener'

export const Page = styled.section`
  width:100%;
  margin:auto;
  background:#ffffff;
  padding:24px 32px;
  & > *:not(h1) {
    max-width:800px;
    margin:0 auto 0 auto;
  }
  ${media.tablet`
    padding:24px 48px 56px 48px;
  `}
  ${media.desktop`
    padding:24px 96px 56px 96px;
  `}
  ${media.portrait`
    padding:16px 32px;
  `}
`

// export const Page: React.SFC<{}> = ({ children }) => {
//   return <PageWrapper {...{ ref }}>{children}</PageWrapper>
// }
