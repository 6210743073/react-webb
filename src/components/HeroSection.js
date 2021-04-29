import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>“ส่งปัญหาตู้น้ำมาได้ที่นี่”</h1>
      <p> ↓↓↓ </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          ส่งปัญหา
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;