import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";
import querystring from 'querystring';
import axios from 'axios';

export default class VenueMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 51.5255,
      lng: 0.0352
    };
  }

  componentDidMount() {
    const query = {
      address: `${this.props.activity.street_number} ${this.props.activity.street_name} ${this.props.activity.town} ${this.props.activity.postcode}`,
      key: "AIzaSyBHKx-iAjuekb0croroKNJLttnQkgF_BEs"
    };
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?${querystring.stringify(query)}`)
      .then(res => {
        if (res.data.results.length === 0) {return;}
        const pos = res.data.results[0].geometry.location;
        this.setState({lat: pos.lat, lng: pos.lng});
      });
  }

  render() {
    return (
      <div className="map-container">
        <GoogleMapLoader
          containerElement={ <div style={ { height: '100%' } } /> }
          googleMapElement={
            <GoogleMap
              defaultZoom={16}
              center={ { lat: this.state.lat, lng: this.state.lng } }
              >
              <Marker position={{lat: this.state.lat, lng: this.state.lng}}></Marker>
            </GoogleMap>
          }
          />
      </div>
    );
  }
}
