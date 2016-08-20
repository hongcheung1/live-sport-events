// Tarik Fojnica

import React, { Component } from 'react';
import slalom from '../../../assets/images/slalom.svg';
import place from '../../../assets/images/placeholder-on-map-paper-in-perspective.svg';
import clock from '../../../assets/images/clock.svg';
import calendar from '../../../assets/images/calendar.svg';
import users from '../../../assets/images/multiple-users-silhouette.svg';
import skiStick from '../../../assets/images/ski-stick.svg';

class Intro extends Component  {
	render() {
		return (
			<div className="intro with-transparent-background">
				<h1><img src={slalom} alt="Type"/> {this.props.title} Skiing</h1>

				<ul>
					<li><img className="icon" src={calendar} alt=""/>Date: <span>{this.props.date}</span></li>

					<li><img className="icon" src={clock} alt=""/>Time: <span>{this.props.time}</span></li>

					<li><img className="icon" src={place} alt=""/>Place: <span>{this.props.place}</span></li>

					<li><img className="icon" src={users} alt=""/>Number of Players: <span>{this.props.numOfPlayers}</span></li>

					<li><img className="icon" src={skiStick} alt=""/>Track Length: <span>500 m</span></li>
				</ul>
				<p className="desc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat nulla sed diam tempor dapibus. Suspendisse vel magna sit amet odio tempus congue a non nibh
				</p>
			</div>

		);
	}
}

export default Intro;