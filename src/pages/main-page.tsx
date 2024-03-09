import Container from '../components/container';
import { City } from '../types/city';
import ListCards from '../components/list-cards';
import Map from '../components/map';
import { MouseEvent, useState } from 'react';
import MainEmpty from '../components/main-empty';
import { OptionListCard } from '../const';
import { OfferPreviews } from '../types/offer-preview';
import { locations } from '../mocks/locations';
import ListLocation from '../components/list-location';
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectCity } from '../store/action';
import { offers } from '../mocks/offers';


export default function MainPage() {
  const baseOffers = offers;
  const selectOffers = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();

  const [selectedOffer, setSelectedOffer] = useState<OfferPreviews | null>(
    null
  );

  const [selectedCity, setSelectedCity] = useState<City>({
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  });

  const handleListItemHover = (currentCard: OfferPreviews | null) => {
    setSelectedOffer(currentCard);
  };

  const handleCurrentCityClick = (evt: MouseEvent<HTMLSpanElement>) => {
    evt.preventDefault();

    const currentOffer = baseOffers.find((offer) => offer.city.name === evt.target.textContent);

    if (currentOffer !== undefined) {
      dispatch(selectCity(currentOffer));
    }

    if (currentOffer !== undefined) {
      setSelectedCity({ ...currentOffer.city });
    }

  };

  return (
    <Container pageClass='page--gray page--main' mainClass='index'>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ListLocation listLocations={locations} handleCurrentCityClick={handleCurrentCityClick} />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">

          {selectOffers.length !== 0 ?
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{selectOffers.length} place{selectOffers.length > 1 ? 's' : ''} to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <ListCards offers={selectOffers} onListItemHover={handleListItemHover} extraClass={OptionListCard.CITIES_CARD} />
            </section> : <MainEmpty currentCity={selectedCity} />}

          {selectOffers.length &&
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={selectedCity} offers={selectOffers} selectedOffer={selectedOffer} />
              </section>
            </div>}

        </div>
      </div>
    </Container>
  );
}

