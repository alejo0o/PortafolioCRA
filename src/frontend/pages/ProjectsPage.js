import React, { Component } from 'react';
import ProjectsEffect from '../components/ProjectsEffect';
import '../assets/styles/ProjectsEffect.scss';
import '../assets/styles/Pages.scss';

class ProjectsPage extends Component {
  render() {
    return (
      <div className='ProjectsPage'>
        <ProjectsEffect
          img1='https://i.ibb.co/Lph7XGD/Cine-Front-End.png'
          title='Proyecto-Cine ReactJS'
          description="Front-End for the webpage Proyecto-Cine, it was developed with ReactJS and use's Auth0 for authentication"
          links='https://github.com/alejo0o/ProyectoCine-Reactjs'
          linkText='Github repository'
          links2='https://proyecto-cine-reactjs.now.sh'
          linkText2='Webpage Proyecto-Cine'
        />
        <ProjectsEffect
          img1='https://i.ibb.co/ZBbv9JX/GRAPHQL.png'
          title='Proyecto-Cine GraphQL API'
          description='GraphQL API for the webpage Proyecto-Cine, it was developed in NodeJS using express and is a layer between the front-end and back-end.'
          links='https://github.com/alejo0o/deployZeit'
          linkText='Github repository'
          links2='https://deploy-zeit.now.sh/api'
          linkText2='GQL API Proyecto-Cine'
        />
        <ProjectsEffect
          img1='https://i.ibb.co/kcbrLRY/REST.png'
          title='Proyecto-Cine REST API'
          description='REST API for the webpage Proyecto-Cine, it was developed in Laravel and it uses a PostgreSQL database for storage.'
          links='https://github.com/alejo0o/ProyectoCine'
          linkText='Github repository'
          links2='https://proyectocinegithub.herokuapp.com/api/peliculas/44'
          linkText2='REST API Proyecto-Cine Example'
        />
        <ProjectsEffect
          img1='https://i.ibb.co/C89T3Jk/Aba.png'
          title='Aba-Systems'
          description="Desktop application developed in C#, it's main purpose is to manage subjects for every teacher who is registered and generate informative PDF's"
          links='https://github.com/alejo0o/Sistema-de-Profesores'
          linkText='Github repository'
          links2=''
          linkText2=''
        />
        <ProjectsEffect
          img1='https://i.ibb.co/HCDM3Vz/Prision.png'
          title='Proyecto-Prisión'
          description="Webpage developed in Java, it's main purpose is to manage administrative functions inside a prison, it uses PrimeFaces and Oracle database"
          links='https://github.com/alejo0o/SistemaPrision'
          linkText='Github repository'
          links2=''
          linkText2=''
        />
        <ProjectsEffect
          img1='https://i.ibb.co/dGqTk8G/game-zone.png'
          title='Game-Zone'
          description="Static webpage developed using only HTML, CSS and JS, it's a game page that gives information about games, technology and has a videogame of Asteroids."
          links='https://github.com/alejo0o/Game-Page'
          linkText='Github repository'
          links2='http://game-zone-project-bucket.s3-website.us-east-2.amazonaws.com/Tecnologia.html'
          linkText2='Game-Zone Webpage'
        />
      </div>
    );
  }
}

export default ProjectsPage;
