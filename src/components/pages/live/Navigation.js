// Tarik Fojnica

import React, { Component } from 'react';
import Skiman from '../../../assets/images/ski-stick-man.svg'

class Navigation extends Component  {
	render() {
		return (
			<div className="live-navigation">
				<nav>
					<ul className="clearfix">
						<li className="unavailable">
							<a href="#">Ice hockey</a>
						</li>

						<li className="unavailable">
							<a href="#">Ski jumping</a>
						</li>

						<li className="unavailable">
							<a href="#">Curling</a>
						</li>

						<li className="unavailable">
							<a href="#">Snowboarding</a>
						</li>

						<li className="active">
							<a href="#"><img src={Skiman} alt=""/> Alpine skiing</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Navigation;