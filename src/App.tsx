import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Canvas3D from './components/BackgroundScene/Canvas3D/Canvas3D';
import Home from './pages/Home';
import ArchCanvas from './components/BackgroundScene/Canvas3D/ArchCanvas';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import GenericOverlay from './components/primitives/overlays/genericOverlay/GenericOverlay';
import { Icon } from '@iconify/react';
import { Link } from 'react-scroll';

function App() {

  // Window Size Tracking -----------------------------------------------------------------------
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [windowSize, updateWindowSize] = useState({window_x: window.innerWidth, window_y: window.innerHeight})

  const handleResize = (e : any) => {
    console.log('RESIZE!', e)
    updateWindowSize({window_x: e.target.innerWidth, window_y: e.target.innerHeight});
    if(e.target.innerWidth > 700){
      setSV_Visible(false);
    }
    
  }

  const {window_x, window_y} = windowSize;

  const [SV_Visible, setSV_Visible] = useState(false);
  function handleSmallNavigation(){
    setSV_Visible(!SV_Visible);
  }

  // Scroll Tracking -----------------------------------------------------------------------
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [visibleSection, setVisibleSection] = useState('')

  const handleScroll = (e : any) => {
    // console.log('Scroll!', e)
    getVisibleSection(window.scrollY);
  }

  const getVisibleSection = (scrollPos : number) => {
    const home = document.getElementById('home');
    const about = document.getElementById('about');
    const programming = document.getElementById('programming');
    const graphics = document.getElementById('3d');
    const music = document.getElementById('music');
    const contact = document.getElementById('contact');
    const sections : any[] = [home, about, programming, graphics, music, contact];

    const windowHeight = window.innerHeight;
  
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
  
      if (scrollPos + 2 >= sectionTop && scrollPos < sectionBottom) {
        setVisibleSection(section.id)
        return sections.find((s) => s.id === section.id);
      }
    }
    setVisibleSection('')
    return null;
  };

  useEffect(()=> {console.log(visibleSection)}, [visibleSection])

  const [navigated, setNavigated] = useState('waiting')

  useEffect(()=>{
    if (navigated === 'navigated'){
      setSV_Visible(false)
    }
  },[navigated])

  return (
    <>
      { window_x <= 500 && <GenericOverlay active={SV_Visible} updateVisibilityState={() => setSV_Visible(false)} visibleSection={visibleSection}/>}
      <div className='nav'>
        <img className='logo-img' src='/aologo.png' height='40px' width='45px' alt='logo'/>
        {window_x > 500 ? 
        <ul className='navigation'>
          <li>
            <Link
              className='nav-link font-1'
              activeClass="visible"
              to="home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={700}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className='nav-link font-1'
              activeClass="visible"
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={700}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className='nav-link font-1'
              activeClass="visible"
              to="programming"
              spy={true}
              smooth={true}
              offset={-50}
              duration={700}
            >
              Programming
            </Link>
          </li>
          <li>
            <Link
              className='nav-link font-1'
              activeClass="visible"
              to="3d"
              spy={true}
              smooth={true}
              offset={-50}
              duration={700}
            >
              3D Art
            </Link>
          </li>
          <li>
            <Link
              className='nav-link font-1'
              activeClass="visible"
              to="music"
              spy={true}
              smooth={true}
              offset={-50}
              duration={700}
            >
              Music
            </Link>
          </li>
          <li>
            <Link
              className='nav-link font-1'
              activeClass="visible"
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={700}
            >
              Contact
            </Link>
          </li>
        </ul> 
        : 
        <div className='small-nav'>
          {/* <img className='small-nav-img' src='/aologo.png' height='40px' width='45px' alt='nav' onClick={() => {handleSmallNavigation()}}/> */}
          <Icon icon='fluent:navigation-16-filled' className="m2 small-nav-img" onClick={() => {handleSmallNavigation()}}/>
        </div>}
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home visibleSection={visibleSection} windowSize={windowSize}/>}/>
          <Route path='/test' element={<ArchCanvas hidden={false} building=''/>}/>
          <Route path='/test0' element={<Canvas3D targetSubScene='' renderStartCallback={(e) => {}}/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
