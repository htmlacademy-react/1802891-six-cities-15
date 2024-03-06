import Container from '../components/container';
import Card from '../components/card';
import FavoriteItems from '../components/favorite-items';
import { Helmet } from 'react-helmet-async';
import { Offer } from '../types/offer';
import { optionCard } from '../const';
import FavoritesEmpty from '../components/favorites-empty';
import { getFavoritesByLocation } from '../utils/utils';

type TOfferPageProps = {
  offers: Offer[];
}

export default function FavoritePage({ offers }: TOfferPageProps) {
  const favorites = getFavoritesByLocation(offers);
  return (
    <Container mainClass='favorites'>
      <Helmet>
        <title>Favorite</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {offers.length > 0 ?
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.entries(favorites).map(([location, gropedFavorites]) => (
                  <FavoriteItems key={location} city={location}>
                    {gropedFavorites.map((favorite) => <Card key={favorite.id} optionCard={optionCard.FAVORITES_CARD} offer={favorite} />)}
                  </FavoriteItems>
                )
                )}
              </ul>
            </section> : <FavoritesEmpty />}
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </Container>
  );
}
