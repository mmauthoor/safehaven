import logo from './greylogo-02.png'
import searchIcon from './search.png'
import './App.css';
import SimpleMap, { MapContainer } from './Map.js';
import ReportForm from './components/ReportForm'
console.log(process.env.REACT_APP_GOOGLE_MAPS_API);


function App() {
  return (
    <div className="App">
      <ul>
        <li>
        <li>
          <img className="search-icon" src={searchIcon} alt="Logo" />
        </li>
          <button className="report-btn">
            <a href="default.asp">Report Incident</a>
          </button>
        </li>
      </ul>
      <div>
        <img className="logo" src={logo}></img>
      </div>

      <div className="about-section">
      <h1>What is safehaven?</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>


      <div className="location-info-box">
        
      </div>
      <div className="map-container">
      <SimpleMap />
      </div>

      <div className="report-form-container">
      <ReportForm />
      </div>
    </div>
  );
}

export default App;
