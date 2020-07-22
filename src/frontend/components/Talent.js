import React from 'react';
import '../assets/styles/Talent.scss';

const Talent = ({ image, title, description, tools, languages }) => {
  return (
    <>
      <div className='talentMain'>
        <div className='talentimgContainer'>
          <img alt='' src={image} className='talentimg' />
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
        <p className='text a'>{tools}</p>
        <p>{languages}</p>
      </div>
    </>
  );
};

export default Talent;
