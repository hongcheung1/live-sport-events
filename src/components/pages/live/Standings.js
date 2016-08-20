// Tarik Fojnica

import React, { Component } from 'react';
import axios from 'axios';
import dataFlags from '../../../data'
import events from '../../../vendor/pub-sub';

class StandingsTable extends Component  {

	state = {
		data: [
			{
				name: 'Kjetil Andre',
				surname: 'Aamodt',
				flag: 'sw',
				time: '00:00:46'
			},

			{
				name: 'Jean-Claude',
				surname: 'Killy',
				flag: 'fr',
				time: '00:00:47'
			},

			{
				name: 'Bernard',
				surname: 'Russi',
				flag: 'sw',
				time: '00:00:47'
			},

			{
				name: 'Toni',
				surname: 'Sailer',
				flag: 'au',
				time: '00:00:48'
			},
		]
	};

	componentDidMount() {
		let _this = this;

		// This event will fire every time a new player
		// starts his skiing session
		events.subscribe('NEW_PLAYER_STARTED', function(obj) {
			console.log(obj.newPlayer);

			_this.setState({
				data: [..._this.state.data, obj.newPlayer]
			})

		});
	}

	render() {
		let  allItems = this.state.data.map((result, id) => {
			return (
				<tr key={id}>
					<td>{id + 1}</td>
					<td><img src={dataFlags[result.flag]} alt=""/></td>
					<td>{`${result.name} ${result.surname}`}</td>
					<td>{result.time}</td>
				</tr>
			)
		});

		return (
			<div className="standings-table">
				<h4>Alpine skiing standings</h4>
				<table className="table with-transparent-background">
					<thead>
					<tr>
						<th>#</th>
						<th>Nation</th>
						<th>Name</th>
						<th>Time</th>
					</tr>
					</thead>
					<tbody>
						{allItems}
					</tbody>
				</table>
			</div>
		);
	}
}

export default StandingsTable;