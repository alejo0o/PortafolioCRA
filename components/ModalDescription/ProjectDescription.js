import { Container, Modal } from 'react-bootstrap';
import { Img, Title, Icons } from './ProjectStyle';
import { CustomHR } from '../CommonStyles';

const ProjectDescription = ({
  title,
  subtitle,
  imageSRC,
  description,
  imageALT,
  github,
  webpage,
  show,
  onHide,
}) => {
  return (
    <Modal size='lg' show={show} onHide={onHide}>
      <Container style={{ padding: '2em', textAlign: 'center' }}>
        <Container style={{ display: 'flex' }} className='mb-2'>
          <Title>{title}</Title>
          <Icons
            alt='exit'
            src='/img/modaldescription/exit.svg'
            onClick={onHide}
          />
        </Container>
        <p style={{ fontSize: '1.5em' }}>{subtitle}</p>
        <CustomHR />
        <Img alt={imageALT} src={imageSRC} />
        <CustomHR />
        <p>{description}</p>
        {github && (
          <a className='mr-5' rel='noreferrer' target='_blank' href={github}>
            <Icons alt='github' src='/img/modaldescription/github.svg' />
          </a>
        )}
        {webpage && (
          <a rel='noreferrer' target='_blank' href={webpage}>
            <Icons alt='' src='/img/modaldescription/link.svg' />
          </a>
        )}
      </Container>
    </Modal>
  );
};

export default ProjectDescription;
