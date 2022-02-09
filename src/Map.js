import React from "react";
import GoogleMapReact from "google-map-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'





function SimpleMap() {
  
  const Marker = ({  }) => (
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
  
  const [marker, setMarker] = useState({})

  useEffect(() => {
    fetch('/api/reports').then(res => console.log(res.json())).then(res => setMarker(res))
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
          
        >
        <Marker lat={-37.8136} lng={144.9631} />
        </GoogleMapReact>
      </div>
    );
  }


export default SimpleMap;
