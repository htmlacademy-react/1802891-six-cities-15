import MainPage from '../pages/main-page';
import FavoritePage from '../pages/favorite-page';
import OfferPage from '../pages/offer-page';
import LoginPage from '../pages/login-page';

type TAppProps = {
  count: number;
}

export default function App({ count }: TAppProps) {
  return (
    <MainPage count={count} />
    // <FavoritePage />
    // <OfferPage />
    // <LoginPage />
  );
}
