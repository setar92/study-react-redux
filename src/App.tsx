import React, { FC } from 'react';

import './App.css';
import { Layout } from 'antd';

import { Routing } from './navigation/routing/routing';

const App: FC = () => {
  return (
    <Layout>
      <Layout.Content>
        <Routing />
      </Layout.Content>
    </Layout>
  );
};

export { App };
