import './App.css';
import SimpleMap, { MapContainer } from './Map.js';
import ReportForm from './components/ReportForm'
console.log(process.env.REACT_APP_GOOGLE_MAPS_API);

function App() {
  return (
    <div className="App">
      <h1>Safe Haven</h1>
      <SimpleMap />
      <ReportForm />
    </div>
  );
}

export default App;
