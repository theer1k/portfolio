import type { ReactNode } from 'react';

import { Footer } from '@/presentation/components/organisms/Footer/Footer';
import { Header } from '@/presentation/components/organisms/Header/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <>
    {props.meta}
    <Header />
    <main className="mt-22">{props.children}</main>
    <Footer />
  </>
);

export { Main };
