// Tarik Fojnica

import React, { Component } from 'react';
import events from '../../vendor/pub-sub';

const leftPad = (width, n) => {
	if ((n + '').length > width) {
		return n;
	}
	const padding = new Array(width).join('0');
	return (padding + n).slice(-width);
};

class Stopwatch extends React.Component {
	constructor(props) {
		super(props);

		["lap", "update", "reset", "toggle"].forEach((method) => {
			this[method] = this[method].bind(this);
		});

		this.state = this.initialState = {
			isRunning: false,
			lapTimes: [],
			timeElapsed: 0,
		};
	}

	toggle() {
		this.setState({isRunning: !this.state.isRunning}, () => {
			this.state.isRunning ? this.startTimer() : clearInterval(this.timer)
		});
	}
	lap() {
		const {lapTimes, timeElapsed} = this.state;
		this.setState({lapTimes: lapTimes.concat(timeElapsed)});
	}
	reset() {
		clearInterval(this.timer);
		this.setState(this.initialState);
	}

	startTimer() {
		if (this.refs.stopwatchRef) {
			this.startTime = Date.now();
			this.timer = setInterval(this.update, 10);
		}
	}
	update() {
		const delta = Date.now() - this.startTime;
		this.setState({timeElapsed: this.state.timeElapsed + delta});
		this.startTime = Date.now();
	}

	componentDidMount() {
		this.startTimer();

		let _this = this;
		events.subscribe('NEW_PLAYER_STARTED', function(obj) {
			_this.reset();
			_this.startTimer();
		});
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}


	render() {
		const {isRunning, lapTimes, timeElapsed} = this.state;
		return (
			<div ref="stopwatchRef">
				<TimeElapsed id="timer" timeElapsed={timeElapsed} />
			</div>
		);
	}
}

class TimeElapsed extends React.Component {
	getUnits() {
		const seconds = this.props.timeElapsed / 1000;
		return {
			min: Math.floor(seconds / 60).toString(),
			sec: Math.floor(seconds % 60).toString(),
			msec: (seconds % 1).toFixed(3).substring(2)
		};
	}
	render() {
		const units = this.getUnits();
		return (
			<div className="stopwatch" id={this.props.id}>
				<span>{leftPad(2, units.min)}:</span>
				<span>{leftPad(2, units.sec)}.</span>
				<span>{units.msec}</span>
			</div>
		);
	}
}

export default Stopwatch;