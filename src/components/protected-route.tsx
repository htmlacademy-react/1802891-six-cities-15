import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../const';

type TProtectedRouteProps = {
  children: ReactNode;
  hasAccess: boolean;
}

export default function ProtectedRoute({ hasAccess, children }: TProtectedRouteProps) {
  if (hasAccess) {
    return children;
  }

  return <Navigate to={AppRoute.Login} />;
}

