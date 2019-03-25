import * as React from 'react'
import { graphql } from 'gatsby'
import './markdown-styles.css'
import { withPageTemplate } from './page'

const MarkdownTemplate: React.SFC<any> = ({ pageContext: { body, title } }) => (
  <React.Fragment>
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: body }} />
  </React.Fragment>
)

export default withPageTemplate(MarkdownTemplate)
