import React from 'react';
import MyPdf from '../assets/CV/CV Alejandro Vivanco.pdf';

const AboutMeButtons = ({ title, text, link, verification = false, icon }) => {
  if (verification) {
    return (
      <a
        rel='noopener noreferrer'
        target='_blank'
        className='text-reset text-decoration-none'
        href={MyPdf}
        download='CV.pdf'>
        <div className='aboutMeButtonsMain'>
          {title}
          <br />
          <i className={icon} />
          <br />
          {text}
        </div>
      </a>
    );
  }
  return (
    <a
      rel='noopener noreferrer'
      target='_blank'
      className='text-reset text-decoration-none'
      href={link}>
      <div className='aboutMeButtonsMain'>
        {title}
        <br />
        <i className={icon} />
        <br />
        {text}
      </div>
    </a>
  );
};

export default AboutMeButtons;
