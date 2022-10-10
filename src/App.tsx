import React, { FC, useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';

import { Layout } from 'antd';

import { Routing } from './navigation/routing/routing';
import { AppDispatch } from './store';
import { setIsAuth, setUser } from './store/auth/slice';
import { fetchEvents } from './store/event/event-thunks';
import { fetchGuests } from './store/event/slice';

const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (localStorage.getItem('Auth')) {
      const username = localStorage.getItem('username') as string;
      dispatch(setIsAuth(true));
      dispatch(setUser({ username, password: '' }));
      dispatch(fetchEvents(username));
      dispatch(fetchGuests());
    }
  }, []);
  return (
    <Layout>
      <Layout.Content>
        <Routing />
      </Layout.Content>
    </Layout>
  );
};

export { App };
