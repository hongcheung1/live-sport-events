// Tarik Fojnica

import React, { Component } from 'react';
import {Link} from 'react-router'
import logoImg from '../../assets/images/mountain-range.svg'
import liveIcon from '../../assets/images/circle.svg'

class Header extends Component  {
	render() {
		return (
			<header>
				<nav className="navbar navbar-default">
					<div className="container">
						<div className="navbar-header">
							<a className="navbar-brand" href="#"><img src={logoImg} alt=""/>EYOF 2019</a>
						</div>
						<ul className="nav navbar-nav navbar-right">
							<li className="live">
								<Link to="/"><img src={liveIcon} alt="Live"/>Live</Link>
							</li>
							<li>
								<Link to="/events/">Events</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;