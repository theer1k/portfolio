import { AppConfig } from '@/infra/configs/app.config';
import { Experiences } from '@/presentation/components/organisms/Experiences/Experiences';
import { LandingMatrixify } from '@/presentation/components/organisms/LandingMatrixify/LandingMatrixify';
import { Projects } from '@/presentation/components/organisms/Projects/Projects';
import { Skillset } from '@/presentation/components/organisms/Skillset/Skillset';
import { Whoami } from '@/presentation/components/organisms/Whoami/Whoami';
import { Meta } from '@/presentation/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <LandingMatrixify />
      <Whoami />
      <Projects />
      <Experiences />
      <Skillset />
    </Main>
  );
};

export default Index;
