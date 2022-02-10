import logo from './logo.png'
import searchIcon from './search.png'
import './App.css';
import ShowMap, { MapContainer } from './Map.js';
import ReportForm from './components/ReportForm'
import {Routes, Route, Link} from 'react-router-dom'
import Resources from './components/Resources'
import LocationSearchBar from "./components/ReportForm/LocationSearchBar"
import {useState} from 'react'

function Home() {
  return (
    <div className="about-section">
      <h1>What is safehaven?</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  )
}


function App() {

    const [locationLat, setLocationLat] = useState(-37.8136)
    const [locationLng, setLocationLng] = useState(144.9631)
    const [zoom, setZoom] = useState(12)

  return (
    <div className="App">
      <ul>
        <li>
        <li>
          <img className="search-icon" src={searchIcon} alt="Logo" />
          
        </li>
          <button className="report-btn">
            <a href="/reports/new">Report Incident</a>
          </button>
        </li>
      </ul>
      <div>
        <img className="logo" src={logo}></img>
      </div>
      
      <Routes> 
        <Route path='/' element={<>  <Home /> <LocationSearchBar passZoomData={setZoom} passLngData={setLocationLng} passLatData={setLocationLat}/> <ShowMap zoomValue={zoom} lat={locationLat} lng={locationLng} /> </>} />
        <Route path="/reports/new" element={<> <ReportForm /> <ShowMap zoomValue={zoom} lat={locationLat} lng={locationLng}/> </>}/>
        <Route path="/resources" element={ <Resources /> } />
      </Routes>
    </div>
  );
}

export default App;
