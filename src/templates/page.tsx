import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { Page } from '../components/Page'

export const withPageTemplate = (Component: React.ComponentType) => props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteTitle
        }
      }
    }
  `)
  const title =
    data &&
    data.site &&
    data.site.siteMetadata &&
    data.site.siteMetadata.siteTitle
  const currentTitle = props.pageContext.title || ''
  return (
    <Page>
      <Helmet title={`${title} | ${currentTitle}`} />
      <Component {...props} />
    </Page>
  )
}
