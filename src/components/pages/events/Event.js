// Tarik Fojnica

import React, { Component } from 'react';
import Intro from './Intro';
import CountDown from '../../common/CountDown';
import Table from './Table';
import axios from 'axios';
import moment from 'moment';
import GoogleMap from '../../common/GoogleMap';
const server = 'http://localhost:58524/api/event/';
const mapServer = 'http://localhost:58524/api/place/';
import GoogleMapReact from 'google-map-react';

const hardcodedData = [
	{
		skiingType: 'Alpine skiing',
		placeName: 'Bjelasnica',
		startTime: '20:00',
		date: '08/22/2018 06:30',
		EventID: 1
	},

	{
		skiingType: 'Curling',
		placeName: 'Bjelasnica',
		startTime: '15:00',
		date: '08/22/2018 06:30',
		EventID: 2
	},

	{
		skiingType: 'Ice hockey',
		placeName: 'Skenderija',
		startTime: '20:00',
		date: '08/22/2018 06:30',
		EventID: 3
	},

	{
		skiingType: 'Ski jumping',
		placeName: 'Jahorina',
		startTime: '20:00',
		date: '08/22/2018 06:30',
		EventID: 4
	},

	{
		skiingType: 'Snowboarding',
		placeName: 'Jahorina',
		startTime: '20:00',
		date: '08/22/2018 06:30',
		EventID: 5
	},

	{
		skiingType: 'Freestyle skiing',
		placeName: 'Igman',
		startTime: '20:00',
		date: '08/22/2018 06:30',
		EventID: 6
	},

	{
		skiingType: 'Snowboarding',
		placeName: 'Jahorina',
		startTime: '20:00',
		date: '08/22/2018 06:30',
		EventID: 7
	},

	{
		skiingType: 'Freestyle skiing',
		placeName: 'Igman',
		startTime: '20:00',
		date: '08/22/2018 06:30',
		EventID: 8
	},

	{
		skiingType: 'Freestyle skiing',
		placeName: 'Igman',
		startTime: '20:00',
		date: '08/22/2018 06:30',
		EventID: 6
	},
];
const hardcodedUsers = [
	{
		flag: 'us',
		name: 'Tarik',
		surname: 'Fojnica'
	}
];


class Event extends React.Component {
	state = {
		id: this.props.location.pathname.replace('/events/', ''),
		date: '',
		fullData: [],
		data: [],
		mapData: {
			lat: 43.8544,
			lng: 18.4146
		}
	};

	componentDidMount() {
		let _this = this;

		let initialDate = moment(hardcodedData[this.state.id - 1].date);
		let preparedDate = initialDate.format("MM/dd/yyyy HH:mm");
		let preparedDateCountDown =  initialDate.format("MM/DD/YYYY");

		_this.setState({
			data: hardcodedData[this.state.id - 1],
			countDownDate: preparedDateCountDown,
			date: preparedDate,
			visibleDate: preparedDateCountDown
		});
	};

	render() {
		return (
			<div className="page events">
				<div className="row">
					<div className="col-md-6">
						<Intro title={this.state.data.skiingType} place={this.state.data.placeName} date={this.state.visibleDate} time={this.state.data.startTime} numOfPlayers={this.state.data.numberOfPlayers} trackLength={this.state.data.lenghtOfTrack}/>
					</div>

					<div className="col-md-6">
						<CountDown date={this.state.countDownDate}/>
						<div style={{width: '100%', height: '240px', marginTop: '20px'}}>
							<GoogleMap lat={this.state.mapData.lat} lng={this.state.mapData.lng} />
						</div>
					</div>
				</div>

				<Table data={hardcodedUsers}/>
			</div>
		);
	}
}

export default Event;