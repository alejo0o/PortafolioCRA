import AboutMeInfo from '../../components/AboutMeInfo/AboutMeInfo';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

const AboutMe = () => {
  return (
    <div>
      <NextSeo
        title='About Me | Alejandro Vivanco'
        description='Alejandro Manuel Vivanco Mosquera'
      />
      <Head>
        <title>About Me | Alejandro Vivanco</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='https://i.ibb.co/g4hYLtW/image.png' />
      </Head>
      <AboutMeInfo />
    </div>
  );
};

export default AboutMe;
