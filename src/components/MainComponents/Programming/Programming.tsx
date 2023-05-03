import { Icon } from '@iconify/react'
import React, { useEffect, useState } from 'react'

export default function Programming() {
    
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

  return (
    <section id='programming' className='mt5 mb5 pb5' > 
                    <div className='mt6 skill-img-container' style={{backgroundColor: 'black'}} >
                      <img className='skill-img' src='/skill_programming.png' alt='programming'/>
                    </div>
                    <div className='swa' >
                      <div className="b-img-0 " >
                        <div className={`project-details ${!projectView.visible ? 'details-off' : ''}`} onClick={(e)=>{updateProjectViewState(e)}}>
                          {projectView.visible && 
                            <article className={`project-article article-${projectView.name === 'Strategize' ? 'strategize' : 'regime-change'}`} style={{border:'20px solid white', width: '70vw', height: '70vh', position: 'absolute', zIndex: 2, overflowY:'auto'}}>
                              <a className='anchor' href={projectView.link} target='_blank' rel='noreferrer'>
                                <h2 className='m5 p6 font-1 s3 area-text-n'>
                                  {projectView.name}
                                  <Icon icon='ri:external-link-fill' className="" width={'24px'} style={{margin:'5px'}}/> 
                                </h2>
                                
                              </a> 
                              
                              <p className='m5 p6 white font-1 area-text'>
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

                          <div className='flex j-center jt-center'>
                            <h3 className='m6 font-9 s3 teal'>Personal Projects</h3>
                          </div>
                          <section className='flex f-dir-row f-wrap j-center'>

                            <article className="p1 entry-article article-strategize m5">
                              
                              <p className='flex f-dir-col'>
                                <span className='mb1 font-1 s1'>Strategize</span>
                                <span style={{fontSize:'6pt', padding: '5%'}} className='flex f-dir-row f-wrap j-center'>
                                  <em className='sb-field'>Typescript</em> 
                                  <em className='sb-field'>CSS</em> 
                                  <em className='sb-field'>HTML</em> 
                                  <em className='sb-field'>React</em> 
                                  <em className='sb-field'>Redux</em>  
                                  <em className='sb-field'>Node.js</em> 
                                  <em className='sb-field'>MongoDB</em> 
                                </span>
                                <span className='flex f-dir-row'>
                                  <span>
                                    <Icon icon='mdi:information-variant-box' width={'64px'} className='link-icon' onClick={() =>onProjectViewChange('Strategize', 'stuff..1', true)}/>
                                  </span>
                                  <a href='https://strategize-fe.vercel.app/' target='_blank' rel='noreferrer'>
                                    <Icon icon='mdi:link-box-variant' width={'64px'} className='link-icon' />
                                  </a>
                                </span>
                              </p>
                            </article>

                            <article className="p1 entry-article article-regime-change m5">
                              <p className='flex f-dir-col'>
                                <span className='mb1 font-1 s1'>Regime Change</span>
                                <span style={{fontSize:'6pt', padding: '5%'}} className='flex f-dir-row f-wrap j-center'>
                                  <em className='sb-field'>C++</em> 
                                  <em className='sb-field'>Unreal Engine</em> 
                                  <em className='sb-field'>Materials</em> 
                                  <em className='sb-field'>AnimBPs</em> 
                                  <em className='sb-field'>Niagara</em>  
                                  <em className='sb-field'>UMG</em> 
                                  <em className='sb-field'>AI</em> 
                                </span>
                                <span className='flex f-dir-row'>
                                  <span>
                                    <Icon icon='mdi:information-variant-box' width={'64px'} className='link-icon' onClick={() =>onProjectViewChange('Regime Change', 'stuff..2', true)}/>
                                  </span>
                                  <a href='/scavangers.mp4' target='_blank' rel='noreferrer'>
                                    <Icon icon='mdi:link-box-variant' width={'64px'} className='link-icon'/>
                                  </a>
                                </span>
                              </p>
                            </article>

                          </section>
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
  )
}
