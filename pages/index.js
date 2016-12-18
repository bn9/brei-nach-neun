import React from 'react';
import { Link } from 'react-router';
import Page from 'components/Page';
import site from './_site.json'

class Index extends React.Component{
  render(){
    const { children, open } = this.props
    return(
      <Page>
          <div dangerouslySetInnerHTML={{ __html: site.start.body }} />
      </Page>
    )
  }
}

export default Index;