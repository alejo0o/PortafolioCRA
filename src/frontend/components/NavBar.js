import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/styles/NavBarStyle.scss';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='NavBarMainContainer'>
      <Navbar bg='color' variant='dark' expand='lg' className='NavBar-style'>
        <Link to='/' className='text-reset text-decoration-none'>
          <div className='navBar-Efect-Brand'>
            <div>
              <img
                alt=''
                src='https://i.ibb.co/WpgfrpQ/fotomini.jpg'
                className='d-inline-block align-top img-estilo'
              />
              <span className='ml-3 brandName'>Alejandro Vivanco</span>
            </div>
          </div>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <div className='itemsContainer'>
            <Nav className='mr-auto'>
              <ul className='navbar-nav mr-auto'>
                <Link
                  to='/projects'
                  className='text-reset text-decoration-none navBar-Efect nav-item'>
                  <span className=' m-3'>
                    Academic&nbsp;&nbsp;Projects
                    <i className='fa fa-file-code-o ml-1' aria-hidden='true' />
                  </span>
                </Link>

                <Link
                  className='navBar-Efect nav-item text-reset text-decoration-none'
                  to='/about'>
                  <span className=' m-3'>
                    About&nbsp;&nbsp;Me
                    <i
                      className='fa fa-address-book-o ml-1'
                      aria-hidden='true'
                    />
                  </span>
                </Link>
              </ul>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
