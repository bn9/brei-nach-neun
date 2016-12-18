import React from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import PagesStack from 'components/PagesStack';
import PagesNav from 'components/PagesNav';
import PagesNavItem from 'components/PagesNavItem';
import MenuButton from 'components/MenuButton';

import site from './_site.json'
import './styles.css'

export default class Template extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			open:false
		};
		this.toggleNavigation = this.toggleNavigation.bind(this)
	}
	toggleNavigation(){
		this.setState({open:this.state.open?false:true});
	}
	render() {
		const { pages } = site;
		const { children } = this.props;
		const { open } = this.state;
		return (
		  	<span
		  		style={{overflowX:'hidden', height: '100vh'}}
		  	>	
		  		<span 
		  			style={{
		  				opacity:.4,
		  				background: 'url("./peacock.jpg")',
		  				width:'200%',
		  				height:'200%',
		  				top:0,left:0,
		  				position:'fixed'
		  			}}
		  		/>
		  		<PagesNav open={open}>
		  			{ Object.keys(pages).map((page,i) => (
		  				<PagesNavItem key={page} onClick={this.toggleNavigation} to={`/${pages[page].slug}/`}>
		  					{pages[page].title}
		  				</PagesNavItem>
		  			))}
		  			<PagesNavItem 
		  				small={true}
		  				to={'/impress/'} 
		  				onClick={this.toggleNavigation}
		  			>
		  				Impressum
		  			</PagesNavItem>
		      	</PagesNav>
				<PagesStack open={open}>
					{children}
		    	</PagesStack>
				<MenuButton open={open} onClick={this.toggleNavigation}/>
		    </span>
	    )
	}
}