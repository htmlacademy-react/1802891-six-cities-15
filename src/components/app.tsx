import MainPage from '../pages/main-page';
import OfferPage from '../pages/offer-page';
import FavoritePage from '../pages/favorite-page';
import LoginPage from '../pages/login-page';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, authorizationStatus } from '../const';
import NotFoundPage from '../pages/not-found-page';
import ProtectedRoute from './protected-route';
import { Offer } from '../types/offer';

type TAppProps = {
  offers: Offer[];
}

export default function App({ offers }: TAppProps) {
  return (
    <Routes>
      <Route path='/'>
        <Route
          index
          element={<MainPage offers={offers} />}
        />
        <Route
          path={`/${AppRoute.Offer}/:offerId`}
          element={<OfferPage offers={offers} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<ProtectedRoute hasAccess={authorizationStatus.AUTH}> <FavoritePage offers={offers} /></ProtectedRoute>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage navigation={false} />}
        />
        <Route
          path='*'
          element={<NotFoundPage />}
        />
      </Route>

    </Routes>
  );
}
