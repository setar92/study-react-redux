import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Layout, Row } from 'antd';

import './module.css';
import { RoutePath } from '../../common/enums/index';
import { useAppSelector } from '../../hooks/store/store-hooks';
import { LoginForm } from './login-form/login-form';

const Login: FC = () => {
  const isAuth = useAppSelector((store) => store.auth.isAuth);
  const navigate = useNavigate();
  useEffect((): void => {
    if (isAuth) {
      navigate(RoutePath.EVENT);
    }
  }, [isAuth]);

  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <LoginForm />
      </Row>
    </Layout>
  );
};

export { Login };
