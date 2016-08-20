// Tarik Fojnica

import React, { Component } from 'react';
import moment from 'moment'
import dataFlags from '../../../data'

const hardcodedData = [
	{
		name: 'Bode',
		surname: 'Miller',
		flag: 'ba'
	},

	{
		name: 'Bode',
		surname: 'Miller',
		flag: 'sw'
	},

	{
		name: 'Kjetil Andre',
		surname: 'Aamodt',
		flag: 'au'
	},

	{
		name: 'Jean-Claude',
		surname: 'Killy',
		flag: 'fr'
	},

	{
		name: 'Toni ',
		surname: 'Sailer',
		flag: 'au'
	},

	{
		name: 'Alberto',
		surname: 'Tomba',
		flag: 'au'
	},

	{
		name: 'Ingemar',
		surname: 'Stenmark',
		flag: 'sw'
	},

	{
		name: 'Hermann',
		surname: 'Maier',
		flag: 'au'
	},

	{
		name: 'Lasse',
		surname: 'Kjus ',
		flag: 'no'
	},

	{
		name: 'Bernard',
		surname: 'Russi',
		flag: 'au'
	},
	{
		name: 'Franz',
		surname: 'Klammer',
		flag: 'au'
	},

	{
		name: 'Pirmin',
		surname: 'Zurbriggen',
		flag: 'au'
	},

];

class Table extends Component  {
	render() {
		let dates = [];

		let  allItems = hardcodedData.map((result, id) => {
			console.log(result);

			dates[id] = moment(result.date);
			return (
				<tr className={id === 0 ? 'hidden' : ''} key={id}>
					<td>{id}</td>
					<td><img src={dataFlags[result.flag]} alt="Image"/></td>
					<td>{`${result.name} ${result.surname}`}</td>
				</tr>
			)
		});
		return (
			<table className="table with-transparent-background">
				<thead>
				<tr>
					<th>#</th>
					<th>Nation</th>
					<th>Name</th>
				</tr>
				</thead>
				<tbody>
				{allItems}
				</tbody>
			</table>
		);
	}
}

export default Table;