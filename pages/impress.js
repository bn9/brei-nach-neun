import React from 'react'
import Page from 'components/Page'
import site from './_site.json'

const Impress = (props) => {
	const {impressum} = site
	return(
		<Page>
			<h1>Impressum</h1>
			<a href={`mailto:${impressum.mail}`}>
				{impressum.mail}
			</a>
			<a>{impressum.phone}</a>
			<a dangerouslySetInnerHTML={{ __html: impressum.address }} />
		</Page>
	)
}

export default Impress