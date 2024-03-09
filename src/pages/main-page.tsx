import Container from '../components/container';
import { City } from '../types/city';
import ListCards from '../components/list-cards';
import Map from '../components/map';
import { SyntheticEvent, useState } from 'react';
import MainEmpty from '../components/main-empty';
import { OptionListCard } from '../const';
import { OfferPreviews } from '../types/offer-preview';
import { locations } from '../mocks/locations';
import ListLocation from '../components/list-location';
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectCity, sortOffer } from '../store/action';
import { offers } from '../mocks/offers';
import PlacesOptions from '../components/places-options';

export default function MainPage() {
  const baseOffers = offers;
  const selectOffers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  const [selectedOffer, setSelectedOffer] = useState<OfferPreviews | null>(
    null
  );

  const [isOpenSort, setIsOpenSort] = useState<boolean>(
    false
  );

  const [selectedCity, setSelectedCity] = useState<City>({
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  });

  const [selectedLocation, setSelectedLocation] = useState<string>(currentCity);

  const handelSortOfferClick = (sortType: string) => {
    dispatch(sortOffer(sortType));
    setIsOpenSort(!isOpenSort);
  };

  const handelOpenPlacesClick = () => {
    setIsOpenSort(!isOpenSort);
  };

  const handleListItemHover = (currentCard: OfferPreviews | null) => {
    setSelectedOffer(currentCard);
  };

  const handleCurrentCityClick = (evt: SyntheticEvent<HTMLSpanElement>) => {
    evt.preventDefault();

    const currentOffer = baseOffers.find((offer) => offer.city.name === evt.currentTarget.textContent);


    if (currentOffer !== undefined) {
      setSelectedCity({ ...currentOffer.city });
    }

    if (evt.currentTarget.tagName === 'SPAN' && evt.currentTarget.textContent !== null) {
      setSelectedLocation(evt.currentTarget.textContent);
      dispatch(selectCity(evt.currentTarget.textContent));
    }


  };

  return (
    <Container pageClass='page--gray page--main' mainClass='index'>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ListLocation listLocations={locations} handleCurrentCityClick={handleCurrentCityClick} currentCity={selectedLocation} />
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
                <span className="places__sorting-type" tabIndex={0} onClick={handelOpenPlacesClick}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <PlacesOptions isOpen={isOpenSort} handelSortOfferClick={handelSortOfferClick} />
              </form>
              <ListCards offers={selectOffers} onListItemHover={handleListItemHover} extraClass={OptionListCard.CITIES_CARD} />
            </section> : <MainEmpty currentCity={selectedCity} />}

          <div className="cities__right-section">
            <section className="cities__map map">
              {selectOffers.length &&
                <Map city={selectedCity} offers={selectOffers} selectedOffer={selectedOffer} />}
            </section>
          </div>

        </div>
      </div>
    </Container>
  );
}

