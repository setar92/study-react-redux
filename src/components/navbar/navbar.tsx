import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Layout, Row, Menu, MenuProps } from 'antd';

import './module.css';
import { RoutePath } from '../../common/enums/index';
import { useAppSelector } from '../../hooks/store/store-hooks';
import { AppDispatch } from '../../store';
import { logout } from '../../store/auth/slice';
import { clearEvents } from '../../store/event/slice';

const Navbar: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const handleLogin = (): void => navigate(RoutePath.LOGIN);
  const handleLogOut = (): void => {
    dispatch(logout());
    dispatch(clearEvents());
  };
  const { isAuth, user } = useAppSelector((store) => store.auth);

  const item1: MenuProps['items'] = [
    { key: 1, label: 'Login', onClick: handleLogin },
  ];
  const item2: MenuProps['items'] = [
    { key: 1, label: 'Log out', onClick: handleLogOut },
  ];

  return isAuth ? (
    <Layout.Header>
      <Row justify="end">
        <div className="name">{user?.username}</div>
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
