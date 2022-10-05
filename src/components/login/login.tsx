import React, { FC } from 'react';

import { Layout, Row } from 'antd';

import './module.css';
import { LoginForm } from './login-form/login-form';

const Login: FC = () => {
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <LoginForm />
      </Row>
    </Layout>
  );
};

export { Login };
