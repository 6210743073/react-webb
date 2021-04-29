import React from 'react';
import '../../App.css';
import Cards from '../Cards.js';
import ImageSlider from '../HeroSection';
import { SliderData } from '../SliderData';
function Home() {
  return (
    <>
      <ImageSlider slides={SliderData} />;
      <h1>ข้อมูลตู้น้ำ</h1>
      <Cards />
    </>
  );
}

export default Home;