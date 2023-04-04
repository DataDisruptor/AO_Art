import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Canvas3D from './components/BackgroundScene/Canvas3D/Canvas3D';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/test' element={<Canvas3D targetSubScene=''/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
