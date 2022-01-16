import './App.css';
import ViewBuilding from './views/ViewBuilding.jsx';
import StyleBuilding from './views/StyleBuilding.jsx';
import ConstructBuilding from './views/ConstructBuilding.jsx';
import Instructions from './views/Instructions.jsx';


function App() {
  return (
    <div className="App">
      <ViewBuilding />
      <Instructions />
      <StyleBuilding />
      <ConstructBuilding />
    </div>
  );
}

export default App;
