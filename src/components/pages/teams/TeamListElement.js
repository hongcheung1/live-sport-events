import React, { Component } from 'react';
import dataFlags from '../../../data'

class EventsListElement extends React.Component {
	render() {
		return (
			<div className="col-md-4">
				<div className="teams-list-element">
					<div className="header">
						<h2>{this.props.country}</h2>
						<img src={dataFlags[this.props.flag]} alt="" className="au"/>
					</div>
					<ul className="members">
						<li className="key">Members:</li>
						<li className="value">{this.props.members}</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default EventsListElement;