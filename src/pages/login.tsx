import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Layout, Row, Card } from 'antd';

import { RoutePath } from '../common/enums/index';
import { LoginForm } from '../components/login-form/login-form';
import { useAppSelector } from '../hooks/store/store-hooks';

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
        <Card>
          <LoginForm />
        </Card>
      </Row>
    </Layout>
  );
};

export { Login };
