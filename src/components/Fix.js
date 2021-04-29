import React from 'react';
import { Link } from 'react-router-dom';

function Fix(props) {
  return (
    <>
      <li className='Fix__item'>
        <Link className='Fix__item__link' to={props.path}>
          <figure className='Fix__item__pic-wrap' data-category={props.label}>
            <img
              className='Fix__item__img'
              alt='รูปตู้น้ำ'
              src={props.src}
            />
          </figure>
          <div className='Fix__item__info'>
            <h5 className='Fix__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Fix;