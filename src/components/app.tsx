import MainPage from '../pages/main-page';
import OfferPage from '../pages/offer-page';
import FavoritePage from '../pages/favorite-page';
import LoginPage from '../pages/login-page';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../const';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import ProtectedRoute from './protected-route';
import HistoryRouter from './history-route';
import browserHistory from '../browser-history';

export default function App() {
  return (
    <HistoryRouter history={browserHistory}>
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
            element={<ProtectedRoute> <FavoritePage /></ProtectedRoute>}
          />
          <Route
            path={AppRoute.Login}
            element={<ProtectedRoute onlyUnAuth><LoginPage navigation={false} /></ProtectedRoute>}
          />
          <Route
            path='*'
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </HistoryRouter>
  );
}
