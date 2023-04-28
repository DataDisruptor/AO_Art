import React from 'react'

export default function GenericOverlay({active, updateVisibilityState, visibleSection} : {active: Boolean, updateVisibilityState: any, visibleSection: string}) {

  return (
    <div className={`overlay-on ${!active ? 'overlay-off' : ''}`} onClick={(e)=>{updateVisibilityState(e)}}>
    {active && 
        <article > {/* className='project-article' style={{backgroundColor:'black' ,border:'20px solid white', width: '70vw', height: '70vh', position: 'absolute', zIndex: 1}} */}
            <div className='navigation-small s2'>
                <a href='#home' className={`wide-a font-1 ${visibleSection === 'home' ? 'visible' : ''}`} onClick={() => updateVisibilityState()}>Home</a>
                <a href='#about' className={`wide-a font-1 ${visibleSection === 'about' ? 'visible' : ''}`} onClick={() => updateVisibilityState()}>About</a>
                <a href='#programming' className={`wide-a font-1 ${visibleSection === 'programming' ? 'visible' : ''}`} onClick={() => updateVisibilityState()}>Programming</a>
                <a href='#3d' className={`wide-a font-1 ${visibleSection === '3d' ? 'visible' : ''}`} onClick={() => updateVisibilityState()}>3D Art</a>
                <a href='#music' className={`wide-a font-1 ${visibleSection === 'music' ? 'visible' : ''}`} onClick={() => updateVisibilityState()}>Music</a>
                <a href='#contact' className={`wide-a font-1 ${visibleSection === 'contact' ? 'visible' : ''}`} onClick={() => updateVisibilityState()}>Contact</a>
            </div> 
        </article>}
        
        
    </div>
  )
}
