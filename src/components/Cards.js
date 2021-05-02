import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import FixItem from './Fix';

function Cards() {
  return (
    <div className='cards'>
      <h1>--- ชั้น 2 ---</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <FixItem
              src='/images/img-2.jpg'
              text='ตู้กดน้ำข้างหน้าห้อง Self AccessLearning CenterFacculty of Engineering'
              label='สถาณะ : ไม่พร้อมใช้งาน '
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
   
      <h1>--- ชั้น 3 ---</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <FixItem
              src='/images/img-31.jpg'
              text='ตู้กดน้ำหน้าห้องน้ำชาย 300-5'
              label='สถาณะ : ไม่พร้อมใช้งาน '
              path='/sign-up'
            />
             <CardItem
              src='/images/img-32.jpg'
              text='ตู้กดน้ำข้างหน้าห้อง 316 '
              label='สถาณะ : พร้อมใช้งาน '
              path='/sign-up'
            />
             <CardItem
              src='/images/img-33.jpg'
              text='ตู้กดน้ำข้างขวาห้อง 326'
              label='สถาณะ : พร้อมใช้งาน '
              path='/sign-up'
            />
          </ul>
        </div>
      </div>

      <h1>--- ชั้น 4 ---</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <FixItem
              src='images/img-4.jpg'
              text='ตู้กดน้ำข้างหน้าห้อง วศ.419'
              label='สถาณะ : ไม่พร้อมใช้งาน '
              path='/sign-up'
            />
          </ul>
        </div>
      </div>

      <h1>--- ชั้น 5 ---</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-51.jpg'
              text='ตู้กดน้ำหน้าห้องน้ำซ้ายมือห้อง 509'
              label='สถาณะ : พร้อมใช้งาน '
              path='/sign-up'
            />
             <CardItem
              src='images/img-52.jpg'
              text='ตู้กดน้ำหน้าห้อง505/2'
              label='สถาณะ : พร้อมใช้งาน '
              path='/sign-up'
            />
             <CardItem
              src='images/img-53.jpg'
              text='ตู้กดน้ำหน้าห้อง502'
              label='สถาณะ : พร้อมใช้งาน '
              path='/sign-up'
            />
          </ul>
        </div>
      </div>

      <h1>--- ชั้น 6 ---</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-61.jpg'
              text='ตู้กดน้ำหน้าห้อง502'
              label='สถาณะ : พร้อมใช้งาน '
              path='/sign-up'
            />
             <CardItem
              src='images/img-62.jpg'
              text='ตู้กดน้ำหน้าห้อง502'
              label='สถาณะ : พร้อมใช้งาน '
              path='/sign-up'
            />
             <CardItem
              src='images/img-63.jpg'
              text='ตู้กดน้ำหน้าห้อง 608'
              label='สถาณะ : พร้อมใช้งาน '
              path='/sign-up'
            />
          </ul>
        </div>
      </div>

      <h1>--- ชั้น 7 ---</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <FixItem
              src='images/img-7.jpg'
              text='ตู้กดน้ำหน้าห้องวศ.709 หน่วยโสดทัศนูปกรณ์'
              label='สถาณะ : พร้อมใช้งาน '
              path='/sign-up'
            />
          </ul>
        </div>
      </div>




    </div>
  );
}

export default Cards;