import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Canvas3D from './components/BackgroundScene/Canvas3D/Canvas3D';
import LandingCanvas from './components/BackgroundScene/Canvas3D/LandingCanvas';
import Homepage from './pages/Homepage';
import Home from './pages/Home';
import ArchCanvas from './components/BackgroundScene/Canvas3D/ArchCanvas';


function App() {
  return (
    <>
      <div className='nav'>
        <img className='logo-img' src='/aologo.png' height='40px' width='45px' alt='logo'/>
        <ul className='navigation'>
          <li><a href='#home' className='nav-link font-1'>Home</a></li>
          <li><a href='#about' className='nav-link font-1'>About</a></li>
          <li><a href='#programming' className='nav-link font-1'>Programming</a></li>
          <li><a href='#3d' className='nav-link font-1'>3D Art</a></li>
          <li><a href='#music' className='nav-link font-1'>Music</a></li>
        </ul>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/test' element={<ArchCanvas hidden={false} building=''/>}/>
          <Route path='/test0' element={<Canvas3D targetSubScene='' renderStartCallback={(e) => {}}/>}/>
        </Routes>
      </BrowserRouter>
      <footer style={{minHeight: '120px', backgroundColor: 'black'}}>

      </footer>
    </>
  );
}

export default App;
