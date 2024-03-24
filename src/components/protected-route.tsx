import { Navigate } from 'react-router-dom';
import { AppRoute } from '../const';
import { AuthorizationStatus } from '../const';
import { useAppSelector } from '../hooks';

type TProtectedRouteProps = {
  children: JSX.Element;
}

export default function ProtectedRoute({ children }: TProtectedRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector((store) => store.authorizationStatus);
  return (
    authorizationStatus === AuthorizationStatus.AUTH
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

