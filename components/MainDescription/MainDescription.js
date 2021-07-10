import { Container } from 'react-bootstrap';
import {
  MainDescriptionContainer,
  TextDescription,
  TitleDescription,
  DescriptionDecoration,
  ImgDescription,
  ImgContainer,
} from './MainDescStyle';

const MainDescription = () => {
  return (
    <Container fluid>
      <MainDescriptionContainer>
        <TextDescription>
          <TitleDescription>
            Hi, I&apos;m Alejandro Vivanco
            <DescriptionDecoration />
          </TitleDescription>
          <br />
          <p>
            I&apos;m a Junior developer with knowledge of applied technologies
            for Back-End development, Front-End development and Devops. I
            studied Systems Engineering and Computing at the Pontifical Catholic
            University of Ecuador.
            <br />
            <br />
            This website show&apos;s evidence of my projects and progress in my
            career.😀
            <br />
          </p>
          <h2 style={{ fontFamily: 'Brush Script MT, cursive' }}>-Alejo</h2>
        </TextDescription>
        <ImgContainer>
          <ImgDescription />
        </ImgContainer>
      </MainDescriptionContainer>
    </Container>
  );
};
//&apos;
export default MainDescription;
