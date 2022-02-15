import React from "react";
import './css/style.css';
import liveLocation from './images/live-location.gif';
import GoogleMapReact from 'google-map-react';

// React Icons
import { BiCurrentLocation } from 'react-icons/bi';

const AnyReactComponent = ({ text, marker }) => <div>{marker} {text}</div>;

const UserLocationMap = () => {

    // Get userPosition coordinates from localStorage
    const userLat = localStorage.getItem("Latitude");
    const userLong = localStorage.getItem("Longitude");

    const defaultProps = {
        center: {
            lat: parseFloat(userLat),
            lng: parseFloat(userLong)
        },
        zoom: 11
    };

  return (
    // Important! Always set the container height explicitly
    <div style={{
        width: '100%',
        height: '60vh'
        }} className="map-container">
        <h3>
          <span>○ Current Location</span>
          <BiCurrentLocation />
        </h3>
        <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyBvaSo_ktStwykuoyZPu_dwR5Y9_obSjtw" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}>

            <AnyReactComponent
            lat={userLat}
            lng={userLong}
            // text="Your location"
            marker=<img src="https://img.icons8.com/ios-glyphs/90/fa314a/marker--v1.png" height="35px" width="35px" title="Your location" />
            />
        </GoogleMapReact>
    </div>
  );
}

export default UserLocationMap;
