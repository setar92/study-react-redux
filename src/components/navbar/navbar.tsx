import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Layout, Row, Menu, MenuProps } from 'antd';

import './module.css';
import { RoutePath } from '../../common/enums/index';
import { useAppSelector } from '../../hooks/store/store-hooks';

const Navbar: FC = () => {
  const navigate = useNavigate();
  const handleLogin = (): void => navigate(RoutePath.LOGIN);
  const handleLogOut = (): void => console.log('logout');
  const { isAuth } = useAppSelector((store) => store.auth);

  const item1: MenuProps['items'] = [
    { key: 1, label: 'Login', onClick: handleLogin },
  ];
  const item2: MenuProps['items'] = [
    { key: 1, label: 'Log out', onClick: handleLogOut },
  ];

  return isAuth ? (
    <Layout.Header>
      <Row justify="end">
        <div className="name">Serhii</div>
        <Menu theme="dark" mode="horizontal" selectable={false} items={item2} />
      </Row>
    </Layout.Header>
  ) : (
    <Layout.Header>
      <Row justify="end">
        <Menu theme="dark" mode="horizontal" selectable={false} items={item1} />
      </Row>
    </Layout.Header>
  );
};

export { Navbar };
