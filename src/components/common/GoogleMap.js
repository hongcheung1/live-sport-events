import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

class SimpleMap extends React.Component {
	render() {
		return (
			<GoogleMapReact
				center={{lat: this.props.lat, lng: this.props.lng}}
				defaultZoom={15}
				apiKey="AIzaSyDbyoIziZv2hIQgP6bJNlMKotw1sKNMHzs"
			>
			</GoogleMapReact>
		);
	}
}

export default SimpleMap;