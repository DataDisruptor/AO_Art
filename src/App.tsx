import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Canvas3D from './components/BackgroundScene/Canvas3D/Canvas3D';
import LandingCanvas from './components/BackgroundScene/Canvas3D/LandingCanvas';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/test' element={<LandingCanvas targetSubScene=''/>}/>
        <Route path='/test0' element={<Canvas3D targetSubScene='' renderStartCallback={(e) => {}}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
