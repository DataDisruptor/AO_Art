import React from 'react'
import MusicPlayer from '../../primitives/musicPlayer/MusicPlayer'
import { Icon } from '@iconify/react'

export default function Music() {
  return (
    <section id='music' className='mt5 mb5 pb5' >
        <div className='mt6 skill-img-container' style={{backgroundColor: 'black'}} >
        <img className='skill-img' src='/skill_music.png' alt='music'/>
        </div>
        <div className="b-img-2" >
        <div className="p5">
            <p className="font-1 s2 area-text"> 
            
            </p>
        </div>

        {/* <div className='flex j-center jt-center'>
            <h3 className='m6 font-9 s3 teal'>Solicited Work</h3>
        </div>
        <iframe className='vid-frame' src="https://www.youtube.com/embed/dolKQ_iA-tY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
         */}
        
        <div className='flex j-center jt-center'>
            {/* <img style={{minWidth: '300px', width: '30vw'}} src='/OriginalMusic2.png' alt='music'/> */}
            <h3 className='m6 font-9 s3 white'>Originals</h3>
        </div>
        <MusicPlayer/>
        <div className='flex j-center jt-center'>
            {/* <img style={{minWidth: '300px', width: '30vw'}} src='/Tributes.png' alt='music'/> */}
            <h3 className='m6 font-9 s3 white'>Tributes</h3>
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
  )
}
