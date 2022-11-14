import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
        <Route path="/" element={<Visualize/>}/>
        <Route path="/visualize" element={<Visualize/>}/>
        <Route path="/predict" element={<Predict/>}/>
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
