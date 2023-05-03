import ContactInfo from '../components/primitives/contactComp/ContactInfo';
import Footer from '../components/primitives/footer/Footer';
import AboutInfo from '../components/MainComponents/About/AboutInfo';
import Programming from '../components/MainComponents/Programming/Programming';
import Art3D from '../components/MainComponents/CGArt/Art3D';
import Music from '../components/MainComponents/Music/Music';
import HomeTitle from '../components/MainComponents/HomeTitle/HomeTitle';



export default function Home({visibleSection, windowSize} : {visibleSection : string, windowSize: {window_x: number, window_y: number}}) {

  return (
    <>
      <div className="canvas-container">     
        { true && 
        <div className="flex j-center">
          <div className="f-dir-col jt-center">

            <HomeTitle/>  

            <section>
              <AboutInfo/>
              <article className="nav-area black" id='skills-article'>
                <Programming/> 
                <Art3D windowSize={windowSize}/>               
                <Music/>    
              </article>  
              
              <ContactInfo/>
            </section>
            
          </div>
        </div>}
        <Footer/>
      </div>
    </>
  )
}
