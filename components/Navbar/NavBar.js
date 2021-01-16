import { Navbar, Nav } from 'react-bootstrap';
import ActiveLink from '../ActiveLink';
import Link from 'next/link';
//Syled components
import { BrandName, NavItems, Strong } from './NavBarStyles';

const NavBar = () => {
  return (
    <Navbar
      expand='lg'
      bg='color'
      variant='dark'
      className='sticky-top'
      style={{
        backgroundColor: '#60a3d9',
      }}>
      <BrandName>
        <img
          alt='Alejandro Vivanco'
          src='https://i.ibb.co/WpgfrpQ/fotomini.jpg'
          width='50'
          height='45'
          className='d-inline-block align-top mr-2 rounded-circle'
        />
        <Link href='/'>
          <Navbar.Brand>
            <Strong>Alejandro Vivanco</Strong>
          </Navbar.Brand>
        </Link>
      </BrandName>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto mr-4'>
          <NavItems>
            <ActiveLink href='/academic-projects' activeClassName='is-selected'>
              <span
                style={{ fontSize: '1.2em', cursor: 'pointer' }}
                className='nav-link'>
                Academic&nbsp;&nbsp;Projects
                <i className='fa fa-file-code-o ml-2' aria-hidden='true' />
              </span>
            </ActiveLink>
          </NavItems>
        </Nav>
        <Nav className='mr-4'>
          <NavItems>
            <ActiveLink href='/portfolio' activeClassName='is-selected'>
              <span
                style={{ fontSize: '1.2em', cursor: 'pointer' }}
                className='nav-link'>
                Portfolio
                <i className='fa fa-code-fork ml-2' aria-hidden='true' />
              </span>
            </ActiveLink>
          </NavItems>
        </Nav>
        <Nav className='mr-4'>
          <NavItems>
            <ActiveLink href='/about-me' activeClassName='is-selected'>
              <span
                style={{ fontSize: '1.2em', cursor: 'pointer' }}
                className='nav-link'>
                About&nbsp;&nbsp;Me
                <i className='fa fa-address-book-o ml-1' aria-hidden='true' />
              </span>
            </ActiveLink>
          </NavItems>
        </Nav>
      </Navbar.Collapse>
      <style jsx>{`
        span.is-selected {
          box-shadow: 0 3px 0 0 #a4e5e0;
        }
      `}</style>
    </Navbar>
  );
};

export default NavBar;
