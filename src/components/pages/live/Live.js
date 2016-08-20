// Tarik Fojnica

import React, { Component } from 'react';
import Navigation from './Navigation';
import Dynamic from './Dynamic';
import Standings from './Standings';

class Live extends React.Component {
	state = {
		id: this.props.location.pathname.replace('/events/', ''),
		players: []
	};

	render() {
		return (
			<div className="page live">
				<Navigation/>
				<Dynamic/>

				<Standings id={this.state.id}/>
			</div>
		);
	}
}

export default Live;