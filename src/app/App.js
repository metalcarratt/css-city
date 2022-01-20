import './App.css';
import ViewView from '../building/view/ViewView.jsx';
import StyleView from '../building/style/StyleView.jsx';
import PartsView from '../building/parts/PartsView.jsx';
import InstructionsView from '../building/instructions/InstructionsView.jsx';


function App() {
  return (
    <div className="App">
      <ViewView />
      <InstructionsView />
      <StyleView />
      <PartsView />
    </div>
  );
}

export default App;
