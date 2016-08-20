// Tarik Fojnica

import React, { Component } from 'react';
import TeamsListElement from './TeamListElement';

import axios from 'axios';
const server = 'http://localhost:58524/api/';

class TeamsList extends React.Component {

	state = {
		data: []
	};

	componentDidMount() {
		let _this = this;
		axios.get(server + 'team')
			.then(function (response) {
				console.log(response);
				_this.setState({
					data: response.data
				})
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	render() {
		let  allItems = this.state.data.map((result, id) => {
			return (
				<TeamsListElement key={id} country={result.teamName} flag="au" members={result.size}/>
			)
		});

		return (
			<div className="page teams-list">
				<div className="row">
					{allItems}
				</div>
			</div>
		);
	}
}

export default TeamsList;