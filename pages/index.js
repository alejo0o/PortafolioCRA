import MainDescription from '../components/MainDescription/MainDescription';
import DevelopmentTalents from '../components/DevelopmentTalents/DevTalents';
import SkillSet from '../components/SkillSet/SkillSet';
import Layout from '../components/Layout';

const MainPage = () => {
  return (
    <Layout title='Home | Alejandro Vivanco'>
      <MainDescription />
      <DevelopmentTalents />
      <SkillSet />
    </Layout>
  );
};

export default MainPage;
