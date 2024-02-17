import Container from '../components/container';
import Card from '../components/card';
import FavoriteItems from '../components/favorite-items';

export default function FavoritePage() {
  return (
    <Container mainClass='favorites'>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoriteItems>
                <Card cardClass='favorites__card' />
              </FavoriteItems>
              <FavoriteItems>
                <Card cardClass='favorites__card' />
              </FavoriteItems>
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
