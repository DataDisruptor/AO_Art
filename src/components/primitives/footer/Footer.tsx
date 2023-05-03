import React from 'react'
import { Link } from 'react-scroll'

export default function Footer() {
  return (
    <footer style={{minHeight: '120px', backgroundColor: 'black'}} className='p2 flex f-dir-col'>
      <Link
        className='font-1 p1 teal sb-btn mt2 mb5'
        to="home"
        spy={false}
        smooth={true}
        offset={-70}
        duration={1000}
        style={{fontSize: '8pt'}}
      >
        Back To Top
      </Link>
      <p style={{width: '100%', borderTop:'1px solid white'}} className='mt5'>

      </p>
      <p className='p3 font-8 jt-center'>
        © Adam Ocheri Tech Art 2023
      </p>
    </footer>
  )
}
