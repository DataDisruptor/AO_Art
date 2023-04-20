import { Icon } from '@iconify/react'
import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import GenericCanvas from '../components/BackgroundScene/Canvas3D/GenericCanvas'

export default function Homepage() {
  const [playlistItem, setPlaylistItem] = useState(0);
  const [song, setSong] = useState('./intro.mp3');
  const [songName, setSongName] = useState('Simpler Times');
  const musicPlayer = useRef(new ReactPlayer({}));
  const onPlaylistUpdate = (direction : number)=>{
    if (playlistItem + direction > 1 || playlistItem + direction < 0 ){
      return;
    }
    setPlaylistItem(prev=> prev + direction);
    
  }
  useEffect(()=>{
    switch (playlistItem) {
      case 0: setSong('./intro.mp3'); setSongName('Simpler Times'); break;
      case 1: setSong('./second.mp3'); setSongName('Faint Lights'); break;
    }
    console.log(musicPlayer)
    
  }, [playlistItem, musicPlayer])
  return (
    <>
    <div className="flex j-center pb5 mb5">
        <div className="f-dir-col jt-center pt5 mt5">
          <div className="pb7 mb7">
            <div className='flex flex-dir-row'>
                {/* <img className='logo-img' src='/bolt0.png' height='30px' width='32px' alt='bolt'/> */}
                <h1 className='font-9 s4'>Adam Ocheri</h1>
                {/* <img className='logo-img' src='/bolt0.png' height='30px' width='32px' alt='bolt'/> */}
                
            </div>
            
              
            {/* <h2 className='font-9 s3 flex f-wrap j-even pt7 pb7 black'><span>Tech</span> <span>Art</span></h2> */}
          </div>
        </div>
    </div>
    <div className='flex f-dir-row j-center'>
      <Icon icon='material-symbols:attach-email-outline' className="m2 skill-icon"/>
      <Icon icon='jam:github-square' className="m2 skill-icon"/>
      <Icon icon='ant-design:linkedin-outlined' className="m2 skill-icon"/>
      <Icon icon='academicons:cv-square' className="m2 skill-icon"/>
    </div>
  
    <div className='jt-center'>
      <h2>About me</h2>
      <p>
        Hi, my name Adam, and I am senior el strong
      </p>
    </div>
    <div className='flex flex-dir-col f-wrap jt-center'>
      {/*Tech----------------------------------------------------------------------Tech-----------------------------------------------------------Tech */}
        {true && 
                <div>
                  <div style={{backgroundColor: '#000000'}}>
                    <div className="p5">
                      <p className="font-1 s1 area-text"> 
                        Software engineering is art - a rather technical one, indeed, yet still a form of ingenious art and human expression nevertheless. <br/>
                        Creation lays at the heart of programming, together with the communication of ideas and sharing of experiences, and as such, it is bound to be
                        a creative and interactive medium to enrich our lives, and a tool we can actively utilize to solve real world problems.
                        Therefore, I have found myself immersed in the world of software development - constantly learning, creating and learning again, on the move.
                      </p>
                      <article className="p1 entry-article m5"> {/*flex j-center */}
                        <h2 className="entry-title font-3 s2">Strategize <span className='teal'>|</span> Web App</h2>
                        {/* <a href='https://strategize-fe.vercel.app/'>  </a>  */}
                        <img src="strategize_logo.png" alt="img" className="hero-img"/>
                        <div className="font-1 s1 white jt-left p4"> 
                          Keeping track of multiple projects running at once WHILE having an hyperactive brain can be tough sometimes. This is what Strategize was built for! 
                          As a solution for any individual or team, Strategize was created with the purpose of helping you dive into complex details of any task, while keeping a 
                          birds-eye view over the scope of your entire stretch goals. <br/>
                          By dividing your projects into a manageable hierarchy of long term goals, objectives and tasks, Strategize aims to assist you with pushing towards the goals
                          you are set out to accomplish, no matter how long it may take. <br/>
                          <p className='jt-center'>
                            <a  href='https://strategize-fe.vercel.app/' className='lnk'>Strategize</a>
                          </p>
                          
                        </div>
                      </article>
                      <article className="flex j-center f-dir-col entry-article m5 p1">
                        <h2 className="entry-title font-3 s2">Regime Change <span className='teal'>|</span> Game</h2>
                        <div className="flex j-center " >
                          <ReactPlayer url={'./scavangers.mp4'} controls={true} width={'80%'}/>
                        </div>
                        <p className="font-1 s1 white jt-left p4"> 
                          We all know that the end of mankind by the machine uprising is getting nearer any day now! 
                          So why not glimpse into the future we'll never get to see? <br/>
                          In early development, Regime Change is a world where authority, rules and power remain - even without any human in sight.
                        </p>
                      </article>
                      {/* <a href="/#"> Github </a> */}
                    </div>
                    <p className="font-6 p2 s1 area-text-skills flex f-wrap j-even">
                      <span>C++</span> | <span>Javascript</span> | <span>Typescript</span> | <span>HTML5</span> | <span>CSS3</span> | <span>Python</span> | <span>Node.js</span> | <span>React</span> | <span>Redux</span> | <span>MongoDB</span> | <span>Firebase</span> | <span>Unreal Engine</span> | <span>Git</span>
                    </p>
                  </div> 
                  <section className="p3 m3">
                    <div className="p3 m3">
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
              {false && 
                <div>
                  <div className="b-img-1">
                    <div className="p5">
                      
                      <article className="font-1 s1 area-text p3 m2"> 
                        <div className='flex j-center'>
                          <GenericCanvas/>
                        </div>
                        Sitting at the crossroads of computer science, complex math, and visual arts, Computer Graphics is a steep mountain to climb. It is a formidable domain,
                        with countless of sub-domains that stem from it as a result of the multitude of complexities that it involves, from numerous 3D modeling techniques and
                        processes, to texturing, rigging, animation and rendering. <br/>
                        However, tremendous efforts are often followed by an accommodating reward to match - and that reward is the joy of creating worlds, the creation of 
                        living characters, with inspiring stories and relatable histories. <br/>
                        As such, 3D art is a craft that pushes the limits of imagination for both the ones who put it together, as well as the ones who get to experience it.
                        
                      </article>
                      <img src="3d1.png" alt="img" className="hero-img m2"/>
                      <img src="3d2.png" alt="img" className="hero-img m2"/>
                      <article className="font-1 s1 area-text p3 m2"> 
                        <div className='flex j-center'>
                          <img src="cps.jpg" alt="img" className="hero-img m2"/>
                        </div>
                        
                        Earnestly learning more, with a longstanding awe, I am constantly honing numerous Computer Graphics skills, aiming towards the 3D Generalist 
                        approach. The inter-connectivity of the plethora of sub-domains in CG means I can not and will not commit to pursuing specific mastery and 
                        proficiency in none of these sub domains - since they are all equally fascinating and paramount for any 3D rendering production pipeline.
                        <div className='flex j-center'>
                          {/* <GenericCanvas/> */}
                        </div>
                      </article>
                      <img src="3d1.jpg" alt="img" className="hero-img m2"/>
                      <img src="3d2.jpg" alt="img" className="hero-img m2"/>
                      {/* <a href="/#"> Portfolio </a> */}
                    </div>
                    <p className="font-6 p2 s1 area-text-skills flex f-wrap j-even">
                      <span>Blender</span> | <span>Maya</span> | <span>Substance Painter</span> | <span>Substance Designer</span> | <span>Unreal Engine</span> | <span>Three.js</span>
                    </p>
                  </div>
                  <section className="p3 m3 ">
                    <div className="p3 m3">
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
              {false && 
                <div >
                  <div className="b-img-2">
                    <div className="p5">
                      <p className="font-1 s2 area-text"> 
                        
                      </p>
                    </div>
                    <div className='flex j-center jt-center'>
                      <h2 className="entry-title font-3 s3 m6">Original Music</h2>
                    </div>
                    <div className='p5 j-center flex'>
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
                          <ReactPlayer 
                            ref={musicPlayer}
                            height={'40px'} 
                            width={'45vw'}
                            url={song} 
                            playIcon={<Icon icon='icon-park:play' className="m2 skill-icon"/>} 
                            controls={true} 
                            style={{minHeight: '150px', minWidth: '30vw'}} 
                          /> 
                        </div>
                      </section>
                    </div>
                    {/*width="560" height="315" */}
                    <div className='flex j-center jt-center'>
                      <h2 className="entry-title font-3 s3 m6">Original Music Tributes</h2>
                    </div>
                    
                    <iframe className='vid-frame' src="https://www.youtube.com/embed/5RbIy67mfII" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe className='vid-frame' src="https://www.youtube.com/embed/nHH1Z4GoHTU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe className='vid-frame' src="https://www.youtube.com/embed/SGz4aLi0vOQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p className="font-6 p2 s1 area-text-skills flex f-wrap j-even">
                      <span>Music Production</span> | <span>Sound Design</span> | <span>Ableton</span> | <span>Cubase</span> | <span>Mixing</span> | <span>Mastering</span> | <span>Guitar</span> | <span>Violin</span> | <span>Cello</span> | <span>Piano</span> | <span>French Horn</span> 
                    </p>
                  </div>
                  <section className="p3 m3">
                    <div className="p3 m3">
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
    </div>
  </>
  )
}
