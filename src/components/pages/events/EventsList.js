// Tarik Fojnica

import React, { Component } from 'react';
import EventsListElement from './EventsListElement';
import moment from 'moment'

import axios from 'axios';
const server = 'http://localhost:58524/api/';

const hardcodedData = [
	{
		skiingType: 'Alpine skiing',
		placeName: 'Bjelasnica',
		startTime: '20:00',
		EventID: 1
	},
	
	{
		skiingType: 'Curling',
		placeName: 'Bjelasnica',
		startTime: '15:00',
		EventID: 2
	},
	
	{
		skiingType: 'Ice hockey',
		placeName: 'Skenderija',
		startTime: '20:00',
		EventID: 3
	},
	
	{
		skiingType: 'Ski jumping',
		placeName: 'Jahorina',
		startTime: '20:00',
		EventID: 4
	},
	
	{
		skiingType: 'Snowboarding',
		placeName: 'Jahorina',
		startTime: '20:00',
		EventID: 5
	},
	
	{
		skiingType: 'Freestyle skiing',
		placeName: 'Igman',
		startTime: '20:00',
		EventID: 6
	},
	
		{
		skiingType: 'Snowboarding',
		placeName: 'Jahorina',
		startTime: '20:00',
		EventID: 7
	},
	
	{
		skiingType: 'Freestyle skiing',
		placeName: 'Igman',
		startTime: '20:00',
		EventID: 8
	},

	{
		skiingType: 'Freestyle skiing',
		placeName: 'Igman',
		startTime: '20:00',
		EventID: 6
	},
]

class EventsList extends React.Component {

	state = {
		data: hardcodedData
	};

	render() {
		let dates = [];
		let  allItems = this.state.data.map((result, id) => {

			dates[id] = moment(result.date);
			return (
				<EventsListElement key={id} title={result.skiingType} place={result.placeName} date={dates[id].format("dddd, MMMM Do YYYY")} time={result.startTime} id={result.EventID}/>
			)
		});

		return (
			<div className="page events-list">
				<div className="row">
					{allItems}
				</div>
			</div>
		);
	}
}

export default EventsList;