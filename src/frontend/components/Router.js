import React from 'react';
import { Switch, Route } from 'react-router-dom';
//Pages
import MainPage from '../pages/MainPage';
import ProjectsPage from '../pages/ProjectsPage';
import AboutMe from '../pages/AboutMe';

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/projects' component={ProjectsPage} />
      <Route exact path='/about' component={AboutMe} />
    </Switch>
  );
};

export default Router;
