// Tarik Fojnica

import React, { Component } from 'react';
import {Link} from 'react-router';
import LinkSymbol from '../../../assets/images/link-symbol.svg';
import place from '../../../assets/images/placeholder-on-map-paper-in-perspective.svg';
import clock from '../../../assets/images/clock.svg'
import calendar from '../../../assets/images/calendar.svg'

class EventsListElement extends React.Component {
	render() {
		return (
			<div className="col-md-4">
				<div className="events-list-element">
					<h2>{this.props.title}</h2>
					<p className="place"><img src={place} alt=""/>{this.props.place}</p>
					<p className="time"><img src={calendar} alt=""/>{this.props.date}</p>
					<p className="time"><img src={clock} alt=""/>{this.props.time}</p>
					<Link className="btn" to={`/events/${this.props.id}`}><img src={LinkSymbol} alt="Link Symbol"/> Details</Link>
				</div>
			</div>
		);
	}
}

export default EventsListElement;