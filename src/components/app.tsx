import MainPage from '../pages/main-page';
import OfferPage from '../pages/offer-page';
import FavoritePage from '../pages/favorite-page';
import LoginPage from '../pages/login-page';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, authorizationStatus } from '../const';
import NotFoundPage from '../pages/not-found-page';
import ProtectedRoute from './protected-route';

type TAppProps = {
  count: number;
}

export default function App({ count }: TAppProps) {
  return (
    <Routes>
      <Route path='/'>
        <Route
          index
          element={<MainPage count={count} />}
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<ProtectedRoute hasAccess={authorizationStatus.Auth}><FavoritePage /></ProtectedRoute>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path='*'
          element={<NotFoundPage />}
        />
      </Route>

    </Routes>
  );
}
