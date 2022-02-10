import React from "react";
import GoogleMapReact from "google-map-react";
import './Map.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import MarkerImage from './MarkerImage.png'
function ShowMap() {
  
  const Marker = () => (
    <img className="markers" src={MarkerImage}></img>
  );
  
  const [markers, setMarkers] = useState([]);
  // const [bounds, setBounds] = useState();

  useEffect(() => {
    fetch('http://localhost:8000/api/reports')
    .then(res => res.json())
    .then(res => setMarkers(res))
  },[])

  // app.get('/api/reports', (req, res) => {
  //   const coords = {
  //     botlat: req.query.botlat,
  //     toplat: req.query.toplat,
  //     botlng: req.query.botlng,
  //     toplng: req.qeuery.toplng
  //   }
  //   const result = getVisibleMarkers(coords)
  //   result.then(dbres => res.json(dbres.rows))
  // }
  
  const handleBoundsChange = (mapNew) => {
    let corners = {
      topLat: mapNew.marginBounds.ne.lat,
      topLng: mapNew.marginBounds.ne.lng,
      botLat: mapNew.marginBounds.sw.lat,
      botLng: mapNew.marginBounds.sw.lng,
    }
    fetch(`http://localhost:8000/api/reports?topLat=${corners.topLat}&topLng=${corners.topLng}&botLat=${corners.botLat}&botLng=${corners.botLng}`)
      .then(res => res.json())
      .then(res => setMarkers(res))
    }
  
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAPS_API
          }}
          defaultCenter={{lat: -37.8136, lng: 144.9631}}
          defaultZoom={12}
          onChange={e => handleBoundsChange(e)}
        >
        {markers.map((marker, index) => <Marker key={index} lat={marker.lat} lng={marker.lng}/>)}
        </GoogleMapReact>
      </div>
    );
  }


export default ShowMap;
