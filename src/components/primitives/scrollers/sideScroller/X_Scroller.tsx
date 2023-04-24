// import { useState } from "react";

import { useEffect, useRef, useState } from "react";

export default function X_Scroller({onImageViewChange, imageView} : any) {

    const images : string [] = [
        'e1.png', 'e2.png',
        'e3.png', 'e4.png', 'e5.png', 
    ]

    const scrollerRef : any = useRef(null);
  
    useEffect(() => {
      
    }, [imageView])

  return (
    <div className="flex j-center">
        <div ref={scrollerRef} className="scroll-container" >
        {images.map((img : string, index : number) => (
            <img className="scroll-img" onClick={() => onImageViewChange(index, true, images[index])} key={index} src={img} alt={`${index}`} width={window.innerWidth*0.25}  style={{maxWidth: window.innerWidth/4, margin: window.innerWidth*0.005, cursor:'pointer'}}/> //style={{maxWidth: window.innerWidth/4, padding: window.innerWidth*0.005, cursor:'pointer'}}
        ))}
        </div>
    </div>
    
  );
}

