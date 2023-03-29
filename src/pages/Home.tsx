import { useState } from "react"
import { Icon } from '@iconify/react';

export default function Home() {
  
  // const [deltaY, setDeltaY] = useState(0);

  // let wDelta = window.innerWidth;

  // window.addEventListener('resize', (e) => {
  //   // console.log('window event listener fired!')
  //   console.log(window.innerWidth)
  //   wDelta = window.innerWidth;
  //   setDeltaY((prev)=>(window.innerWidth));
  //   console.log(deltaY)
  // })

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
            {skillView === 'programming' && 
              <div className="b-img-0">
                {/* <img src="code.png" alt="img" className="hero-img"/> */}
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
                
              </div>
              
            }
            {skillView === '3d' && 
              <div className="b-img-1">
                {/* <img src="chamferPiano.jpg" alt="img" className="hero-img"/> */}
                <div className="p3 m3">
                  <Icon icon='logos:blender' className="m2 skill-icon"/>
                  <Icon icon='vscode-icons:file-type-maya' className="m2 skill-icon"/>
                  <img src="sp.png" alt="img" className="m2 skill-icon"/>
                  <img src="sd5.png" alt="img" className="m2 skill-icon"/>
                  <Icon icon='logos:unrealengine' className="m2 skill-icon"/>
                </div>
              </div>
            }
            {skillView === 'music' && 
              <div className="b-img-2">
                {/* <img src="CelloRender.jpg" alt="img" className="hero-img"/> */}
                <div className="p3 m3">
                  <Icon icon='skill-icons:ableton-dark' className="m2 skill-icon"/>
                  <img src="logo-cubase.svg" alt="img" className="m2 skill-icon"/>
                  <img src="sound-mix.svg" alt="img" className="m2 skill-icon"/>
                  <Icon icon='noto-v1:guitar' className="m2 skill-icon"/>
                  <Icon icon='noto:violin' className="m2 skill-icon"/>
                  <img src="grand-piano.svg" alt="img" className="m2 skill-icon"/>
                  <img src="french-horn.svg" alt="img" className="m2 skill-icon"/>
                  
                </div>
              </div>
            }
          </article>  
        </section> 
      </div>
    </div>
  )
}
