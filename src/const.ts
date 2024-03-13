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

const OptionCard = {
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

const MapSize = {
  WIDTH: '100%',
  HEIGHT: '100%',
};


const OptionListCard = {
  FAVORITES_CARD: 'near-places__list places__list',
  CITIES_CARD: 'cities__places-list places__list tabs__content',
};

const placesOption = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first',];

const URL_MARKER_DEFAULT = '../markup/img/pin.svg';

const URL_MARKER_CURRENT = '../markup/img/pin-active.svg';


const CountStar: number = 5;

export { CountStar, AppRoute, AuthorizationStatus as authorizationStatus, OptionCard, URL_MARKER_DEFAULT, URL_MARKER_CURRENT, OptionListCard, MapSize, placesOption };
