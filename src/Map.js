import React from "react";
import GoogleMapReact from "google-map-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'





function ShowMap() {
  
  const Marker = () => (
    <div style={{
      color: 'white', 
      background: 'grey',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}>
    </div>
  );
  
  const [markers, setMarkers] = useState([]);
//   const [bounds, setBounds] = useState();

  useEffect(() => {
    fetch('http://localhost:8000/api/reports')
    .then(res => res.json())
    .then(res => setMarkers(res))
  },[])



    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAPS_API
          }}
          defaultCenter={{lat: -37.8136, lng: 144.9631}}
          defaultZoom={11}
          onChange={e => console.log(e)}
        >
        {markers.map(marker => <Marker lat={marker.lat} lng={marker.lng}/>)}
        </GoogleMapReact>
      </div>
    );
  }


export default ShowMap;
