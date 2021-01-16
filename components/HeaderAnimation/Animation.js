import { Container } from 'react-bootstrap';
import { CircleDiv, DivHearthBeat, SlideInEffect } from './AnimationContainers';
import {
  Computer,
  ImageEffect,
  Img,
  Name,
  Profesion,
  BgVideo,
  PageHeader,
} from './AnimationStyle';
import { CustomHR } from '../CommonStyles';

const Animation = () => {
  return (
    <PageHeader>
      <div className='overlay' />
      <BgVideo playsInline autoPlay muted loop type='video/mp4'>
        <source src='/video/bgvideo.mp4' />
      </BgVideo>
      <Container
        fluid
        style={{
          position: 'relative',
          zIndex: '2',
          marginBottom: '2em',
        }}>
        <SlideInEffect style={{ width: '100%' }}>
          <DivHearthBeat>
            <ImageEffect src='/img/header/php.svg' alt='php' />
            <Img src='/img/header/javascript.svg' alt='javascript' />
          </DivHearthBeat>
          <CircleDiv>
            <Computer src='/img/header/computer.png' alt='computer' />
          </CircleDiv>
          <DivHearthBeat flexStart>
            <Img src='/img/header/python.svg' alt='python' />
            <ImageEffect right src='/img/header/csharp.svg' alt='c#' />
          </DivHearthBeat>
        </SlideInEffect>
        <Container fluid style={{ textAlign: 'center' }}>
          <Name>Alejandro Vivanco</Name>
        </Container>
        <CustomHR />
        <Container fluid style={{ textAlign: 'center' }}>
          <Profesion>Software Developer</Profesion>
        </Container>
      </Container>
    </PageHeader>
  );
};

export default Animation;
