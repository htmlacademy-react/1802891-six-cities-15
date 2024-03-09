import { createReducer } from '@reduxjs/toolkit';
import { selectCity, sortOffer } from './action';
import { offers } from '../mocks/offers';
import { placesOption } from '../const';
import { sortPriceLow, sortPriceHigh, sortRating } from '../utils/utils';

const initialState = {
  city: 'Paris',
  offers: [...offers].filter((offer) => offer.city.name === 'Paris'),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload.city.name;
      state.offers = [...offers].filter((offer) => offer.city.name === state.city);
    })
    .addCase(sortOffer, (state, action) => {
      switch (action.payload) {
        case placesOption[0]:
          state.offers = [...offers].filter((offer) => offer.city.name === state.city);
          break;
        case placesOption[1]:
          state.offers = state.offers.sort(sortPriceHigh);
          break;
        case placesOption[2]:
          state.offers = state.offers.sort(sortPriceLow);
          break;
        case placesOption[3]:
          state.offers = state.offers.sort(sortRating);
          break;
      }
    });
});

export { reducer };

