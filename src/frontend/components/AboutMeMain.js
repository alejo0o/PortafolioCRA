import React from 'react';
import '../assets/styles/AboutMe.scss';

const AboutMeMain = () => {
  return (
    <>
      <div className='aboutMeMainContainer'>
        <div className='aboutMeTextMain'>
          <h2 className='font-weight-bolder'>About Me</h2>
          <br />
          <p>
            I&apos;m a student of systems engineering at the Pontifical Catholic
            University of Ecuador, I&apos;m also studying web and mobile
            development at Platzi and Coursera. Even though my main strength is
            back-end development I&apos;m fascinated with front-end development
            and devops, so I&apos;m always learning more about this fields.
            <br />
            <br />
            I&apos;m 22 years old and my hobbies are excercise, soccer and
            videogames. I&apos;m a person who enjoys learning new things every
            day so I&apos;m eager to show my abilities developing awesome things
            for people.
          </p>
        </div>
        <div className='aboutMeImgContainer'>
          <img
            alt=''
            src='https://i.ibb.co/1Th0y6c/Foto2.jpg'
            className='aboutMeImg'
          />
        </div>
      </div>
    </>
  );
};
export default AboutMeMain;
