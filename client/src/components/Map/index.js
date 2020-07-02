import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import React, { Component } from "react";
import './styles.css';

const mapStyles = {
    width: '100vw',
    height: '100vh',


  };

  export class MapContainer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        stores: [{_id:"1",lat: props.lat, lng: props.lng}]
      }
    }

    displayMarkers = () => {
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.lat,
         lng: store.lng
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }
  
    render() {
      return (
          <Map
            google={this.props.google}
            zoom={8}
            initialCenter={ {lat: 34.5193143 ,lng: -117.3338804}}
            style = {mapStyles}
          >
            {this.displayMarkers()}
          </Map>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
  })(MapContainer);