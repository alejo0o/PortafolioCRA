import React, { useState, useEffect } from 'react';
import '../assets/styles/ProjectsEffect.scss';

const FadeIn = (props) => {
  const [isVisible, setVisible] = useState(true);

  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(domRef.current);

    //return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <>
      <div className='projectsMain'>
        <div className='projectName'>Titulo Proyecto</div>
        <img
          alt=''
          src='https://i.ibb.co/tstkwdN/nube-codigo.jpg'
          className='second_image'
        />
        <div className='projectImage'>
          <div
            ref={domRef}
            className={`first_image_div${
              isVisible ? 'visible' : 'invisible'
            } first_image_div_style`}>
            Texto
          </div>

          <img
            alt=''
            src='https://i.ibb.co/tstkwdN/nube-codigo.jpg'
            className='second_image'
          />
          <img
            alt=''
            src='https://i.ibb.co/J5X0PPB/programaicion.jpg'
            className='second_image'
          />
        </div>
        <div className='projectInformation'>Info o Links</div>
        <img
          alt=''
          src='https://i.ibb.co/tstkwdN/nube-codigo.jpg'
          className='second_image'
        />
      </div>
    </>
  );
};

export default FadeIn;
