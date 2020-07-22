import React from 'react';
import '../assets/styles/IconsDecoration.scss';

const IconsDecoration = () => {
  return (
    <>
      <div className='iconDecorationMainContainer'>
        <p className='ml-2 mt-1'>This website implements:</p>
        <div className='iconDecorationMain'>
          <div className='iconDecoration reactjs'>
            <img alt='' src='https://i.ibb.co/whyVV60/react-js-icon.png' />
          </div>
          <div className='iconDecoration react_router'>
            <img alt='' src='https://i.ibb.co/zH6T5vk/react-router.png' />
          </div>
          <div className='iconDecoration html_ccss'>
            <img alt='' src='https://i.ibb.co/z2tcwsf/bootstrap.png' />
          </div>
          <div className='iconDecoration webpack'>
            <img alt='' src='https://i.ibb.co/513QTpn/icon-square-big.png' />
          </div>
          <div className='iconDecoration babel'>
            <img alt='' src='https://i.ibb.co/0t69hY6/babel-282912.png' />
          </div>
          <div className='iconDecoration zeit'>
            <img alt='' src='https://i.ibb.co/bX5gLwY/zeit-512.png' />
          </div>
        </div>
      </div>
    </>
  );
};

export default IconsDecoration;
