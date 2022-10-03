import { ReactElement, ReactNode } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { RoutePath } from '../../common/enums/index';

interface ProtectedRouteProps {
  isAllowed: boolean;
  redirectPath?: string;
  children?: ReactNode;
}

const ProtectedRoute = ({
  isAllowed = false,
  redirectPath = RoutePath.LOGIN,
  children,
}: ProtectedRouteProps): ReactElement => {
  const location = useLocation();
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  }
  return children ? <>{children}</> : <Outlet />;
};

export { ProtectedRoute };
