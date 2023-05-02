import * as THREE from 'three'
import { MutableRefObject, useEffect, useRef, useState } from "react"
import { Icon } from '@iconify/react';
import ReactPlayer from "react-player";
import Canvas3D from "../components/BackgroundScene/Canvas3D/Canvas3D";
import { Canvas } from "@react-three/fiber";
import GenericCanvas from '../components/BackgroundScene/Canvas3D/GenericCanvas';
import ArchCanvas from '../components/BackgroundScene/Canvas3D/ArchCanvas';
import X_Scroller from '../components/primitives/scrollers/sideScroller/X_Scroller';
import MusicPlayer from '../components/primitives/musicPlayer/MusicPlayer';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import ContactInfo from '../components/primitives/contactComp/ContactInfo';
import Footer from '../components/primitives/footer/Footer';
import AboutInfo from '../components/MainComponents/About/AboutInfo';



export default function Home({visibleSection, windowSize} : {visibleSection : string, windowSize: {window_x: number, window_y: number}}) {

  const navigator = useNavigate()

  //3d-----------------------------------

  const [imageView, setImageView] = useState({
    id: -1,
    active: false,
    src: ''
  })

  const onImageViewChange = (id : any, active : boolean, src : string) => {
    setImageView({id, active, src});
  }

  const updateImageView = (e : any) => {
    console.log(e)
    if(e.target.nodeName !== 'ARTICLE' && e.target.nodeName !== 'IMG' && e.target.nodeName !== 'path' && e.target.nodeName !== 'svg'){
      setImageView({id: -1, active: false, src: ''});
    }
  }

  const navigateImageGallery = (direction: number) => {

    if (imageView.id + direction >= 0 && imageView.id + direction <= 4){
      let imgFMT = ''
      console.log('windowSize', windowSize)
      
      if (windowSize.window_x >= 1920){
        imgFMT = 'max'
      }
      else if (windowSize.window_x >= 1300){
        imgFMT = 'normal'
      }
      else if (windowSize.window_x >= 1000){
        imgFMT = 'square'
      }
      else if (windowSize.window_x < windowSize.window_y){
        imgFMT = 'mobile'
      }
      else{
        imgFMT = 'normal'
      }
      
      
      console.log(imgFMT)
      setImageView((prev) => ({
        active: true,
        id: imageView.id + direction, 
        src: `hs-imgs/e${imageView.id + direction + 1}-${imgFMT}.jpg`
      }));
    }
  }

  //3d-----------------------------------
  
  const [skillView, setSkillView] = useState('')
  const [loaded, setLoaded] = useState(false);

  const [projectView, setProjectView] = useState({
    name: '',
    description: '',
    src: '',
    link: '',
    visible: false
  })

  const description_Strategize = `Keeping track of multiple projects running at once WHILE having an hyperactive brain can be tough sometimes. This is what Strategize was built for! 
  As a solution for any individual or team, Strategize was created with the purpose of helping you dive into complex details of any task, while keeping a 
  birds-eye view over the scope of your entire stretch goals.
  By dividing your projects into a manageable hierarchy of long term goals, objectives and tasks, Strategize aims to assist you with pushing towards the goals
  you are set out to accomplish, no matter how long it may take.`

  const description_RegimeChange = `We all know that the end of mankind by the machine uprising is getting nearer any day now! 
  So why not glimpse into the future we'll never get to see?
  In early development, Regime Change is a world where authority, rules and power remain - even without any human in sight.`;

  const onProjectViewChange = (name: string, description: string, visible: boolean) => {
    if(!visible){
      setProjectView({name : '', src: '', link: '', description : '', visible: false})
      return;
    }
    switch (name){
      case 'Strategize': setProjectView({name, src: 'strategize_logo2_normal.jpg', link: 'https://strategize-fe.vercel.app/', description: description_Strategize, visible}); break;
      case 'Regime Change': setProjectView({name, src: 'RegimeChangeBanner.jpg', link: '/scavangers.mp4', description: description_RegimeChange, visible}); break;
    }
  }

  const updateProjectViewState = (e: any) => {
    if(e.target.nodeName === 'DIV'){
      setProjectView({name : '', src: '', link: '', description : '', visible: false})
    }
  }

  const [canvasOverlay, setCanvasOverlay] = useState({
    canvasId: '',
    active: false
  })

  const streamCanvasOverlay = ({canvasId, active} : {canvasId: string, active: boolean} ) => {
    setCanvasOverlay({canvasId, active});
  }

  const updateCanvasStreamState = (e: any) => {
    if(e.target.nodeName === 'DIV'){
      setCanvasOverlay({canvasId: '', active: false})
    }
  }

  useEffect(()=>{
    if(canvasOverlay.active){
      console.log('active canvas updated to', canvasOverlay.canvasId)
    }
  }, [canvasOverlay])

  return (
    <>
      <div className="canvas-container">     
        { true && 
        <div className="flex j-center">
          <div className="f-dir-col jt-center">
            <div className="p5 b-img-title" style={{height:'99vh'}} id='home'>

              <h1 className='font-9 s-vw1 main-title'>Adam Ocheri</h1>        
              <h2 className='font-9 s3 flex f-wrap j-even'><span className='tech-art'>Tech</span> <span className='tech-art'>Art</span></h2>

              <div className='flex f-dir-row j-center mt7 mb7 p5'>
                <a href='mailto:adamotchery@gmail.com' target='_blank' rel='noreferrer' className="m3">
                  <Icon icon='material-symbols:attach-email-outline' className="m3 link-icon"/>
                </a>
                <a href='https://github.com/adam-ocheri' target='_blank' rel='noreferrer' className="m3">
                  <Icon icon='jam:github-square' className="m3 link-icon"/>
                </a>
                <a href='https://www.linkedin.com/in/adam-ocheri/' target='_blank' rel='noreferrer' className="m3">
                  <Icon icon='ant-design:linkedin-outlined' className="m3 link-icon"/>
                </a>
                <a href='/scavangers.mp4' target='_blank' rel='noreferrer' className="m3">
                  <Icon icon='academicons:cv-square' className="m3 link-icon"/>
                </a>
              </div>

              <a href={'#about'} className='p6'>
                <Icon icon='material-symbols:keyboard-arrow-down-rounded' className="m3 down-arrow"/>
              </a>
            </div>
            
            <section>
              <AboutInfo/>

              
              
              <article className="nav-area black">
                
                {/*Tech----------------------------------------------------------------------Tech-----------------------------------------------------------Tech */}
                <section id='programming' className='mt5 mb5 pb5'>
                  <div className='mt6 skill-img-container' style={{backgroundColor: 'black'}} >
                    <img className='skill-img' src='/skill_programming.png' alt='programming'/>
                  </div>
                  <div className='swa' >
                    <div className="b-img-0 " >
                      <div className={`project-details ${!projectView.visible ? 'details-off' : ''}`} onClick={(e)=>{updateProjectViewState(e)}}>
                        {projectView.visible && 
                          <article className={`project-article article-${projectView.name === 'Strategize' ? 'strategize' : 'regime-change'}`} style={{border:'20px solid white', width: '70vw', height: '70vh', position: 'absolute', zIndex: 2}}>
                            <a className='anchor' href={projectView.link} target='_blank' rel='noreferrer'>
                              <h2 className='m5 p6 font-1 s3 area-text-n'>
                                {projectView.name}
                                <Icon icon='ri:external-link-fill' className="" width={'24px'} style={{margin:'5px'}}/> 
                              </h2>
                              
                            </a> 
                            
                            <p className='m5 p6 white font-1 s2 area-text'>
                              {projectView.description}
                            </p>
                            {/* <img src={projectView.src} alt={projectView.name} style={{width: '100%', height: '60%'} }/> */}

                          </article>}
                      </div>
                      <div className="p5 ">
                        <p className="font-1 s2 area-text"> 
                          Software engineering is art - a rather technical one, indeed, yet still a form of ingenious art and human expression nevertheless. <br/>
                          Creation lays at the heart of programming, together with the communication of ideas and sharing of experiences, and as such, it is bound to be
                          a creative and interactive medium to enrich our lives, and a tool we can actively utilize to solve real world problems.
                          Therefore, I have found myself immersed in the world of software development - constantly learning, creating and learning again, on the move.
                        </p>
                        <section className='flex f-dir-row f-wrap j-center'>
                          <article className="p1 entry-article article-strategize m5"> {/*flex j-center */}
                            {/* <h2 className="entry-title font-3 s2 ">Strategize <span className='teal'>|</span> Web App</h2>
                            
                            <div className="flex j-center mt6" >
                              <img src="strategize_logo.png" alt="img" className="hero-img"/>
                            </div> */}
                            <p>
                              <Icon icon='mdi:information-variant-box' width={'64px'} className='link-icon' onClick={() =>onProjectViewChange('Strategize', 'stuff..1', true)}/>
                              <a href='https://strategize-fe.vercel.app/' target='_blank' rel='noreferrer'><Icon icon='mdi:link-box-variant' width={'64px'} className='link-icon' /></a> {/*onClick={()=> {window.location.href = 'https://strategize-fe.vercel.app/'}} */}
                            </p>
                            {/* <a href='https://strategize-fe.vercel.app/'>  </a>  */}
                            <div className="font-1 s1 white jt-left p4"> 
                              {/* Keeping track of multiple projects running at once WHILE having an hyperactive brain can be tough sometimes. This is what Strategize was built for! 
                              As a solution for any individual or team, Strategize was created with the purpose of helping you dive into complex details of any task, while keeping a 
                              birds-eye view over the scope of your entire stretch goals. <br/>
                              By dividing your projects into a manageable hierarchy of long term goals, objectives and tasks, Strategize aims to assist you with pushing towards the goals
                              you are set out to accomplish, no matter how long it may take. <br/> */}
                              {/* <p className='jt-center'>
                                <a  href='https://strategize-fe.vercel.app/' className='lnk'>Strategize</a>
                              </p> */}
                              
                            </div>
                          </article>
                          <article className="p1 entry-article article-regime-change m5">
                            <p>
                              <Icon icon='mdi:information-variant-box' width={'64px'} className='link-icon' onClick={() =>onProjectViewChange('Regime Change', 'stuff..2', true)}/>
                              <a href='/scavangers.mp4' target='_blank' rel='noreferrer'>
                                <Icon icon='mdi:link-box-variant' width={'64px'} className='link-icon'/>
                              </a>
                            </p>
                            {/* <h2 className="entry-title font-3 s2">Regime Change <span className='teal'>|</span> Game</h2>
                            <div className="flex j-center p1" >
                              <ReactPlayer url={'./scavangers.mp4'} controls={true}  width={'80%'}/>
                            </div> */}
                            {/* <video  width="100%" height="100%" loop onEnded={(e) => console.log('VIDEO Ended', e)} autoPlay muted>
                              <source src="scavangers.mp4" type="video/mp4"/>
                              Your browser does not support the video tag.
                            </video> */}
                            {/*<p className="font-1 s1 white jt-left p4"> 
                              We all know that the end of mankind by the machine uprising is getting nearer any day now! 
                              So why not glimpse into the future we'll never get to see?
                              In early development, Regime Change is a world where authority, rules and power remain - even without any human in sight. 
                            </p>*/}
                          </article>
                        </section>
                        
                        {/* <a href="/#"> Github </a> */}
                      </div>
                      <p className="font-6 p2 s1 area-text-skills flex f-wrap j-even">
                        <span>C++</span> | <span>Javascript</span> | <span>Typescript</span> | <span>HTML5</span> | <span>CSS3</span> | <span>Python</span> | <span>Node.js</span> | <span>React</span> | <span>Redux</span> | <span>MongoDB</span> | <span>Firebase</span> | <span>Unreal Engine</span> | <span>Git</span>
                      </p>
                    </div> 
                    <section className="pt3 mt3" >
                      <div className="pt3 mt3">
                        <Icon icon='logos:c-plusplus' className="m2 skill-icon"/>
                        <Icon icon='skill-icons:javascript' className="m2 skill-icon"/>
                        <Icon icon='skill-icons:typescript' className="m2 skill-icon"/>
                        <Icon icon='logos:html-5' className="m2 skill-icon"/>
                        <Icon icon='logos:css-3'  className="m2 skill-icon"/>
                        <Icon icon='logos:python' className="m2 skill-icon"/>
                        <Icon icon='logos:nodejs' className="m2 skill-icon"/>
                        <Icon icon='skill-icons:react-dark' className="m2 skill-icon"/>
                        <Icon icon='logos:redux' className="m2 skill-icon"/>
                        <Icon icon='skill-icons:mongodb' className="m2 skill-icon"/>
                        <Icon icon='logos:firebase' className="m2 skill-icon"/>
                        <Icon icon='logos:unrealengine'  className="m2 skill-icon"/>
                        <Icon icon='icon-park:github' className="m2 skill-icon"/>
                      </div>
                    </section> 
                  </div> 
                </section>
                
                {/*3D----------------------------------------------------------------------3D-----------------------------------------------------------3D */}
                
                <section id='3d' className='mt5 mb5 pb5'>
                  <div className='mt6 skill-img-container' style={{backgroundColor: 'black'}} >
                    <img className='skill-img' src='/skill_3d.png' alt='3d art'/>
                  </div>
                  <div className='b-img-1 '>  
                    <div style={{position:'relative'}}>
                      {/* <GenericCanvas/> */}

                      <div onMouseDown={(e)=> {updateCanvasStreamState(e)}} 
                        className={`arch-canvas-overlay ${!canvasOverlay.active ? 'stream-off':''}`}
                      >
                        {canvasOverlay.active && <ArchCanvas hidden={!canvasOverlay.active} building={canvasOverlay.canvasId}/>}
                      </div>

                      <div className={`project-details ${!imageView.active ? 'details-off' : ''}`} onClick={(e)=>{updateImageView(e)}}>
                        {imageView.active && 
                          <article className='project-article' style={{backgroundColor:'black' ,border:'20px solid white', width: '70vw', height: '70vh', position: 'absolute', zIndex: 2}}>
                          <img src={imageView.src} alt='s'  className='nav-img'/>

                            <article className='overlay-nav-t'>
                              <Icon icon='ic:round-navigate-before' className={`m2 ${ imageView.id === 0 ? 'nav-btn-deactivated' : 'overlay-nav-btn'}`} width={'64px'} onClick={() => navigateImageGallery(-1)} />
                              <Icon icon='ic:round-navigate-next' className={`m2 ${ imageView.id === 4 ? 'nav-btn-deactivated' : 'overlay-nav-btn'}`} width={'64px'} onClick={() => navigateImageGallery(1)} />
                            </article>
                          

                          </article>}
                      </div>
                      
                      <div className="p5 b-img-1" style={{backgroundColor: 'rgba(240, 248, 255, 0.00)'}}>
                        <article className="font-1 s2 area-text p3 m2"> 
                          <div className='flex j-center'>
                            
                          </div>
                          Sitting at the crossroads of computer science, complex math, and visual arts, Computer Graphics is a steep mountain to climb. It is a formidable domain,
                          with countless of sub-domains that stem from it as a result of the multitude of complexities that it involves, from numerous 3D modeling techniques and
                          processes, to texturing, rigging, animation and rendering. <br/>
                          However, tremendous efforts are often followed by an accommodating reward to match - and that reward is the joy of creating worlds, the creation of 
                          living characters, with inspiring stories and relatable histories. <br/>
                          As such, 3D art is a craft that pushes the limits of imagination for both the ones who put it together, as well as the ones who get to experience it.
                          
                        </article>
                        {/* <img onClick={() => {streamCanvasOverlay({canvasId: 'factory', active: true})}}  src="3d2.png" alt="img" className="hero-img m2"/>
                        <img onClick={() => {streamCanvasOverlay({canvasId: 'library', active: true})}} src="3d1.png" alt="img" className="hero-img m2"/> */}
                        <section className='tour-img-container'>
                          <div onClick={() => {streamCanvasOverlay({canvasId: 'library', active: true})}} className='m5 portal-3d portal-1'>
                            <p className='font-9 teal'>
                              TAKE A TOUR
                            </p>
                          </div>

                          <div onClick={() => {streamCanvasOverlay({canvasId: 'factory', active: true})}} className='m5 portal-3d portal-2'>
                            <p className='font-9 teal'>
                              TAKE A TOUR
                            </p>
                          </div>
                        </section>
             
                        <article className="font-1 s2 area-text p3 m2">                        
                          Earnestly learning more, with a longstanding awe, I am constantly honing numerous Computer Graphics skills, aiming towards the 3D Generalist 
                          approach. The inter-connectivity of the plethora of sub-domains in CG means I can not and will not commit to pursuing specific mastery and 
                          proficiency in none of these sub domains - since they are all equally fascinating and paramount for any 3D rendering production pipeline.
                          <div className='flex j-center'>
                            {/* <GenericCanvas/> */}
                          </div>
                        </article>
                        <X_Scroller onImageViewChange={onImageViewChange} imageView={imageView}/>
                        {/* <a href="/#"> Portfolio </a> */}
                      </div>
                      <p className="font-6 p2 s1 area-text-skills flex f-wrap j-even">
                        <span>Blender</span> | <span>Maya</span> | <span>Substance Painter</span> | <span>Substance Designer</span> | <span>Unreal Engine</span> | <span>Three.js</span>
                      </p>
                    </div>
                    <section style={{marginTop: '20px', paddingTop: '20px'}}>
                      <div className="swa">
                        <Icon icon='logos:blender' className="m2 skill-icon"/>
                        <Icon icon='vscode-icons:file-type-maya' className="m2 skill-icon"/>
                        <img src="sp.png" alt="img" className="m2 skill-icon"/>
                        <img src="sd5.png" alt="img" className="m2 skill-icon"/>
                        <Icon icon='logos:unrealengine' className="m2 skill-icon"/>
                      </div>  
                    </section>
                  </div>
                </section>
                  
                
                {/*Music----------------------------------------------------------------------Music-----------------------------------------------------------Music */}
                
                <section id='music' className='mt5 mb5 pb5'>
                    <div className='mt6 skill-img-container' style={{backgroundColor: 'black'}} >
                      <img className='skill-img' src='/skill_music.png' alt='music'/>
                    </div>
                    <div className="b-img-2" >
                      <div className="p5">
                        <p className="font-1 s2 area-text"> 
                          
                        </p>
                      </div>
                      <div className='flex j-center jt-center'>
                        {/* <img style={{minWidth: '300px', width: '30vw'}} src='/OriginalMusic2.png' alt='music'/> */}
                        <h3 className='m6 font-9 s3 teal'>Originals</h3>
                      </div>
                      <MusicPlayer/>
                      <div className='flex j-center jt-center'>
                        {/* <img style={{minWidth: '300px', width: '30vw'}} src='/Tributes.png' alt='music'/> */}
                        <h3 className='m6 font-9 s3 teal'>Tributes</h3>
                      </div>
                      
                      <iframe className='vid-frame' src="https://www.youtube.com/embed/5RbIy67mfII" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                      <iframe className='vid-frame' src="https://www.youtube.com/embed/nHH1Z4GoHTU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                      <iframe className='vid-frame' src="https://www.youtube.com/embed/SGz4aLi0vOQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                      <p className="font-6 p2 s1 area-text-skills flex f-wrap j-even">
                        <span>Music Production</span> | <span>Sound Design</span> | <span>Ableton</span> | <span>Cubase</span> | <span>Mixing</span> | <span>Mastering</span> | <span>Guitar</span> | <span>Violin</span> | <span>Cello</span> | <span>Piano</span> | <span>French Horn</span> 
                      </p>
                    </div>
                    <section style={{marginTop: '20px', paddingTop: '20px'}}>
                      <div className="swa">
                        <Icon icon='skill-icons:ableton-dark' className="m2 skill-icon"/>
                        <img src="logo-cubase.svg" alt="img" className="m2 skill-icon"/>
                        <img src="sound-mix.svg" alt="img" className="m2 skill-icon"/>
                        <Icon icon='noto-v1:guitar' className="m2 skill-icon"/>
                        <Icon icon='noto:violin' className="m2 skill-icon"/>
                        <img src="grand-piano.svg" alt="img" className="m2 skill-icon"/>
                        <img src="french-horn.svg" alt="img" className="m2 skill-icon"/>
                      </div>
                    </section>
                </section>
                
              </article>  
              <ContactInfo/>
              <Footer/>
            </section>

          </div>
        </div>}
        
      </div>
    </>
  )
}
