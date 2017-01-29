import React, { Component } from 'react'
import Page from 'components/Page'
import site from './_site.json'
import GoogleMap from 'google-map-react'
import { letters, Path, Svg } from 'components/AnimatedTitle'
import { media } from 'styles';
import styled from 'styled-components'

class Impress extends Component{
	constructor(){
		super();
		this.state = {
			isLoaded:false
		}
		this.loader = this.loader.bind(this);
	}
	componentWillMount(){
		this.loader;
	}
	componentWillUnmount(){
		this.setState({isLoaded:false})
	}
	loader = () => {
		if (this.props.open != false ){
			this.setState({isLoaded:true})
		}
	}

	render(){
		const { props } = this.props;
		const { isLoaded } = this.state;
		const { mail, phone, address, map } = site.impressum;
		const Icon = props => (
			<svg viewBox="0 0 1336 200" width="200px">
				{ letters.map( (item,i) => (
					<g key={i} className={`letter letter--${i+1}${item.className?' '+item.className:''}`}>
						<g className="letter__part">
							<Path
								strokeWidth="15px"
								transform={typeof item.t != "undefined"?item.t:''}
								color={item.c[2]}
								d={item.d}
							/>
						</g>
					</g>
				))}
			</svg>
		)
		const ImpressWrapper = styled.div`
			display:flex;
			justif-content:space-between;
			flex-wrap:wrap;
			flex-direction: column;
			padding-bottom: 32px;
			${ media.desktop`
				flex-direction:row;
			`}
		`
		return(
			<Page>
				<ImpressWrapper>
					<header
						style={{margin:'auto',paddingBottom:'32px'}}
					>
						<h1>Impressum</h1>
						<p><a href={`mailto:${mail}`}>{mail} </a></p>
						<p><a href={`tel:${phone}`}>{phone}</a></p>
						<span dangerouslySetInnerHTML={{ __html: address }} />
					</header>
					<div 
						style={{
							margin:'auto',
							width:'50%',
							height:'50vh',
							minWidth:'320px',
							minHeight:'320px',
						}}
					>
						<GoogleMap
			        		defaultCenter={{lat:map.latitude,lng: map.longitude}}
			        		defaultZoom={16}
			        	>
			        		<div 
			        			style={{width:'50px',height:'50px',left:'-25px',top:'-25px',position:'absolute'}}
			        			lat={map.latitude} lng={map.longitude}>
				        		<svg
				        			viewBox={'0 0 50 50'}
				        			width="50" height="50">
				        			<circle cx="25" cy="25" r="10" stroke="#F67280" strokeWidth="5" fill="none"/>
				        		</svg>
				        		<Icon/>

			        		</div>
			      		</GoogleMap>
		      		</div>
		      		<footer style={{width:'100%',textAlign:'center'}}>
		      			<a href="https://www.netlify.com">
						  	<img src="https://www.netlify.com/img/global/badges/netlify-light.svg"/>
						</a>
		      		</footer>
		      	</ImpressWrapper>
			</Page>
		)
	}
}

export default Impress