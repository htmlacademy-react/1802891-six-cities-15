enum AppRoute {
  Login = 'login',
  Main = '/',
  Favorites = 'favorites',
  Offer = 'offer/:id',
}

const AuthorizationStatus = {
  AUTH: true,
  NO_AUTH: false,
};

const optionCard = {
  CITIES_CARD: {
    classCard: 'cities__card',
    width: '260',
    height: '200'
  },
  FAVORITES_CARD: {
    classCard: 'favorites__card',
    width: '150',
    height: '110'
  }
};

const CountStar: number = 5;

export { CountStar, AppRoute, AuthorizationStatus as authorizationStatus, optionCard };
