import StylesMission from './StylesMissions.jsx';
import StylesSandbox from './StylesSandbox.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/styles-missions" element={<StylesMission/>}/>
        <Route path="/styles-sandbox" element={<StylesSandbox/>}/>
        <Route path="/" element={<StylesMission/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
