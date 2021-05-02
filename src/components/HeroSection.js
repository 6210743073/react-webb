import React,{useState} from 'react'
import { SliderData } from './SliderData';
import {BsCaretRightFill,BsCaretLeftFill} from "react-icons/bs"
import '../../src/App.css'

const HeroSection = ({slides}) => {
  const [current,setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  
  return (
    <section className='slider'>
      <BsCaretLeftFill className='left-arrow' onClick={prevSlide} />
      <BsCaretRightFill className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
  
};

export default HeroSection;
