import React from 'react';
import '../assets/styles/MainDescription.scss';

const MainDescription = () => {
  return (
    <>
      <div className='mainDescriptionContainer'>
        <div className='textDescription'>
          <h2 className='titleDescription'>
            Hi, I&apos;m Alejandro Vivanco
            <div className='descriptionDecoration' />
          </h2>
          <br />
          <p>
            I&apos;m a Junior developer with knowledge of applied technologies
            for Back-End development, Front-End development and Devops. Actually
            I&apos;m studying Systems Engineering and Computing at the
            Pontifical Catholic University of Ecuador.
            <br />
            <br />
            This website show&apos;s evidence of my projects and progress in my
            career which I love.😊
            <br />
          </p>
          <h2 className='signature'>-Alejo</h2>
        </div>
        <div className='imgContainer'>
          <div className='imgDescription' />
        </div>
      </div>
    </>
  );
};
//&apos;
export default MainDescription;
