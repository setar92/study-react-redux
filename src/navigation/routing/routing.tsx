import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { RoutePath } from '../../common/enums/index';
import { Login } from '../../components/login/login';
import { Navbar } from '../../components/navbar/navbar';
import { useAppSelector } from '../../hooks/store/store-hooks';
import { Event } from '../../pages/Event';
import { ProtectedRoute } from '../protected-route/protected-route';

const Routing: FC = () => {
  const isAuth = useAppSelector((store) => store.auth.isAuth);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          element={
            <ProtectedRoute isAllowed={isAuth} redirectPath={RoutePath.LOGIN} />
          }
        >
          <Route path={RoutePath.EVENT} element={<Event />} />
        </Route>
        <Route path={RoutePath.LOGIN} element={<Login />}></Route>
        <Route path={RoutePath.NOT_FOUND} element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export { Routing };
