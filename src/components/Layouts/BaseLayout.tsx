import React from 'react';
import Header from '../shared/Header'
import Menu from '../shared/Menu'

import * as Styles from './styles'

type BaseLayoutProps = {
  children: React.ReactNode | React.ReactNode[];
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <header>
        <Header />
      </header>

      <Styles.Main>
        <Menu />
        {children}
      </Styles.Main>
    </>
  );
};

export default BaseLayout;
