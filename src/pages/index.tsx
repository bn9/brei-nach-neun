import * as React from 'react'
import { graphql } from 'gatsby'
import { withPageTemplate } from '../templates/page'

const IndexPage = ({
  data: {
    datoCmsStart: {
      childDatoCmsStartBodyTextNode: { body }
    }
  }
}) => <article dangerouslySetInnerHTML={{ __html: body }} />

export default withPageTemplate(IndexPage)

export const query = graphql`
  {
    datoCmsStart {
      id
      childDatoCmsStartBodyTextNode {
        body
      }
    }
  }
`
