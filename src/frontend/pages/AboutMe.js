import React, { Component } from 'react';
import AboutMeMain from '../components/AboutMeMain';
import '../assets/styles/AboutMe.scss';
import AboutMeButton from '../components/AboutMeButtons';
import '../assets/styles/Pages.scss';

class AboutMe extends Component {
  render() {
    return (
      <div className='AboutMePage'>
        <AboutMeMain />
        <div className='aboutMeButtonContainer'>
          <AboutMeButton
            title='Checkout mi Resume'
            text='Download CV'
            verification={true}
            icon='fa fa-file-text'
          />

          <AboutMeButton
            title='Checkout my progress'
            text='Platzi'
            link='https://platzi.com/@alejo0o/'
            icon='fa fa-tasks'
          />
          <AboutMeButton
            title='Checkout my progress'
            text='Coursera'
            link='https://www.coursera.org/user/9a5402d1d502173ba2eca249be406d0f'
            icon='fa fa-tasks'
          />
        </div>
      </div>
    );
  }
}

export default AboutMe;
