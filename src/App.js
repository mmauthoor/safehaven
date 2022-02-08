import './App.css';
import SimpleMap, { MapContainer } from './Map.js';
import ReportForm from './components/ReportForm'


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
