import React from 'react';
import { Link, browserHistory } from 'react-router'
import {
	Toolbar,
	ToolbarGroup,
	ToolbarTitle
} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

import site from '../../pages/_site.json'

injectTapEventPlugin();

class Navigation extends React.Component{
	renderLinks(type){
		const Wrapper = ({children,type,...props}) => {
			switch(type){
				case'mobile': return children
				default: return<FlatButton>{children}</FlatButton>
			}}
		return Object.keys(site['pages']).map(
			(page,i) => <Link><Wrapper>{site.pages[page].title}</Wrapper></Link>
		)
	}
	renderMobileNavigation(){
		return (
			<Toolbar style={{background:'#fff', color:'red'}}>
				<ToolbarGroup>
					<Link to={'/'}>
						<ToolbarTitle
							style={{fontWeight:"900"}} 
							text={'Brei Nach Neun'} 
						/>
					</Link>
				</ToolbarGroup>
				<ToolbarGroup>
					{ this.renderLinks() }
				</ToolbarGroup>
			</Toolbar>
		)
	}
	renderNavigation(){
		const Li = (props) => <li 
			style={{fontSize:'16px'}} 
			{...props}/>
		return(
			<nav>
				<ul 
					style={{
						listStyle:'none',
						width:"200px",
						position:'fixed',
						top:'100px'
					}}
				>
				{
					Object.keys(site['pages']).map(
						(page,i) => <Li><Link 
							style={{
								textTransform:'none',
								textDecoration:'none'
							}} 
							to={`/${site.pages[page].slug}/`}>{site.pages[page].title}</Link></Li>
				)}
				</ul>
			</nav>
		)
	}
	render(){
		return this.renderNavigation()
	}
}

export default Navigation;