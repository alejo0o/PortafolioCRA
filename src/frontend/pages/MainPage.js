import React, { Component } from 'react';
import MainDescription from '../components/MainDescription';
import IconsDecoration from '../components/IconsDecoration';
import DevelopmentTalents from '../components/DevelopmentTalents';
import '../assets/styles/Pages.scss';

class MainPage extends Component {
  render() {
    return (
      <div className='MainPage'>
        <MainDescription />
        <DevelopmentTalents />
      </div>
    );
  }
}

export default MainPage;
