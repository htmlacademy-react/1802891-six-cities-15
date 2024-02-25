import Container from '../components/container';
import Card from '../components/card';
import FavoriteItems from '../components/favorite-items';
import { Helmet } from 'react-helmet-async';
import { Offer } from '../types/offer';
import { optionCard } from '../const';

type TOfferPageProps = {
  offers: Offer[];
}

export default function FavoritePage({ offers }: TOfferPageProps) {
  return (
    <Container mainClass='favorites'>
      <Helmet>
        <title>Favorite</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {offers.map((offer) => (
                <FavoriteItems key={offer.id} offer={offer}>
                  <Card optionCard={optionCard.FAVORITES_CARD} offer={offer} />
                </FavoriteItems>)
              )}
            </ul>
          </section>
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
