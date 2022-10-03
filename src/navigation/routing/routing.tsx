import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { RoutePath } from '../../common/enums/index';
import { Event } from '../../pages/Event';
import { Login } from '../../pages/Login';
import { ProtectedRoute } from '../protected-route/protected-route';

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ProtectedRoute isAllowed={true} redirectPath={RoutePath.LOGIN} />
          }
        >
          <Route path={RoutePath.EVENT} element={<Event />} />
        </Route>
        <Route path={RoutePath.LOGIN} element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export { Routing };
