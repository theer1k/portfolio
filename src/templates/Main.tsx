import { type ReactNode, useEffect, useState } from 'react';

import { Footer } from '@/presentation/components/organisms/Footer/Footer';
import { Header } from '@/presentation/components/organisms/Header/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const [allowScrolling, setAllowScrolling] = useState(false);

  useEffect(() => {
    const allowScrollingTimeoutId = window.setTimeout(() => {
      setAllowScrolling(!allowScrolling);
      clearTimeout(allowScrollingTimeoutId);
    }, 20000);

    return () => {
      clearTimeout(allowScrollingTimeoutId);
    };
  }, []);

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
