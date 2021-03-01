import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>--- ชั้น 1 ---</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/assets/img-9.jpg'
              text='ข้อมูลตู้น้ำ'
              label='แผนที่ตู้น้ำชั้น 1 '
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='src/assets/img-9.jpg'
              text='ข้อมูลตู้น้ำ'
              label='ชั้น 1'
              path='/sign-up'
            />
            <CardItem
              src='src/assets/img-9.jpg'
              text='ข้อมูลตู้น้ำ'
              label='ชั้น 1'
              path='/sign-up'
            />
            <CardItem
              src='images/img-8.jpg'
              text='ข้อมูลตู้น้ำ'
              label='ชั้น 1'
              path='/sign-up'
            />
            <CardItem
              src='images/img-8.jpg'
              text='ข้อมูลตู้น้ำ'
              label='ชั้น 1'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
      <h1>--- ชั้น 2 ---</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='/assets/img-9.jpg'
              text='ข้อมูลตู้น้ำ'
              label='แผนที่ตู้น้ำชั้น 2'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='ข้อมูลตู้น้ำ'
              label='ชั้น 2'
              path='/sign-up'
            />
            <CardItem
              src='images/img-4.jpg'
              text='ข้อมูลตู้น้ำ'
              label='ชั้น 2'
              path='/sign-up'
            />
            <CardItem
              src='images/img-8.jpg'
              text='ข้อมูลตู้น้ำ'
              label='ชั้น 2'
              path='/sign-up'
            />
            <CardItem
              src='images/img-8.jpg'
              text='ข้อมูลตู้น้ำ'
              label='ชั้น 2'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='ข้อมูลตู้น้ำ'
              label='ชั้น 2'
              path='/sign-up'
            />
            <CardItem
              src='images/img-4.jpg'
              text='ข้อมูลตู้น้ำ'
              label='ชั้น 2'
              path='/sign-up'
            />
            <CardItem
              src='images/img-8.jpg'
              text='ข้อมูลตู้น้ำ'
              label='ชั้น 2'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;