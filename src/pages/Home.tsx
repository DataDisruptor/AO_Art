import { useState } from "react"
import { Icon } from '@iconify/react';
import ReactPlayer from "react-player";

export default function Home() {
  
  const [skillView, setSkillView] = useState('programming')

  return (
    <div className="flex j-center">
      <div className="f-dir-col jt-center">
        <h1 className='font-1'>Adam Ocheri</h1>
        <h2 className='font-3'>Tech | Art</h2>
        <p>
          <img src="http://placekitten.com/200/300" alt="img"/>
        </p>
        <section>
          <button className="nav-button" onClick={()=> setSkillView('programming')}>Programming</button>  
          <button className="nav-button" onClick={()=> setSkillView('3d')}>3D Art</button>  
          <button className="nav-button" onClick={()=> setSkillView('music')}>Music</button>
          <article className="nav-area black">
            {/*Tech----------------------------------------------------------------------Tech-----------------------------------------------------------Tech */}
            {skillView === 'programming' && 
              <div>
                <div className="b-img-0">
                  <div className="p5">
                    <p className="font-1 s2 area-text"> 
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quas exercitationem accusamus repellendus, 
                      recusandae rerum, animi harum beatae, qui est magnam ut esse dolore laudantium odit doloribus sapiente quisquam. 
                      Exercitationem?
                    </p>
                    <article className="p5 entry-article m5"> {/*flex j-center */}
                      <h2 className="entry-title font-3 s3">Strategize Web App</h2>
                      <img src="strategize_logo.png" alt="img" className="hero-img"/>
                      <p className="font-1 s2 white"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quas exercitationem accusamus repellendus, 
                        recusandae rerum, animi harum beatae, qui est magnam ut esse dolore laudantium odit doloribus sapiente quisquam. 
                        Exercitationem?
                      </p>
                    </article>
                    <article className="flex j-center f-dir-col entry-article m5 p5">
                      <h2 className="entry-title font-3 s3">Regime Change Game</h2>
                      <div className="flex  j-center">
                        <ReactPlayer url={'./scavangers.mp4'} controls={true}/>
                      </div>
                      <p className="font-1 s2 white"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quas exercitationem accusamus repellendus, 
                        recusandae rerum, animi harum beatae, qui est magnam ut esse dolore laudantium odit doloribus sapiente quisquam. 
                        Exercitationem?
                      </p>
                      
                    </article>
                    <a href="/#"> Github </a>
                  </div>
                  <p className="font-6 p2 s1 area-text-skills flex f-wrap j-even">
                    <span>C++</span> | <span>Javascript</span> | <span>Typescript</span> | <span>HTML5</span> | <span>CSS3</span> | <span>Python</span> | <span>Node.js</span> | <span>React</span> | <span>Redux</span> | <span>MongoDB</span> | <span>Firebase</span> | <span>Unreal Engine</span> | <span>Git</span>
                  </p>
                </div> 
                <section className="p3 m3">
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
                  </section> 
              </div> 
            }
            {/*3D----------------------------------------------------------------------3D-----------------------------------------------------------3D */}
            {skillView === '3d' && 
              <div>
                <div className="b-img-1">
                  <div className="p5">
                    <p className="font-1 s2 area-text"> 
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quas exercitationem accusamus repellendus, 
                      recusandae rerum, animi harum beatae, qui est magnam ut esse dolore laudantium odit doloribus sapiente quisquam. 
                      Exercitationem?
                    </p>
                    <article className="p5 entry-article m5"> {/*flex j-center */}
                      <h2 className="entry-title font-3 s3">Strategize Web App</h2>
                      <img src="strategize_logo.png" alt="img" className="hero-img"/>
                      <p className="font-1 s2 white"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quas exercitationem accusamus repellendus, 
                        recusandae rerum, animi harum beatae, qui est magnam ut esse dolore laudantium odit doloribus sapiente quisquam. 
                        Exercitationem?
                      </p>
                    </article>
                    <a href="/#"> Portfolio </a>
                  </div>
                  <p className="font-6 p2 s1 area-text-skills flex f-wrap j-even">
                    <span>Blender</span> | <span>Maya</span> | <span>Substance Painter</span> | <span>Substance Designer</span> | <span>Unreal Engine</span> | <span>Three.js</span>
                  </p>
                </div>
                <section className="p3 m3">
                    <Icon icon='logos:blender' className="m2 skill-icon"/>
                    <Icon icon='vscode-icons:file-type-maya' className="m2 skill-icon"/>
                    <img src="sp.png" alt="img" className="m2 skill-icon"/>
                    <img src="sd5.png" alt="img" className="m2 skill-icon"/>
                    <Icon icon='logos:unrealengine' className="m2 skill-icon"/>
                  </section>
              </div>
            }
            {/*Music----------------------------------------------------------------------Music-----------------------------------------------------------Music */}
            {skillView === 'music' && 
              <div >
                <div className="b-img-2">
                  <div className="p5">
                    <p className="font-1 s2 area-text"> 
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quas exercitationem accusamus repellendus, 
                      recusandae rerum, animi harum beatae, qui est magnam ut esse dolore laudantium odit doloribus sapiente quisquam. 
                      Exercitationem?
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quas exercitationem accusamus repellendus, 
                      recusandae rerum, animi harum beatae, qui est magnam ut esse dolore laudantium odit doloribus sapiente quisquam. 
                      Exercitationem?
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quas exercitationem accusamus repellendus, 
                      recusandae rerum, animi harum beatae, qui est magnam ut esse dolore laudantium odit doloribus sapiente quisquam. 
                      Exercitationem?
                    </p>
                  </div>
                  <p className="font-6 p2 s1 area-text-skills flex f-wrap j-even">
                    <span>Ableton</span> | <span>Cubase</span> | <span>Music Production</span> | <span>Mixing</span> | <span>Mastering</span> | <span>Guitar</span> | <span>Violin</span> | <span>Cello</span> | <span>Piano</span> | <span>French Horn</span> 
                  </p>
                </div>
                <section className="p3 m3">
                    <Icon icon='skill-icons:ableton-dark' className="m2 skill-icon"/>
                    <img src="logo-cubase.svg" alt="img" className="m2 skill-icon"/>
                    <img src="sound-mix.svg" alt="img" className="m2 skill-icon"/>
                    <Icon icon='noto-v1:guitar' className="m2 skill-icon"/>
                    <Icon icon='noto:violin' className="m2 skill-icon"/>
                    <img src="grand-piano.svg" alt="img" className="m2 skill-icon"/>
                    <img src="french-horn.svg" alt="img" className="m2 skill-icon"/>
                  </section>
              </div>
            }
          </article>  
        </section> 
      </div>
    </div>
  )
}
