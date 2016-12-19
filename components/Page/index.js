import React from 'react';
import { Link } from 'react-router';
import AnimatedTitle from 'components/AnimatedTitle';
import styles from './styles.css';

const Page = (props) => {
		const { children, open } = props
		return(
			<section
				style={{
					position: 'relative',
					zIndex: 5,
					width: '100%',
					height: '100vh',
					pointerEvents: 'auto',
					boxShadow: '0 -1px 10px rgba(0, 0, 0, 0.1)'
				}}
			>
				<header
					style={{padding:'40px'}}
				>
					<Link to="/"><AnimatedTitle/></Link>
				</header>
				<span
					className="page-wrapper"
				>
					{children}
				</span>
			</section>
		)
	}

export default Page;