import { type ReactNode } from 'react';

import { Footer } from '@/presentation/components/organisms/Footer/Footer';
import { Header } from '@/presentation/components/organisms/Header/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <>
      {props.meta}
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export { Main };
