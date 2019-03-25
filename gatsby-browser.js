import * as React from 'react'
import { Layout } from './src/layout'

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
