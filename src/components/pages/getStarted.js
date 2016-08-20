// Tarik Fojnica

import React, { Component } from 'react';
import {Link} from 'react-router';

class GetStarted extends React.Component {
	render() {
		return (
			<div className="page get-started">
				<div className="inner">
					<h1>Custom Sport Events</h1>
					<ul>
						<li>Samir Husak</li>
						<li>Ahmed Krajcin</li>
						<li>Tarik Fojnica</li>
					</ul>

					<Link className="btn btn-primary" to="/">Get Started</Link>
				</div>
			</div>
		);
	}
}

export default GetStarted;