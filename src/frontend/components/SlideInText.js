import React from 'react';
import '../assets/styles/SlideInText.scss';

const SlideInTitle = ({ type, text }) => {
  return (
    <div className={type ? 'slideTitleMain' : 'slideTextMain'}>
      <div className='textContainer'>{text}</div>
    </div>
  );
};

export default SlideInTitle;
