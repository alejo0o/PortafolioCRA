import React from 'react';
import '../assets/styles/SlideInText.scss';

const LinksSlideIn = ({ link, text, link2, text2 }) => {
  return (
    <div className='linkSlideIn'>
      <div>
        <a
          rel='noopener noreferrer'
          className='textContaineSlideIn text-reset'
          target='_blank'
          href={link}>
          {text}
        </a>
      </div>
      <div className='mt-1'>
        <a
          rel='noopener noreferrer'
          target='_blank'
          className='textContaineSlideIn text-reset'
          href={link2}>
          {text2}
        </a>
      </div>
    </div>
  );
};

export default LinksSlideIn;
