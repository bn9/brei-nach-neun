import React from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styled from 'styled-components';

import PagesStack from 'components/PagesStack';
import PagesNav, { PagesSubNav } from 'components/PagesNav';
import PagesNavItem from 'components/PagesNavItem';
import MenuButton from 'components/MenuButton';
import AnimatedTitle from 'components/AnimatedTitle';

import site from './_site.json'
import './styles.css'

export default class Template extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			open:false,
			isLoaded:false
		};
		this.toggleNavigation = this.toggleNavigation.bind(this)
		this.closeNavigation = this.closeNavigation.bind(this)
	}
	componentDidMount(){
		window.addEventListener('scroll', this.closeNavigation)
		this.setState({isLoaded:true})
	}
	componentWillUnmount() {
		window.removeEventListener('scroll')
	}
	toggleNavigation(){
		this.setState({open:this.state.open?false:true});
	}
	closeNavigation = () => {
		if (this.state.open) {
			this.setState({open:false})
		}
	}
	render() {
		const { pages } = site;
		const { children } = this.props;
		const { isLoaded, open } = this.state;
		const Background = styled.span`
			width:200%;
			height:200%;
			top:0;
			left:0;
			position:fixed;
			background-color:#ffffff;
			background-image:url("/peacock.jpg");
			z-index:-1;
			opacity:.4;
		`
		return (
		  	<span style={{overflowX:'hidden', height: '100vh'}}>
		  		<PagesNav style={{display:isLoaded?'flex':'none'}} open={open}>
		  			{ Object.keys(pages).map((page,i) => (
		  				<PagesNavItem key={page} onClick={this.toggleNavigation} to={`/${pages[page].slug}/`}>
		  					{pages[page].title}
		  				</PagesNavItem>
		  			))}
		  			<PagesSubNav>
			  			<PagesNavItem 
			  				small
			  				to={'/impress/'} 
			  				onClick={this.toggleNavigation}
			  				children="Impressum"
			  			/>
		  			</PagesSubNav>
		      	</PagesNav>
				<PagesStack open={open} onClick={this.closeNavigation}>
					{children}
		    	</PagesStack>
				<MenuButton open={open} onClick={this.toggleNavigation}/>
				<Background/>
		    </span>
	    )
	}
}