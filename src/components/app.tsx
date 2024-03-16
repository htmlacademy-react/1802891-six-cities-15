import MainPage from '../pages/main-page';
import OfferPage from '../pages/offer-page';
import FavoritePage from '../pages/favorite-page';
import LoginPage from '../pages/login-page';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, authorizationStatus } from '../const';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import ProtectedRoute from './protected-route';
import { useAppSelector } from '../hooks';
import Loader from './loader/loader';

export default function App() {

  const isOffersDataLoading = useAppSelector((state) => state.isOfferDataLoadingStatus);

  if (isOffersDataLoading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path='/'>
        <Route
          index
          element={<MainPage />}
        />
        <Route
          path={`/${AppRoute.Offer}/:offerId`}
          element={<OfferPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<ProtectedRoute hasAccess={authorizationStatus.AUTH}> <FavoritePage /></ProtectedRoute>}
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
