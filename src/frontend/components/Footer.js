import React from 'react';
import '../assets/styles/Footer.scss';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <footer className='footerMain'>
      <div className='FooterMainContainer'>
        <div className='footer_first_container'>
          <img
            alt=''
            src='https://i.ibb.co/WpgfrpQ/fotomini.jpg'
            width='80'
            height='70'
            className='d-inline-block align-top footer_img'
          />
          <p className='mr-5'>You can find me on:</p>
          <a
            rel='noopener noreferrer'
            target='_blank'
            className='btn'
            href='https://www.linkedin.com/in/alejandro-manuel-vivanco-mosquera-646625116/'>
            <i className='fa fa-linkedin-square lk_color' />
          </a>

          <a
            rel='noopener noreferrer'
            target='_blank'
            className='btn'
            href='https://platzi.com/@alejo0o/'>
            <img
              alt=''
              src='https://i.ibb.co/zmmfkF6/platzi-logo.png'
              className='iconImg'
            />
          </a>

          <a
            rel='noopener noreferrer'
            target='_blank'
            className='btn'
            href='https://github.com/alejo0o'>
            <i className='fa fa-github' />
          </a>

          <a
            rel='noopener noreferrer'
            target='_blank'
            className='btn'
            href='https://www.facebook.com/manuel.vivanco.716/'>
            <i className='fa fa-facebook-f fb_color' />
          </a>

          <a
            rel='noopener noreferrer'
            target='_blank'
            className='btn'
            href='https://www.coursera.org/user/9a5402d1d502173ba2eca249be406d0f'>
            <img
              alt=''
              src='https://i.ibb.co/8PCt6nK/coursera-logo-icon-145379.png'
              className='iconImg'
            />
          </a>

          <a
            rel='noopener noreferrer'
            target='_blank'
            className='btn'
            href='https://www.instagram.com/manuelvivanco/'>
            <i className='fa fa-instagram instagram_color' />
          </a>
        </div>
        <div className='horizontalLine' />
        <div className='footer_second_container'>
          <div className='footer_second'>
            <p className=''>Or you can send me an email:</p>
            <a
              rel='noopener noreferrer'
              target='_blank'
              className='btn'
              href='mailto:alejandrovivanco1998@gmail.com?subject=Hello%20Alejandro!&amp;body=Hi%20Alejandro%20Vivanco,%0A%0A'>
              <i className='fa fa-envelope lk_color' />
            </a>
          </div>
        </div>
        <div className='footer_third_container'>
          <div className='ml-1'>
            <i className='fa fa-copyright m-1' aria-hidden='true' />
            2020 Alejandro Vivanco. All Rights Reserved
          </div>
          <div className='ml-auto mr-2'>CellPhone: +593 99 328 0922</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
