import * as THREE from 'three'
import { useEffect, useRef, useState } from "react"
import { Icon } from '@iconify/react';
import ReactPlayer from "react-player";
import Canvas3D from "../components/BackgroundScene/Canvas3D/Canvas3D";
import { Canvas } from "@react-three/fiber";
import GenericCanvas from '../components/BackgroundScene/Canvas3D/GenericCanvas';
import ArchCanvas from '../components/BackgroundScene/Canvas3D/ArchCanvas';
import X_Scroller from '../components/primitives/scrollers/sideScroller/X_Scroller';
import MusicPlayer from '../components/primitives/musicPlayer/MusicPlayer';



export default function Home() {
  
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
            <div className="pb7 mb7">

              <h1 className='font-9 s-vw1 main-title'>Adam Ocheri</h1>        
              <h2 className='font-9 s3 flex f-wrap j-even pt7 pb7 black'><span className='tech'>Tech</span> <span className='art'>Art</span></h2>

              <div className='flex f-dir-row j-center'>
                <Icon icon='material-symbols:attach-email-outline' className="m2 skill-icon link-icon"/>
                <Icon icon='jam:github-square' className="m2 skill-icon link-icon"/>
                <Icon icon='ant-design:linkedin-outlined' className="m2 skill-icon link-icon"/>
                <Icon icon='academicons:cv-square' className="m2 skill-icon link-icon"/>
              </div>

            </div>
            
            {true && <section className="">
              <button className={`nav-button font-1 s2 btn-left ${ skillView === 'programming' ? '' : ''}`} onClick={()=> setSkillView('programming')}>Programming </button>  
              <button className={`nav-button font-1 s2 btn-middle${ skillView === '3d' ? '' : ''}`} onClick={()=> setSkillView('3d')}>3D Art</button>  
              <button className={`nav-button font-1 s2 btn-right ${ skillView === 'music' ? '' : ''}`} onClick={()=> setSkillView('music')}>Music</button>
              <section className='flex j-center'>
                <article className='about black'>
                  <img className='m5' src='/about-me.png' alt='about' width={'300px'}/>
                  <p>
                    Hi, I am Addam
                  </p>
                </article>
                
              </section>
              <div className='mt6 skill-img-container' style={{backgroundColor: 'black'}}>
                <img className='skill-img' src='/skill_programming.png' alt='programming'/>
              </div>
              <article className="nav-area black">
                {/*Tech----------------------------------------------------------------------Tech-----------------------------------------------------------Tech */}
                {true && 
                  <div className='swa'>
                    <div className="b-img-0 ">
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
                }
                {/*3D----------------------------------------------------------------------3D-----------------------------------------------------------3D */}
                <div className='mt6 skill-img-container' style={{backgroundColor: 'black'}}>
                  <img className='skill-img' src='/skill_3d.png' alt='3d art'/>
                </div>
                {true && 
                  <div className='b-img-1 '>
                    
                    <div style={{position:'relative'}}>
                      <GenericCanvas/>

                        <div onMouseDown={(e)=> {updateCanvasStreamState(e)}} 
                        className={`arch-canvas-overlay ${!canvasOverlay.active ? 'stream-off':''}`}>
                        {canvasOverlay.active && <ArchCanvas hidden={!canvasOverlay.active} building={canvasOverlay.canvasId}/>}
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
                        <section className='flex f-dir-row j-center'>
                          <div onClick={() => {streamCanvasOverlay({canvasId: 'library', active: true})}} className='m5 portal-3d portal-1'>
                            <p className='font-2 s3 white'>
                              TAKE A TOUR
                            </p>
                          </div>

                          <div onClick={() => {streamCanvasOverlay({canvasId: 'factory', active: true})}} className='m5 portal-3d portal-2'>
                            <p className='font-2 s3 white'>
                              TAKE A TOUR
                            </p>
                          </div>
                        </section>
                        
                        
                        <article className="font-1 s2 area-text p3 m2"> 
                          {/* <div className='flex j-center'>
                            <img src="cps.jpg" alt="img" className="hero-img m2"/>
                          </div> */}
                          
                          Earnestly learning more, with a longstanding awe, I am constantly honing numerous Computer Graphics skills, aiming towards the 3D Generalist 
                          approach. The inter-connectivity of the plethora of sub-domains in CG means I can not and will not commit to pursuing specific mastery and 
                          proficiency in none of these sub domains - since they are all equally fascinating and paramount for any 3D rendering production pipeline.
                          <div className='flex j-center'>
                            {/* <GenericCanvas/> */}
                          </div>
                        </article>
                        
                        {/* <div>
                          <img style={{left:'-220', position: 'relative'}} src="ue1.png" alt="img" className="hero-img left m2"/>
                          <img style={{right:'220', position: 'relative'}} src="ue2.png" alt="img" className="hero-img m2"/>
                        </div> */}
                        {/* <div className="image-scroll-container">
                          <div className="scroll-buttons">
                            <button className="scroll-left-button">&lt;</button>
                            <button className="scroll-right-button">&gt;</button>
                          </div>
                          <div className="image-scroll-wrapper">
                            <img src="ue1.png" alt="img" />
                            <img src="ue2.png" alt="img"/>
                            <img src="ue1.png" alt="img" />
                            <img src="ue2.png" alt="img"/>
                            <img src="ue1.png" alt="img" />
                            <img src="ue2.png" alt="img"/>
                          </div>
                      </div> */}
                      {/* <div className='flex j-center'>
                      <div className="scroll-buttons">
                            <button className="scroll-left-button">&lt;</button>
                            <button className="scroll-right-button">&gt;</button>
                          </div>
                        <div className='scroll-container'>
                          <img  src="ue1.png" alt="img" className='scroll-item'/>
                          <img  src="ue1.png" alt="img" className='scroll-item'/>
                          <img  src="ue1.png" alt="img" className='scroll-item'/>
                          <img  src="ue1.png" alt="img" className='scroll-item'/>
                          <img  src="ue1.png" alt="img" className='scroll-item'/>
                          <img  src="ue1.png" alt="img" className='scroll-item'/>
                          <img  src="ue1.png" alt="img" className='scroll-item'/>
                          <img  src="ue1.png" alt="img" className='scroll-item'/>
                          <img  src="ue1.png" alt="img" className='scroll-item'/>
                          <img  src="ue1.png" alt="img" className='scroll-item'/>
                          <img  src="ue1.png" alt="img" className='scroll-item'/>
                          <img  src="ue1.png" alt="img" className='scroll-item'/>
                          <img  src="ue1.png" alt="img" className='scroll-item'/>
                          <img  src="ue1.png" alt="img" className='scroll-item'/>
                          <img  src="ue1.png" alt="img" className='scroll-item'/>
                          <img  src="ue1.png" alt="img" className='scroll-item'/>
                          <img  src="ue1.png" alt="img" className='scroll-item'/>
                          <img  src="ue1.png" alt="img" className='scroll-item'/>
                          <img  src="ue1.png" alt="img" className='scroll-item'/>
                          <img  src="ue1.png" alt="img" className='scroll-item'/>
                          <img  src="ue1.png" alt="img" className='scroll-item'/>
                          <img  src="ue1.png" alt="img" className='scroll-item'/>
                          <img  src="ue1.png" alt="img" className='scroll-item'/>
                          <img  src="ue1.png" alt="img" className='scroll-item'/>
                          <img  src="ue1.png" alt="img" className='scroll-item'/>
                      
                        </div>
                      </div> */}
                      
                        <X_Scroller/>
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
                }
                {/*Music----------------------------------------------------------------------Music-----------------------------------------------------------Music */}
                <div className='mt6 skill-img-container' style={{backgroundColor: 'black'}}>
                  <img className='skill-img' src='/skill_music.png' alt='music'/>
                </div>
                {true && 
                  <div >
                    <div className="b-img-2">
                      <div className="p5">
                        <p className="font-1 s2 area-text"> 
                          
                        </p>
                      </div>
                      <div className='flex j-center jt-center'>
                        <img style={{minWidth: '300px', width: '30vw'}} src='/OriginalMusic2.png' alt='music'/>
                        {/* <h2 className="entry-title font-3 s3 m6">Original Music</h2> */}
                      </div>
                      <MusicPlayer/>
                      {/* <div className='p5 j-center flex'>
                        <section className='music-player p3'>
                          <div className='j-even flex f-dir-row p4'>
                            <div className='flex f-dir-row f-basis-5'>
                              <Icon icon='emojione-v1:musical-note' width='64px' height='64px' className=''/>
                              <span className='song-title s1 font-3 white'>{songName}</span>
                            </div>
                            <div className='flex f-dir-row'>
                              <div className='music-player-button m1'>
                                <Icon onClick={()=> onPlaylistUpdate(-1)} icon='mdi:previous-title' width='48px' height='48px' className=''/>
                              </div>
                              <div className='music-player-button m1'>
                                <Icon onClick={()=> onPlaylistUpdate(1)} icon='mdi:next-title' width='48px' height='48px' className=''/>
                              </div>            
                            </div>
                            
                          </div>
                          <div className='j-center flex '>
                            <audio ref={musicPlayer}
                              // ref={musicPlayer}
                              // height={'40px'} 
                              // width={'45vw'}
                              src={song}
                              // url= 
                              // playIcon={<Icon icon='icon-park:play' className="m2 skill-icon"/>} 
                              controls={true} 
                              style={{minHeight: '150px', minWidth: '30vw'}} 
                            /> 
                          </div>
                          
                        </section>
                      </div> */}
                      {/*width="560" height="315" */}
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
                  </div>
                }
              </article>  
            </section> }
          </div>
        </div>}
        <div className='p5 mt7 mb7 swa' style={{border: '5px dashed grey'}}>
          <h2 className='black font-7 s3'>CONTACT</h2>
          <p className='black font-1 s2'>
            If you want to contact me then please do not hesitate to reach out about anything.
          </p>
        </div>
      </div>
    </>
  )
}
