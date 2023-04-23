// import { useState } from "react";

import { useEffect, useRef, useState } from "react";

// const prevButton    : Element | null | any = document.querySelector('.prev-button');
//     const nextButton    : Element | null | any = document.querySelector('.next-button');
//     const scrollContent : Element | null | any = document.querySelector('.scroll-content');

//     prevButton.addEventListener('click', () => {
//     scrollContent.scrollBy({
//         left: -100,
//         behavior: 'smooth'
//     });
//     });

//     nextButton.addEventListener('click', () => {
//     scrollContent.scrollBy({
//         left: 100,
//         behavior: 'smooth'
//     });
//     });

export default function X_Scroller() {

    const images : string [] = [
        'e1.png', 'e2.png',
        'e3.png', 'e4.png', 'e5.png', 
    ]

    const scrollerRef : any = useRef(null);
  
    useEffect(() => {
      const scroller : any = scrollerRef.current;
      if (scroller) {
        scroller.addEventListener('scroll', handleScroll);
      }
      return () => {
        if (scroller) {
          scroller.removeEventListener('scroll', handleScroll);
        }
      };
    }, []);
    
  const [scrollPosition, setScrollPosition] = useState(0);

  

  const handleScroll = (scrollAmount : number, event : any) => {
    // const container : HTMLElement | null | any = document.getElementById("scroll-container");
    // const scrollContainer : any = scrollerRef.current;
    // const containerWidth : number = scrollContainer.offsetWidth;
    // const scrollMax : number = scrollContainer.scrollWidth - containerWidth;
    // let newPosition : number = scrollPosition + scrollAmount;

    // if (newPosition < 0) {
    //   newPosition = 0;
    // } else if (newPosition > scrollMax) {
    //   newPosition = scrollMax;
    // }

    // scrollContainer.scrollLeft = newPosition;
    // setScrollPosition(newPosition);
    console.log(event)
    console.log(scrollerRef.current)

    if(scrollerRef.current && event !== undefined){
        scrollerRef.current.scrollLeft += scrollAmount
    }
    
  };

  const scrollAmount = window.innerWidth;

  return (
    <div className="flex j-center">
        <div ref={scrollerRef} className="scroll-container" >
        {images.map((img : string, index : number) => (
            <img key={index} src={img} alt={`Image ${index}`} width={window.innerWidth*0.25} style={{maxWidth: window.innerWidth/4, padding: window.innerWidth*0.005}} />
        ))}
        </div>
        {/* <div >
            <button onClick={(e) => handleScroll(-scrollAmount, e)}>&lt;</button>
            <button onClick={(e) => handleScroll(scrollAmount, e)}>&gt;</button>
        </div> */}
    </div>
    
  );
}



// export default function X_Scroller() {
//     const scrollerRef : any = useRef(null);
  
//     useEffect(() => {
//       const scroller : any = scrollerRef.current;
//       if (scroller) {
//         scroller.addEventListener('scroll', handleScroll);
//       }
//       return () => {
//         if (scroller) {
//           scroller.removeEventListener('scroll', handleScroll);
//         }
//       };
//     }, []);
  
//     const handleScroll = (event : any) => {
//       // handle scroll event
//     };
  
//     return (
//       <div ref={scrollerRef} className="scroller">
//         {/* content */}
//       </div>
//     );
//   }