import { createReducer } from '@reduxjs/toolkit';
import { selectCity, sortOffer } from './action';
import { offers } from '../mocks/offers';
import { sortingOffers } from '../hooks/sort';
import { LocationCity } from '../const';

const initialState = {
  city: LocationCity.PARIS,
  offers: [...offers].filter((offer) => offer.city.name === LocationCity.PARIS),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload;
      state.offers = [...offers].filter((offer) => offer.city.name === state.city);
    })
    .addCase(sortOffer, (state, action) => {
      state.offers = sortingOffers(action.payload, state.offers, offers);
    });
});

export { reducer };

