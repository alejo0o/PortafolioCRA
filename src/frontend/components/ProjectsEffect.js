import React from 'react';
import '../assets/styles/ProjectsEffect.scss';
import { useInView } from 'react-intersection-observer';
import SlideInText from './SlideInText';
import LinkSlideIn from './LinksSlideIn';

const ProjectsEffect = ({
  img1,
  title,
  description,
  links,
  linkText,
  links2,
  linkText2,
}) => {
  const [element1, inView1] = useInView({
    threshold: 0.5,
  });
  const [element2, inView2] = useInView({
    threshold: 0.5,
  });
  const [element3, inView3] = useInView({
    threshold: 0.5,
  });
  return (
    <>
      <div className='projectsMain'>
        <div className='imgFirstContainer'>
          <img alt='' src={img1} className='first_image' />
        </div>
        <div className='slideinBoxContainer'>
          <div
            ref={element1}
            className={`${
              inView1 ? 'box1visible' : 'box1invisible'
            }  first_image_div_style box1 box_style`}>
            <SlideInText type={true} text={title} />
          </div>
          <div
            ref={element2}
            className={`${
              inView2 ? 'box2visible' : 'box2invisible'
            }  second_image_div_style box2 box_style`}>
            <SlideInText type={false} text={description} />
          </div>
          <div
            ref={element3}
            className={`${
              inView3 ? 'box3visible' : 'box3invisible'
            }  third_image_div_style box3 box_style`}>
            <LinkSlideIn
              link={links}
              text={linkText}
              link2={links2}
              text2={linkText2}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsEffect;
