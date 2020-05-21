import React from 'react';
import './slideshow.css'
import { Fade } from 'react-slideshow-image';
 
const fadeImages = [
    './bg-corousel/dreds.webp',
    './bg-corousel/dreds.webp'
];

const fadeProperties = {
  duration: 10000,
  transitionDuration: 2000,
  infinite: true,
  indicators: false
}
 
const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} alt=".." />
          </div>          
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt=".."/>
          </div>
        </div>        
      </Fade>
    </div>
  )
}
export default Slideshow