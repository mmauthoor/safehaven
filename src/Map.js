import React from "react";
import GoogleMapReact from "google-map-react";
import './Map.css'
// import { Link } from "react-router-dom";
import { useState } from 'react'
import MarkerImage from './MarkerImage.png'
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { format } from 'date-fns';

function ShowMap({lat, lng, zoomValue}) {
  const [markers, setMarkers] = useState([]);
  const [open, setOpen] = useState({});

  const handleTooltipClose = () => {
    setOpen({});
  };

  const handleTooltipOpen = (key) => {
    const current = {};
    current[key] = true;
    setOpen(current);
  };

  const Marker = (props) => {
    const { index, incidentDate, incidentTime } = props;
    const date = new Date(incidentDate);
    return (
      <>
        <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open[index]}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title={<div style={{width: '15vw'}}>
                  <h4>Incident Reported</h4>
                  <p>Date: {format(date, 'dd-MM-yyyy')}</p>
                  <p>Time: {incidentTime.substring(0, 5)}</p>
                  </div>} arrow placement="top"
              >
                <img onClick={() => handleTooltipOpen(index)} className="markers" src={MarkerImage}></img>
              </Tooltip>
            </div>
          </ClickAwayListener>
      </>
    );
  };

  const handleBoundsChange = (mapNew) => {
    console.log(mapNew);
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
      <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAPS_API
          }}
          center={{lat: lat, lng: lng}}
          zoom={zoomValue}
          onChange={e => handleBoundsChange(e)}
        >
        {markers.map(
          (marker, index) => 
              <Marker key={index} index={index} lat={marker.lat} lng={marker.lng} incidentDate={marker.date} incidentTime={marker.time}/>
        )}
        </GoogleMapReact>
      </div>
    );
  }

export default ShowMap;