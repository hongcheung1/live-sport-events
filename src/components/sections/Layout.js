// Tarik Fojnica

import React, { Component } from 'react';
import Header from '../sections/Header'

class Layout extends Component {

	render() {
		return (
			<div className="app-container">
				<Header/>

				<div className="container">
					<div className="page">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

export default Layout;