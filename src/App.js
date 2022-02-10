import logo from './logo.png'
import searchIcon from './search.png'
import './App.css';
import ShowMap, { MapContainer } from './Map.js';
import ReportForm from './components/ReportForm'
import {Routes, Route, Link} from 'react-router-dom'
import Resources from './components/Resources'

function Home() {
  return (
    <div className="about-section">
      <h1>What is safehaven?</h1>
      <p>safehaven is an app designed for women and other minority groups as a means to help us feel safer outside of the comfort of our own homes. safehaven allows you to search and log incidents of sexual assault across Australia anonymously. We understand how scary it can be to report sexual assault. None of your information will be shared publicly. One day we hope this app will no longer be necessary, but until then please feel free to share your experiences so that others are aware of potentially dangerous areas.</p>
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
        <Route path="/resources" element={ <Resources /> } />
      </Routes>
    </div>
  );
}

export default App;
