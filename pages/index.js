import MainDescription from '../components/MainDescription/MainDescription';
import DevelopmentTalents from '../components/DevelopmentTalents/DevTalents';
import SkillSet from '../components/SkillSet/SkillSet';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

const MainPage = () => {
  return (
    <div>
      <NextSeo
        title='Home | Alejandro Vivanco'
        description='Alejandro Manuel Vivanco Mosquera'
      />
      <Head>
        <title>Home | Alejandro Vivanco</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='https://i.ibb.co/g4hYLtW/image.png' />
      </Head>
      <MainDescription />
      <DevelopmentTalents />
      <SkillSet />
    </div>
  );
};

export default MainPage;
