import React from 'react';
import '../../App.css';
import Cards from '../Cards.js';
import ImageSlider from '../HeroSection';
import { SliderData } from '../SliderData';
function Home() {
  return (
    <>
      <h2>รูปแผนที่ตู้น้ำในคณะ</h2>
      <ImageSlider slides={SliderData} />
      <h3>ข้อมูลตู้น้ำ</h3>
      <Cards />
    </>
  );
}

export default Home;