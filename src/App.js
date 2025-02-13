import logo from './logo.png'
import searchIcon from './search.png'
import './App.css';
import ShowMap, { MapContainer } from './Map.js';
import ReportForm from './components/ReportForm'
import {Routes, Route, Link} from 'react-router-dom'


function Home() {
  return (
    <div className="about-section">
      <h1>What is safehaven?</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  )
}


function App() {
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
        <Route path='/' element={<> <Home /> <ShowMap /> </>} />
        <Route path="/reports/new" element={<> <ReportForm /> <ShowMap /> </>}/>
      </Routes>
    </div>
  );
}

export default App;
