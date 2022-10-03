import React from 'react';

import { RoutePath } from '../common/enums/path-enum';
import { Event } from '../pages/Event';
import { Login } from '../pages/Login';

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export const publicRoters: IRoute[] = [
  { path: RoutePath.LOGIN, exact: true, component: Login },
];

export const privateRoters: IRoute[] = [
  { path: RoutePath.EVENT, exact: true, component: Event },
];
