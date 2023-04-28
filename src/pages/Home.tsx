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
import { Link } from 'react-router-dom';
import ContactInfo from '../components/primitives/contactComp/ContactInfo';
import Footer from '../components/primitives/footer/Footer';



export default function Home({visibleSection} : {visibleSection : string}) {

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
      setImageView((prev) => ({
        active: true,
        id: imageView.id + direction, 
        src: `e${imageView.id + direction + 1}.png`
      }));
    }
  }

  //3d-----------------------------------
  
  const [skillView, setSkillView] = useState('')
  const [loaded, setLoaded] = useState(false);

  const [projectView, setProjectView] = useState({
    name: '',
    description: '',
    visible: false
  })

  const onProjectViewChange = (name: string, description: string, visible: boolean) => {
    if(!visible){
      setProjectView({name : '', description : '', visible: false})
      return;
    }
    switch (name){
      case 'strategize': setProjectView({name, description, visible}); break;
      case 'regime-change': setProjectView({name, description, visible}); break;
    }
  }

  const updateProjectViewState = (e: any) => {
    if(e.target.nodeName === 'DIV'){
      setProjectView({name : '', description : '', visible: false})
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

  //ABOUT ------------------------------------------------------------------------------------

  const info_0 = ` Hi, my name is Adam. I am a software engineer and artist with years of experience and an ever growing passion for creation. <br/>
  As a little kid, I remember myself forcing my parents to write down stories I came up with before learning how to read and write, and
  even "accidentally" breaking down toys and electrical devices - completely destroying them - just to see how they were built. {'(Sorry mom!)'} `;
  const info_1 = ` Growing up over the years, I had discovered music as a powerful medium through which my urge for creation and conveying stories could be expressed.
  I had studied various instruments in dedication, formed bands and toured at live concerts, studied modern musical production tools and techniques,
  and had the pleasure of composing music for live theatre and contemporary dance routines, as well as the opportunity to pass on my knowledge to
  some extremely passionate and talented young students.`;
  const info_2 = ` As a detail-oriented individual with strong affinity for technical challenges and critical thinking, I had found myself falling in love with the
  world of software engineering, completely immersed, horrified and amazed by the infinity of possibilities that could be unleashed with programming 
  as a tool at my disposal. My passion for creation has forced me into another endless pursuit, where my new journey began with Game Development in
  C++ and Unreal Engine, as well as some extensive detours into the realm of Computer Graphics, learning 3D modeling and rendering tools. <br/>
  As time passed, my interest and curiosity had expanded into numerous development domains, and have successfully completed the Fullstack 
  web development program at <a>Masterschool</a>, an amazingly comprehensive program which I was fortunate to have participated in, where I cultivated
  invaluable programming experience, further pushing the boundaries of my imagination and creativity, demystifying one bug at a time, persistently and 
  steadily, expanding and revealing new horizons within the world of software engineering.`;

  /*
    - shouldUpdate => true
    - delete old text
    - set current about paragraph index
    - update text
    - update iteration
  */

  const [print_shouldUpdate, print_setShouldUpdate] = useState(false);
  const [print_info, print_setInfo] = useState('');
  const [print_index, print_setIndex] = useState(-1);
  const [print_iteration, print_setIteration] = useState(-1);
  const [print_text, print_setText] = useState('')
  let Timer : NodeJS.Timer;
  const printTimer : MutableRefObject<NodeJS.Timer | undefined> = useRef()

  useEffect(()=> {
    print_setIndex(0)
  }, [])

  useEffect(() => {
    if(print_index >= 0 && print_index <= 2){
      switch (print_index){
        case 0: print_setInfo(info_0); break;
        case 1: print_setInfo(info_1); break;
        case 2: print_setInfo(info_2); break;
      }
      print_setIteration(0);
    }
    // else if(print_index > 2) print_setIndex(2);
    // else if( print_index < 0) print_setIndex(0)
  }, [print_index, info_0, info_1, info_2])

  useEffect(() => {
    if(print_info.length > 0 && print_iteration === 0){
      print_setShouldUpdate(true);
    } else {
      print_setShouldUpdate(false);
    }
  }, [print_info, print_iteration])

  useEffect(()=> {
    if(print_shouldUpdate ){
      print_setText('');
      
    }
  }, [print_shouldUpdate])

  useEffect(()=> {
    if(print_iteration + 1 < print_info.length){
      print_setIteration(prev => prev + 1);
    }
  },[print_text])

  

  useEffect(()=> {
    // if(print_info[print_iteration] !== undefined)
    printTimer.current = setTimeout(() => {
      print_setText(prev => prev + print_info[print_iteration])
    }, 15)
    ;
  }, [print_iteration, print_info])

  const handleAboutIndexUpdate = (direction: number) => {
    if (print_index + direction >= 0 && print_index + direction <= 2){
      clearTimeout(printTimer.current)
      print_setIndex(prev => prev + direction)
    }
  }
  

  return (
    <>
      <div className="canvas-container">
        {/* <Canvas3D targetSubScene={skillView} renderStartCallback={(e) => {assetsLoaded(e)}}/> */}
        {/* {!hasLanded &&
        <div className="j-center flex va-mid">
          {loaded && <button className="land-button" onClick={() => {setHasLanded(true)}}>ENTER</button>}
        </div>} */}
        
        { true && 
        <div className="flex j-center">
          <div className="f-dir-col jt-center">
            <div className="p5" style={{height:'99vh'}} id='home'>

              <h1 className='font-9 s-vw1 main-title'>Adam Ocheri</h1>        
              <h2 className='font-9 s3 flex f-wrap j-even  black'><span className='tech'>Tech</span> <span className='art'>Art</span></h2>

              <div className='flex f-dir-row j-center mt7 mb7 p5'>
                <Icon icon='material-symbols:attach-email-outline' className="m3 link-icon"/>
                <Icon icon='jam:github-square' className="m3 link-icon"/>
                <Icon icon='ant-design:linkedin-outlined' className="m3 link-icon"/>
                <Icon icon='academicons:cv-square' className="m3 link-icon"/>
              </div>
              <a href={'#about'} className='p6'>
                <Icon icon='material-symbols:keyboard-arrow-down-rounded' className="m3 down-arrow"/>
              </a>
            </div>
            
            <section>
              <section className='m5' style={{paddingTop: '15%', paddingBottom:'50%'}}  id='about'>
                <div>
                  <a href='#programming'><button className={`nav-button font-1 s2 btn-left ${ skillView === 'programming' ? '' : ''}`} onClick={()=> setSkillView('programming')}>Programming</button></a>
                  <a href='#3d'><button className={`nav-button font-1 s2 btn-middle${ skillView === '3d' ? '' : ''}`} onClick={()=> setSkillView('3d')}>3D Art</button></a>  
                  <a href='#music'><button className={`nav-button font-1 s2 btn-right ${ skillView === 'music' ? '' : ''}`} onClick={()=> setSkillView('music')}>Music</button></a>
                  <div className='flex j-center'>
                    <article className='about black' style={{minHeight: '70vh'}}>
                      <img className='m5' src='/about-me.png' alt='about' width={'50%'}/>
                      <div className='overlay-nav'>
                        <Icon icon='ic:round-navigate-before' className={`m2 ${ print_index === 0 ? 'nav-btn-deactivated' : 'overlay-nav-btn'}`} width={'64px'} onClick={() => handleAboutIndexUpdate(-1)} />
                        <Icon icon='ic:round-navigate-next' className={`m2 ${ print_index === 2 ? 'nav-btn-deactivated' : 'overlay-nav-btn'}`} width={'64px'}onClick={() => handleAboutIndexUpdate(1)} />
                      </div>
                      <p className='p3 font-11 s2 jt-left'>
                        {print_text}
                      </p>
                      
                      
                      
                    </article>
                    
                  </div>
                </div>
              </section>
              

              {/*Tech----------------------------------------------------------------------Tech-----------------------------------------------------------Tech */}
              
              <article className="nav-area black">
                
                {true && 
                <section id='programming' className='mt5 mb5 pb5'>
                  <div className='mt6 skill-img-container' style={{backgroundColor: 'black'}} >
                    <img className='skill-img' src='/skill_programming.png' alt='programming'/>
                  </div>
                  <div className='swa' >
                    <div className="b-img-0 " >
                      <div className={`project-details ${!projectView.visible ? 'details-off' : ''}`} onClick={(e)=>{updateProjectViewState(e)}}>
                        {projectView.visible && 
                          <article className='project-article' style={{backgroundColor:'black' ,border:'20px solid white', width: '70vw', height: '70vh', position: 'absolute', zIndex: 2}}>
                            <h2 className='white font-1 s3'>{projectView.name}</h2> 
                            <p className='white font-1 s2'>
                              {projectView.description}
                            </p>
                            
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
                              <Icon icon='mdi:information-variant-box' width={'64px'} className='link-icon' onClick={() =>onProjectViewChange('strategize', 'stuff..1', true)}/>
                              <Icon icon='mdi:link-box-variant' width={'64px'} className='link-icon'/>
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
                              <Icon icon='mdi:information-variant-box' width={'64px'} className='link-icon' onClick={() =>onProjectViewChange('regime-change', 'stuff..2', true)}/>
                              <Icon icon='mdi:link-box-variant' width={'64px'} className='link-icon'/>
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
                }
                {/*3D----------------------------------------------------------------------3D-----------------------------------------------------------3D */}
                
                {true && 
                <section id='3d' className='mt5 mb5 pb5'>
                  <div className='mt6 skill-img-container' style={{backgroundColor: 'black'}} >
                    <img className='skill-img' src='/skill_3d.png' alt='3d art'/>
                  </div>
                  <div className='b-img-1 '>  
                    <div style={{position:'relative'}}>
                      <GenericCanvas/>

                      <div onMouseDown={(e)=> {updateCanvasStreamState(e)}} 
                        className={`arch-canvas-overlay ${!canvasOverlay.active ? 'stream-off':''}`}
                      >
                        {canvasOverlay.active && <ArchCanvas hidden={!canvasOverlay.active} building={canvasOverlay.canvasId}/>}
                      </div>

                      <div className={`project-details ${!imageView.active ? 'details-off' : ''}`} onClick={(e)=>{updateImageView(e)}}>
                        {imageView.active && 
                          <article className='project-article' style={{backgroundColor:'black' ,border:'20px solid white', width: '70vw', height: '70vh', position: 'absolute', zIndex: 2}}>
                            <img src={imageView.src} alt='s'  className='nav-img'/>
                          <div className='overlay-nav'>
                            <Icon icon='ic:round-navigate-before' className={`m2 ${ imageView.id === 0 ? 'nav-btn-deactivated' : 'overlay-nav-btn'}`} width={'64px'} onClick={() => navigateImageGallery(-1)} />
                            <Icon icon='ic:round-navigate-next' className={`m2 ${ imageView.id === 4 ? 'nav-btn-deactivated' : 'overlay-nav-btn'}`} width={'64px'} onClick={() => navigateImageGallery(1)} />
                          </div>
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
                            <p className='font-2 white'>
                              TAKE A TOUR
                            </p>
                          </div>

                          <div onClick={() => {streamCanvasOverlay({canvasId: 'factory', active: true})}} className='m5 portal-3d portal-2'>
                            <p className='font-2 white'>
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
                  
                }
                {/*Music----------------------------------------------------------------------Music-----------------------------------------------------------Music */}
                
                {true && 
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
                        <img style={{minWidth: '300px', width: '30vw'}} src='/OriginalMusic2.png' alt='music'/>
                      </div>
                      <MusicPlayer/>
                      <div className='flex j-center jt-center'>
                        <img style={{minWidth: '300px', width: '30vw'}} src='/Tributes.png' alt='music'/>
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
                }
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
